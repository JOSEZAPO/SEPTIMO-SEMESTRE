import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- Componente base con colores estilo Rengoku ---
function ScreenContainer({ children, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

// --- Pantallas ---
function HomeScreen({ navigation }) {
  return (
    <ScreenContainer title="🔥 Menú Rengoku 🔥">
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#B22222' }]}
        onPress={() => navigation.navigate('IMC')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF4500' }]}
        onPress={() => navigation.navigate('Divisas')}
      >
        <Text style={styles.buttonText}>Cambio de Divisas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF8C00' }]}
        onPress={() => navigation.navigate('Propinas')}
      >
        <Text style={styles.buttonText}>Cálculo de Propinas</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

function IMCScreen() {
  return (
    <ScreenContainer title="IMC">
      <Text style={styles.screenText}>Aquí irá el cálculo de IMC</Text>
    </ScreenContainer>
  );
}

function DivisasScreen() {
  return (
    <ScreenContainer title="Cambio de Divisas">
      <Text style={styles.screenText}>Aquí irá el cambio de divisas</Text>
    </ScreenContainer>
  );
}

function PropinasScreen() {
  return (
    <ScreenContainer title="Propinas">
      <Text style={styles.screenText}>Aquí irá el cálculo de propinas</Text>
    </ScreenContainer>
  );
}

// --- Stack Navigator ---
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#B22222' },
          headerTintColor: '#FFD700',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="IMC" component={IMCScreen} />
        <Stack.Screen name="Divisas" component={DivisasScreen} />
        <Stack.Screen name="Propinas" component={PropinasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // negro/gris oscuro de fondo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFD700', // dorado
    fontWeight: 'bold',
    marginBottom: 40,
    textShadowColor: '#FF4500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
    elevation: 5, // sombra en Android
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  screenText: {
    fontSize: 20,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 20,
  },
});
