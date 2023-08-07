function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberPos = member.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (memberPos < screenPos) {
        member.classList.add("member-appear");
        skills.classList.add("skills-appear");
    }
}