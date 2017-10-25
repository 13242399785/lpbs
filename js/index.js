//美食列表
var li_list=document.querySelectorAll(".product-list span");
var mask_top=document.getElementsByClassName("mask-top");
for(var i=0;i<li_list.length;i++){
	(function(k){
		li_list[i].addEventListener("click",function(){
			for(var j=0;j<li_list.length;j++){ 
				li_list[j].classList.remove("list-on");
				mask_top[j].style.display="none";
			}
			mask_top[k].style.display="block";
			li_list[k].classList.add("list-on");			
		})
	})(i)	
}

//空间形象展示
var room_list=document.querySelectorAll(".dian-show span");
var img_show=document.querySelectorAll(".dian-show img");
for(var x=0;x<room_list.length;x++){
	(function(y){
		room_list[x].addEventListener("click",function(){
			for(var k=0;k<room_list.length;k++){
				room_list[k].classList.remove("on-link");
				img_show[k].classList.remove("show");
			}	
			img_show[y].classList.add("show");
			room_list[y].classList.add("on-link");					
		})
		
	})(x)
}

