//#570082:purple #2144AD:blue #BDAE13:yellow #D91A13:red #0B8562:greenish 
//#010117:blackblue #DB680B:orange

$(document).ready(function(){
	var info = ["'m a front end developer."," live in Vancouver, BC.", 
			" cats.", ' durian.', ' RFTG.', ' you.']
	var i = 0 

	var random_num = Math.round(Math.random()*7)
	var background_colors = ['#DB680B','#D91A13', '#010117','#B03535', '#570082', '#0B8562', '#BDAE13']

	current_color = background_colors[random_num]
	$('#wrapper').css('background-color', current_color)

	function infolist(){
		$('.about').text(info[i])
	}

	
		function rotate(){
			var delay = setInterval(function(){ 
				if(i<=5){
					if(i == 3){
								$('.about').before(' like')
							}
					$('.about').animate({
						top: '-5px'
						, opacity:'0'
					},{
						duration : 100
						, easing : 'swing'
						,complete : function(){
							console.log(i)
							infolist(); 
							
						}
					})
					.animate({
						top: '0px'
						,opacity:'1'
					},{
						duration : 500
						,easing :'linear'
						, complete : function(){

							i+=1;
						}
						
					})
				} else{
					clearInterval(delay)
				}	
			}
				,2000)
		}
		
		setTimeout(rotate(), 3000)

	$('footer').animate({
			bottom: '0px'
		}, {
			duration : 1000
			,easing : 'swing'
	})
});