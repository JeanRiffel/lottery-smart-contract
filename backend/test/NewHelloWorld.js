const { assert } = require("chai");

const NewHelloWorld = artifacts.require("NewHelloWorld");

require("chai")
    .use(require("chai-as-promised"))
    .should()



contract('NewHelloWorld', ()=>{
    before(async ()=> {
        newHelloWorld = await NewHelloWorld.deployed();
    });

    describe('deployment',()=>{
        it('deploys', async()=>{

            const address = await NewHelloWorld.address;

            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);

        });
    });

    describe('set message', ()=>{

        it('should be equal', async ()=>{

            const message = 'hi is working';

            await newHelloWorld.setMessage(message);

            const getMessage = await newHelloWorld.getMessage();

            assert.equal(getMessage, message);
        });

    });
});