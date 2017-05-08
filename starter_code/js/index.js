
$(document).ready(function(){
    $("form").on('submit', function(e) {
	
	e.preventDefault();
	
		var city = $("input");
    	    changeBg(city);
    });


});

function changeBg(city) { 
	if (city.val() == "Los Angeles", "LA", "LAX") 
		{
			document.body.style.backgroundImage = "url('images/la.jpg')";
		}
	else if (city.val() == "San Francisco", "SF", "Bay Area")
		{
			document.body.style.backgroundImage = "url('images/sf.jpg')";
		}
	else if (city.val() == "New York", "NYC", "New York City")
		{
			document.body.style.backgroundImage = "url('images/nyc.jpg')";
		}
	else if (city.val() == "Austin", "ATX")
		{
			document.body.style.backgroundImage = "url('images/austin.jpg')";
		}
	else if (city.val() == "Sydney", "SYD")
		{
			document.body.style.backgroundImage = "url('images/sydney.jpg')";
		}
	
} 