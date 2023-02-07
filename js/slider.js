$(document).ready(function(){
    $('.advantages-list').slick({
        mobileFirst: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                slidesToShow: 2
            },
            {
                breakpoint: 1000,
                settings: "unslick"
            },
            
                    ]
    });
});