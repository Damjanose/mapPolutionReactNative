import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Link } from 'expo-router'

export default function Page() {
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3mgiYtaMFWjsvNEpTbVrj4UQQ2auMZtc_A&usqp=CAUs'};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={[styles.title, styles.colorWhite]}>Pollution map</Text>
        <Text style={[styles.subtitle, styles.colorWhite]}>As high level of pollution we decided to build an application to let people know about some of the most polluted places in Tirana. </Text>
        <Text style={[styles.padTop20, styles.colorWhite]}>So if you are interested
        <Link href="/map" style={[styles.link, styles.colorWhite]}> Click here </Link>
          and you will be redirected to a map
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 60,
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
  link: {
    color: '#a0b9db',
    textDecorationLine: 'underline',
  },
  padTop20: { paddingTop: 20},
  colorWhite: { color: '#fff' },
});
