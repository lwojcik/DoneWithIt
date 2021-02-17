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
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: any) => setFieldValue(name, text)}
        value={(values as any)[name]}
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
