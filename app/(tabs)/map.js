import React, { useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';


export default function App() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const lat = 41.327953
  const long = 19.819025

  const handleMarkerPress = (marker) => setSelectedMarker(marker);
  const closeModal = () => setSelectedMarker(null);

  const markers = [
    {
      title: 'TIRANA',
      population: '863.694',
      uri: 'https://shendeti.com.al/wp-content/uploads/2016/06/Tirane.jpg',
      description: 'Në Tiranë ashtu siç nis agimi,ashtu dhe ngryset dita,me nivel të lartë ndotjeje.Ato çfarë po na dëmtojnë mushkëritë neve,dhe banorëve të kryeqytetit,janë grimcat që thithim çdo ditë nëpërmjet ajrit të ndotur nga karburanti i automjeteve që qarkullojnë në rrugët e Tiranës. Ne rritjen e nivelit te ndotjes ne kryeqytet ndikon trafiku i automjeteve,ndertimet,por dhe menyra e pastrimit te qytetit ende me fshesa dhe jo me makineri me uje,siç behet ne vendet europiane.',
      latitude: '41.327953',
      longitude: '19.819025',
      color: 'lime',
    },
    {
      title: 'ELBASANI',
      population: '266.245',
      uri: 'https://th.bing.com/th/id/R.12dc5046624334d2454c2e47d38801bf?rik=YUPC4T3oUHtQZQ&pid=ImgRaw&r=0',
      description: 'Në bazë të matjeve të bëra për cilësinë e ajrit, qarku i Elbasanit vijon të jetë zonë e kuqe. Të paktën qendra e Elbasanit rezulton me ndotjen 4 here me te larte sesa norma e lejuar, ndërkohë zona më problematike përsa i takon Bashkisë së Elbasanit vijon të mbetet ajo e Metalurgjikut.',
      latitude: '41.1125',
      longitude: '20.08222',
      color: 'blue',
    },
    {
      title: 'KORCA',
      population: '86.176',
      uri: 'https://i1.wp.com/argjirolajm.net/wp-content/uploads/2018/07/Plehrat-ok.jpg?w=9999',
      description: 'Djegia e mbeturinave, depozitimi i përbashkët me mbetjet e rrezikshme spitalore, të industrisë etj., shkakton një sërë problemesh mjedisore si ndotja e ujit nëntokësor të pellgut ujëmbaj tës të Korçës, e ujërave të Liqenit të Ohrit, ndotjen e ajrit etj. Ndryshimi i teknologjisë se menaxhimit të mbeturinave, shoqëruar me riciklimin e tyre do të përmirësonte ndjeshëm mjedisin e rajonit.',
      latitude: '40.615891',
      longitude: '20.777203',
      color: 'purple',
    },
    {
      title: 'DURRESI',
      population: '205.849',
      uri: 'https://th.bing.com/th/id/OIP.7wLp-iL_jxKmwDy4PUJrjAHaEK?pid=ImgDet&rs=1 ',
      description: 'Ndotja në Durrës, krim ekologjik me pasoja afatgjata për mjedisin, shëndetin, peshkimin dhe turizmin.Ndotja vjen për shkak të shkarkimeve të ujrave të zeza. Mbetjet krijohen nga niveli i lartë i azotit në ujë. Në këtë mënyrë, deti pastron veten.',
      latitude: '41.32355',
      longitude: '19.45469',
      color: 'green',
    },
    {
      title: 'VLORE',
      population: '188.922',
      uri: 'https://i.ytimg.com/vi/Fr_vHUfgIi4/maxresdefault.jpg',
      description: 'Ndotja e ajrit mbetet një problem për qytete e mëdha në Shqipëri. Krahas trafikut të makinave dhe ndërtimeve niveli i ndotjes në Vlorë rritet edhe nga djegia e mbeturinave. ',
      latitude: '40.4667',
      longitude: 19.4897,
      color: 'orange',
    },
  ]

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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            pinColor={marker.color}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout>
              <View>
                <Text>{marker.title}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Modal visible={selectedMarker !== null} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedMarker?.title}</Text>
            <Text>Population: {selectedMarker?.population}</Text>
            <Image style={styles.modalImage} source={{ uri: selectedMarker?.uri }} />
            <Text style={styles.modalDescription}>{selectedMarker?.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonLabel}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  modalDescription: { marginBottom: 10, textAlign: 'center' },
  closeButton: {
    backgroundColor: '#be4949',
    padding: 10,
    borderRadius: 4,
    alignSelf: 'center',

  },
  closeButtonLabel: { color: '#fff', fontWeight: 'bold' },
});
