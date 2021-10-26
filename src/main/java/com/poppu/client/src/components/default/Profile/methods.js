
// const LINK = 'https://localhost:'
// const PORT = '8080'
//
// const USERS = '/users'
// const ADDRESSES = '/addresses'
// const PAYMENTS = '/paymentInfos'
//
// const HTTP_GET = 'GET'
// const HTTP_POST = 'POST'
// const HTTP_PUT = 'PUT'
// const HTTP_DELETE = 'DELETE'


async function httpRequest(method, url = '', data = {}) {
    const response = await fetch(url, {
        method: method,
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
}