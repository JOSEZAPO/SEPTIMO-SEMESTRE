import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fondo}
        source={{ uri: "https://pbs.twimg.com/media/GRf20AdXIAA879e?format=jpg&name=4096x4096" }}
      >
        <Text>Demo Imagen</Text>
        <Image
          style={styles.foto}
          source={{ uri: "https://preview.redd.it/im-feeling-kinda-crazy-today-so-pretend-im-himiko-toga-and-v0-ktbvnhkn6che1.jpeg?width=640&crop=smart&auto=webp&s=4e889dc622d802353a23d80ca705b045e09b36df" }}
        />
        <Image
          style={styles.foto}
          source={{ uri: "https://images8.alphacoders.com/129/1296251.jpg" }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
  },
  fondo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignContent: 'center',
  },
});
