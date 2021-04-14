/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/

( function( $ ) {
	'use strict';
	
	// load html
	$.get("./bar.html", function (data) {
        $('body').append(data);
 		console.log(data);
    });
	
} )( jQuery );