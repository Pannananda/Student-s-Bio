const img = document.getElementById ("mybio");
img.addEventListener("click", changeShape);

const shapeArr =[
    // Star
    "50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%",


    //paralleogon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",

    //Circle
    "50% at 50% 50%",

     //Triagle
     "50% 0%, 0% 100%, 100% 100%",

    // Pentagon
    "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%",

];



function changeShape () {
    const randomShape=Math.floor(Math.random()* shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentCliipPath = getComputedStyle(img).getPropertyValue("--shape");

    //img.style.setProperty("--shape," shapeArr[randomShape]);
    if(currentCliipPath !== newClipPath) {
        img.style.setProperty("--shape", newClipPath);

    }else {
        img.style.setProperty("--shape", shapeArr[randomShape + 1]);
        console.log(shapeArr[randomShape + 1]);
    }
}

// }else () {img.style.setProperty("--shape", shapeArr[randomShape + 1])};
//  console.log(s)