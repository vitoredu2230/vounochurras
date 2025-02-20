document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault();
    
    jQuery('.success-message').slideDown(2000, function() {
        let ModalElement = document.getElementById('information-modal');
        let ModalInstance = new bootstrap.Modal(ModalElement);

        ModalElement.addEventListener('hidden.bs.modal', function () {
            jQuery('.success-message').slideUp(2000);
        });
        ModalInstance.show();

        ModalElement.addEventListener('show-bs-modal', function() {
            document.getElementById("information-modal").removeAttribute("aria-hidden");
        })


        jQuery('.register-text').fadeIn(2000);
    });
}