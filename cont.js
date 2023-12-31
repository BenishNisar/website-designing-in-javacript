let bd = document.body;

bd.style.margin = "0px";
bd.style.padding = "0px";

// Functions
function setuppage(what, bg = "black") {
    what.style.background = bg;
    what.style.fontSize = "2em";
}

// Html Elements

function navBar() {
    let val = document.createElement("nav");
    val.style.background = "black";
    
    val.style.width = "100%";
    val.style.height = "fit-content";
    val.style.marginTop = "-36px";

    return val;
}

// its initialize our navbar without let they cannot initialize//
function navitems(text, page) {
    let val = document.createElement("a");
    val.style.textDecoration = "none";
    val.style.marginRight = "25px";
    val.style.padding = "20px";
    val.style.borderRadius = "10px";
    val.style.transition = "1s";

    val.onmouseover = () => {
        val.style.color = "brown";
        val.style.border="1px solid yellow";
    };
    val.onmouseleave = () => {
        val.style.background = "transparent";
        val.style.color = "white";
        val.style.border="1px solid white";
    };

    val.style.textDecoration = "None";
    val.style.color = "white";
    val.style.padding = "20px";

    val.innerText = text;
    val.href = page;
    return val;
}

// navbar
let nav = navBar();

// navbar items with page links
let home = navitems("Home", "index.html");
let about = navitems("About", "about.html");
let contact = navitems("Contact", "contact.html");

// Create an unordered list
let navList = document.createElement("ul");
navList.style.listStyleType = "none";
navList.style.display = "flex";


// / Create list items and add anchor links to them
function addNavItemToNavList(text, page) {
    let listItem = document.createElement("li");
    let anchor = navitems(text, page);
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
}

// Add navbar items to the list
addNavItemToNavList("Home", "index.html");
addNavItemToNavList("About", "about.html");
addNavItemToNavList("Contact", "contact.html");
// Add the list to the navigation bar
nav.appendChild(navList);



setuppage(bd);

bd.appendChild(nav);