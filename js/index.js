;(function (global){
		function remChange(){
			document.documentElement.style.fontSize=document.documentElement.clientWidth*20/320+'px';
		}
		remChange();
		global.addEventListener('resize',remChange,false);
})(window)

document.addEventListener('DOMContentLoaded',function(){
	var swiper = new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            paginationClickable:true,
            loop:true,
            effect:'coverflow',
            coverflow:{
            	rotate: 30,
	            stretch: 100,
	            depth: 100,
	            modifier: 2,
	            slideShadows : true
            }
    });
 },false);
