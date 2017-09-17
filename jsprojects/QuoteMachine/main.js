$(document).ready(function() {
    
    var quote;
    var author;
    
   function getNewQuote() {
       $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            }, 
           success: function(response) {
               console.log(response);
               quote = response.quoteText;
               author = response.quoteAuthor;
               $('#quote').text(quote);
               if(author) {
                   $('#author').text('said by ' + author);
               } else {
                   $('#author').text('- uknown');
               }
           }
       });
   } 
    getNewQuote();
    
    $('.get-quote').on('click', function() {
       getNewQuote(); 
    });
    


 $('.share-quote').on('click', function(e) { e.preventDefault(); window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote)); });
    });