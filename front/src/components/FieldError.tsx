import React from 'react';

type FieldErrorType = {
    className?: string
    errorMessage: string
}
const FieldError: React.FC<FieldErrorType> = ({errorMessage, className}) => {
    return <>
        {errorMessage && <span className={className ? className : ''}>{errorMessage}</span>}
    </>
};

export default FieldError;