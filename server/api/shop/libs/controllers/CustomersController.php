<?php
namespace libs\controllers;
use libs\core\Controller;
use libs\models\CustomersModel;

class CustomersController extends Controller
{

    protected $model;
    protected $orders_model;
    private $headers;

    protected $rules = [
        'name'      => 'string',
        'email'     => 'string',
        'password'  => 'string',
        'discaunt'  => 'integer',
        'status'    => 'integer',
    ];

    public function __construct ($params)
    {
        $this->model = new CustomersModel();

        $this->headers = getallheaders();

        if ($params)
        {
            $param = explode('/', $params);
            $this->id = (int)$param[0];
        }
    }

    public function getCustomers ()
    {
        if (!empty($this->id))
        {       
            return $this->getCustomerById();
        }

        $data = $this->model->getAllCustomers();
        if (!empty($data))
        {
            return $this->getServerAnswer(200, true, 'customers successfully received', $data);
        }
        return $this->getServerAnswer(500, false, 'Internal Server Error');
    }

    public function getCustomerById ()
    {
        $data = $this->model->getOneCustomer($this->id);
        if (!empty($data))
        {
            return $this->getServerAnswer(200, true, 'genre successfully received', $data);
        }
        else
        {
            return $this->getServerAnswer(500, false, 'Internal Server Error');
        }
    }

    public function postCustomers () 
    {
        if ($this->validate()) 
        {
            $password =  base64_decode($this->data->password);
            $this->data->password = password_hash($password, PASSWORD_DEFAULT);
   
            $aData = $this->model->createCustomer($this->data);
            if ($aData['result'])
            {
                return $this->getServerAnswer(200, $aData['result'], $aData['message']);
            }
            else
            {
                return $this->getServerAnswer(200, $aData['result'], $aData['message']);
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    public function putCustomers ()
    {
        if ($this->validate() && $this->id) 
        {
            if ($this->model->updateCustomer($this->data, $this->id))
            {
                return $this->getServerAnswer(200, true, 'genre update successful');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

}