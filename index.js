const accordion = document.getElementsByClassName("question");
let i;

for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {

    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
};









