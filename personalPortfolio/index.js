const navIcons = document.querySelector(".icons");
const navMob = document.querySelector(".navMob");
const menuIcon = document.querySelector(".bars");
const closeIcon = document.querySelector(".times");


const toggleFunction = () =>{
    if(navMob.classList.contains("active")){
        navMob.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
    else{
        navMob.classList.add("active");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}


navIcons.addEventListener("click", toggleFunction);