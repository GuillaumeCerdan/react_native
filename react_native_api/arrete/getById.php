<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-type:application/json;charset=utf-8');

    if (isset($_GET['id'])) {
        
        $arr = json_decode(file_get_contents("../data.json"), true);
        $id = intval($_GET['id'] - 1);
        echo(json_encode($arr[$id]));
        
    } else {
        echo("Il faut passer un id existant et de type Int");
    }

?>