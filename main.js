var sliderY = document.querySelector("#rotationY");
var sliderX = document.querySelector("#rotationX");
var cube = document.querySelector(".cube");
sliderY.addEventListener('input', function(){
    cube.style.transform = "rotateX("+sliderX.value+"deg) rotateY("+sliderY.value+"deg)";
});

sliderX.addEventListener('input', function(){
    cube.style.transform = "rotateX("+sliderX.value+"deg) rotateY("+sliderY.value+"deg)";
});

