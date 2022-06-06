jQuery(function(){
	var winW = jQuery(window).width();
	var winH = jQuery(window).height();
	var iChange = 0;
	var fChange = 0;
	var dummyScr = '#income_content .box:eq(1)';
	jQuery('#anc.slideup').click(function () {
		jQuery("html,body").animate({scrollTop:0},"800");
	});
	jQuery(window).scroll(function(){
		//pximg
		var scrPos = jQuery(window).scrollTop();
		var imgPos = jQuery(dummyScr).offset().top - winH ;
		if (scrPos > imgPos && iChange == 0){
			imgChange();
		}
		
		jQuery('.slide_r,.slide_l,.slide_t').not('.move').each(function(){
			var incomePos = jQuery(this).offset().top - winH + 30;
			if (scrPos > incomePos){
				jQuery(this).addClass('move');
			}
		});
	});

	//img change
	function imgChange(){
		jQuery('img').each(function() {
			window.bbackFlg = 1;
			iChange = 1;
			var str = jQuery(this).attr('src');
			if(str.indexOf('pximg') !== -1) {
				var str = jQuery(this).attr('src').replace(/pximg\//g, '');
				jQuery(this).attr('src',str);
			}
		});
	}
});

jQuery(window).on('load',function(){
	var topTotal = jQuery('#top > img').length;
	var topNum = topTotal -1;
	jQuery('#top > img').eq(topNum).addClass('out');
	var topTimer = setInterval(function(){
		topNum--;
		if(0 < topNum){
			jQuery('#top > img').eq(0).removeClass('out');
			jQuery('#top > img').eq(topNum).addClass('out');
		} else {
			jQuery('#top > img').removeClass('out');
			jQuery('#top > img').eq(topNum).addClass('out');
			topNum = topTotal;
		}
	},4000);
});


