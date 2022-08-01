function myFunction() {
  var x = document.getElementById("join");
  var c = document.getElementsByTagName('body')[0];
  c.style.opacity = "90%";
  x.style.visibility = "visible";
  x.style.backgroundColor = "azure";
}
function xfunc(){
  document.getElementById("join").style.visibility="hidden";
  document.getElementsByTagName('body')[0].style.opacity = "100%";
}