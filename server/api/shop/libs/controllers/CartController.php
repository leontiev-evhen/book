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

        if ($params)
        {
            $param = explode('/', $params);
            $this->id = (int)$param[0];
        }
		
    }

    public function getCart ()
    {
		$customer = $this->model_customer->getCustomerToken($this->headers['Authorization']);
		
    	if ($customer)
    	{
    		$data['books'] = $this->model->getAll($customer['id']);
			$data['payment_systems'] = $this->model_payment->getAll();
            $data['customer']['discaunt'] = $customer['discaunt'];
			
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

			$customer = $this->model_customer->getCustomerToken($this->headers['Authorization']);
            $this->data->id_customer = $customer['id'];

            if ($this->checkBookCart($this->data->id_book, $this->data->id_customer))
            {
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


    public function deleteCart ()
    {
        $customer = $this->model_customer->getCustomerToken($this->headers['Authorization']);
    	if ($this->id)
    	{
    		if ($this->model->deleteCart ($this->id, $customer['id']))
	        {
	            return $this->getServerAnswer(200, true, 'book delete successful');
	        }
	        else
	        {
	            return $this->getServerAnswer(200, false, 'some error');
	        }
    	}
        else
        {

            if ($this->model->deleteCartCustomer ($customer['id']))
            {
                return $this->getServerAnswer(200, true, 'cart is clear');
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
    	$data = $this->model->getAll($id_customer);
    	
    	foreach ($data as $item)
    	{
    		if ($item['id_book'] == $id_book && $item['id_customer'] == $id_customer)
    		{
    			return true;
    		}
    	}
    	return false;
    }
}