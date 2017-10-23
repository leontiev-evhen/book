<?php
namespace libs\tests;
use libs\helpers\ConverterHelper;
use PHPUnit\Framework\TestCase;
use PHPUnit\DbUnit\TestCaseTrait;

class ConverterHelperTest extends TestCase
{
    private $obj;
    public function setup ()
    {
        $this->obj = new ConverterHelper();
    }

    public function invokeMethod(&$object, $methodName, $parameters = '')
    {
        $reflection = new \ReflectionClass(get_class($object));
        $method = $reflection->getMethod($methodName);
        $method->setAccessible(true);

        return $method->invokeArgs($object, $parameters);
    }

    /**
     *  @dataProvider additionProvider
     */
    public function testConvertJSON ($data)
    {
        $res = $this->invokeMethod($this->obj, 'convertJSON', $data);
        $this->assertTrue(is_string($res));
    }
    public function additionProvider ()
    {
        return [
            [['test']],
            ];
    }
}
