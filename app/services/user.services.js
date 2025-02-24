class UserService {
    constructor() {}

    async listUsers() {
        const url = `http://localhost:3000/users`;
        const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Propaga o erro para ser tratado externamente
    }
    }

    async insertUsersWithFetch(data) {
        const url = `http://localhost:3000/users`;
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response;
        } catch (error) {
        console.error(error);
        return null;
        }
    }

    insertPatientWithJqueryAjax(data) {
    const url = `http://localhost:3000/users`;

    try {
        const response = $.ajax({
        url: url,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        });

        return response;
    } catch (error) {
        console.error('Erro ao inserir paciente:', error);
        return null;
    }
    }
}