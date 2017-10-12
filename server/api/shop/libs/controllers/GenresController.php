<?php
namespace controllers;


class GenresController extends \core\Controller
{

    protected $model;
    private $id;
    protected $rules = [
        'name'      => 'string'
    ];

    public function __construct ($params)
    {
        $this->model = new \models\GenresModel();
        
        if ($params)
        {
        	$param = explode('/', $params);
    		$this->id = (int)$param[0];
        }
    }

    public function getGenres ($params = false)
    {
    	if (!empty($this->id))
    	{    	
    		return $this->getGenreById();
    	}

    	$data = $this->model->getAllGenres();
    	if (!empty($data))
    	{
    		return $this->getServerAnswer(200, true, 'genres successfully received', $data);
    	}
    	return $this->getServerAnswer(500, false, 'Internal Server Error');
    }

    public function getGenreById ()
    {
 		$data = $this->model->getOneGenre($this->id);
		if (!empty($data))
		{
			return $this->getServerAnswer(200, true, 'genre successfully received', $data);
		}
		else
		{
			return $this->getServerAnswer(500, false, 'Internal Server Error');
		}
    }

    public function postGenres ()
    {
    	if ($this->validate()) 
        {
            $data = $this->model->createGenre($this->data);
            if ($data)
            {
                return $this->getServerAnswer(200, true, 'genre create successful');
            }
            else
            {
                return $this->getServerAnswer(200, false, 'some error');
            }
        }

        return $this->getServerAnswer(400, false, 'Bad Request');
    }

    public function putGenres ()
    {
    	if ($this->validate() && $this->id) 
        {
            if ($this->model->updateGenre($this->data, $this->id))
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

    public function deleteGenres ()
    {
    	if ($this->id)
    	{
    		if ($this->model->deleteGenre($this->id))
	        {
	            return $this->getServerAnswer(200, true, 'genre delete successful');
	        }
	        else
	        {
	            return $this->getServerAnswer(200, false, 'some error');
	        }
    	}

        return $this->getServerAnswer(400, false, 'Bad Request');
    }
}