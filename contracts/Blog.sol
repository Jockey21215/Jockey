pragma solidity ^0.8.17;

contract Blog {
    address[100] public blogs;

    function buy(uint256 blogId) public {
        blogs[blogId] = msg.sender;
    }

    function getAllBlogs() public view returns (address[100] memory) {
        return blogs;
    }

}