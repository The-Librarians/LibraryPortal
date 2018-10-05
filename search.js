document.ready(function() {
  $("update-patron").click(function(event){
    event.preventDefault();

    let patronSearch = $("update-patron").val().trim();

    if (patronSearch = '') {
      alert('please enter patron information');
      return false;
    } else {
      let patronInfo = [];
      $.get
    }
  });
});


//user partal
$("#patron-search-bar") //the patrons search bar, which needs to grab books from the database and display their information
$("#cateloge-sumbit-button") //the submit button which activates the on click event and sends the information to the api route

//library Portal
$("update-patron") //library create and update the patron
$("update-item") //library create and upadate books
