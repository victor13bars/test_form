import React, {ChangeEvent} from 'react';

type CustomInputType = {
    name: string
    type: string
    placeholder?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const CustomInput:React.FC<CustomInputType> = ({
                                                   name
                                                   ,type,
                                                   placeholder,
                                                   value,
                                                   onChange}
) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default CustomInput;