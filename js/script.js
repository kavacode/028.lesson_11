class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Person name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, yearOfIssue, registrationNumber, owner) {
    this.brand = brand;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.registrationNumber = registrationNumber;

    if (owner.age >= 18) {
      this.owner = owner;
      return;
    }
    console.log("The owner cannot be under 18 years of age!");
  }

  showInfo() {
    console.log(
      `Car brand is: ${this.brand}, model is: ${this.model}, year of issue is: ${this.yearOfIssue}, car license plate: ${this.registrationNumber}`
    );
    if (this.owner) {
      this.owner.showInfo();
    } else {
      console.log("Owner not specified.");
    }
  }
}

const person1 = new Person("Serhii", 30);
const car1 = new Car("Volkswagen", "Jetta", 2022, "BH1234AX", person1);
console.log("Car #1:");
car1.showInfo();
/**
 * Car #1:
 * Car brand is: Volkswagen, model is: Jetta, year of issue is: 2022, car license plate: BH1234AX
 * Person name: Serhii, Age: 30
 **/

const person2 = new Person("Lida", 17);
const car2 = new Car("MINI", "Hatch", 2020, "BH5678KP", person2);
console.log("Car #2:");
car2.showInfo();
/**
 * The owner cannot be under 18 years of age!
 * Car #2:
 * Car brand is: MINI, model is: Hatch, year of issue is: 2020, car license plate: BH5678KP
 * Owner not specified.
 **/
