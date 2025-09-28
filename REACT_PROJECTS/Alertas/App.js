import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, Button, Platform } from 'react-native';

export default function App() {
  const crearDialogo = () => {
    if (Platform.OS === 'web') {
      window.alert('Esto es una alerta en web');
    } else {
      Alert.alert(
        'Título de la alerta',
        'Subtítulo que podemos agregar al cuadro de diálogo de la alerta',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancelar presionado'),
            style: 'cancel',
          },
          {
            text: 'Aceptar',
            onPress: () => console.log('Aceptar presionado'),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir diálogo" onPress={crearDialogo} />
      <StatusBar style="auto" />
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
});
