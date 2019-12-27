/* 



*/
const inviewClass = [];

inviewClass.inview = function(){
	let currentPos = pageYOffset,
			inviewOffset = 200,
			finishedInterval = 1000;


	function inviewClass(){
		currentPos = pageYOffset;
		$('.js-inview').each(function(){
			let $this = $(this);
			if(currentPos > $this.offset().top - window.innerHeight + inviewOffset){
				if(!$this.hasClass('is-inview')){
					$this.addClass('is-inview');
					setTimeout(function(){
						$this.addClass('is-inview-done');
					}, finishedInterval);
				}
			}


		})		
	}

	inviewClass()

	$(window).on('resize', function(){
		inviewClass()
	});

	$(window).on('scroll', function(){
		inviewClass()
	});	


}


$(document).ready(function(){
  inviewClass.inview();
});


