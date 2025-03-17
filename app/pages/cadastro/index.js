let $$ = function(id) {
    return document.getElementById(id);
}

habilitarBotao();

document.getElementById('register-form').onsubmit = function (event) {
        event.preventDefault();

        if(validarCampos()) {
            save();
            atualizarModal();
        }

        if(!formularioEValido()) {
            alertify.error('Por favor, verifique seus campos destacados!');
            console.log("Erro!");
            return false;
        }

        const admin = lerDadosFormulárioCriarAdmin();

        const churras = lerDadosFormulárioCriarChurras();

        const inclusos = lerItensInclusos();

        let list = new List(churras, admin, inclusos);

        salvarListaLocal(list);
        
        jQuery('.success-message').slideDown(2000, function() {
            let ModalElement = document.getElementById('information-modal');
            let ModalInstance = new bootstrap.Modal(ModalElement);

            ModalElement.addEventListener('hidden.bs.modal', function () {
                jQuery('.success-message').slideUp(2000);
            });
            ModalInstance.show();

            ModalElement.addEventListener('show.bs.modal', function() {
                document.getElementById("information-modal").removeAttribute("aria-hidden");
            })


            jQuery('.register-text').fadeIn(2000);
        });
}

window.onload = function () {
    jQuery(function() {
        jQuery(inputCPFAdmin).mask('000.000.000-00', { reverse: false });
    })
    console.log("Restaurando um objeto JSON do LocalStorage.");
    let inputNameBarbecue = $$("inputNameBarbecue");
    inputNameBarbecue.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputDateBarbecue = $$("inputDateBarbecue");
    inputDateBarbecue.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputAddressBarbecue = $$("inputAddressBarbecue");
    inputAddressBarbecue.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputTimeBarbecue = $$("inputTimeBarbecue");
    inputTimeBarbecue.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputDurationBarbecue = $$("inputDurationBarbecue");
    inputDurationBarbecue.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputNumberGuests = $$("inputNumberGuests");
    inputNumberGuests.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputMeatKG = $$("inputMeatKG");
    inputMeatKG.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputNameAdmin = $$("inputNameAdmin");
    inputNameAdmin.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputBirthdayAdmin = $$("inputBirthdayAdmin");
    inputBirthdayAdmin.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputCPFAdmin = $$("inputCPFAdmin");
    inputCPFAdmin.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputEmailAdmin = $$("inputEmailAdmin");
    inputEmailAdmin.addEventListener("input", function() {
        this.setCustomValidity("");
    })
    let inputGender = $$("input-gender-masculine").checked
    ? Gender.MALE
    : Gender.FEMALE;
    let barbecueObject = JSON.parse(localStorage.getItem("barbecueData"));
    inputNameBarbecue.value = barbecueObject.nameBarbecue;
    inputDateBarbecue.value = barbecueObject.dateBarbecue;
    inputAddressBarbecue.value = barbecueObject.addressBarbecue;
    inputTimeBarbecue.value = barbecueObject.timeBarbecue;
    inputDurationBarbecue.value = barbecueObject.durationBarbecue;
    inputNumberGuests.value = barbecueObject.numberGuests;
    inputMeatKG.value = barbecueObject.meatKG;
    inputNameAdmin.value = barbecueObject.nameAdmin;
    inputBirthdayAdmin.value = barbecueObject.birthdayAdmin;
    inputCPFAdmin.value = barbecueObject.CPFAdmin;
    inputEmailAdmin.value = barbecueObject.emailAdmin;
    inputGender.value = barbecueObject.gender;
}
    
function validarCampos() {
    let nameBarbecue = $$("inputNameBarbecue").value;
    let dateBarbecue = new Date($$("inputDateBarbecue").value + 'UTC-3');
    let todayDate = new Date();
    let addressBarbecue = $$("inputAddressBarbecue").value;
    let timeBarbecue = $$("inputTimeBarbecue").value;
    let minTime = '09:00';
    let maxTime = '21:00';
    let durationBarbecue = $$("inputDurationBarbecue").value;
    let maxDuration = '06:00';
    let numberGuests = $$("inputNumberGuests").value;
    let meatKG = $$("inputMeatKG").value;
    const checkboxes = document.querySelectorAll('input[name="includes-group"]');
    const includesError = document.getElementById('includes-error');
    let atLeastOneChecked = false;
    let nameAdmin = $$("inputNameAdmin").value;
    let birthdayAdmin = new Date($$("inputBirthdayAdmin").value + 'UTC-3');
    let maxBirthday = new Date("2007-01-01");
    let minBirthday = new Date("1900-01-01");
    let CPFAdmin = $$("inputCPFAdmin").value;
    let emailAdmin = $$("inputEmailAdmin").value;

    if ((nameBarbecue == undefined) || nameBarbecue == "") {
        $$("inputNameBarbecue").setCustomValidity("Erro! Por favor, insira um nome de churrasco válido!");
        return false;
    } else if((dateBarbecue == "Invalid Date") || (dateBarbecue < todayDate)) {
        $$("inputDateBarbecue").setCustomValidity("Erro! Por favor, insira uma data maior que a data de hoje!");
        return false;
    } else if((addressBarbecue == undefined) || (addressBarbecue == "")) {
        $$("inputAddressBarbecue").setCustomValidity("Erro! Por favor, insira um endereço válido!");
        return false;
    } 
    else if((timeBarbecue < minTime) || (timeBarbecue > maxTime)) {
        $$("inputTimeBarbecue").setCustomValidity("Erro! Por favor, insira uma hora válida!");
        return false;
    } 
    else if((durationBarbecue == "Invalid Time") || (durationBarbecue > maxDuration)) {
        $$("inputTimeBarbecue").setCustomValidity("Erro! Por favor, insira uma hora válida!");
        return false;
    } 
    else if((numberGuests == undefined) || (numberGuests == "")) {
        $$("inputNumberGuests").setCustomValidity("Erro! Por favor insira pelo menos 3 convidados");
    } else if((meatKG == undefined) || (meatKG == "")) {
        $$("inputMeatKG").setCustomValidity("Erro! Por favor, insira a quantidade em kg de carne");
    } else if ((nameAdmin == undefined) || nameAdmin == "") {
        $$("inputNameAdmin").setCustomValidity("Erro! Por favor, insira um nome de churrasco válido!");
        return false;
    } else if ((birthdayAdmin == "Invalid Date") || (birthdayAdmin > maxBirthday) || (birthdayAdmin < minBirthday)) {
        $$("inputBirthdayAdmin").setCustomValidity("Erro! Por favor, insira uma data de nascimento válido!");
        return false;
    } else if((CPFAdmin == undefined) || (CPFAdmin == "")) {
        $$("cpf").setCustomValidity("Erro! Por favor, insira um cpf válido!");
        return false;
    } else if((emailAdmin == undefined) || emailAdmin == "") {
        $$("email").setCustomValidity("Erro! Por favor, insira um email válido!");
        return false;
    }
    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            atLeastOneChecked = true;
            break;
        }
    }

    if (!atLeastOneChecked) {
        includesError.style.display = 'block';
        includesError.textContent = 'Erro! Por favor insira pelo menos um item incluso no seu churrasco!';
        

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].classList.add('is-invalid');
            checkboxes[i].classList.remove('is-valid');
        };

        return false;
    } else {
        includesError.style.display = 'none';

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].classList.add('is-valid');
            checkboxes[i].classList.remove('is-invalid');
        };
    }

    return true;
}

function validarInclusos() {
    const includesCheckboxes = document.querySelectorAll('[name="includes-group"]');

    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener('change', function() {
        const isAtLeastOneIncludeChecked = [...includesCheckboxes].some(
            (checkbox) => checkbox.checked
        );

        if(isAtLeastOneIncludeChecked) {
            for (let i = 0; i < includesCheckboxes.length; i++) {
                includesCheckboxes[i].setCustomValidity('');
            }
        } else {
            for (let i = 0; i < includesCheckboxes.length; i++) {
                includesCheckboxes[i].setCustomValidity('Por favor, marque ao menos um item incluso no churrasco!')
            }
        }
    })

    return true;
}

function formularioEValido() {
    return validarCampos() && validarInclusos();
}

function lerDadosFormulárioCriarChurras() {
    let nameBarbecue = $$("inputNameBarbecue").value;
    let dateBarbecue = $$("inputDateBarbecue").value;
    let addressBarbecue = $$("inputAddressBarbecue").value;
    let timeBarbecue = $$("inputTimeBarbecue").value;
    let durationBarbecue = $$("inputDurationBarbecue").value;
    let numberGuests = $$("inputNumberGuests").value;
    let meatKG = $$("inputMeatKG").value;

    return new Barbecue(nameBarbecue, dateBarbecue, addressBarbecue, timeBarbecue, durationBarbecue, numberGuests, meatKG);
}

function lerDadosFormulárioCriarAdmin() {
    let nameAdmin = $$("inputNameAdmin").value;
    let birthdayAdmin = new Date($$("inputBirthdayAdmin").value + 'UTC-3');
    let CPFAdmin = $$("inputCPFAdmin").value;
    let emailAdmin = $$("inputEmailAdmin").value;

    return new Admin(nameAdmin, birthdayAdmin, CPFAdmin, emailAdmin);
}

function lerItensInclusos() {
    let itemsInclusos = [];
    for(let item of document.getElementsByName('includes-group')) {
        if(item.checked) {
            itemsInclusos.push(item.value);
        }
    }

    return itemsInclusos;
}

function save() {
    let inputNameBarbecue = $$("inputNameBarbecue");
    let inputDateBarbecue = $$("inputDateBarbecue");
    let inputAddressBarbecue = $$("inputAddressBarbecue");
    let inputTimeBarbecue = $$("inputTimeBarbecue");
    let inputDurationBarbecue = $$("inputDurationBarbecue");
    let inputNumberGuests = $$("inputNumberGuests");
    let inputMeatKG = $$("inputMeatKG");
    let inputNameAdmin = $$("inputNameAdmin");
    let inputBirthdayAdmin = $$("inputBirthdayAdmin");
    let inputCPFAdmin = $$("inputCPFAdmin");
    let inputEmailAdmin = $$("inputEmailAdmin");
    let inputGender = $$("input-gender-masculine").checked
    ? Gender.MALE
    : Gender.FEMALE;
    let administrador = new Admin(inputNameAdmin.value, inputBirthdayAdmin, inputCPFAdmin, inputEmailAdmin);
    let age = administrador.getIdade();
    let includes = [];
    for (let elem of document.getElementsByName('includes-group')) {
        if (elem.checked) {
            includes.push(elem.value);
        }
    }

    const barbecueData = {};

    barbecueData.nameBarbecue = inputNameBarbecue.value;
    barbecueData.dateBarbecue = inputDateBarbecue.value;
    barbecueData.addressBarbecue = inputAddressBarbecue.value;
    barbecueData.timeBarbecue = inputTimeBarbecue.value;
    barbecueData.durationBarbecue = inputDurationBarbecue.value;
    barbecueData.numberGuests = inputNumberGuests.value;
    barbecueData.meatKG = inputMeatKG.value;
    barbecueData.includes = includes.value;
    barbecueData.gender = inputGender.value;
    barbecueData.nameAdmin = inputNameAdmin.value;
    barbecueData.birthdayAdmin = inputBirthdayAdmin.value;
    barbecueData.CPFAdmin = inputCPFAdmin.value;
    barbecueData.emailAdmin = inputEmailAdmin.value;
    barbecueData.age = age.value;


    localStorage.setItem("barbecueData", JSON.stringify(barbecueData));
    console.log(barbecueData);
}

function salvarListaLocal(list) {
    const listService = new ListService();

    listService.salvarLocal();
}

function atualizarModal() {

    let inputNameBarbecue = $$("inputNameBarbecue");
    let inputDateBarbecue = $$("inputDateBarbecue");
    let inputAddressBarbecue = $$("inputAddressBarbecue");
    let inputTimeBarbecue = $$("inputTimeBarbecue");
    let inputDurationBarbecue = $$("inputDurationBarbecue");
    let inputNumberGuests = $$("inputNumberGuests");
    let inputMeatKG = $$("inputMeatKG");
    let inputNameAdmin = $$("inputNameAdmin");
    let inputBirthdayAdmin = $$("inputBirthdayAdmin");
    let inputCPFAdmin = $$("inputCPFAdmin");
    let inputEmailAdmin = $$("inputEmailAdmin");
    let inputGender = $$("input-gender-masculine").checked
    ? Gender.MALE
    : Gender.FEMALE;
    let includes = [];
    for (let elem of document.getElementsByName('includes-group')) {
        if (elem.checked) {
            includes.push(elem.value);
        }
    }
    let administrador = new Admin(inputNameAdmin.value, new Date(inputBirthdayAdmin.value + 'UTC-3'), inputCPFAdmin, inputEmailAdmin);
    let age = administrador.getIdade();
    let birthdayDate = administrador.getBirthday();
    let birthdayDateFormatted = dateFormatter(birthdayDate);
    let dateBarbecue = new Date(inputDateBarbecue.value + 'UTC-3');
    let dateBarbecueFormatted = dateFormatter(dateBarbecue);
    
    document.querySelector('#span-nameBarbecue').innerHTML = `<strong>${inputNameBarbecue.value}</strong>`;
    document.querySelector('#span-dateBarbecue').textContent = dateBarbecueFormatted;
    document.querySelector('#span-addressBarbecue').textContent = inputAddressBarbecue.value;
    document.querySelector('#span-timeBarbecue').textContent = inputTimeBarbecue.value;
    document.querySelector('#span-durationBarbecue').textContent = inputDurationBarbecue.value;
    document.querySelector('#span-numberGuests').textContent = inputNumberGuests.value;
    document.querySelector('#span-meatKG').textContent = inputMeatKG.value;
    document.querySelector('#span-includes').textContent = includes;
    document.querySelector('#span-nameAdmin').textContent = inputNameAdmin.value;
    document.querySelector('#span-birthdayAdmin').textContent = birthdayDateFormatted;
    document.querySelector('#span-ageAdmin').textContent = age;
    document.querySelector('#span-CPFAdmin').textContent = inputCPFAdmin.value;
    document.querySelector('#span-emailAdmin').textContent = inputEmailAdmin.value;
    document.querySelector('#span-genderAdmin').textContent = inputGender;
    document.getElementById('span-now-date').textContent = currentDate();
    document.getElementById('span-now-hour').textContent = currentHour();
}

function limpar() {
    let listaCampos = document.querySelectorAll("input.input");
    for(let i = 0; i < listaCampos.length; i++) {
        listaCampos[i].value = '';
    }

    const includesCheckboxes = document.querySelectorAll('[name="includes-group"]');

    console.log(includesCheckboxes);

    for(let i = 0; i < includesCheckboxes.length; i++) {
        if(includesCheckboxes[i].checked) {
            includesCheckboxes[i].checked = false;
            includesCheckboxes[i].classList.add("is-invalid");
        }
    }

}
function habilitarBotao() {
    const botaoEnvio = document.getElementById("submit-btn");
    botaoEnvio.disabled = true;

    validarInclusos();

    document.getElementById('register-form').addEventListener('change', function() {
        if(!this.checkValidity()) {
            botaoEnvio.disabled = true;
        }
        else {
            botaoEnvio.disabled = false;
        }
    })
}