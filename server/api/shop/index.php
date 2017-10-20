<?php
require_once 'config.php';
require_once 'Autoloader.php';
date_default_timezone_set('Europe/Kiev');
try
{
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
	header("Access-Control-Allow-Headers: Authorization, Content-Type");
	
	
    RestServer::run();
}
catch (Exception $e)
{
    echo $e->getMessage();
}



   



