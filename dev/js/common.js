(function($) {
	$.fn.inviewClass = function(options){
		
		let settings = $.extend({
			className: 'is-inview',
			secondClassName: 'is-inview-done',
			visibleOffset: 200,
			secondClassInterval: 1000
		}, options)

		//here
		return this.each(function(){
			
			let $this = $(this);

			function inviewClass(){
				
				currentPos = pageYOffset;
				if(currentPos > $this.offset().top - window.innerHeight + settings.visibleOffset){
					
					if(!$this.hasClass(settings.className)){
						$this.addClass(settings.className)
						setTimeout(function(){
							$this.addClass(settings.secondClassName);
						}, settings.secondClassInterval);						
					}
				}

			}

			inviewClass();

			$(window).on('resize', function(){
				inviewClass();
			});

			$(window).on('scroll', function(){
				inviewClass();
			});			
		})

	}


})(jQuery);
