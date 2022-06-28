import {ChangeEvent, useState} from "react";
import {checkNameAndSurname} from "../helpers/checkNameAndSurname";

export const useInput = (initialValue: string, checkFn: (value: string) => string, upperCase: boolean) => {
    const [value, setValue] = useState<string>(initialValue)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorMessage(checkFn(e.target.value))
        if (upperCase) {
            setValue(e.target.value.toUpperCase())
        } else {
            setValue(e.target.value)
        }
    }

    return {
        value,
        onChange,
        errorMessage,
        setValue
    }
}