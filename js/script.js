
/* =========================
   WELCOME MESSAGE (SESSION BASED)
========================= */
window.addEventListener("load", () => {

    const hasVisited = sessionStorage.getItem("hotelVisited");

    if (!hasVisited) {
        console.log("Welcome to Royal Stay Hotel ✨");
        sessionStorage.setItem("hotelVisited", "true");
    }
});


/* =========================
   HELPERS (REUSABLE VALIDATION)
========================= */
function isEmpty(value) {
    return value.trim() === "";
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function isValidPhone(phone) {
    return /^[0-9]{10,}$/.test(phone);
}


/* =========================
   BOOK NOW BUTTON ACTION
========================= */
function bookNow(roomType) {

    if (!roomType) {
        alert("Please select a room first!");
        return;
    }

    alert(`Great choice! You selected ${roomType}. Proceed to booking form.`);
}


/* =========================
   HOTEL BOOKING FORM VALIDATION
========================= */
function validateForm() {

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        room: document.getElementById("room").value
    };

    // validation logic (clean loop style instead of many ifs)
    for (let key in formData) {

        if (isEmpty(formData[key])) {
            alert(`Please fill the ${key} field.`);
            return false;
        }
    }

    if (!isValidEmail(formData.email)) {
        alert("Enter a valid email address.");
        return false;
    }

    if (!isValidPhone(formData.phone)) {
        alert("Phone number must be at least 10 digits.");
        return false;
    }

    // success flow (simulated booking)
    const bookingID = "HTL" + Math.floor(Math.random() * 10000);

    alert(`Booking Confirmed!\nYour ID: ${bookingID}`);

    console.log("Booking Details:", formData);

    return true;
}


/* =========================
   SMOOTH SCROLL (MODERN STYLE)
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }

    });

});