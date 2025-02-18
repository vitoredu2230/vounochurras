let $$ = function(id) {
    return document.getElementById(id);
}

class admin {
    constructor(name, birthday, cpf, email) {
        this.name = name;
        this.today = new Date();
        this.birthday = new Date(birthday + 'UTC-3');
        this.cpf = cpf;
        this.age = this.today.getFullYear() - birthday.getFullYear();
        this.email = email;
        this.m = this.today.getMonth() - this.birthday.getMonth();
        if (this.m < 0 || (this.m === 0 && this.today.getDate() < this.birthday.getDate())) {
            this.age--;
        }
    }

    getNome() {
        return this.name;
    }
    
    getBirthday() {
        return this.birthday;
    }

    getBirthdayDate() {
        let dia = this.birthday.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes = (this.birthday.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = this.birthday.getFullYear();
        console.log(dia);
        return diaF+"/"+mesF+"/"+anoF;
    }

    getIdade() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    getCPF() {
        return this.cpf;
    }
}


window.onload = function () {
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
    let administrador = new admin(inputNameAdmin.value, new Date(inputBirthdayAdmin.value), inputCPFAdmin, inputEmailAdmin);
    let age = administrador.getIdade();

    const barbecueData = {};

    barbecueData.nameBarbecue = inputNameBarbecue.value;
    barbecueData.dateBarbecue = inputDateBarbecue.value;
    barbecueData.addressBarbecue = inputAddressBarbecue.value;
    barbecueData.timeBarbecue = inputTimeBarbecue.value;
    barbecueData.durationBarbecue = inputDurationBarbecue.value;
    barbecueData.numberGuests = inputNumberGuests.value;
    barbecueData.meatKG = inputMeatKG.value;
    barbecueData.nameAdmin = inputNameAdmin.value;
    barbecueData.birthdayAdmin = inputBirthdayAdmin.value;
    barbecueData.CPFAdmin = inputCPFAdmin.value;
    barbecueData.emailAdmin = inputEmailAdmin.value;
    barbecueData.age = age.value;

    localStorage.setItem("barbecueData", JSON.stringify(barbecueData));
}

function atualizarModal() {
    function currentDate() {
        const now = new Date();
        return now.toLocaleDateString('pt-BR');
    }

    function currentHour() {
        const now = new Date();
        
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        return formattedTime;
    }

    
}

function limpar() {
    let listaCampos = document.querySelectorAll("input.input");
    for(let i = 0; i < listaCampos.length; i++) {
        listaCampos[i].value = '';
    }
}