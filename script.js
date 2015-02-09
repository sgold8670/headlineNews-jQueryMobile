$(document).ready(function(){
// http://api.feedzilla.com/v1/categories.json shows the category id's of each topic
// var url = "http://api.feedzilla.com/v1/categories/27/articles.json"; 27 is the category number indicating sports
//26 indicates headline news
//$("#info").empty(); // clears the div
			
var url = "http://api.feedzilla.com/v1/categories/26/articles.json";
	$.getJSON(url,
		function(data){
			//console.log(data.articles);
			for (i=0; i<data.articles.length; i++) {
			var link = '<li><div class="line-margin"><div class="list-group"><a href="' + data.articles[i].url + '" class="list-group-item"><h4>' + data.articles[i].title + '</h4><p>' + data.articles[i].summary + '</p></a></div></div></li>';
			//append data to news div
			$("#info").append(link);
			$("#info").listview("refresh");
			}// end of for loop
		});//end of function(data)	
		
		
		
				 

});
