$(document).ready(function()
{

  var color = 'white';
  var colors = "red blue green yellow white";

  $('.box').on('click', function()
  {
    $(this).toggleClass(color);
  });

  $('#reset').on('click', function()
  {
    $('.box').removeClass(colors);
    color='white';
  });

  $('#red').on('click', function()
  {
    color = 'red';
  });
  $('#blue').on('click', function()
  {
    color = 'blue';
  });
  $('#green').on('click', function()
  {
    color = 'green';
  });
  $('#yellow').on('click', function()
  {
    color = 'yellow';
  });
  $('#white').on('click', function()
  {
    color = 'white';
  });
})
