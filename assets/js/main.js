var minus = document.querySelector("[data-arrow-l]");
var plus = document.querySelector("[data-arrow-r]");
var num = document.querySelector("[data-num]");

var a = 1;

plus.addEventListener("click", ()=> {
    a++;
    a = (a < 10) ? + a : a;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click", ()=> {
    if(a > 1){
        a--;
        a = (a < 10) ? + a : a;
        num.innerText = a;
    };
});