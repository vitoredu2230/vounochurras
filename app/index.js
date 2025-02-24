$(function() {
    jQuery('#header').load('/app/components/header.html', function() {
        changeLink();
    });

    jQuery('#footer').load('/app/components/footer.html');
});

function changeLink() {
    let currentPath = window.location.pathname;

    let homeLink = document.getElementById("home");
    let createLink = document.getElementById("create");
    let listLink = document.getElementById("list");
    let createUserLink = document.getElementById("create-user");

    homeLink.classList.remove("active");
    createLink.classList.remove("active");
    listLink.classList.remove("active");
    createUserLink.classList.remove("active");

    if (currentPath.includes("/app/index.html")) {
        homeLink.classList.add("active");
    } else if (currentPath.includes("/app/pages/cadastro/index.html")) {
        createLink.classList.add("active");
    } else if (currentPath.includes("/app/pages/churrascos/index.html")) {
        listLink.classList.add("active");
    } else if (currentPath.includes("/app/pages/cadastro-usuarios/index.html")) {
        createUserLink.classList.add("active");
    }
};