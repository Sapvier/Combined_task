export const requestSearchId = () => {
    return fetch(`https://front-test.beta.aviasales.ru/search`)
}

export const fetchRequest = (params) => {
    return fetch('https://jsonplaceholder.typicode.com' + params.url, {
        method: params.method,
        body: params.body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}


export const requestTickets = (searchId) => {
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
}

export const fetchSearchId = () => {
    return requestSearchId()
        .then(r => r.json())
}

export const fetchTickets = (searchId) => {
    if (searchId === null) {
        return null
    }
    else return requestTickets(searchId)
        .then(r => {
                if (r.status === 200) {
                    return r.json()
                }
                else if (r.status === 500) {
                    return fetchTickets(searchId)
                }
                else return null
            }
        )
}

export const fetchUsers = () => {
    const params = {
        url: '/users',
        method: 'GET',
        body: null
    }
    return fetchRequest(params).then(r => r.json())
}

export const fetchUser = (path) => {
    return fetchRequest({
        url: path,
        method: 'GET',
        body: null
    })
        .then(r => r.json())
}

export const postUser = (user) => {
    return fetchRequest({
        url: "/users",
        method: "POST",
        body: JSON.stringify(user)
    })
}

export const fetchMovie = () => {
    return fetch('http://api.tvmaze.com/search/shows?q=batman')
        .then(r => r.json())
}
