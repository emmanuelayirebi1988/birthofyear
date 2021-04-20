//alert('Hello')


const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}


function calculate() {

    var number = document.getElementById("number").value;
 


    
    if (number == "" || number == 0) {
        
        window.alert("Please type your correct age!");
        return;
    }
    
    var date = new Date().getFullYear();
    
    var birthyear = date - number;
    
    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your birth year is " + birthyear;
    
}

document.getElementById("year").style.display = "none";

document.getElementById("button").onclick = function() {  calculate(); 
 };

 
function caltheAge(){

  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let show = document.getElementById("show");

  start = new Date(start);
  end = new Date(end);

  let theDiff = Math.abs(end - start);
  let actualAge = Math.floor(theDiff / 3.1536E+10);

 show.innerText = actualAge;
}

document.getElementById("display").onclick = function(){
  caltheAge();
}