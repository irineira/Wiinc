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
	

//burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.header__item').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });


// resize
	$(window).resize(function() {

		if($(window).width() > '768'){
			$(body).css('overflow', 'visible');
		}
	});
});

                                                                        

                                                                           

                                        

