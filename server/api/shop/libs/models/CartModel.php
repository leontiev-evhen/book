<?php
namespace models;
use \PDO;

class CartModel extends \core\Model
{
    private $table = 'cart';

    public function getAll ($id)
    {
        $sql = $this->select([
                'books.id',
                'books.name',
                'books.price',
                'books.discaunt',
                'cart.count',
                'cart.id_book',
                'cart.id_customer'])
            ->from($this->table)
            ->join('right', 'books', 'books.id = cart.id_book')
            ->where(['id_customer' => '<?>'])
           	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        $STH->bindParam(1, $id);
        if ($STH->execute())
        {
            return $STH->fetchAll();
        }  
        return false;
    }

    public function createCart ($data)
    {
    	$sql = $this->insert()
            ->from($this->table)
            ->values([
            'id_book' 		=> '<?>',
            'id_customer' 	=> '<?>',
            'count'         => '<?>',
            'create_at'     => '<?>'])
           ->execute();
	        $sql = str_replace(["'<", ">'"], '', $sql);
	        
	        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
 
	        $STH->bindParam(1, $data->id_book);
	        $STH->bindParam(2, $data->id_customer);
            $STH->bindParam(3, $data->count);
            $STH->bindParam(4, $this->date);
	        if ($STH->execute())
	        {
	            return true;
	        }
	        return false;
    }

    public function updateCart ($data)
    {
    	$sql = $this->update()
	        ->from($this->table)
	        ->set([
	        	'count' => '<?>'])
	        ->where(['id_book' => '<?>'])
            ->where(['id_customer' => '<?>'], 'and')
	       	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        
        $STH->bindParam(1, $data->count);
        $STH->bindParam(2, $data->id_book);
        $STH->bindParam(3, $data->id_customer);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function deleteCart ($id_book, $id_customer)
    {
    	$sql = $this->delete()
	        ->from($this->table)
	        ->where(['id_book' => '<?>'])
            ->where(['id_customer' => '<?>'], 'and')
            ->limit(1)
	       	->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

        $STH->bindParam(1, $id_book);
        $STH->bindParam(2, $id_customer);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function deleteCartCustomer ($id_customer)
    {
        $sql = $this->delete()
            ->from($this->table)
            ->where(['id_customer' => '<?>'])
            ->limit(1)
            ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

        $STH->bindParam(1, $id_customer);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

}