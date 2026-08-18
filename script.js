// ==========================================
// SCROLL REVEAL
// ==========================================

ScrollReveal().reveal(".hero-content", {
    origin: "left",
    distance: "60px",
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal(".hero-image-container", {
    origin: "right",
    distance: "60px",
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal(".section-heading", {
    origin: "bottom",
    distance: "30px",
    duration: 800
});

ScrollReveal().reveal(".about-image", {
    origin: "left",
    distance: "50px",
    duration: 900
});

ScrollReveal().reveal(".about-content", {
    origin: "right",
    distance: "50px",
    duration: 900
});

ScrollReveal().reveal(".skill-card", {
    interval: 100,
    distance: "30px",
    duration: 700
});

ScrollReveal().reveal(".project-card", {
    interval: 150,
    distance: "40px",
    duration: 800
});


// ==========================================
// WHATSAPP
// ==========================================

function sendWhatsApp() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        alert("Please fill all fields.");

        return;
    }

    const text =
        `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const phone = "919121630735";

    const link =
        `https://wa.me/${phone}?text=${text}`;

    window.open(link, "_blank");
}


// ==========================================
// EMAIL FORM
// ==========================================

function handleFormSubmit(event) {

    event.preventDefault();

    const form = event.target;

    const formAction =
        "https://formsubmit.co/valsasaikiran26@gmail.com";

    const formData =
        new FormData(form);

    fetch(formAction, {

        method: "POST",

        body: formData

    })
    .then(() => {

        alert("Email sent successfully!");

        form.reset();

    })
    .catch(() => {

        alert("Failed to send email.");

    });

}
