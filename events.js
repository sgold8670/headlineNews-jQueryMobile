$(document).ready(function(){
//---Ajax news info into div
	$("#news").on('click',function(){
	 //make div active with 
		$('#menu div.active').removeClass('active');
			$(this).addClass('active')
	 // clears the div
	 $("#info").empty(); 
	 //set up json call to Feedzilla API (26 indicates the "news" category"
		var url = "http://api.feedzilla.com/v1/categories/26/articles.json";
		 $.getJSON(url,
		    function(data){
			  for (i=0; i<data.articles.length; i++) {
					var link = '<li><div class="line-margin"><div class="list-group"><a href="' + data.articles[i].url + '" class="list-group-item"><h4>' + data.articles[i].title + '</h4><p>' + data.articles[i].summary + '</p></a></div></div></li>';
					//append data to news div
					$("#info").append(link);
					$("#info").listview("refresh");
			   }// end of for loop
			});//end of function(data)	
	 });	//end of click function

//--- Ajax sports into the div
	 $("#sports").on('click',function(){
		//make div active with 
		$('#menu div.active').removeClass('active');
			$(this).addClass('active')

	// clears the div
	 $("#info").empty(); 
	 //set up json call to Feedzilla API (27 indicates the "sports" category"
		var url = "http://api.feedzilla.com/v1/categories/27/articles.json";
		 $.getJSON(url,
		    function(data){
			  for (i=0; i<data.articles.length; i++) {
					var link = '<li><div class="line-margin"><div class="list-group"><a href="' + data.articles[i].url + '" class="list-group-item"><h4>' + data.articles[i].title + '</h4><p>' + data.articles[i].summary + '</p></a></div></div></li>';
					//append data to news div
					$("#info").append(link);
					$("#info").listview("refresh");
			   }// end of for loop
			});//end of function(data)	
	 });//end of click function
	 
//--- Ajax entertainment into the div
	 $("#entertainment").on('click',function(){
	    //make div active with different color
		$('#menu div.active').removeClass('active');
			$(this).addClass('active')
	  
	 // clears the div
	 $("#info").empty(); 
	 //set up json call to Feedzilla API (6 indicates the "sports" category"
		var url = "http://api.feedzilla.com/v1/categories/6/articles.json";
		 $.getJSON(url,
		    function(data){
			  for (i=0; i<data.articles.length; i++) {
					var link = '<li><div class="line-margin"><div class="list-group"><a href="' + data.articles[i].url + '" class="list-group-item"><h4>' + data.articles[i].title + '</h4><p>' + data.articles[i].summary + '</p></a></div></div></li>';
					//append data to news div
					$("#info").append(link);
					$("#info").listview("refresh");
			   }// end of for loop
			});//end of function(data)	
	 });	//end of click function
	 
});//end of document ready