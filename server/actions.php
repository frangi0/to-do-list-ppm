<?php
    header('Content-Type: text/json');
    require_once("config.php");

    $action = $_POST['action'];

    $query_string = "";

    switch(action){
        case "insert":
            insertData();
        break;
    }

    function insertData(){

    }

?>
