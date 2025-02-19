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