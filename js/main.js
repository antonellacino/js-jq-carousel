$(document).ready(function(){

  //evento next
  $('.next').click(
    nextImg  //richiamo la funzione
  );
  //evento prev
  $('.prev').click(
    prevImg  //richiamo la funzione
  );

  //function next
  function nextImg() {
    //catturo in una variabile l'elemento che in quel momento ha la classe active idem x i pallini
    var imgActive = $('.slider img.active');
    var ballActive = $('.pallini i.active');
    //a quello stesso elemento tolgo la classe idem x i pallini
    imgActive.removeClass('active');
    ballActive.removeClass('active');

    if (imgActive.hasClass('last')) {
      $('.slider img.first').addClass('active');
      $('.pallini i.first').addClass('active');
    } else {
      //seleziono il fratello diretto di quel elemento e gli abbino la classe active idem x i pallini
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');
    }
  };

  function prevImg() {
    //catturo in una variabile l'elemento che in quel momento ha la classe active idem x i pallini
    var imgActive = $('.slider img.active');
    var ballActive = $('.pallini i.active');
    //a quello stesso elemento tolgo la classe idem x i pallini
    imgActive.removeClass('active');
    ballActive.removeClass('active');

    if (imgActive.hasClass('first')) {
      $('.slider img.last').addClass('active');
      $('.pallini i.last').addClass('active');
    } else {
    //seleziono il fratello diretto di quel elemento e gli abbino la classe active idem x i pallini
    imgActive.prev().addClass('active');
    ballActive.prev().addClass('active');
    }
  };

});
