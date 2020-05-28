<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $lastName = $_POST['last-name'];
        $mailFrom = $_POST['email'];
        $postcode = $_POST['postcode'];
        $message = $_POST['message'];

        $mailTo = "kylekostovski0@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "Name: ".$name."\n Last Name: ".$lastName."\n Postcode: ".$postcode.".\n\n".$message;

        mail($mailTo, $txt, $headers);

        header("Location: index.html?mailsent");
    }

?>




