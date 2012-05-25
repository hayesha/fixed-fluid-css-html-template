		jQuery(document).ready(function() {
			// Handler for .ready() called.
	
			//Select all the targeted checkboxes if 'Select All' checkbox is checked 
			jQuery('input[type=checkbox].check-all').bind("click", function() { 
				if(jQuery('input[type=checkbox].check-all').is(":checked"))
				{
					// Traverse through all the targeted checkboxes
					jQuery('input[type=checkbox].check-this').each(function (i) { 
						//Set the checkbox's checked state to true
						jQuery(this).attr('checked','true');

					});
							
				} else {
					// Traverse through all the targeted checkboxes
					jQuery('input[type=checkbox].check-this').each(function (i) {
						//Check whether the checkbox's checked state is true
						if(jQuery(this).is(":checked")) {
							//Set the checkbox's checked state to false
							jQuery(this).removeAttr('checked');
						}
					});			
				}
			}); 


			//Deselect the 'Select All' checkbox if any of the targeted checkbox is unchecked
			jQuery('input[type=checkbox].check-this').bind("click", function() { 
				// Traverse through all the targeted checkboxes
				jQuery('input[type=checkbox].check-this').each(function (i) {
					//Check whether the 'Select All' checkbox and the focused checkbox are both under checked state true
					if(jQuery('input[type=checkbox].check-all').is(":checked") && jQuery(this).is(":checked"))
					{ 
						//Removes the 'Select All' checkbox's checked attribute
						jQuery('input[type=checkbox].check-all').removeAttr('checked');
					}
				});
			});
		
  			
		});

function toggleChecked(checkbox) {
                      
			// Handler for .ready() called.
	
			//Select all the targeted checkboxes if 'Select All' checkbox is checked 
         var myparent='.'+checkbox+'';
         var mychild='.'+checkbox+'1';
			jQuery(myparent).live("click", function() { 
				if(jQuery(myparent).is(":checked"))
				{
					// Traverse through all the targeted checkboxes
					jQuery(mychild).each(function (i) { 
						//Set the checkbox's checked state to true
						jQuery(this).attr('checked','true');

					});
							
				} else { 
					// Traverse through all the targeted checkboxes
					jQuery(mychild).each(function (i) {
						//Check whether the checkbox's checked state is true
						if(jQuery(this).is(":checked")) {
							//Set the checkbox's checked state to false
							jQuery(this).removeAttr('checked');
						}
					});			
				}
			}); 


			//Deselect the 'Select All' checkbox if any of the targeted checkbox is unchecked
			jQuery(mychild).live("click", function() { 
				// Traverse through all the targeted checkboxes
				jQuery(mychild).each(function (i) {
					//Check whether the 'Select All' checkbox and the focused checkbox are both under checked state true
					if(jQuery(myparent).is(":checked") && jQuery(this).is(":checked"))
					{ 
						//Removes the 'Select All' checkbox's checked attribute
						jQuery(myparent).removeAttr('checked');
					}
				});
			});
		
  			
		}
