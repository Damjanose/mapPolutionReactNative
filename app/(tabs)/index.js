import {StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router'

export default function Page() {
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3mgiYtaMFWjsvNEpTbVrj4UQQ2auMZtc_A&usqp=CAUs'};
  const { push } = useRouter()

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={0.7}>
        <Text style={[styles.title, styles.colorWhite]}>Pollution map</Text>
        <Text style={[styles.subtitle, styles.colorWhite]}>As high level of pollution we decided to build an application to let people know about some of the most polluted places in Tirana. </Text>
        <TouchableOpacity onPress={()=> push('/map')} style={styles.button}>
          <Text style={styles.colorWhite}>Go to Map</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: { flex: 1, justifyContent: "center" },
  image: { flex: 1, justifyContent: 'center', padding: 25 },
  title: {
    fontSize: 37,
    fontWeight: "bold",
    lineHeight: 60,
    position: "relative",
    bottom: 80,
    textAlign: "center"
  },
  subtitle: { fontSize: 20, color: "#38434D" },
  padTop20: { paddingTop: 20 },
  colorWhite: { color: '#fff' },
  flex: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  button: {
    backgroundColor: '#747480',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 80
  },
});
