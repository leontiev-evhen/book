<?php
namespace models;
use \PDO;

class OrdersModel extends \core\Model
{
    private $table = 'orders';

    public function getAllOrders ()
    {
        $sql = $this->select([
                'orders.id',
                'customers.id as id_customer',
                'customers.name as CUSTOMER_NAME',
                'status_order.name as STATUS_NAME',
                'sum',
                'id_status',
                'id_payment',
                'orders.create_at',
            ])
            ->from($this->table)
            ->join('left', 'customers', 'customers.id = orders.id_customer')
            ->join('left', 'status_order', 'status_order.id = orders.id_status')
            ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute())
        {
            return $STH->fetchAll();
        }
    }

    public function getOneOrder ($id)
    {
        $sql = $this->select([
                'orders.id',
                'sum',
                'id_status',
                'id_payment',
                'name as NAME_PAYMENT'])
            ->from($this->table)
            ->join('left', 'payment_system ON payment_system.id = orders.id_payment')
            ->where(['orders.id' => "<:id>"])
            ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        //echo $sql;
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            $data =  $STH->fetch();
        }

        $sql = $this->select([
                'id',
                'name',
                'price'])
            ->from('books')
            ->join('left', 'book2order ON book2order.id_book = books.id')
            ->where(['book2order.id_order' => "<:id>"])
             ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);

        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            $data['books'] = $STH->fetchAll();
        }

        return $data;
    }



	public function preOrderAuto ($data)
    {
        $sql = $this->insert()
            ->from($this->table)
            ->values([
            'auto_id' => '<?>',
            'user_id' => '<?>',
            'payment_id' => '<?>'])
           ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        $STH->bindParam(1, $data->auto_id);
        $STH->bindParam(2, $data->user_id);
        $STH->bindParam(3, $data->payment_id);
        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function getUserOrders ($id)
    {
        $sql = $this->select([
                'model.name',
                'auto.image',
                'orders.id as ID',
                'orders.status'])
            ->from($this->table)
            ->join('left', 'auto', 'auto.id = orders.auto_id')
            ->join('left', 'model', 'model.id = auto.model_id')
            ->where(['orders.user_id' => "<:id>"])
           ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':id' => $id]))
        {
            return $STH->fetchAll();
        }  
        return false;
    }

    public function updateOrderStatus ($data, $id)
    {
        $sql = $this->update()
            ->from($this->table)
            ->set(['id_status' => '<?>',])
            ->where(['id' => '<?>'])
            ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        
        $STH->bindParam(1, $data->id_status);
        $STH->bindParam(2, $id);

        if ($STH->execute())
        {
            return true;
        }  
        return false;
    }

    public function getOrdersByCustomer ($token)
    {
        $sql = $this->select([
                'orders.id',
                'orders.create_at',
                'orders.sum',
                'status_order.name as STATUS_NAME'])
            ->from($this->table)
            ->join('left', 'customers', 'customers.id = orders.id_customer')
            ->join('right', 'status_order', 'status_order.id = orders.id_status')
            ->where(['customers.token' => "<:token>"])
           ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':token' => $token]))
        {
            return $STH->fetchAll();
        }  
    }

    public function getOrdersByCustomerId ($id)
    {
        $sql = $this->select([
                'orders.id',
                'orders.create_at',
                'orders.sum',
                'status_order.name as STATUS_NAME'])
            ->from($this->table)
            ->join('left', 'customers', 'customers.id = orders.id_customer')
            ->join('right', 'status_order', 'status_order.id = orders.id_status')
            ->where(['customers.token' => "<:token>"])
           ->execute();
        $sql = str_replace(["'<", ">'"], '', $sql);
        
        $STH = $this->connect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        if ($STH->execute([':token' => $id]))
        {
            return $STH->fetchAll();
        }  
    }
}