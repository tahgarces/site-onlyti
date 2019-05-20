$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $("#header").addClass("teste2");
        } else {
            $("#header").removeClass("teste2");
        }
    });
});
