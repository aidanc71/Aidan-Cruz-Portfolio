function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function destroyIncorrectPhone()
{
    const bottomMobilePhoneIcon = document.getElementById("bottom-mobile-phone")
    const bottomDesktopPhoneIcon = document.getElementById("bottom-desktop-phone")
    const mobilePhoneIcon = document.getElementById("mobile-phone")
    const desktopPhoneIcon = document.getElementById("desktop-phone")
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    {
        mobilePhoneIcon.classList.remove("disabled");

        bottomMobilePhoneIcon.classList.remove("disabled");
        bottomMobilePhoneIcon.classList.add("contact-info-container");
    }
    else
    {
        desktopPhoneIcon.classList.remove("disabled"); 

        bottomDesktopPhoneIcon.classList.remove("disabled");
        bottomDesktopPhoneIcon.classList.add("contact-info-container");
    }
}

function copyNumber()
{
    alert("Copied Number +1 913-226-3901 To Clipboard!")
    navigator.clipboard.writeText("+1 913-226-3901")
}