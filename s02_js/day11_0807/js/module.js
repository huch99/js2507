const person = {
    myName : '정희찬',
    age : '27',
    eyeColor : '갈색' 
};

console.log(person.myName);
console.log(person.age);
console.log(person.eyeColor);
console.log('-------------------------------------------------------------------');

// -----------------------------------------------------------------------

const person2 = new Object(
    {
        myName : '정희찬 2세',
        age : '2',
        eyeColor : '검정'
    }
);

console.log(person2.myName);
console.log(person2.age);
console.log(person2.eyeColor);
console.log('-------------------------------------------------------------------');

// -----------------------------------------------------------------------

const person3 = Object.create(person);
person3.myName = '정희찬 3세';
person3.etc = 'etc';

console.log(`${person3.myName}입니다.`);
console.log(person3.etc);
console.log('-------------------------------------------------------------------');

// -----------------------------------------------------------------------

const fruits = [
    ['사과', 300],
    ['배', 500],
    ['바나나', 700]
];

const myObj = Object.fromEntries(fruits);
myObj.etc = 'etc';

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(myObj);
console.log(myObj.사과);
console.log(myObj.배);
console.log(myObj.바나나);
console.log(myObj.etc);
console.log('-------------------------------------------------------------------');

// -----------------------------------------------------------------------

const person4 = {
    myName : '정희찬 4세',
    age : '4',
    eyeColor : '회색'
};

const person4_2 = {
    myName : '정희찬 4-2세',
    age : '4-2',
    eyeColor: '약간 애매한 회색'
};

Object.assign(person4, person4_2);

console.log(person4);
console.log(person4_2); // peoson4의 값이 person4_2의 값으로 덮어씌워짐.
console.log('-------------------------------------------------------------------');

// -----------------------------------------------------------------------

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const me = new Person('희찬', '정', '27', '갈색');

document.writeln(`제 이름은 ${me.lastName}${me.firstName}입니다. <br>`);

// -----------------------------------------------------------------------

function Book(title, sub, price, pages) {
    this.title = title;
    this.sub = sub;
    this.price = price;
    this.pages = pages;
}

const book1 = new Book('react', 'yeonsai', 10000, 300);

document.querySelector('body').innerHTML += `${book1.title}책은 ${book1.sub}출판사의 ${book1.pages}페이지의 책입니다. 가격은 ${book1.price}원 입니다.`;