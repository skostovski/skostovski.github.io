function navClick(params) {
    var about = $(".about_me_nav");
    var resume = $(".resume_nav");
    var works = $(".works_nav");
    var contact = $(".contact_nav");
    var aboutBox = $(".about_me_container");
    var resumeBox = $(".resume_container");
    var worksBox = $(".works_container");
    var contactBox = $(".contact_container");
    var image=$(".website_image");

    about.on("click", function () {
        $(".info_wrapper_style").css("width", "0%").css("transition", "0s");
        aboutBox.css("width", "100%").css("transition", "0.6s");
    });

    resume.on("click", function () {
        $(".info_wrapper_style").css("width", "0%").css("transition", "0s");
        resumeBox.css("width", "100%").css("transition", "0.6s");
    });

    works.on("click", function () {
        $(".info_wrapper_style").css("width", "0%").css("transition", "0s");
        worksBox.css("width", "100%").css("transition", "0.6s");
    });

    contact.on("click", function () {
        $(".info_wrapper_style").css("width", "0%").css("transition", "0s");
        contactBox.css("width", "100%").css("transition", "0.6s");
    });
    
    $("#img_1").on("click", function(){
        $(".img_1_modal").toggle("slow", function () {
        });
    });

    $("#img_2").on("click", function(){
        $(".img_2_modal").toggle("slow", function () {
        });
    });

    $("#img_3").on("click", function(){
        $(".img_3_modal").toggle("slow", function () {
        });
    });

    $("#img_4").on("click", function(){
        $(".img_4_modal").toggle("slow", function () {
        });
    });

    $("#img_5").on("click", function(){
        $(".img_5_modal").toggle("slow", function () {
        });
    });

    $(".close").on("click", function(){
        // $(".modal_style").toggle("slow", function () {
        // });
        $(".modal_style").css("display", "none");
    });

};

navClick();
