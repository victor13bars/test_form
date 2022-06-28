import React, {ChangeEvent} from 'react';

type CustomTextAreaType = {
    placeholder:string
    rows:number
    value:string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const CustomTextArea:React.FC<CustomTextAreaType> = ({
    placeholder,
    rows,
    value,
    onChange
                                                     }) => {
    return (
        <textarea
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
        />
    );
};

export default CustomTextArea;