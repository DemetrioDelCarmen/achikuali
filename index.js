(function(s){
    $(document).ready(function () {
    $(".navbar").hide();
    $(".navbarScroll").hide();




    $(window).scroll(function () {

        if ($(window).scrollTop() < 100) {
            
            $('.navbar').fadeIn();
            $('.navbarScroll').fadeOut();
            
        }

    });

    $(window).scroll(function () {
    
        if ($(window).scrollTop() > 100) {
            
            $('.navbarScroll').fadeIn();
            
        }

    });
    
       
       

});

}(jQuery));