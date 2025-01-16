function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Form Validation
function validateInputs(params) {
    const namePattern = /^[a-zA-Z\s.'-]{2,}$/;
    if (!namePattern.test(params.name)) {
        alert("Please enter a valid name (at least 2 characters, letters, spaces, and punctuation only).");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(params.email)) {
        alert("Please enter a valid email address.(abc@mail.com)");
        return false;
    }

    if (params.message.trim().length < 10) {
        alert("Your message should be at least 10 characters long.");
        return false;
    }

    return true;
}

function sendMail() {
    const params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    if (!validateInputs(params)) {
        return;
    }

    const serviceID = "service_e7yjopi";
    const templateID = "template_t3qts18";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully to Sanjay!");
        })
        .catch((err) => {
            console.error(err);
            alert("Failed to send your message. Please try again later.");
        });
}