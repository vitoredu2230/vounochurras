

    let $$ = function(id) {
        return document.getElementById(id);
    }
    
    window.onload = function () {
        jQuery(function() {
            jQuery(inputCPFAdmin).mask('000.000.000-00', { reverse: false });
        })
        console.log("Restaurando um objeto JSON do LocalStorage.");
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
        let maxBirthday = new Date("2007-01-01")
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
        } else if((timeBarbecue == "Invalid Time") || (timeBarbecue < minTime) || (timeBarbecue > maxTime)) {
            $$("inputTimeBarbecue").setCustomValidity("Erro! Por favor, insira uma hora válida!");
            return false;
        } else if((durationBarbecue == "Invalid Time") || (durationBarbecue < maxDuration)) {
            $$("inputTimeBarbecue").setCustomValidity("Erro! Por favor, insira uma hora válida!");
            return false;
        } else if((numberGuests == undefined) || (numberGuests == "")) {
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
                break; // Sai do loop assim que encontrar um checkbox marcado
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
    
        alert("Churrasco cadastrado com sucesso!");
    
        return true;
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
        let administrador = new admin(inputNameAdmin.value, new Date(inputBirthdayAdmin.value + 'UTC-3'), inputCPFAdmin, inputEmailAdmin);
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
        let administrador = new admin(inputNameAdmin.value, new Date(inputBirthdayAdmin.value + 'UTC-3'), inputCPFAdmin, inputEmailAdmin);
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
    }
