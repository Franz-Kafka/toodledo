$(document)
    .ready(function(){

		 var windowHeight = $(window).height();
		 
		 $('#contentwrap').css('height', windowHeight);
		 
		 $('.projects').mouseenter( function(){
			 	$( this ).animate({ width: '16%'});
			 	$('.tasks').animate({ width: '42%'});
			 	$('.details').animate({ width: '42%'});
			 	
			 	$('.notviscont').fadeIn(500);
			 	
			 	return false;
		 });
		 
		 $('.projects').mouseleave( function(){
			 	$( this ).animate({ width: '6%'});
			 	$('.tasks').animate({ width: '47%'});
			 	$('.details').animate({ width: '47%'});
			 	
			 	$('.notviscont').fadeOut(300);
			 	
			 	return false; 
		 });
		 
		 $('.checker').click(function(){
			 
			 $( this ).css('background', 'url(img/checker_done.png)');
			 
			 var element = $( this ).nextAll('.taskname');
			 var inhalt = $( this ).nextAll('.taskname').text();
			 
			 element
			 	.html("<s>" + inhalt + "</s>")
			 	.css('color', 'grey')
			 
		 });
		 
		 
		 // ADD NEW TASK
		 
			$('input').bind("enterKey",function(e){
			   
			   newtodow = $( this ).val();
			   
			   $('.tasks').append('<div class="task taskfour"><div class="checker"></div><div class="taskname">' + newtodow + '</div><div class="timeline" style="width: 0%"></div></div>');
			   
			});
			$('input').keyup(function(e){
			    if(e.keyCode == 13)
			    {
			        $(this).trigger("enterKey");
			    }
			});
    
});


