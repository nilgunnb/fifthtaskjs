 Area = (x) => {
     if (isNaN(x)){
        console.log("not a number.")
     }
     else if (x<0){
       console.log("radius can't be a negative number")
     }
     else{
        console.log(Math.PI.toFixed(2) * Math.pow(x,2))
     }
}

Area(-5)

SmallestElement = (x) => {
  if(Array.isArray(x)){
    Math.min(x)
  }
  else{
    console.log("not an array")
  }
}

let aray = [9,5,6,10,2]

SmallestElement(aray)

class Person{
    constructor (age, race, weight) {
        this.age = age;
        this.race = race;
        this.weight = weight;
    }

    getInfo(){
        return `age: ${this.age}, race: ${this.race}, weight: ${this.weight}`
    }
}

class Student extends Person{
    #progress;
    constructor(age, race, weight, grade){
        super(age, race, weight);
        this.grade = grade;
    }

    getProgress (){
        return this.#progress;
    }
    
    setProgress (progress){
        this.#progress = progress;
    }
}