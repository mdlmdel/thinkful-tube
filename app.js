$(document).ready(function () {
  $('#search-form').submit( function (e) {
    e.preventDefault();
    var query = $('#search-term').val();
    console.log(query);
  })
})