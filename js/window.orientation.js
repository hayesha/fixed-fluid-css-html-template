
jQuery(document).ready(function() { 	

	//Check whether it's a Mobile borwser, depends on the jquery.mobile.browser.js - jQuery plugin by http://detectmobilebrowsers.com/
	if(jQuery.browser.mobile) {
		// Set Inital orientation
		// get the initial orientation from window which
		// returns 0 for portrait and 1 for landscape
		if(window.orientation == 0){
			 var ori = "portrait";
		}else{
			 var ori = "landscape";
		}
	
		changeOrientation(ori);

		// Orientation Change
		// When orientation changes event is triggered
		// exposing an orientation property of either
		// landscape or portrait
		jQuery('body').bind('orientationchange',function(event){
			 changeOrientation(event.orientation)
		})


		function changeOrientation(_ori) {
			window.onorientationchange = function() { 
				//var orientation = window.orientation; 
				var orientatin = _ori;
				switch(orientation) 
				{ 
					case 0: 
							window.location.reload(); 
					 	break; 
					case 90: 
							window.location.reload(); 
					 	break; 
					case -90: 
							window.location.reload(); 
					 	break; 
				}		   
			}
		}
	}		
});	
