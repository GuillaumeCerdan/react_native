<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-type:application/json;charset=utf-8');

    $file = file_get_contents("../data.json");

    echo($file);

?>