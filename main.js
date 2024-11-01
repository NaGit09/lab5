const tabContents = document.getElementsByClassName("tabcontent");
const tablinks = document.getElementsByClassName("tablinks");
function openCity(num) {
    for (let i = 0 ; i < tabContents.length ;  i ++) {
        tabContents[i].style.display = "none";
    }
    tabContents[num].style.display = "block";
 
  }
  openCity( 2)