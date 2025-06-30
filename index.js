const topDiff = 60;
const leftDiff = 80;

function normalizeHorizontal(left) {
    if(left<0){
        left += 2*leftDiff;
    }
    if(left+60>window.innerWidth) {
        left -= 2*leftDiff;
    }
    return left;
}


function normalizeVertical(top) {
    if(top<0){
        top += 2*topDiff;
    }
    if(top+60>window.innerHeight) {
        top -= 2*topDiff;
    }
    return top;
}

window.addEventListener('load', function () {
    const no = document.getElementById("no");
    const initNoPosition = no.getBoundingClientRect();
    var top = initNoPosition.top;
    var left = initNoPosition.left;
    no.addEventListener('mouseover',()=>{
        console.log("mouse over")
        console.log(no.style);

        if(Math.random()>0.5){
            top += topDiff;
        }
        else{
            top -= topDiff;
        }
        top = normalizeVertical(top);

        if(Math.random()>0.5){
            left += leftDiff;
        }
        else{
            left -= leftDiff;
        }
        left = normalizeHorizontal(left);

        console.log(top,left);
        no.style.top = top+"px";
        no.style.left = left+"px";
    })
});


window.addEventListener('load', function () {
    const yes = document.getElementById("yes");
    yes.addEventListener("click",()=>{
        const outerDiv = document.getElementById("out");
        outerDiv.innerHTML = "";
        outerDiv.innerHTML = "<div id=\"heart\"></div>";
    })
});
