import axios from 'axios'

const settings = {}
export const instance = axios.create({
    baseURL: `http://localhost:8000/api`,
    ...settings
})

export const formAPI = {
    creteForm(form: CreateFormType) {
        const promise = instance.post(`/forms`, JSON.stringify(form));
        return promise;
    }
}

export type CreateFormType = {
    name: string,
    email: string,
    phone: string,
    brithday: string,
    message: string
}
