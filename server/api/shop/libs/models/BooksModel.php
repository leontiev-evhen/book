<?php
namespace models;
use \PDO;

class BooksModel extends \core\Model
{
    private $table = 'books';

    public function getAllBooks ()
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

    public function getOneBook ($id)
    {
        $sql = $this->select([
                'id as ID',
                'name',
                'description',
                'price',
                'discaunt',
                'create_at'])
            ->from($this->table)
            ->where(['id' => "<:id>"])
			->limit(1)
           	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            $data = $STH->fetch(PDO::FETCH_ASSOC);
        }  


        $sql = $this->select([
                'id',
                'name'])
            ->from('authors')
            ->join('left', 'book2author ON book2author.id_author = authors.id')
            ->where(['id_book' => "<:id>"])
             ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            $data['authors'] = $STH->fetchAll();
        }

        $sql = $this->select([
                'id',
                'name'])
            ->from('genres')
            ->join('left', 'book2genre ON book2genre.id_genre = genres.id')
            ->where(['id_book' => "<:id>"])
             ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            $data['genres'] = $STH->fetchAll();
        }

        return $data;

    }

    public function createBook ($data)
    {
    	$sql = $this->insert()
            ->from($this->table)
            ->values([
            'name' 		  => '<?>',
            'description' => '<?>',
            'price'       => '<?>',
            'discaunt'    => '<?>',
            'create_at'   => '<?>'])
           ->execute();
	        $sql = str_replace(["'<", ">'"], '', $sql);
	        
	        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

	        $STH->bindParam(1, $data->name);
            $STH->bindParam(2, $data->description);
            $STH->bindParam(3, $data->price);
            $STH->bindParam(4, $data->discaunt);
	        $STH->bindParam(5, $this->date);
	        if ($STH->execute())
	        {
	            return true;
	        }
	        return false;
    }

    public function updateBook ($data, $id)
    {
    	$sql = $this->update()
	        ->from($this->table)
	        ->set([
	        	'name' => '<?>',
                'description' => '<?>',
                'price'       => '<?>',
                'discaunt'    => '<?>'])
	        ->where(['id' => '<?>'])
			->limit(1)
	       	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        
        $STH->bindParam(1, $data->name);
        $STH->bindParam(2, $data->description);
        $STH->bindParam(3, $data->price);
        $STH->bindParam(4, $data->discaunt);
        $STH->bindParam(5, $id);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function deleteBook ($id)
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

    public function createBook2Relation ($data, $relation, $id)
    {
        $res = false;
        $sql = $this->delete()
            ->from('book2'.$relation)
            ->where(['id_book' => '<?>'])
            ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

        $STH->bindParam(1, $id);
        $STH->execute();
        if (!empty($data->ids))
        {

            foreach ($data->ids as $value) {
                $sql = $this->insert()
                    ->from('book2'.$relation)
                    ->values([
                        'id_book'    => '<?>',
                        'id_'.$relation  => '<?>'])
                    ->execute();
                $sql = str_replace(["'<", ">'"], '', $sql);
                
                $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

                $STH->bindParam(1, $id);
                $STH->bindParam(2, $value->id);

                if ($STH->execute())
                {
                    $res = true;
                }
            }

        } 
        else
        {
            $res = true;
        }

        return $res;
        
    }

    public function BooksCategory ($relation, $id)
    {
        $sql = $this->select([
                'books.id',
                'books.name',
                'books.description',
                'books.price',
                'books.discaunt'])
            ->from($this->table)
            ->join('left', 'book2'.$relation.' ON book2'.$relation.'.id_book = books.id')
            ->where(['id_'.$relation => "<:id>"])
             ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            return $STH->fetchAll();
        }
    }

}