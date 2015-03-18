
/*
document.addEventListener('DOMContentLoaded', function () {
	if (!window.btoa) window.btoa = base64.encode;
	$('body').append('<div id="vine_comment_iframe"></div>');
	$.support.cors = true;
	$('#vine_comment_iframe').load("http://www.anwcl.com/comment_raw/" + btoa(document.location));
});
*/

chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    // Special 2: +-
	window.btoa = base64.encode;
	//$('body').append('<div id="vine_comment_iframe">Loading...</div>');
	$.support.cors = true;
	$('body iframe').attr('src', "http://www.tengmanpinglun.com/comment/" + btoa(tablink));
});

chrome.tabs.captureVisibleTab(function (img) {
    // You can add that image HTML5 canvas, or Element.
    // $('body img').attr('src', image_url);
    //document.getElementById('target').src = image_url;
    //console.log(image_url);
    //$.post();
    var xhr = new XMLHttpRequest(), formData = new FormData();
    formData.append("img", img);
    xhr.open("POST", "http://www.tengmanpinglun.com/document/upload", true);
    xhr.send(formData);
});

