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
