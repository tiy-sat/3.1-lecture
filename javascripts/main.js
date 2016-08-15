document.addEventListener("DOMContentLoaded", function(){
  // All my code related to the DOM here

  // Created `new` instance XMLHttpRequest "class" "XHR" for short
  var request = new XMLHttpRequest();

  var moviesList = document.querySelector(".movies");
  var titleElement = document.querySelector(".search__title");
  var submitElement = document.querySelector(".search__submit");

  request.addEventListener('load', function(e){
    var responseJSON  = JSON.parse(e.target.response);
    // Holder for "string template" outside of loop
    var listHTML = "";
    responseJSON.Search.forEach(function(result){
      // Open list item tag
      listHTML += "<li>";
      // Open/close the heading and placing data inside the text content
      listHTML += "<h3> " + result.Title  + "</h3>";
      // Create image tag
      listHTML += "<img class='movie__poster' src=" + result.Poster + "/>";
      // Closing the listen item tag
      listHTML += "</li>";
    });
    // Reset inner html to just be current results
    moviesList.innerHTML = listHTML;
  });

  submitElement.addEventListener("click", function(e){
    // stops the form from submitting by default
    e.preventDefault();
    // Grab text from search title input field
    var titleValue = titleElement.value;
    // Open the request WITH*** the title concat'd
    // Takes two arguments: type of request, and url to send later
    request.open("GET", "http://www.omdbapi.com/?s=" + titleValue);
    // Sending the request (to get info back)
    request.send(null);
  });
});
