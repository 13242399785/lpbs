//点击回到顶部	
var go_top=document.getElementById("go_top");
go_top.onclick=function(){
	scrToTop(40);
}
function scrToTop(num){
	var scrTop=document.documentElement.scrollTop+document.body.scrollTop;
	if(scrTop>0)
	{
		if(document.all)//支持IE
			scrTop-=num*2;
		else//非IE
			scrTop-=num;//scrTop=scrTop-num;			
		document.documentElement.scrollTop=scrTop;
		document.body.scrollTop=scrTop;
		return window.setTimeout(function(){scrToTop(num);},5);
	}
}
//(function() {var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/10162601/1";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s);})();