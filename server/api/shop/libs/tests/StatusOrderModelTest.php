<?php
namespace libs\tests;
use libs\models\StatusOrderModel;
use PDO;
use PHPUnit\Framework\TestCase;
use PHPUnit\DbUnit\TestCaseTrait;

class StatusOrderModelTest extends TestCase
{
    use TestCaseTrait;

	private $pdo;
    static $model;

    public function getConnection()
    {
        $this->pdo = new \PDO($GLOBALS['DB_DSN'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASSWD']);
        return $this->createDefaultDBConnection($this->pdo, $GLOBALS['DB_DBNAME']);
    }

    public function getDataSet()
    {
        return $this->createMySQLXMLDataSet(dirname(__FILE__). '/dump/dump_status_order.xml');
    }

    public static function setUpBeforeClass()
    {
        self::$model = new StatusOrderModel();
    }

    /*
    *    getAll()
    *    return array
    */

    public function testGetAll ()
    {
        $this->assertNotEmpty(self::$model->getAll());
    }
}