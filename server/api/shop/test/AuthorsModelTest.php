<?php

class AuthorsModelTest extends PHPUnit_Extensions_Database_TestCase
{
	private $pdo;
    private $table = 'authors';

    public function getConnection()
    {
        $this->pdo = new PDO('mysql:host=localhost;dbname=book', 'root', 'root');
        return $this->createDefaultDBConnection($this->pdo, 'testdb');
    }

    public function getDataSet()
    {
        return $this->createMySQLXMLDataSet('./dump/dump_authors.xml');
    }

    public function testGetAllAuthors ()
    {
        $query = $this->pdo->query('SELECT * FROM authors');
        $results = $query->fetchAll(PDO::FETCH_COLUMN);
        $this->assertEquals(5, count($results));
    }

    public function testGetOneAuthor ()
    {
        $query = $this->pdo->query('SELECT * FROM authors WHERE id = 24');
        $results = $query->fetchAll(PDO::FETCH_COLUMN);
        $this->assertEquals(1, count($results));
    }


}