$(window).scroll(function(){
	if($(this).scrollTop() > 100){
		$('header').addClass('fixed-header');
	}else{
		$('header').removeClass('fixed-header');
	}
})

function navigateToPage() {
	window.location.href = 'product.html';
}





document.addEventListener("DOMContentLoaded", () => {
	const menuIcon = document.querySelector(".mobile-menu-icon");
	const mobileNav = document.querySelector(".mobile-nav");
  
	menuIcon.addEventListener("click", () => {
	  mobileNav.classList.toggle("show");
	  menuIcon.classList.toggle("active");
	});
  
	menuIcon.addEventListener("transitionend", () => {
	  const bars = menuIcon.querySelectorAll(".bar");
	  if (menuIcon.classList.contains("active")) {
		bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
		bars[1].style.opacity = 0;
		bars[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
	  } else {
		bars.forEach((bar) => {
		  bar.style.transform = "";
		  bar.style.opacity = "";
		});
	  }
	});
  });
  