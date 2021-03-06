


// navbar
$('#mobileNavShowHide').on('click', function(){
    $('.box-button-mobile-show-top').toggleClass('showNavPanelShowButton');
    $('.angleIcon').toggleClass('rotateangleIcon')
    $('#navbarSection').toggleClass('showNavPanel');
});

$('.btn-bottomMenuGroup').on('click',()=>{
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp"); 
});
$('.buttonGroupMenuDropUp  ul li a').on('click',()=>{
    $('#rightBox .buttonGroupMenuDropUpForm').toggleClass("showMenudropUpForm");
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp");
    
})
$('.buttonGroupMenuDropUpForm input.closeForm , .buttonGroupMenuDropUpForm button.close.closeBtnCross').on('click',()=>{
    $('#rightBox .buttonGroupMenuDropUpForm').toggleClass("showMenudropUpForm");
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp");
})

if ($(window).width() < 768) {
    $('.tab1').addClass('tab-pane show fade active');
    $('.tab2').addClass('tab-pane fade');
}

// ON DOCUMENT LOAD
$(document).ready(function () {

   
    // turtorial popup and wrapper
    function showTutorial(){
        // TUTORIAL YES OR SKIP MODAL
        $('#tutorStart').addClass('show');


        // TUTORIAL STARTED ON YES
        $('.tutorStartTitleYes').on('click', () => {
            $('#tutorStart').removeClass('show');



            var tutorial2 = function () {
                $('#navbarSection').addClass('indexShow');
                $('.navbarSectionTutorPopup-body').addClass('navbarSectionTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS BACK BUTTON
                $('#navbarSectionTutorPopupBack').on('click', () => {
                    $('#navbarSection').removeClass('indexShow');
                    $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                    
                    tutorial1();
                    
                });
                // TUTORIAL 1: ON PRESS FINISH BUTTON
                $('#navbarSectionTutorPopupFinish').on('click', () => {
                    $('#navbarSection').removeClass('indexShow');
                    $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                    $('.tutorWrapper').removeClass('TutorActive');
                   
                });
            }


            // function body starts
            var modulePops = function () {
                tutorial3();
            }
            // function body ended

            // function body starts
            var tutorial1 = function () {
                $('#tutorBoxOne').addClass('indexShow');
                $('.bottomMenuGroupTutorPopup-body').addClass('bottomMenuGroupTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS next BUTTON
                $('#bottomMenuTutorPopupNext').on('click', () => {
                    $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                    // $('.tutorWrapper').removeClass('TutorActive');
                    $('#tutorBoxOne').removeClass('indexShow');
                    tutorial2();
                });
                // TUTORIAL 1: ON PRESS Back BUTTON
                $('#bottomMenuTutorPopupBack').on('click', () => {
                    $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                    $('#tutorBoxOne').removeClass('indexShow');
                    tutorial3();
                });
            }
            // function body ended


            // function body starts
            var tutorial3 = function () {
                $('.leftFormInput').addClass('indexShow');
                $('.leftAreaTutorPopup-body').addClass('leftAreaTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS Cancel BUTTON
                $('#leftAreaTutorPopupCancel').on('click', () => {
                    $('.leftAreaTutorPopup-body').removeClass('leftAreaTutorPopup-body-active');
                    $('.tutorWrapper').removeClass('TutorActive');
                });
                // TUTORIAL 1: ON PRESS FINISH BUTTON
                $('#leftAreaTutorPopupNext').on('click', () => {
                    $('.leftAreaTutorPopup-body').removeClass('leftAreaTutorPopup-body-active');
                    $('.leftFormInput').removeClass('indexShow');
                    tutorial1();
                });
            }
            // function body ended


            // Tutorial Main Container/Wrapper
            $('.tutorWrapper').addClass('TutorActive', modulePops());
        });

        // TUTORIAL SKIPED ON SKIP
        $('.tutorStartTitleSkip').on('click', () => {
            $('#tutorStart').removeClass('show');
        });

        // TUTORIAL SKIPP ON CROSS BUTTON CLICK
        $('#tutorStart button.close').on('click', () => {
            $('#tutorStart').removeClass('show');
        }); 
    }

    // tutorial runs here - script
    if (window.location.pathname == '/trip-dashboard.html') {
        if ($(window).width() > 768) {
            showTutorial();
        }
    }


    // navbar tutorial tab on click show tutorial popup
    $('#showTutorialButtn').on('click', () => {
        $('.modal').removeClass('show');
        $('.modal').css({'display': 'none'});
        $('.modal-backdrop.fade.show').css({'display': 'none'});
        
        // show tutorial
        showTutorial();
    });



    // tooltip

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});



// form validation
// // $("input").removeClass('next');
// $("input.departureDate").keypress(function (e) {
//     if (this.value == '') {
//         // alert("null")
//         // $("input.departureDate").removeClass('next');
//         return 0;
//     }
//     else {
//         alert(1)
//         $("input.departureDateValid").addClass('next');
//     }
// });


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
    var z = $("input.departureDate").val();
    if(z == ''){
        $("input.departureDate").css({
            'box-shadow': '0 0 0 .2rem rgba(255, 12, 25, 0.49)',
            'z-index': '1'
        });
    }
    else{
        $("input.departureDate").css({
            'box-shadow': 'rgba(4, 170, 26, 0.49) 0px 0px 0px 0.2rem',
            'z-index': '1'
        })
        
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });
                next_fs.css({ 'left': left, 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
}


    
});

$(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function () {
    // return false;
});




$('.NavSidebarShowBtn').on('click', ()=>{
    $('.NavSidebar').toggleClass('NavSidebarShow');
    $('.showNavPanelShowButton').fadeToggle(100);
})



