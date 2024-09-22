var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(taBL of tablinks)
    {
        taBL.classList.remove("active-links");
    }
    for(tabc of tabcontent)
        {
            tabc.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab");
}
