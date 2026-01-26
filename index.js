const accordion = document.getElementsByClassName("content-container");
for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {

    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
};

