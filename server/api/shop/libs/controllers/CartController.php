<?php
namespace controllers;


class CartController extends \core\Controller
{

    protected $model;
	protected $model_customer;
    private $id;
    protected $rules = [
        'id_book' 	  => 'integer',
        'count' => 'integer'
    ];

    public function __construct ($params)
    {
        $this->model = new \models\CartModel();
        $this->model_customer = new \models\CustomersModel();
		$this->model_payment = new \models\PaymentSystemModel();
		$this->headers = getallheaders();
		
    }

    public function getCart ()
    {
		$id = $this->model_customer->getCustomerToken($this->headers['Authorization']);
		
    	if ($id)
    	{
    		$data = $this->model->getAll($id);
			$data['payment_systems'] = $this->model_payment->getAll();
			
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
			$data->id = $this->model_customer->getCustomerToken($this->headers['Authorization']);
		
        	$data = $this->model->createCart($this->data);

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