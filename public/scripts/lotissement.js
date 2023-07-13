$(document).ready(function () {
  // Retrieve the token from local storage
  var token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login.html';
  }

  $('#save_lotissement').click(function () {
    var lotissement_nom = $("#lotissement_nom").val();
    var lotissement_location = $("#lotissement_location").val();
    var lotissement_description = $("#lotissement_description").val();

    $.ajax({
      url: '/api/lotissemnts/create',
      method: 'POST',
      data: { nom: lotissement_nom, description: lotissement_description, location: lotissement_location},
      success: function (response) {
        console.log(response);
        // Handle successful registration
      },
      error: function (error) {
        console.log(error);
        // Handle registration error
      }
    });
  });
});