let funStyle = localStorage.getItem("funStyle");
const pageStyleToggle = document.querySelector(".page-style-toggle");

const enableFunStyle = () => {
    document.body.classList.add("funStyle");
    
    localStorage.setItem("funStyle", "enabled");
};

const disableFunStyle = () => {
    document.body.classList.remove("funStyle");
    
    localStorage.setItem("funStyle", null);
};

if (funStyle === "enabled") {
    enableFunStyle();
}

pageStyleToggle.addEventListener("click", () => {
    funStyle = localStorage.getItem("funStyle")
    if(funStyle !== "enabled") {
        enableFunStyle();
        console.log(funStyle);
    }
    else {
        disableFunStyle();
        console.log(funStyle);
    }
} );