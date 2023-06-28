class Person {
    constructor (name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveller extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return this.homeLocation;
    }
    getGretting() {
        // console.log(super());
        if(this.hasHomeLocation()) {
            return super.getGretting() + ` I am from ${this.homeLocation}`;
        }
        else {
            return super.getGretting();
        }
    }
} 

const me = new Traveller("Gaurav", 20, "Maur Mandi");
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());

