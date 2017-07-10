   
		 $(function(){
		 	
		 	    	 $("#bottom-show1").click(function(){
		 			 $(".text-box-line").children("li").removeClass("bottom-active");
		 			 $(this).addClass("bottom-active");
		 			 $(".text-box-word li").hide();
		 			 $("#text-show1").show();
		 			 $(".phone-box img").hide();
		 			 $("#phone-img1").show();
		 		})
		 		$("#bottom-show2").click(function(){
		 			 $(".text-box-line").children("li").removeClass("bottom-active");
		 			 $(this).addClass("bottom-active");
		 			 $(".text-box-word li").hide();
		 			 $("#text-show2").show();
		 			 $(".phone-box img").hide();
		 			 $("#phone-img2").show();
		 		})
		 		$("#bottom-show3").click(function(){
		 			 $(".text-box-line").children("li").removeClass("bottom-active");
		 			 $(this).addClass("bottom-active");
		 			 $(".text-box-word li").hide();
		 			 $("#text-show3").show();
		 			 $(".phone-box img").hide();
		 			 $("#phone-img3").show();
		 		}) 
		 		
		 		
		 		
		 		
		 		
		 		
		 		
		 		$("#bottom1-show1").click(function(){
		 			$(".text-box-line1").children("li").removeClass("bottom1-active");
		 			$(this).addClass("bottom1-active");
		 			$(".bg-black").children(".heng").hide();
		 			$(".bg-black  .slide-black1").show();
		 		})
		 		
		 		
		 		$("#bottom1-show2").click(function(){
		 			$(".text-box-line1").children("li").removeClass("bottom1-active");
		 			$(this).addClass("bottom1-active");
		 			$(".bg-black").children(".heng").hide();
		 			$(".bg-black  .slide-black12").show();
		 		})
		 		
		 		
		 		$("#bottom1-show3").click(function(){
		 			$(".text-box-line1").children("li").removeClass("bottom1-active");
		 			$(this).addClass("bottom1-active");
		 			$(".bg-black").children(".heng").hide();
		 			$(".bg-black  .slide-black13").show();
		 		})
		 		
		 		
		 		
		 		$("#bottom1-show4").click(function(){
		 			$(".text-box-line1").children("li").removeClass("bottom1-active");
		 			$(this).addClass("bottom1-active");
		 			$(".bg-black").children(".heng").hide();
		 			$(".bg-black  .slide-black14").show();
		 		})
		 		
		 		
		 		///////black-bg
//		 		<div class="bg-black">
//				<div class="slide-black1">
//					<div class="slide-explainword">
//					<h2>纤薄金属机身</h2>
//					
//               <p>7.25 mm 视觉减薄侧边机身，第 5 代大猩猩 2.5D 玻璃覆
//                                                         盖。采用全新油墨，更加一体深邃。看起来硬朗、优雅；
//                                                       摸上去温润、舒适。 </p>
//                  </div>
//                <div class="img-black-box">  </div>
//               </div>    
//               
		 		
		 	
		 })
	
$(function(){
 
	$("#yxmm").click(function(){
 
	 $("#cg1").toggleClass("phone-gray-expand");
	 $("#cg2").toggleClass("phone-black-gray-hide");
     $("#svg1").toggleClass("svg-black");
			})
	
	
		$("#yxmm2").click(function(){
 
	 $("#cg2").toggleClass("phone-black-expand");
	 $("#cg1").toggleClass("phone-black-gray-hide");
	 $("#svg2").toggleClass("svg-black");
			})
	
}) 

$(function(){
	
	$("#iconicon").click(function(){
		$("#context-id").toggleClass("context-show");
		$("#icon-changebefore").toggleClass("icon-svg-changedafter");
		$(".section-h2").toggleClass("h2-hide");
		
//	 var expand=$(".context").css("display");
//		if(expand=="none") {
//			$(".context").css("display","block");
//		}
//		else{
//			$(".context").css("display","none");
//		}
	})
})
$(function(){
	              $("#bottom2-show21").click(function(){
		 			$(".text-box-line2").children("li").removeClass("bottom22-active");
		 			$(this).addClass("bottom21-active");
		 			$(".main-box h2").addClass("h2-change-black");
		 			$(".bg-black2").children(".heng").hide();
		 			$(".bg-black2  .slide-black21").show();
		 		})
		 		
		 		
		 		$("#bottom2-show22").click(function(){
		 			$(".text-box-line2").children("li").removeClass("bottom22-active");
		 			$("#bottom2-show21 ").removeClass("bottom21-active");
		 			$(".main-box h2").addClass("h2-change-white");
		 			$(this).addClass("bottom22-active");
		 			$(".bg-black2").children(".heng").hide();
		 			$(".bg-black2  .slide-black22").show();
		 		})
		 		
		 		
		 		$("#bottom2-show23").click(function(){
		 			$(".text-box-line2").children("li").removeClass("bottom22-active");
		 			$("#bottom2-show21 ").removeClass("bottom21-active");
		 			$(".main-box h2").addClass("h2-change-white");
		 			$(this).addClass("bottom22-active");
		 			$(".bg-black2").children(".heng").hide();
		 			$(".bg-black2  .slide-black23").show();
		 		})
})

$(function(){
	$(".zhexiantu>ul>li>span").first().addClass("zexiantu-active");
	$(".zhexiantu>ul>li").first().show();
	$(".zhexiantu>ul>li").click(function(){
	$(".zhexiantu>ul>li>span").removeClass("zexiantu-active").eq($(this).index()).addClass("zexiantu-active");
	$(".zhexiantu>.zhexian-imgs>div").hide().eq($(this).index()).show();
	})
})







$(function(){
             //倒数第二个轮播
		 		$("#bottom-network-show1").click(function(){
		 			$(".text-box-line-network").children("li").removeClass("bottom-network-active");
		 			$(this).addClass("bottom-network-active");
		 			$(".bg-black21").children(".heng").hide();
		 			$(".bg-black21  .slide-black1").show();
		 		})
		 		
		 		
		 		$("#bottom-network-show2").click(function(){
		 			$(".text-box-line-network").children("li").removeClass("bottom-network-active");
		 			$(this).addClass("bottom-network-active");
		 			$(".bg-black21").children(".heng").hide();
		 			$(".bg-black21  .slide-black12").show();
		 		})
		 		
		 		
		 		$("#bottom-network-show3").click(function(){
		 			$(".text-box-line-network").children("li").removeClass("bottom-network-active");
		 			$(this).addClass("bottom-network-active");
		 			$(".bg-black21").children(".heng").hide();
		 			$(".bg-black21  .slide-black13").show();
		 		})
		 		
		 		})





//倒数第一个轮播



$(function(){
	    $("#last-line-ul-li-id2").click(function(){
	    $(".last-line-ul li").removeClass("bottom-network-active-last");
	    $(this).addClass("bottom-network-active-last");
	 	$(".base-decript ol li").hide();
	 	$(".base-decript ol #base-decript-li2").show();
	 	$(".last-slide-right .last-slide-right-img").hide();
	 	$(" .last-slide-right #last-slide-imgid2").show();
	 	
	 })
	    
	    
	    $("#last-line-ul-li-id1").click(function(){
	    $(".last-line-ul li").removeClass("bottom-network-active-last");
	    $(this).addClass("bottom-network-active-last");
	 	$(".base-decript ol li").hide();
	 	$("  .base-decript ol #base-decript-li1").show();
	 	$(".last-slide-right .last-slide-right-img").hide();
	 	$(" .last-slide-right #last-slide-imgid1").show();
	 	
	 })
	     
	     
	      $("#last-line-ul-li-id3").click(function(){
	     $(".last-line-ul li").removeClass("bottom-network-active-last");
	    $(this).addClass("bottom-network-active-last");
	 	$(".base-decript ol li").hide();
	 	$("  .base-decript ol #base-decript-li3").show();
	 	$(".last-slide-right .last-slide-right-img").hide();
	 	$(" .last-slide-right #last-slide-imgid3").show();
	 	
	 })
	      
	      
	       $("#last-line-ul-li-id4").click(function(){
	     $(".last-line-ul li").removeClass("bottom-network-active-last");
	    $(this).addClass("bottom-network-active-last");
	 	$(".base-decript ol li").hide();
	 	$("  .base-decript ol #base-decript-li4").show();
	 	$(".last-slide-right .last-slide-right-img").hide();
	 	$(" .last-slide-right #last-slide-imgid4").show();
	 	
	 })
})
 

$(function(){
	  $("#read-li-id2").click(function(){
	    $(".read-ul ul li").removeClass("read-ul-li-line");
	    $(this).addClass("read-ul-li-line");
	    
	    $(".read-ul ul li span").removeClass("span-blcak");
	    $(".read-ul ul li .span2").addClass("span-blcak");
	    
		$(".read-slide .read-slide-1").hide();
		$("#read-slide-id2").show();
	})
	  $("#read-li-id1").click(function(){
	    $(".read-ul ul li").removeClass("read-ul-li-line");
	    $(this).addClass("read-ul-li-line")
	    
	    $(".read-ul ul li span").removeClass("span-blcak");
	    $(".read-ul ul li .span1").addClass("span-blcak");
	    
		$(".read-slide .read-slide-1").hide();
		$("#read-slide-id1").show();
	})
	      
	  $("#read-li-id3").click(function(){
	  	$(".read-ul ul li").removeClass("read-ul-li-line");
	    $(this).addClass("read-ul-li-line")
	    
	      $(".read-ul ul li span").removeClass("span-blcak");
	    $(".read-ul ul li .span3").addClass("span-blcak");
	    
		$(".read-slide .read-slide-1").hide();
		$("#read-slide-id3").show();
	})
})