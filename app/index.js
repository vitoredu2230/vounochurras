$(function() {
    jQuery('#header').load('/app/header.html', function() {
        changeLink();
    });

    jQuery('#footer').load('/app/footer.html');
});

function changeLink() {
    let currentPath = window.location.pathname;

    let homeLink = document.getElementById("home");
    let createLink = document.getElementById("create");
    let listLink = document.getElementById("list");

    homeLink.classList.remove("active");
    createLink.classList.remove("active");
    listLink.classList.remove("active");

    if (currentPath.includes("/app/index.html")) {
        homeLink.classList.add("active");
    } else if (currentPath.includes("/app/pages/cadastro/index.html")) {
        createLink.classList.add("active");
    } else if (currentPath.includes("/app/pages/churrascos/index.html")) {
        listLink.classList.add("active");
    }
};