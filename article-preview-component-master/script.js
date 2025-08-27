let share = document.querySelector(".svg");
let firstDiv = document.querySelector(".firstDiv");
share.addEventListener("click", () => {
     let socialLink = document.querySelector(".socialLink");
     if(socialLink.style.display === "none"){
          socialLink.style.display = "flex";
           firstDiv.style.display = "none"; 
     }else{
          socialLink.style.display = "none";
          firstDiv.querySelector(".firstDiv").style.display = "flex";
     }
});