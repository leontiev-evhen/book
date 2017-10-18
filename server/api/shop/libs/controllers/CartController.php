<?php
namespace controllers;


class CartController extends \core\Controller
{

    protected $model;
    private $id;
    protected $rules = [
        'id_book' 	  => 'integer',
        'id_customer' => 'integer'
    ];

    public function __construct ($params)
    {
        $this->model = new \models\CartModel();
        
        if ($params)
        {
        	$param = explode('/', $params);
    		$this->id = (int)$param[0];
        }
    }

    public function getCart ()
    {
    	if ($this->id)
    	{
    		$data = $this->model->getAll($this->id);
	    	if ($data)
	        {
	            return $this->getServerAnswer(200, true, 'books were received', $data);
	        }
	        else
	        {
	            return $this->getServerAnswer(200, false, 'some error');
	        }
    	}
    }

    public function postCart ()
    {
    	if ($this->validate()) 
        {
        	if ($count = $this->checkBookCart($this->data->id_book, $this->data->id_customer))
        	{
        		$this->data->count = $count;
        		$data = $this->model->updateCart($this->data);
        	} 
        	else
        	{
        		$data = $this->model->createCart($this->data);
        	}
            
            if ($data)
            {
                return $this->getServerAnswer(200, true, 'book was added to cart successfully');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    public function putCart ()
    { 
    	if ($this->validate() && $this->id) 
        {
            if ($this->model->updateAuthor($this->data, $this->id))
            {
                return $this->getServerAnswer(200, true, 'cart upadate successful');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    public function deleteCart ()
    {
    	if ($this->id)
    	{
    		if ($this->model->deleteAuthor($this->id))
	        {
	            return $this->getServerAnswer(200, true, 'cart delete successful');
	        }
	        else
	        {
	            return $this->getServerAnswer(200, false, 'some error');
	        }
    	}

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    private function checkBookCart ($id_book, $id_customer)
    {
    	$data = $this->model->getAll();
    	
    	foreach ($data as $item)
    	{
    		if ($item['id_book'] == $id_book && $item['id_customer'] == $id_customer)
    		{
    			return $item['count'] + 1;
    		}
    	}
    	return false;
    }
}