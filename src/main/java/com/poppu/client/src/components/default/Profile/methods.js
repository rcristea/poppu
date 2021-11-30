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

function getSeats(seats_link) {
  return new Promise(function (resolve, reject) {
    fetch(seats_link, {
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

function getPromos(promo_link) {
  return new Promise(function (resolve, reject) {
    fetch(promo_link, {
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

function putData(data, destination) {
  return new Promise(function (resolve, reject) {
    fetch(destination, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

function getData(destination) {
  return new Promise(function (resolve, reject) {
    fetch(destination, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

function postData(data, destination) {
  return new Promise(function (resolve, reject) {
    fetch(destination, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => {
      response.json().then(json => {
        resolve(json)
      })
    }).catch(error => {
      reject(error)
    })
  })
}

function putAssociation(data, destination) {
  return new Promise(function (resolve, reject) {
    fetch(destination, {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'text/uri-list',
        'Content-Type': 'text/uri-list'
      },
      body: data,
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

function deleteAssociation(destination) {
  return new Promise(function (resolve, reject) {
    fetch(destination, {
      method: 'DELETE',
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export {getUser, getPaymentCards, getAddress, putData, postData, putAssociation, deleteAssociation, getData, getSeats, getPromos}