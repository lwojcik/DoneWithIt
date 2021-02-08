import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder }: any) {
  const {
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={(values as any)[name]}
      />
      <ErrorMessage
        error={(errors as any)[name]}
        visible={(touched as any)[name]}
      />
    </>
  );
}

export default AppFormPicker;
