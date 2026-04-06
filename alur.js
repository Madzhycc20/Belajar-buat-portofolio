function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerText = "Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.";this.reset();
});