// alert('test');
var Message;
// Message = '안녕하세요? 여러분!';
// alert(Message);
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var myCat = new Cat();
myCat.age = 13;
myCat.weight = 23;
Message = '고양이는 ' + myCat.age + '살이고, 체중은 ' + myCat.weight + 'kg입니다.';
alert(Message);
