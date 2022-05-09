// Follow along with the examples here
function sayHello() {
console.log("Hello");
}
sayHello();

function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip();
  

  function doSomething(thing){
      console.log(thing);
  }
  doSomething("anything");
  doSomething();

  function sayHelloTo(firstName) {
      console.log('Hello, ${firstName}!');
  }
  sayHelloTo("Guadalupe");
  sayHelloTo("Jane");
  sayHelloTo("R2-D2");
  sayHelloTo(1);

  console.log(firstName);
  

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say ("Julio", "hello");
  
  
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");

  

  function add(x,y){
    return x + y;
  }
  console.log(add(80,9000));

  

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));
  

  function say(greeting, firstName){
      console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));
  

  const sum = add(num1, num2);
  const message = `The sum of your numbers is: ${sum}.`;

  const message = `The sum of your number is: ${add(num1, num2)}.`;


function say(greeting, firstName){
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    }
console.log(say("Howdy", "partner"));
