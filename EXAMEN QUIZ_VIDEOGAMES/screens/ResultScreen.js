import React from "react"; // Importa React
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"; // Importa componentes básicos de React Native

// Componente principal de la pantalla de resultados
export default function ResultScreen({ navigation, score, resetQuiz }) {

  return (
    <View style={styles.container}> {/* Contenedor principal centrado */}
      
      <Text style={styles.title}>¡Resultado!</Text> {/* Título principal */}
      
      <Text style={styles.score}>Puntaje: {score}</Text> {/* Muestra el puntaje final */}

      {/* Botón principal: volver a la pantalla de selección de juegos */}
      <TouchableOpacity
        activeOpacity={0.7} // Opacidad cuando se presiona
        style={styles.button} // Aplica estilo del botón principal
        onPress={() => { // Al presionar
          resetQuiz(); // Resetea todas las variables del quiz
          navigation.navigate("Home"); // Navega a la pantalla Home (selección de juegos)
        }}
      >
        <Text style={styles.buttonText}>Volver a Juegos</Text> {/* Texto del botón */}
      </TouchableOpacity>

      {/* Botón secundario: volver al inicio */}
      <TouchableOpacity
        activeOpacity={0.7} // Opacidad al presionar
        style={[styles.button, styles.secondaryButton]} // Aplica estilo principal + estilo secundario (color gris)
        onPress={() => { // Al presionar
          resetQuiz(); // Resetea todas las variables del quiz
          navigation.navigate("Start"); // Navega a la pantalla inicial
        }}
      >
        <Text style={styles.buttonText}>Volver al Inicio</Text> {/* Texto del botón */}
      </TouchableOpacity>

      {/* Imagen decorativa debajo de los botones */}
      <Image
        style={styles.foto} // Aplica estilo de la imagen
        source={{ uri: "https://www.kindpng.com/picc/m/109-1095346_transparent-donut-png-donut-oreo-png-download.png" }} // URL de la imagen
      />
    </View>
  );
}

// ------------------- Estilos -------------------
const styles = StyleSheet.create({
  container: { // Contenedor principal
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra contenido verticalmente
    alignItems: "center", // Centra contenido horizontalmente
    backgroundColor: "#F7F7F7", // Fondo gris claro
    paddingHorizontal: 20, // Espaciado horizontal
  },
  foto: { // Imagen decorativa
    justifyContent: "center", // Centrado vertical
    alignSelf: "center", // Centrado horizontal
    width: 250, // Ancho de la imagen
    height: 250, // Alto de la imagen
    borderRadius: 12, // Bordes redondeados
  },
  title: { // Título principal
    fontSize: 36, // Tamaño de fuente grande
    fontWeight: "bold", // Negritas
    marginBottom: 20, // Espacio inferior
    color: "#107C10", // Verde Xbox
    textAlign: "center", // Centrado del texto
  },
  score: { // Puntaje
    fontSize: 28, // Tamaño de fuente
    fontWeight: "bold", // Negritas
    marginBottom: 40, // Espacio inferior antes de los botones
    color: "#222", // Color gris oscuro
    textAlign: "center", // Centrado del texto
  },
  button: { // Botón principal
    backgroundColor: "#107C10", // Verde Xbox
    paddingVertical: 16, // Espaciado vertical
    paddingHorizontal: 50, // Espaciado horizontal
    borderRadius: 12, // Bordes redondeados
    marginBottom: 16, // Espacio inferior entre botones
  },
  secondaryButton: { // Botón secundario
    backgroundColor: "#555", // Gris oscuro para diferenciar del botón principal
  },
  buttonText: { // Texto de los botones
    fontSize: 20, // Tamaño de fuente
    fontWeight: "bold", // Negritas
    color: "#fff", // Texto blanco
    textAlign: "center", // Centrado del texto
  },
});
