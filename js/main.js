
	/* Access the Images*/
	let slideImages = document.querySelectorAll('.img');
	// Access the next and prev buttons
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	// Code for next button
	next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

	// Code for prev button
	prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}

	/*Auto slideing*/

	function autoSliding(){
		deletInterval = setInterval(timer,5000);
		function timer(){
			slideNext();
			indicators();
		}
	}

	if (window.matchMedia('(max-width: 767px)').matches) {
        autoSliding()
    } else {
        autoSliding(undefined)
    }

	
	

	// Stop auto sliding when mouse is over
	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});

	// Resume sliding when mouse is out
	container.addEventListener('mouseout', autoSliding);

	// Add and remove active class from the indicators
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// Add click event to the indicator
	function switchImage(currentImage){
		currentImage.classList.add('active');
		var imageId = currentImage.getAttribute('attr');
		if(imageId > counter){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(imageId == counter){
			return;
		}
		else{
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
		}
		indicators();
	}






	document.querySelector(".clear-cookie").addEventListener("click", function() {
		Cookies.remove('colorboxShown');
		this.outerHTML = "<p><em>Cookie cleared. Re-run demo</em></p>";
	  });
	  
	  document.querySelector(".order-cheezburger").addEventListener("click", function() {
		document.querySelector('.colorbox').style.display = 'none';
	  });
	  
	  function onPopupOpen() {
		document.querySelector("#modal-content").style.display = 'block';
		document.querySelector("#yurEmail").focus();
	  }
	  
	  function onPopupClose() {
		document.querySelector("#modal-content").style.display = 'none';
		Cookies.set('colorboxShown', 'yes', {
		  expires: 1
		});
		document.querySelector(".clear-cookie").style.display = 'inline';
		lastFocus.focus();
	  }
	  
	  function displayPopup() {
		document.querySelector('.colorbox').style.display = 'block';
		onPopupOpen();
	  }
	  
	  var lastFocus;
	  var popupShown = Cookies.get('colorboxShown');
	  
	  if (popupShown) {
		console.log("Cookie found. No action necessary");
		document.querySelector(".clear-cookie").style.display = 'inline';
	  } else {
		console.log("No cookie found. Opening popup in 3 seconds");
		document.querySelector(".clear-cookie").style.display = 'none';
		setTimeout(function() {
		  lastFocus = document.activeElement;
		  displayPopup();
		}, 3000);
	  }