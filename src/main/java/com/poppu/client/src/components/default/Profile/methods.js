
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


function getUser(email) {
    return new Promise(function (resolve, reject) {
        fetch(`http://localhost:8080/users/search/findDistinctByEmail?email=${email}`, {
            method: 'GET',
        }).then(response => {
            response.json().then(json => {
                resolve(json)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getAddress(address_link) {
    return new Promise(function (resolve, reject) {
        fetch(address_link, {
            method: 'GET',
        }).then(response => {
            response.json().then(json => {
                resolve(json)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getPaymentCards(paymentCard_link) {
    return new Promise(function (resolve, reject) {
        fetch(paymentCard_link, {
            method: 'GET',
        }).then(response => {
            response.json().then(json => {
                resolve(json)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function putRequest(association_link) {

}

export {getUser, getPaymentCards, getAddress, putRequest}