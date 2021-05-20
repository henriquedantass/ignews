import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Henrique'},
        { id: 2 , name: 'Tayane'},
        { id: 3 , name: 'Gustavo'},
    ]

    return response.json(users)
}