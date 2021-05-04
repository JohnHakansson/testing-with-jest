import * as stack from "./stack.js";

window.onload = function () {
  console.log("done");

  var pop = document.getElementById("pop");
  var push = document.getElementById("push");
  var peek = document.getElementById("peek");
  var dispaly = document.getElementById("top_of_stack");

  pop.addEventListener("click", function () {
    var text = "Tog bort" + stack.pop();
    alert(text);
  });

  push.addEventListener("click", function () {
    var x = prompt("Vad ska vi lägga på stacken?");
    stack.push(x);
    dispaly.innerHTML = x;
  });

  peek.addEventListener("click", function () {
    dispaly.innerHTML = stack.peek();
  });
};
