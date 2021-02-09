import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }: any) {
  const {
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();
  const imageUris = (values as any)[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = (uri: any) => {
    setFieldValue(name, imageUris.filter((imageUri: any) => imageUri !== uri));
  }


  return (
    <>
      <ImageInputList
        imageUris={(values as any)[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={(errors as any)[name]}
        visible={(touched as any)[name]}
      />
    </>
  );
}

export default FormImagePicker;