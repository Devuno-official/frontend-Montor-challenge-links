let share = document.querySelectorAll(".svg");
let firstDiv = document.querySelector(".firstDiv");
share.forEach((ele)=>{
     ele.addEventListener("click", () => {
     let socialLink = document.querySelector(".socialLink");
     if(socialLink.style.display === "none" && firstDiv.style.display === "flex"){
          socialLink.style.display = "flex";
           firstDiv.style.display = "none"; 
     }else{
          socialLink.style.display = "none";
          firstDiv.style.display = "flex";
     }
})});