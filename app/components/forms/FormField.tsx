import React from 'react';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({
  name,
  width,
  ...otherProps
}: any) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        visible={(touched as any)[name]}
        error={(errors as any)[name]}
      />
  </>
  )
}
