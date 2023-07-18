<?php 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $diceRoll = random_int(1,6);
    $output = ['roll' => $diceRoll];
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($output);
}
?>