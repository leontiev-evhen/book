<?php
namespace libs\controllers;
use libs\core\Controller;
use libs\models\OrdersModel;
use libs\models\StatusOrderModel;
use libs\models\CustomersModel;
use \Exception;

class OrdersController extends Controller
{
	protected $model;
	private $headers;
	private $customer;
	private $customer_id;

	protected $rules = [
		'user_id' 		=> 'integer',
		'payment_id'	=> 'integer',
		'id_status'		=> 'integer',
		'id'			=> 'integer',
        'books'         => 'array',
        'sum'           => 'integer'
	];


    public function __construct ($params)
    {
        $this->model = new OrdersModel();
        $this->status_model = new StatusOrderModel();
        $this->model_customer = new CustomersModel();
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
            $customer = $this->model_customer->getCustomerToken($this->headers['Authorization']);
            $this->data->id_customer = $customer['id'];
            
			if ($this->model->createOrder($this->data))
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