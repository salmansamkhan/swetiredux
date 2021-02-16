function greetMsg() {
  //   return "Welcome sweti";
  return () => {
    return "Welcome sweti";
  };
}

let fn = greetMsg;

console.log(fn()());

function greet(funmsg) {
  if (typeof funmsg === "function") {
    console.log(funmsg());
  } else {
    console.log(
      `Please pass funtion. passed type is : ${typeof funmsg}. Thanks for using it`
    );
  }
}

greet(greetMsg);
// greet("salman");
// console.log(fn());

// console.log(greetMsg());
// 0 <= false
// 1 >= true
