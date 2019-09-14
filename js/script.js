//I chose to write my form's submit functions in jQuery, because I knew that I would
//need to remove all classes from the moon's image every time the form is submitted.
//I also knew that I would need to add a class depending on which option a user
//chooses from the drop-down menu. I thought this would be achieved most easily
//with the jQuery removeClass() and addClass() methods.

$('form').submit(function(event) {
  event.preventDefault();
  $('#moon-image').removeClass();

  if ($('#moon option[value = "blur"]').prop('selected')) {
    $('#moon-image').addClass('blur');
  } else if ($('#moon option[value = "saturated"]').prop('selected')) {
    $('#moon-image').addClass('saturated');
  } else if ($('#moon option[value = "brighter"]').prop('selected')) {
    $('#moon-image').addClass('brighter');
  } else if ($('#moon option[value = "spin"]').prop('selected')) {
    $('#moon-image').addClass('spin');
  } else if ($('#moon option[value = "fade"]').prop('selected')) {
    $('#moon-image').addClass('fade-in');
  } else if ($('#moon option[value = "bounce"]').prop('selected')) {
    $('#moon-image').addClass('bounce');
  }
});
