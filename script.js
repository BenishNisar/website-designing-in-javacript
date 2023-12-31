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

// Create list items and add anchor links to them
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
let heads=document.createElement("h2");
heads.innerText="بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ";
heads.style.color = "white";
heads.style.textAlign = "center";
heads.onmouseover = () => {
    heads.style.color = "brown";

};
heads.onmouseleave = () => {
   
    heads.style.color = "yellow";
   
};
let head = document.createElement("h3");
head.style.textAlign = "center";

head.style.textAlign = "center";
head.style.transform = "translate(-30px)";


// paragraph
let para = document.createElement("h3");
para.innerText ="بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ الرَّحْمَـٰنِ عَلَّمَ الْقُرْآنَ خَلَقَ الإِنسَانَ عَلَّمَهُ الْبَيَانَ الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ أَلَّا تَطْغَوْا فِي الْمِيزَانِ وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ خَلَقَ الإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ كُلُّ مَنْ عَلَيْهَا فَانٍ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ فَسَأَلِيهِ أَيُّهَا الثَّانِيَ عَشَرَ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ سَنَفْرُغُ لَكُمْ أَيُّهَا الثَّقَلَانِ  بِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ  فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ  فَإِذَا انشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَة"; 
para.style.color = "white";

para.style.textAlign = "center";
para.onmouseover = () => {
    para.style.color = "brown";

};
para.onmouseleave = () => {
   
    para.style.color = "yellow";
   
};

let paraone=document.createElement("h3");
paraone.innerText="قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُلَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ";
paraone.style.color="white";
paraone.style.textAlign = "center";

paraone.onmouseover = () => {
    paraone.style.color = "brown";

};

paraone.onmouseleave = () => {
   
    paraone.style.color = "yellow";
   
};


let img = document.createElement("img");
// image.style.image.url("");
img.src="https://images.squarespace-cdn.com/content/v1/5624f8eee4b0d232542ead5b/1599248398081-G4JEA2024IK8A6BTWGD0/Kaaba+image.jpeg";
img.alt="KHANA KAABA";
img.style.display="flex";
img.style.width="100%";
img.style.marginTop="-32px";

// body

setuppage(bd);

bd.appendChild(nav);
bd.appendChild(img);
bd.appendChild(heads);
bd.appendChild(head);

bd.appendChild(para);

bd.appendChild(paraone);