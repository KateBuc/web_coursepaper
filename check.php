<?php
if(isset($_POST["post"])) {
    $email = filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);
    $drainage_syst=$_POST['drainage_syst'];
    $fences = $_POST['fences'];	
    $arbor = $_POST['arbor'];
    $flowerbed = $_POST['flowerbed'];
    $rolled_lawn = $_POST['rolled_lawn'];
    $paving = $_POST['paving'];
    $apartment_landscaping = $_POST['apartment_landscaping'];

    if(mb_strlen($email)<5){
        echo "Поле email має замалу довжину";
        exit();
    }

    require "connect.php";

    $mysql->query("INSERT INTO `orders`(`email`, `drainage_syst`, `fences`, `arbor`,`flowerbed`,`rolled_lawn`,`paving`,`apartment_landscaping`) 
    VALUES('$email','$drainage_syst','$fences','$arbor','$flowerbed','$rolled_lawn','$paving','$apartment_landscaping')");

    $mysql->close();

    header('Location:/');
}

?>