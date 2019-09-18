// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione
//  una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout


$(document).ready(function() {

  var url = "https://flynn.boolean.careers/exercises/api/array/music";




  $.ajax ({
    url : url,
    method : "GET",
    success : function (data) {
      var dischi = data.response;

      for (i=0; i < dischi.length; i++) {
        var disco = dischi[i];
        var source   = $("#template").html();
        var template = Handlebars.compile(source);
        var context = {
        poster : disco.poster,
        title : disco.title,
        author : disco.author,
        genre: disco.genre,
        year: disco.year
      };
      var html = template(context);
      $(".cds-container").append(html);
    }

    },
    error : function (){
      console.log("C'è stato un errore");
    }
  });


  // Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
  // In base a cosa scegliamo nella select vedremo i corrispondenti cd.




});
