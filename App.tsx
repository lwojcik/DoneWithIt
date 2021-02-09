import React, { useState, useEffect } from 'react';

// import Screen from './app/components/Screen';
// import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const [imageUris, setImageUris] = useState([]) as any;

  const handleAdd = (uri: any) => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = (uri: any) => {
    setImageUris(imageUris.filter((imageUri: any) => imageUri !== uri));
  }

  return (
    <ListingEditScreen />
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
  );
}
