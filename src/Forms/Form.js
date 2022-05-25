import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

const FormDataField = ({
    name,
    ...otherProps
}) => {


    const [field,metadata] = useField(name);


    const configTextField = {
        ...field,
        ...otherProps,
        variant:'outlined',
        fullWidth: true,
    }

    if (metadata && metadata.error && metadata.touched) {
       configTextField.error = true;
       configTextField.helperText = metadata.error;
    }

  return (
    <TextField { ...configTextField }/>
  )
}

export default FormDataField