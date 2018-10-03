$(document).ready(() => {


  //form action goes here
  $(function() {
    $(".media-book-showcase").on("click", function(event) {
      let title = $("#title").val().trim();

      let author = $("#author").val().trim();

      let genre = $("#genre").val().trim();

      //=================================
      //I'm not sure that this will work
      //=================================
      let search = title + author + genre;

      if (search == '') {
          alert("Please enter something in the field first.");
      }

      else {

          let img = '';
          let title = '';
          let author = '';

          $.get("https://www.googleaois.com/books/v1/volumes?q=" + search, response => {
              console.log(response);

              for(i=0; i<response.item.length;i++) {
                  //get title of the book
                  title = response.items[i].volumeInfo.title;
                  img = response.items[i].volumeInfo.infoLink;
                  author = response.items[i].volumeInfo.authors;
              }
               $.ajax({
                dataType: 'json',
                url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + search,
                success: handleResponse
              });
          });
        }
      });
  });

//place to look for my functions
  function handleResponse( response ) {
    $.each( response.items, function( i, item ) {

      var title    = item.volumeInfo.title,
          author   = item.volumeInfo.authors[0],
          thumb    = item.volumeInfo.imageLinks.thumbnail;

      $('.title').text( title );
      $('.author').text( author );
      $('.thumbnail').attr('src', thumb);
    });
  }

    return false;
  });
