// Please complete the below exercises preferrably using JQuery


// 1. Make each item's paragraph collapse/expand when the title is clicked


// JavaScript method of collapsing/expanding elements
/*
var collapse = document.getElementsByClassName('title');

var i;

/// Toggle element between active and non-active 
for (i = 0; i < collapse.length; i++) {
	collapse[i].addEventListener('click', function () {
		'use strict';
		this.classList.toggle('active');
		var content = this.nextElementSibling; 
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';  
		}
	}); 
	
}    */

// jQuery method of toggling elements. Transition during toggle appears to be smoother than JavaScript.

// Toggle with paragraph
$('document').ready(function () {
	'use strict';
	$("h1").click(function(){
   $(this).next().toggle(); 
});
}); 




// 2. Remove each item when we click on the closing X

// JavaScript Version of closing the elements requested. Does not work exactly how it should,
// which is why jQuery presented better option.
/*
  document.querySelector('.close').addEventListener('click', remove);


function remove () { 
	document.querySelector('.close').remove();
	document.querySelector('.title').remove();
	document.querySelector('.description').remove();
	
} */


// jQuery Version 

// Remove items when clicking the "X"
$('document').ready(function(){
	'use strict';
  $('.close').click(function(){
	  
    $(this).parent('div').remove();
	  
  }); 
}); 








// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

// Able to create a new item using the "add new" button, 
// but title of new item does not match the input value
// New item has same properties (collapse/expand and close) as the other items

// I have to find a way to clone the existing div with the class ".item" and then
// connect that with the input value and manipulate the clone, so that the input value
// replaces the title. The three functions I have tried that I believe will help are: bind(), 
// append() or replaceWith ().

	
$(document).ready(function(){ 
	'use strict';

	// Return input value. Still need to connect this somehow with cloned items. See above comments.
	//$('#newtitle').keyup(function () {
	  document.getElementById('test') .innerHTML = document.getElementById('newtitle').value;

	// });
	
	// When the "add new" element is clicked
    $('#newelement').click(function(){ 	
		
	
	// Clone item and return it after the test div element
   $( '.item:first' ).clone().appendTo( "#test" );
		

   			
		
		// Remove new items
		 $('.close').click(function(){
	   
    	$(this).parent('div').remove();  
	    
  }); 
		
		// Toggle new items when added
		$('document').ready(function () {
	
	$("h1").click(function(){
   $(this).next().toggle(); 
});
});
		
    });   
});  










//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page






