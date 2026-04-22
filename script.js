// Typing Effect
const text = ["Developer", "Programmer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    if (i < text.length) {

        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } 
        else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerText = current;

        if (j === text[i].length) isDeleting = true;
        if (j === 0) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0; // loop again
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


// Fake Message Send (UI only)
function sendMsg(e) {
    e.preventDefault();

    const msg = document.getElementById("msg");
    msg.innerText = "Message sent successfully! 🚀";

    // small animation effect
    msg.style.opacity = "0";
    setTimeout(() => {
        msg.style.opacity = "1";
    }, 100);
}
