$(function() {
  $("#landingExplorer").on("click", function(event) {
    event.preventDefault();
    var userType = $("#exampleRecipientInput").val();
    var userInput = $("#patronLibrarianId").val();
    console.log(userType + userInput);

    //redirects to Patron Page
    if (userType === "patron"){
    window.location.href = "/users/" + userInput;
    }
    else { 
      window.location.href = "/books/";
    }
  });
 
  $("#catalogExplorer").on("click", function(event){
    event.preventDefault();
   var catalogExplorer = $("#catalog-search-bar").val();
    console.log(catalogExplorer)

    window.location.href="/books/title/" + catalogExplorer
  })

  
    //Add new book1.
    
  $("#bookSubmit").on("click", function(event){
    event.preventDefault();
    console.log("click");
    var bookInput = {
     title : $("#bookTitleInput").val(),
     author : $("#authorInput").val(),
     genre : $("#genreInput").val(),
     audience : $("#audienceInput").val(),
     description : $("#descriptionInput").val(),
     isCheckedOut : $("#checkedOut").val(),
    
    }
    $.ajax("/api/books/",{
      type:"POST",
      data:bookInput
    }).then(function(){
      console.log("book added")
    })
   
})
})
