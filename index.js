  $(document).ready(function () {
        $('.kk').hide();
                    $(window).scroll(function () {

                        if ($(window).scrollTop() > 100) {
                            $('nav').addClass('header');
                        } else {
                            $('nav').removeClass('header');
                        }

                    });


  });

  $(document).ready(function () {

    $('.cardWell').hover(
        // trigger when mouse hover
        function () {
            $(this).animate({
                marginTop: "-=1%",
            }, 300);
        },

        // trigger when mouse out
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 300);
        }
    );


});