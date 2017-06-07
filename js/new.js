$(".screening").click(function(){
	$(".layerSearch").show();
});
$(".layerBox").click(function(){
	$(".layerSearch").hide();
});
$(function(){
	$('.selectShop li').css({border:"none"});
	$(".selectShop").on("click",function(){
		$('.selectShop li').css({border:"1px solid #eeeeee"});
		var nHeight=Number($(".selectShop li").length*$(".selectShop li").height())+"px";
		$('.selectShop').css({height:nHeight});
	})
	$(".selectShop li:not(:first-child)").on("click",function(e){
		var ev=e||event;
		ev.stopPropagation();
		$(".selectShop li:first-child").html($(this).text());
		$('.selectShop li').css({border:"none"});
		$('.selectShop').css({height:".7rem"});
	})
});
$(document).ready(function(){
	var numPrice=0;
 	 $(".num").html($(".flowList li").length+"条");
 	 for (var i =0;i<$(".flowList li span").length;i++) {
 	 	numPrice+=Number($($(".flowList li span")[i]).text())
 	 }
 	$(".num2").html(numPrice.toFixed(2)+"元");

});