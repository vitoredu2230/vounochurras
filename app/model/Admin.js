class Admin {
    constructor(nameAdmin, birthdayAdmin, CPFAdmin, emailAdmin, genderAdmin) {
        this.nameAdmin = nameAdmin;
        this.today = new Date();
        this.birthdayAdmin = new Date(birthdayAdmin.value + 'UTC-3');
        this.age = this.today.getFullYear() - this.birthdayAdmin.getFullYear();
        this.m = this.today.getMonth() - this.birthdayAdmin.getMonth();
        if (this.m < 0 || (this.m === 0 && this.today.getDate() < this.birthdayAdmin.getDate())) {
            this.age--;
        }
        this.CPFAdmin = CPFAdmin;
        this.emailAdmin = emailAdmin;
        this.genderAdmin = genderAdmin;
    }

    getNome() {
        return this.nameAdmin;
    }
    
    getBirthday() {
        return this.birthdayAdmin;
    }

    getBirthdayDate() {
        let dia = this.birthdayAdmin.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes = (this.birthdayAdmin.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = this.birthdayAdmin.getFullYear();
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