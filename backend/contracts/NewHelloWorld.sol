pragma solidity ^0.5.16;

contract NewHelloWorld{

    string message;

    function getMessage() public view returns (string memory){
        return (message);
    }

    function setMessage(string memory _message) public returns (bool){
        message = _message;
        return true;
    }

    function sumTwoNumbers(uint first, uint second) public pure returns (uint value ){
        return first + second;
    }

    function MultiplyTwoNumbers(uint first, uint second) public pure returns (uint value ){
        return first * second;
    }

}