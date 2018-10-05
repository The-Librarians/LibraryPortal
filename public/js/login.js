$(function () {
  $("#landingExplorer").on("click", function (event) {
    event.preventDefault();
    var userType = $("#exampleRecipientInput").val();
    var userInput = $("#patronLibrarianId").val();
    console.log(userType + userInput);

    //redirects to Patron Page
    if (userType === "patron") {
      window.location.href = "/users/" + userInput;
    }
    else {
      window.location.href = "/books/";
    }
  });

  $("#catalogExplorer").on("click", function (event) {
    event.preventDefault();
    var catalogExplorer = $("#catalog-search-bar").val();
    console.log(catalogExplorer)

    window.location.href = "/books/title/" + catalogExplorer
  })

})
