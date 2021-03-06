<?php
namespace libs\models;
use libs\core\Model;
use \PDO;

class GenresModel extends Model
{
    private $table = 'genres';

    public function getAllGenres ()
    {
        $sql = $this->select([
                'id',
                'name',
                'create_at'])
            ->from($this->table)
           	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute())
        {
            return $STH->fetchAll();
        }  
        return false;
    }

    public function getOneGenre ($id)
    {
        $sql = $this->select([
                'id',
                'name',
                'create_at'])
            ->from($this->table)
            ->where(['id' => "<:id>"])
			->limit(1)
           	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            return $STH->fetch(PDO::FETCH_ASSOC);
        }  
        return false;
    }

    public function createGenre ($data)
    {
    	$sql = $this->insert()
            ->from($this->table)
            ->values([
            'name' 		 => '<?>',
            'create_at' 	 => '<?>'])
           ->execute();
	        $sql = str_replace(["'<", ">'"], '', $sql);
	        
	        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

	        $STH->bindParam(1, $data->name);
	        $STH->bindParam(2, $this->date);
	        if ($STH->execute())
	        {
	            return true;
	        }
	        return false;
    }

    public function updateGenre ($data, $id)
    {
    	$sql = $this->update()
	        ->from($this->table)
	        ->set([
	        	'name' => '<?>'])
	        ->where(['id' => '<?>'])
			->limit(1)
	       	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        
        $STH->bindParam(1, $data->name);
        $STH->bindParam(2, $id);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function deleteGenre ($id)
    {
    	$sql = $this->delete()
	        ->from($this->table)
	        ->where(['id' => '<?>'])
			->limit(1)
	       	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

        $STH->bindParam(1, $id);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

}