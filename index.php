<?php 

require_once __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/config.php';


$builder = new PHPageBuilder\PHPageBuilder($config);

$builder->handleRequest();
