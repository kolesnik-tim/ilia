

if($('section').hasClass('timer')) {

  setInterval(function() {
    var date = new Date();
    var dateEnd = new Date(Date.UTC(
        2022, 03, 15, 0, 0, 0,
    )); // // 2011 января 1, 00:00:00
    var dataEnd2 = dateEnd - date - 3600000;
    if(dataEnd2 <= 0) {
        
    } else{
      var one_day = 1000 * 60 * 60 * 24;
      var one_hours = 1000 * 60 * 60;
      var one_minutes = 1000 * 60;
       
      var day = Math.floor((dataEnd2)/one_day);
      var hoursResidue = (dataEnd2)-(day*one_day);
      var hours = Math.floor(hoursResidue / one_hours);
      var minutes = Math.floor(((hoursResidue-(hours*one_hours)) / one_minutes));
      var seconds = Math.floor((((hoursResidue-(hours*one_hours))-(minutes*one_minutes)) / 1000));




      $('.timer__number').text(day);
     
    }
  }, 1000);
}

// $(function () {

//     $('.slider').slick({
//         fade: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
//     });

// });


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});