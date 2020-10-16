function signin(){
  document.getElementById("signin").style.display="block";
}

function collapsenav(){
  var x = document.getElementById("navright");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function openAdminNav(adminblock) {
  var i;
  var x = document.getElementsByClassName("adminnav");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  document.getElementById(adminblock).style.display = "block";
}
