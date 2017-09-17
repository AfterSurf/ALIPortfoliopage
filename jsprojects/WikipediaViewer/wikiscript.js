$(function() {

  var backgroundImg = ' https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/2000px-Wikipedia-logo-v2-en.svg.png' 
  $('body').css('background-image', 'url(' + backgroundImg + ')'); 

  $('#search').click(function() {

    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?"
    
    $.ajax({ 
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(url);
        $('#output').html(''); 
          
        for (var i = 0; i < data[1].length; i++) {
          $('#output').append("<a href=" + data[3][i] + " target='blank'><h1>" + data[1][i] + "</h1></a>" + "<h3>" + data[2][i] + "</h3><br>");
        }

      },
      error: function(errorMessage) {
        alert("Error");

      },

    });

  });

  $('#searchTerm').bind('keypress', function(e) { 
    if (e.keyCode == 13) {
      $("#search").click(); 
    }
  });
});