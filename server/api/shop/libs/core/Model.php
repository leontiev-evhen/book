<?php
namespace core;
use \PDO;

class Model extends \core\db\Sql
{
    protected $connect;
    protected $date;

    public function __construct ()
    {
        if (!$this->connect = new PDO('mysql:host='.HOST.';dbname='.DB, USER, PASSWORD))
        {
            throw new Exception('Could not connect');
        }

        $date = date("Y-m-d H:i:s");
        //$this->date = strtotime($date);
        $this->date = $date;
    }

    protected function formattingDate ()
    {
    	$date = date("Y-m-d H:i:s");
	    $this->date = strtotime($date);
    }
}