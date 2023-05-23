import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const lat = 41.327953
  const long = 19.819025

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        style={styles.map}>
      <Marker coordinate={{ latitude: lat, longitude: long }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
