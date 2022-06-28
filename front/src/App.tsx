import React, {FormEvent, useState} from 'react';
import './app.sass';
import {checkNameAndSurname} from "./helpers/checkNameAndSurname";
import {formAPI} from "./api/api";
import {useInput} from "./hooks/useInput";
import {checkEmail} from "./helpers/checkEmail";
import {checkMessage} from "./helpers/checkMessage";
import {checkDate} from "./helpers/checkDate";
import {currentDate} from "./helpers/currentDate";
import {checkPhone} from "./helpers/checkPhone";
import FieldError from "./components/FieldError";
import CustomInput from "./components/CustomInput";
import CustomTextArea from "./components/CustomTextArea";

const App: React.FC = () => {
    const name = useInput('', checkNameAndSurname, true)
    const email = useInput('', checkEmail, false)
    const message = useInput('', checkMessage, false)
    const brithDay = useInput(currentDate(), checkDate, false)
    const phone = useInput('', checkPhone, false)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true);
    const [response, setResponse] = useState()
    const [responseMessage, setResponseMessage] = useState('')

    const clearAllField = () => {
        name.setValue('')
        email.setValue('')
        message.setValue('')
        brithDay.setValue(currentDate())
        phone.setValue('')
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(checkNameAndSurname(name.value))
        if (!(checkNameAndSurname(name.value) || checkEmail(email.value) || checkPhone(phone.value) || checkDate(brithDay.value || checkMessage(message.value)))) {
            setIsLoading(true)
            try {
                let response = await formAPI.creteForm({
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    brithday: brithDay.value,
                    message: message.value
                })
                setResponseMessage(response.data.message)
                if (response.data.status === 'success') {
                    clearAllField()
                }
            } catch (e: any) {
                setResponseMessage(e.message)
            } finally {
                setIsLoading(false)
            }
        } else {
            setResponseMessage('Проверьте введённые данные')
        }
    }

    return (
        <div className="app">
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className="form-inner">
                    <h3>Написать нам</h3>
                    <CustomInput
                        name='name'
                        type="text"
                        placeholder='Введите имя и фамилию'
                        value={name.value}
                        onChange={e => name.onChange(e)}
                    />
                    <FieldError errorMessage={name.errorMessage} />

                    <CustomInput
                        name='email'
                        type="text"
                        placeholder='Введите email'
                        value={email.value}
                        onChange={e => email.onChange(e)}
                    />
                    <FieldError errorMessage={email.errorMessage} />

                    <input
                        type="tel"
                        placeholder='+7 XXX XXX-XX-XX'
                        value={phone.value}
                        onChange={(e) => phone.onChange(e)}
                    />
                    <FieldError errorMessage={phone.errorMessage} />

                    <CustomInput
                        name='date'
                        type="date"
                        value={brithDay.value}
                        onChange={e => brithDay.onChange(e)}
                    />
                    <FieldError errorMessage={brithDay.errorMessage} />

                    <CustomTextArea
                        placeholder="Сообщение..."
                        rows={3}
                        value={message.value}
                        onChange={e => message.onChange(e)}
                    />
                    <FieldError errorMessage={message.errorMessage} />

                    <input
                        className={isLoading ? 'disabled' : ''}
                        type='submit'
                        value='Отправить'
                        disabled={isLoading}/>
                </div>
            </form>
            <FieldError className='field-message' errorMessage={responseMessage}/>
        </div>
    );
}

export default App;
