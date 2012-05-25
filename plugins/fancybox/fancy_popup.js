var xy=jQuery.noConflict();
xy(document).ready(function() {
			/*
			*   Examples - images
			*/

			xy("a#example1").fancybox();

			xy("a#example2").fancybox({
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic'
			});

			xy("a#example3").fancybox({
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'	
			});

			xy("a#example4").fancybox({
				'opacity'		: true,
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});

			xy("a#example5").fancybox();

			xy("a#example6").fancybox({
				'titlePosition'		: 'outside',
				'overlayColor'		: '#000',
				'overlayOpacity'	: 0.9
			});

			xy("a#example7").fancybox({
				'titlePosition'	: 'inside'
			});

			xy("a#example8").fancybox({
				'titlePosition'	: 'over'
			});

			xy("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

			/*
			*   Examples - various
			*/

			xy("#various1").fancybox({
				'titlePosition'		: 'inside',
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
			});

			xy("#various2").fancybox();

			xy(".various33").fancybox({
				'width'				: '50%',
				'height'			: '75%',
				'autoScale'			: false,
                                'transitionIn'		: 'none',
				'transitionOut'		: 'none',
                                'titlePosition'	: 'inside',
				'type'				: 'iframe'
			});

			xy(".various4").fancybox({
				'width'				: '75%',
				'height'			: '75%',
                                'autoScale'			: false,
                                'transitionIn'		: 'none',
				'transitionOut'		: 'none',
                                'titlePosition'	: 'inside',
				'type'				: 'iframe'
                                
			});
		});