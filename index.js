// $(window).scroll(function() {
// 	var $height = $(window).scrollTop();
//   if($height > 50) {
// 		//do something
//         $("#navbar").css("background-color", "black");
//         $("#navbar").css("transform", "rotate("+(rotateVal)+"deg)");
// 	} else {
// 		//do something
// 	}
// });

// $(window).scroll(function() {
//     if($(this).scrollTop() > 20)
//     {
//         $('.rootNavbar').addClass('afterscroll');
//         $('.rootNavbar').removeClass('inital');
        
//         // $('.rootNavbar').addClass('afterscroll-persist').delay(1000);
//     } else
//     {
//         $('.rootNavbar').addClass('inital');
//         $('.rootNavbar').removeClass('afterscroll');
//     }
// });
//translate3d(0px, -0.0078125px, 0px);
$(window).scroll(function() {
    // const divPosition = 900
    // const divPositionTeachers = 1550
    // const maxRotateTeachers =  23;
    // const maxRotate =  23;
    // console.log($(window).scrollTop())
    // let transVal =  (($(window).scrollTop() - divPosition) / maxRotate);
    // let transValTeachers =  (($(window).scrollTop() - divPositionTeachers) / maxRotateTeachers);
    // $('.backgroundImage').css({"transform": "translate3d(0px, "+(transVal)+"px, 0px)"});
    // $('.backgroundImageTeachers').css({"transform": "translate3d(0px, "+(transValTeachers)+"px, 0px)"});
    if($(this).scrollTop() > 20)
    {
        $('.rootNavbar').addClass('afterscroll');
        $('.rootNavbar').removeClass('inital');
        
        // $('.rootNavbar').addClass('afterscroll-persist').delay(1000);
    } else
    {
        $('.rootNavbar').addClass('inital');
        $('.rootNavbar').removeClass('afterscroll');
    }
});