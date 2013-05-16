$(function() {
	//Gets image path for <img> src
    var url = $('.skinBg').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    //Defines <img> as var
    var bgImg = $('<img />');
    //Writes bgImg to end of div.skinBG
    $('div.skinBg').append(bgImg);
    //Adds id and src attributes
    bgImg.attr('id', 'coverBGimg').attr('src', url);
    //Defines loaded height, width, and height/width ratio of div.skinBg
    var lastSkinBGHeight = $('div.skinBg').height();
   	var lastSkinBGWidth = $('div.skinBg').width();
    var lastSkinBGRadio = lastSkinBGHeight / lastSkinBGWidth;
    //Defines height/width ratio of bgImg
    var imgRatio = bgImg.height() / bgImg.width();
    //function to run to resize <img> to match css background-size:cover functionality
    function resizeNewBG(){
        //defines current div.skinBg height/width ratio for comparison against image height/width ratio
    	var newSkinBGRatio = $('div.skinBg').height() / $('div.skinBg').width();

        if ( newSkinBGRatio < imgRatio ) {
            //Sets bgImg to width: 100% and height: auto
        	bgImg.removeClass().addClass('bgwidth');
        } else {
            //Sets bgImg to height: 100% and width: auto
        	bgImg.removeClass().addClass('bgheight');
        }
    }
    //runs resize function on load
    resizeNewBG();
    //window resize function and if statment needed to trigger function on window resize
    $(window).resize(function() {
        //compares current div.skinBg width and height to loaded width and height stored in variables
    	if ( $('div.skinBg').height() != lastSkinBGHeight || $('div.skinBg').width() != lastSkinBGWidth ) {
            //if widths don't match, runs resize function
        	resizeNewBG();
        }
    });
    //removes background-image from div.skinBg
    $('div.skinBg').css("background-image", "none");
});