const menuDescription = document.getElementById('menu-description');
const lanDescription = document.getElementById('menu-description');

menuDescription.addEventListener('click', function() {
    window.open("/personal_website/inner pages/Menu/index.html", "_self");
});

lanDescription.addEventListener('click', function() {
    window.open("/personal_website/inner pages/Menu/index.html", "_self");
});

const whatsApp = document.getElementById('whatsApp-opener')

whatsApp.addEventListener('click', openWhatsApp);

function openWhatsApp() {
    const telephoneNumber = "+393349447729"

    const link = "https://wa.me/" + telephoneNumber

    window.open(link, "_blank")
}