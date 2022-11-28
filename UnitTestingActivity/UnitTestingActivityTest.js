var utils  = require('course-utilities');
var test = utils.load('./UnitTestingActivity.js', 'test');

describe('TestingActivity', () => {

    test('UpperCase', () => {
        if(Greet.name.toUpperCase === Greet.name){
            expect(Greet(name)).toBe('HELLO ' + name + '!');
        }
        
    });

    test('null', () => {
        if(Greet.name = null){
            expect(Greet(name)).toBe('Hello there!');
        }
            
    });

    test('Greet(name) test', () => {
        it('should be called'), () =>{
            expect(Greet(name)).toBeCalled();
        }   
    });
})
