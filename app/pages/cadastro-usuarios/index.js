function submitHandler() {
    let userService = new UserService();
    document
        .getElementById('register-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('inputName').value;
            const email = document.getElementById('inputEmail').value;
            const password = document.getElementById('inputPassword').value;
            
            let user = new User(name, email, password);

            UserService
        .insertUserWithJqueryAjax(user)
        .done((data) => {
            console.log('Sucesso:', data);
            alertify.success('Convidado cadastrado com sucesso!');
          document.getElementById('register-form').reset(); // Limpa o formulário após o cadastro
            showUsersTable();
        })
        .fail((error) => {
            console.error('Erro:', error);
            alertify.error('Erro ao cadastrar convidado.');
        });
    });
}

function showUsersTable() {
    let userService = new UserService();

    userService
    .listUsers()
    .then((users) => {
        console.log(users);

      // Obtém a referência ao container que conterá as linhas da tabela
        const userBodyTable = document.getElementById('user-body-table');

      // Limpa a lista antes de adicionar os registros
        userBodyTable.innerHTML = '';
        let userTableContent = '';
      // Itera sobre os pacientes e os adiciona à tabela no HTML
        for (let i = 0; i < users.length; i++) {
        const user = users[i];

        let tableRow = `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `;

        userTableContent += tableRow;
        }
        userBodyTable.innerHTML = userTableContent;

    document.querySelector('#user-spinner').style.display = 'none';
        if (users.length == 0) {
        document.querySelector('#user-table-container').style.display =
            'none';
        document.querySelector('#no-result').style.display = 'block';
        } else {
        document.querySelector('#no-result').style.display = 'none';
        document.querySelector('#patient-table-container').style.display =
            'block';
        }
    })
    .catch((error) => {
        alertify.error('Não foi possível buscar os pacientes.');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    submitHandler();

    showUsersTable();
});