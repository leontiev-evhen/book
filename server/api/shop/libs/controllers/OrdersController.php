<?php
namespace controllers;
use \Exception;

class OrdersController extends \core\Controller
{
	protected $model;
	private $headers;
	private $customer;
	private $customer_id;

	protected $rules = [
		'auto_id' 		=> 'integer',
		'user_id' 		=> 'integer',
		'payment_id'	=> 'integer',
		'id_status'		=> 'integer',
		'id'			=> 'integer',
	];


    public function __construct ($params)
    {
        $this->model = new \models\OrdersModel();
        $this->status_model = new \models\StatusOrderModel();
        $this->headers = getallheaders();

        if (!empty($params))
        {
            $param = explode('/', $params);
            $this->id = isset($param[0]) ? (int)$param[0] : null;
            $this->customer = isset($param[1]) ? (string)$param[1] : null;
        }
    }

    public function getOrders ()
    {
    	if (!empty($this->id))
        {       
            return $this->getOrderById();
        }

        if (!empty($this->customer))
        {       
            return $this->getOrdersByCustomer();
        }
        
        $data = $this->model->getAllOrders();
        if (!empty($data))
        {
            return $this->getServerAnswer(200, true, 'orders successfully received', $data);
        }
        return $this->getServerAnswer(500, false, 'Internal Server Error');
    }

    public function getOrderById ()
    {
        $data = $this->model->getOneOrder($this->id);
        $data['status_orders'] = $this->status_model->getAll();

        if (!empty($data))
        {
            return $this->getServerAnswer(200, true, 'order successfully received', $data);
        }
        else
        {
            return $this->getServerAnswer(500, false, 'Internal Server Error');
        }
    }

    public function getOrdersByCustomer ()
    {
    	$data = $this->model->getOrdersByCustomer($this->headers['Authorization']);
    	if ($data)
    	{
    		return $this->getServerAnswer(200, true, 'orders successfully received', $data);
    	}
    	else
    	{
    		return $this->getServerAnswer(500, false, 'Internal Server Error');
    	}
    }

  	public function postOrders ()
	{
		if ($this->validate()) 
		{
			if ($this->model->preOrderAuto($this->data))
			{
				return $this->getServerAnswer(200, true, 'order was added successful');
			}
			else
			{
				return $this->getServerAnswer(500, false, 'Internal Server Error');
			}
		}

		return $this->getServerAnswer(400, false, 'Bad Request');  
	}

	public function putOrders ()
	{
		if ($this->validate()) 
		{
			if ($this->model->updateOrderStatus($this->data, $this->id))
			{
				return $this->getServerAnswer(200, true, 'order status change successful');
			}
			else
			{
				return $this->getServerAnswer(500, false, 'Internal Server Error');
			}
		}
		return $this->getServerAnswer(400, false, 'Bad Request');  
	}
}