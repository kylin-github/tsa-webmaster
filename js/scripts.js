$(document).ready(function(){
    $('.parallax').parallax(); // image parallax
    $(".dropdown-trigger").dropdown({coverTrigger: false}); // navbar dropdown
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    $( ".collapsible-header" ).click(function() {
      $(".more",this).toggle()
      $(".less", this).toggle()
    });
})