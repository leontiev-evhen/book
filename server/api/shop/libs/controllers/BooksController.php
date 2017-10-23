<?php
namespace libs\controllers;
use libs\core\Controller;
use libs\models\BooksModel;

class BooksController extends Controller
{

    protected $model;
    private $id;
    private $relation;
    private $category_id;
    protected $rules = [
        'name'          => 'string',
        'description'   => 'string',
        'price'         => 'integer',
        'discaunt'      => 'integer',
        'ids'           => 'array'
    ];

    public function __construct ($params)
    {
        $this->model = new BooksModel();
        
        if ($params)
        {
        	$param = explode('/', $params);
    		$this->id = isset($param[0]) ? (int)$param[0] : null;
            $this->relation = isset($param[1]) ? (string)$param[1] : null;
            $this->category_id = isset($param[2]) ? (int)$param[2] : null;
        }
    }

    public function getBooks ($params = false)
    {
        /*get one book */
    	if (!empty($this->id))
    	{    	
    		return $this->getBookById();
    	}

        /*get relation on the books of authors and genres*/
        if (!empty($this->category_id))
        {       
            return $this->getBooksCategory($this->category_id);
        }

        /*gel all books*/
    	$data = $this->model->getAllBooks();
    	if (!empty($data))
    	{
    		return $this->getServerAnswer(200, true, 'books successfully received', $data);
    	}
    	return $this->getServerAnswer(500, false, 'Internal Server Error');
    }

    /*get one book */
    public function getBookById ()
    {
 		$data = $this->model->getOneBook($this->id);
		if (!empty($data))
		{
			return $this->getServerAnswer(200, true, 'book successfully received', $data);
		}
		else
		{
			return $this->getServerAnswer(500, false, 'Internal Server Error');
		}
    }

    /*get relation on the books of authors and genres*/
    public function getBooksCategory ()
    {
        $data = $this->model->BooksCategory($this->relation, $this->category_id);
        if (!empty($data))
        {
            return $this->getServerAnswer(200, true, 'book successfully received', $data);
        }
        else
        {
            return $this->getServerAnswer(500, false, 'Internal Server Error');
        }
    }

    public function postBooks ()
    {
        if ($this->validate()) 
        {
            if (isset($this->relation))
            {
                if ($this->model->createBook2Relation ($this->data, $this->relation, $this->id))
                {
                    return $this->getServerAnswer(200, true, 'insert book '.$this->relation.' was successful');
                }
                else
                {
                    return $this->getServerAnswer(200, false, 'some error');
                }
            }

            if ($this->model->createBook($this->data))
            {
                return $this->getServerAnswer(200, true, 'book create successful');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(200, false, 'Bad Request');
    }

    public function putBooks ()
    {
    	if ($this->validate() && $this->id) 
        {
            if ($this->model->updateBook($this->data, $this->id))
            {
                return $this->getServerAnswer(200, true, 'book update successful');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    public function deleteBooks ()
    {
    	if ($this->id)
    	{
    		if ($this->model->deleteBook($this->id))
	        {
	            return $this->getServerAnswer(200, true, 'book delete successful');
	        }
	        else
	        {
	            return $this->getServerAnswer(200, false, 'some error');
	        }
    	}

        return $this->getServerAnswer(400, false, 'Bad Request');
    }
}