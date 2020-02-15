/**
 * _property
 * _method
 */
class Human {
  constructor(firstName, latName) {
    this._firstName = firstName;
    this._lastName = latName;
  }
  static someMethod() {
    console.log("has nothing to do with the instance");
  }
  get name() {
    return this._firstName + "" + this._lastName;
  }
  set name(humanName) {
    const [firstNmae = "", lastName = ""] = humanName.split("");
    this._firstName = firstNmae;
    this._lastName = lastName;
  }
  speak(word) {
    console.log(word);
  }
}

const indu = new Human("indu", "mathi");
indu.speak("hello");
indu.name = "new name";
console.log(indu.name);
console.log(indu);
Human.someMethod();
