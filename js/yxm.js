 
				$(function() {
					$("ul.icons span.glyphicon-align-justify").click(function() {
						$(".header nav").slideToggle(800);
					})
				})
			 

			 
				$(function() {
					$("ul.icons span.arrowdown1").click(function() {
						$(".arrowdiv1 nav").slideToggle(800);
						$(this).toggleClass("arrowup4");

					})
					$("ul.icons span.arrowdown2").click(function() {
						$(".arrowdiv2 nav").slideToggle(800);
						$(this).toggleClass("arrowup4");

					})
					$("ul.icons span.arrowdown3").click(function() {
						$(".arrowdiv3 nav").slideToggle(800);
						$(this).toggleClass("arrowup4");

					})

				})
			 
			
			
			 
$(function(){
$(".cart1").hover(function(){

var UL = $(".shopcart");
if(UL.css("display")=="none"){
UL.css("display","block");
}
else{
UL.css("display","none");
}
});
});
 
//$(function(){
//	$(".input-text").focus(function(){
//	$("#nav-arrow").show();
//})
//})

$(function(){
	$("#nav-arrow-id").click(function()
	{
//		$(".nav-arrow").css("background-position","0 -16px");
		$(".my-line").css("display","block");
		
		$(".nav-arrow").css("display","none");
		
	 
	})
})

 

function myFunction(x)
{
  
 var a=document.getElementById("nav-arrow-id");
 var b=document.getElementsByClassName("my-line");
 a.style.display="block";
 b[0].style.display="none"	;
  b[1].style.display="none"	;
   b[2].style.display="none"	;
    b[3].style.display="none"	;
     b[4].style.display="none"	;
      
 

}


		 $(function(){
		 	$(".join11").mouseout(function(){
		 		$(this).css("color", "white");
		 		$(".bianhua").css("width","1px");
		 	})
		 	
		 	$(".join11").mouseover(function(){
		 		$(this).css("color", "black");
		 		$(".bianhua").css("width","100px");
		 	})
		 	
		 	
		 	
		 	
		 	
		 	
		 	
		 	$(".bianhua22").hover(function(){
		 		 
		 		$(".bianhua22").css("width","100px");
		 	})
		 })
	 