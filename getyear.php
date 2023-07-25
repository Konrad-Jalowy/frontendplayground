<?php 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $year = (int)date("Y");
    $output = ['year' => $year];
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($output);
}
?>