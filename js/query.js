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


