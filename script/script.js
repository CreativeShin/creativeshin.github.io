

var a = document.querySelectorAll('a');
var slide = document.querySelectorAll('.slide');
a[0].addEventListener("mouseenter", function(){
  slide[0].style.width = "70px";
});
a[0].addEventListener("mouseleave", function(){
  slide[0].style.width = "0";
});
a[1].addEventListener("mouseenter", function(){
  slide[1].style.width = "125px";
});
a[1].addEventListener("mouseleave", function(){
  slide[1].style.width = "0";
});
a[2].addEventListener("mouseenter", function(){
  slide[2].style.width = "70px";
});
a[2].addEventListener("mouseleave", function(){
  slide[2].style.width = "0";
});
