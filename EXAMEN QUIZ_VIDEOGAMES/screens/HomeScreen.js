import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// Exporta el componente principal HomeScreen
export default function HomeScreen({ navigation, startQuiz }) {
  // Arreglo con los juegos y sus colores claro/oscuro
  const games = [
    { name: "Halo", color: "#0B3D91", darkColor: "#082A5F" },
    { name: "Hollow Knight", color: "#6A5ACD", darkColor: "#4B3FA0" },
    { name: "Minecraft", color: "#4CAF50", darkColor: "#357A36" },
    { name: "Red Dead Redemption", color: "#B22222", darkColor: "#7F1616" },
    { name: "GTA", color: "#FF8C00", darkColor: "#CC7000" },
  ];

  // Estado para saber qué botón está presionado y poder cambiar su color
  const [pressedIndex, setPressedIndex] = useState(null);

  // Renderizado de la pantalla
  return (
    // Contenedor principal de la pantalla con sus respectivos estilos
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={{ uri: "https://i.pinimg.com/originals/a7/ff/55/a7ff5585b6c4ac35e01f27996817ec9a.jpg" }}
      />
      <Text style={styles.title}>Selecciona un juego</Text>

      {/* Recorre cada elemento del arreglo games para crear un botón */}
      {games.map((game, index) => (
        <TouchableOpacity
          // clave única para cada elemento en la lista
          key={index}
          // opacidad cuando el botón está activo
          activeOpacity={0.7}
          // cuando se presiona, guarda el índice del botón
          // siempre y cuando se presione, el botón cambiará a su color oscuro
          onPressIn={() => setPressedIndex(index)}
          // cuando se suelta, resetea el índice
          // se utiliza para volver al color original del botón
          // eliminando el efecto visual de presionado
          onPressOut={() => setPressedIndex(null)}
          // al presionar, inicia el quiz y navega a la pantalla Quiz
          onPress={() => {
            startQuiz(game.name);
            navigation.navigate("Quiz");
          }}
          // combina los estilos del botón con el color dinámico
          style={[
            styles.button,
            { backgroundColor: pressedIndex === index ? game.darkColor : game.color },
          ]}
        >
          {/* Texto del botón con el nombre del juego */}
          <Text style={styles.buttonText}>{game.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ------------------- Estilos -------------------
const styles = StyleSheet.create({
  // Contenedor general de la pantalla
  container: {
    flex: 1,                     // ocupa toda la pantalla
    justifyContent: "center",    // centra el contenido verticalmente
    paddingTop: 40,              // espacio arriba
    paddingHorizontal: 16,       // espacio a los lados
    backgroundColor: "#ffffffff",// fondo blanco
  },
  // Estilo de la imagen superior
  foto: {
    justifyContent: "center",    // centra verticalmente su contenido
    alignSelf: "center",         // centra horizontalmente
    width: 250,                  // ancho de la imagen
    height: 250,                 // alto de la imagen
    borderRadius: 12,            // esquinas redondeadas
  },
  // Estilo del título
  title: {
    fontSize: 28,                // tamaño de fuente
    fontWeight: "bold",          // negritas
    marginBottom: 20,            // margen inferior
    color: "#222",               // color gris oscuro
    textAlign: "center",         // centrado
  },
  // Estilo base de cada botón de juego
  button: {
    paddingVertical: 18,         // padding vertical
    paddingHorizontal: 16,       // padding horizontal
    borderRadius: 12,            // esquinas redondeadas
    marginVertical: 8,           // espacio entre botones
    alignItems: "center",        // alinea el texto al centro
  },
  // Estilo del texto dentro de los botones
  buttonText: {
    fontSize: 20,                // tamaño de letra
    fontWeight: "bold",          // negritas
    color: "#fff",               // color blanco
  },
});
