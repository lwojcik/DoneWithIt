import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({
  name,
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
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage
        visible={(touched as any)[name]}
        error={(errors as any)[name]}
      />
  </>
  )
}
