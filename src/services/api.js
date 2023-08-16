import axios from 'axios'

const mailapi = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default mailapi
