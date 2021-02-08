import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  width = '100%',
  placeholder,
}: any) {
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
        numberOfColumns={numberOfColumns}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={(values as any)[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage
        error={(errors as any)[name]}
        visible={(touched as any)[name]}
      />
    </>
  );
}

export default AppFormPicker;
