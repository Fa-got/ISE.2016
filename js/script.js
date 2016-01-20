$(document).ready(function(){

	var dataJson; // Database

	$.getJSON("js/data.json",function(data){dataJson = data})
			.done(function(){console.log("done | Settings");start()})
			.fail(function(){console.log("error | Settings");})
			.always(function() {console.log( "complete | Settings" );});

	// current clothes
	function start(){
		if(window.location.search){
			param = (window.location.search).substring(1).split(';')
			for (n in param){
					nStr = String(n)
					console.log(JSON.parse(dataJson['0']))
					if(n == 0 && dataJson[nStr][TYPE] == param[n]){
						$('section div.price h1').empty().append(dataJson[n+1].TITLE);
						$('section div.price p span').empty().append(dataJson[n+1].PRICE);
						$('article main img').attr('src', dataJson[n+1].IMG1);
						console.log(param[n])
					}else{
						block = $('aside .goods').eq(n)
						console.log(block.html())
						block.css('background-image', '..'+dataJson[n+1].IMG1);
						block.find('h3').empty().append('sdfsdfsdf');
						block.find('span').empty().append(dataJson[n+1].PRICE)

					}
			}
		} 
	}
	




	//console.log( State.url.split('?'))
	$('header img').on( "click", function() {
		ThankYouPage('show');
		$('article').addClass('none');
	}); 
	// animation
	function ThankYouPage(m){
	 $('body > img').effect( "drop", {"mode" : m}, 500);
	} 
	// animation and
	
	// ---------------


	var counter = 1,
		TotalPrice =  parseFloat(59.10);
	
		console.log(TotalPrice)

	$('article > aside > div.goods').on( "click", function() {
		console.log(counter)
			addPrice = $(this).find('span').eq(1).html();
			if ($(this).children('img').hasClass('none')){
				if(counter < 3){
					$(this).find('img').removeClass('none');
					counter++;
					TotalPrice = parseFloat(addPrice) + TotalPrice
					$('article > section > div.total-price p span:nth-child(2)').empty().append(TotalPrice.toFixed(2));
					$('article > section > div.counter p span').html(counter);
				} else{
					return;
				}
			} else{
				$(this).find('img').addClass('none')
				counter--;
				TotalPrice = TotalPrice - parseFloat(addPrice)
				$('article > section > div.total-price p span:nth-child(2)').html(TotalPrice.toFixed(2));
				$('article > section > div.counter p span').html(counter);
			}
			if(counter != 1){
				$('article >  section div.total-price ').removeClass('none');
				$('article >  section div.price ').addClass('none')
			}else{
				$('article > section div.total-price ').addClass('none')
				$('article > section div.price ').removeClass('none')

		}
	})


 

});//end ready