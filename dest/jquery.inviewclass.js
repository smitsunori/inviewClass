(function($) {
	$.fn.inviewClass = function(options){
		
		var settings = $.extend({
			className: 'is-inview',
			secondClassName: 'is-inview-done',
			visibleOffset: 200,
			secondClassInterval: 1000
		}, options);

		return this.each(function(){
			
			var $this = $(this);

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
