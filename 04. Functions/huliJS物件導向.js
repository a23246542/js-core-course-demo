
// 原本huli介紹的物件導向 範例可以打

// 物件導向一定有個對象去call 而不會去自己call

// ========================================
class Dog{
    // 建構子 很適合做初始化
    constructor(name){
        this.name =name
    }

    // setter
    setName(name){
        this.name=name;
    }
    // getter
    getName(){
        return this.name;
    }

    sayHello(){
        console.log("hello,my name is"+this.name);
        
    }
}

// class只是設計圖 要真的new出一個物件
var dog = new Dog() //new instance 
dog.setName("afu");
dog.sayHello();

        // 因為沒有辦法直接去存取
        // 不建議
        console.log(dog.name);
        // 建議
        console.log(dog.getName());
        // 所以好的開發習慣都會用getter跟setter去做處理

var dog2 = new Dog("afufu");
dog2.sayHello();