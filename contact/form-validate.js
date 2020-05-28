function validateContactForm() {

 
        var valid = true;

        var name = $("#name").val();
        var lastName = $("#last-name").val();
        var email = $("#email").val();
        var postcode = $("#postcode").val();
        var message = $("#message").val();
        
        if (name == "") {
            $("#userName-info").html("Required.");
            $("#userName").css('border', '#e66262 1px solid');
            valid = false;
        }
        if (email == "") {
            $("#userEmail-info").html("Required.");
            $("#userEmail").css('border', '#e66262 1px solid');
            valid = false;
        }
        if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        {
            alert("invalid email")
            $("#email").html("Invalid Email Address.");
            $("#userEmail").css('border', '#e66262 1px solid');
            valid = false;
        }
    
        if (lastName == "") {
            $("#subject-info").html("Required.");
            $("#subject").css('border', '#e66262 1px solid');
            valid = false;
        }
    
        if (postcode == "") {
            $("#subject-info").html("Required.");
            $("#subject").css('border', '#e66262 1px solid');
            valid = false;
        }
    
        if (message == "") {
            $("#userMessage-info").html("Required.");
            $("#content").css('border', '#e66262 1px solid');
            valid = false;
        }
        return valid;

}

validateContactForm();