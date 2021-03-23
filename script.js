var wrapper =  document.body.querySelector(".wrapper");
var num = 5
var header = document.createElement("div");
var counter = document.createElement("div");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  var nameEle = document.createElement("h1");
  var ageEle = document.createElement("h1");
  nameEle.innerHTML="Name: " +list[i].name;
  ageEle.innerHTML="Age: "+ list[i].age;
  ele.appendChild(nameEle);
  ele.appendChild(ageEle)
  if(list[i].age>25){
    ele.style.color="green";
  }
  wrapper.appendChild(ele);
}

function number(input, clicked){
  var number_button = document.createElement("div");
  number_button.innerHTML = input;
  if (clicked){
    num=num+1
  }
  wrapper.appendChild(number_button);
}


document.body.querySelector(".numb").addEventListener("click", function(){
  number(num = num + 1);
})

header.innerHTML="Number Counter:";
counter.innerHTML="5";

wrapper.appendChild(header);
wrapper.appendChild(counter);