class Samurai {
    constructor(name) {
      this.name = name;
    }
    hello() {
      alert(this.name);
    }
  }
  let sam = new Samurai('Alex');
  console.log(sam);
  console.log(sam.__proto__) // Samurai.prototype => Object.prototype => Object.prototype => null
  console.log(sam.__proto__.constructor.__proto__) // Samurai.prototype => Function.prototype
  console.log(sam.__proto__.__proto__) // Object.prototype
  console.log(sam.__proto__.__proto__.__proto__ === Function.prototype.__proto__.__proto__) // null === null => true
  console.log(Function.prototype.__proto__ === sam.__proto__.__proto__) // Object.prototype === Object.prorotype => true
  console.log(Function.prototype.__proto__) // Object.prototype
  console.log(Function.prototype.__proto__.__proto__) // null
  console.log(Function.prototype)
  console.log(Samurai.prototype) // function/class Samurai 
  console.log(Samurai.__proto__) // Function.prototype
  console.log(Samurai.prototype.__proto__) // Object.prototype
  console.log((Object.create(null, {})).__proto__) // undefined
  console.log(Object.prototype.__proto__) // null