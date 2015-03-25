$(document).ready(function() {
            
    $("#desktop_menu").superfish();

    $("#menu_btn").click(function(e) {
        e.preventDefault();
        $("#mobile_menu").slideToggle();
    });

    $(".row").matchHeight();

    $("#slideshow").slidesjs({
        width: 1024,
        height: 768,
        play: {
            active: false,
            effect: "fade",
            interval: 10000,
            auto: true,
            swap: true,
            pauseOnHover: false,
            restartDelay: 2500
        },
        pagination : {active:false},
        navigation : {active:false}
    });


    $(".fancybox").fancybox();
});


function clearDefault(el) {
  if (el.defaultValue==el.value) el.value = ""
}

function restoreDefault(el) {
	if (el.value == "") el.value = el.defaultValue;
}
