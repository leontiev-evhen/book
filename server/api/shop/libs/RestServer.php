<?php

class RestServer
{
    private static $type;

    public static function run ()
    {

        $HTTPMethod = $_SERVER['REQUEST_METHOD'];
        $url = $_SERVER['REQUEST_URI'];
        list($s, $a, $d, $db, $class, $params) = array_pad(explode('/', $url, 6), 6, null);


        $className = 'controllers\\'.ucfirst($class).'Controller';

        if (class_exists($className))
        {
           
            self::$type = (preg_match('#(\.[a-z]+)#', $url, $match)) ? $match[0] : TYPE;
         
            $params = ltrim($params, self::$type);
            $controller = new $className($params);

            switch($HTTPMethod)
            {
                case 'GET':
                    self::setMethod($controller, 'get'.ucfirst($class));
                    break;
                case 'DELETE':
                    self::setMethod($controller, 'delete'.ucfirst($class));
                    break;
                case 'POST':
                    self::setMethod($controller, 'post'.ucfirst($class));
                    break;
                case 'PUT':
                    self::setMethod($controller, 'put'.ucfirst($class));
                    break;
                default:
                    return false;
            }
        }
        else
        {
            header('HTTP/1.0 400 Forbidden');
            throw new Exception ('Bad Request');
        }
    }

    private function setMethod($class, $method, $param = false)
    {
        if ( method_exists($class, $method) )
        {
       
            $data = call_user_func([$class, $method]);
            
            \helpers\ConverterHelper::chooseTypeOutput($data, self::$type);
        }
    }
}
