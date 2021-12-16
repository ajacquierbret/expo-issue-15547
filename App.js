import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Camera, requestCameraPermissionsAsync }  from 'expo-camera';

export default function App() {
  useEffect(() => {
    requestCameraPermissionsAsync()
  }, [])

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}>
      <Camera
        aspectRatio={1}
        style={{
          width: '100%',
        }}
      />
    </View>
  );
}