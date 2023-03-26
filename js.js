// console.log("hello")

// let btn = document.querySelector("#btn")
// btn.addEventListener("click", function()
// {
//     window.scroll(0,1180);
    
// });


// var elements = document.getElementsByClassName("gotoprd")

// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click",function(){
//     window.scroll(0,1670)
//     });
    
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }