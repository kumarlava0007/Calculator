function updateScreen(value){
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + value;
}

function equate(){
    document.getElementById("screen").innerHTML = eval(document.getElementById("screen").innerHTML);
}

function reset(){
  document.getElementById("screen").innerHTML = ""
}

function back(){
  let res = document.getElementById("screen").innerHTML;
  res = res.substring(0, res.length-1);
  document.getElementById("screen").innerHTML = res;
}
