<?php
namespace libs\models;
use libs\core\Model;
use \PDO;

class PaymentSystemModel extends Model
{
    private $table = 'payment_system';
    public function getAll ()
    {
        $sql = $this->select([
                'id',
     			'name'
            ])
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
}
