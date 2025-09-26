import React, { useState } from "react";
// Se importan componentes nativos de React Native para el diseño y funcionalidad
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";

// Se exporta el componente funcional StartScreen, que recibe la prop 'navigation' para cambiar de pantalla
export default function StartScreen({ navigation }) {
  // Estado local 'pressed' para guardar si el botón ha sido presionado (ahora no se usa, pero queda para animaciones)
  //const [pressed, setPressed] = useState(false);

  // Render del componente: lo que se verá en pantalla
  return (
    // Contenedor principal de la pantalla con los estilos definidos abajo
    <View style={styles.container}>
        <Image
          style={styles.foto}
          source={{ uri: "https://img.freepik.com/vector-gratis/vector-colorido-icono-rosquilla-rosa-aislado-sobre-fondo-blanco_134830-1096.jpg?semt=ais_hybrid&w=740&q=80" }}
        />
      <Text style={styles.title}>Quiz Videogames</Text>

      {/* Botón para ir a la pantalla Home */}
      <TouchableOpacity
        activeOpacity={0.7} // Opacidad cuando se presiona (efecto visual)
        onPress={() => navigation.navigate("Home")} // Al presionar navega a la pantalla "Home"
        style={styles.button} // Se aplican estilos del botón
      >
        {/* Texto dentro del botón */}
        <Text style={styles.buttonText}>EMPEZAR QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
}

// ------------------- Sección de Estilos -------------------
const styles = StyleSheet.create({
  // Estilo para el contenedor principal
  container: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra verticalmente el contenido
    alignItems: "center", // Centra horizontalmente el contenido
    backgroundColor: "#ffffffff", // Fondo blanco
    paddingHorizontal: 20, // Espacio lateral
  },
  // Estilo para la imagen (logo/foto)
  foto: {
    width: 120, // Ancho de la imagen
    height: 120, // Alto de la imagen
    borderRadius: 12, // Bordes redondeados
  },
  // Estilo para el título
  title: {
    fontSize: 40, // Tamaño de letra grande
    fontWeight: "bold", // Negrita
    marginBottom: 60, // Separación hacia abajo
    color: "#107C10", // Color verde Xbox
    textAlign: "center", // Centrar el texto
  },
  // Estilo para el botón
  button: {
    backgroundColor: "#107C10", // Color de fondo verde Xbox
    paddingVertical: 18, // Relleno arriba y abajo
    paddingHorizontal: 60, // Relleno a los lados
    borderRadius: 12, // Bordes redondeados
  },
  // Estilo para el texto dentro del botón
  buttonText: {
    fontSize: 26, // Tamaño de letra
    color: "#fff", // Color blanco
    fontWeight: "bold", // Negrita
    textAlign: "center", // Centrar texto
  },
});
