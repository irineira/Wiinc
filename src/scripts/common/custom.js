$(document).ready(() => {

    // scrol menu
    $(document).on('click', '.header__item a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
	})
	
	

    // burger
    // $('.burger').click(function() {
    //     $('.adaptmenu').addClass('adaptmenu_active');
    //     $('body').css('overflow', 'hidden');
    // });

    // $('.close').click(function() {
    //     $('.adaptmenu').removeClass('adaptmenu_active');
    //     $('body').css('overflow', 'visible');
    //     $('body').css('overflow-x', 'hidden');
    // });

    // $('.adaptmenu nav').click(function() {
    //     $('.adaptmenu').removeClass('adaptmenu_active');
    //     $('body').css('overflow', 'visible');
    //     $('body').css('overflow-x', 'hidden');
    // });


// $(window).resize(function() {

//     if($(window).width() > '768'){
//         console.log('da');
//         $(body).css('overflow', 'visible');
//     }
    
// });




   
    

});

                                                                        

                                                                           

                                        

