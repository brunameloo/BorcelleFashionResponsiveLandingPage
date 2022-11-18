function ManageDropDownMenu() {

    let navArea = document.querySelector(".navigation-div")
    let closingIcon = document.querySelector(".closing-icon")

    if(navArea.style.visibility == "hidden") {
        navArea.style.visibility = "visible"
    } else {
        navArea.style.visibility = "hidden"
    }
    
    if(closingIcon.style.visibility == "hidden") {
        closingIcon.style.visibility = "visible"
    } else {
        closingIcon.style.visibility = "hidden"
    }    
   
}

let mediaQuery = window.matchMedia("(min-width: 769px)")

function handleNavBarVisibility(e) {
    
    let navArea = document.querySelector(".navigation-div")
    let closingIcon = document.querySelector(".closing-icon")
    
    if(e.matches) {
        navArea.style.visibility = "visible" 
        closingIcon.style.visibility = "hidden"
    } 

}

mediaQuery.addListener(handleNavBarVisibility)

handleNavBarVisibility(mediaQuery)

let mediaQuery02 = window.matchMedia("(max-width: 769px)")

function handleClosingIconVisibility(e) {
    let navArea = document.querySelector(".navigation-div")
    let closingIcon = document.querySelector(".closing-icon")

    if(e.matches) {
        if(navArea.style.visibility = "hidden") {
            closingIcon.style.visibility = "hidden"
        } else {
            closingIcon.style.visibility = "visible"
        }
    }
}

mediaQuery02.addListener(handleClosingIconVisibility)

handleClosingIconVisibility(mediaQuery02)

