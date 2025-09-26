import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// Importa el archivo con todas las preguntas del quiz
import preguntas from "../preguntas";

// Componente principal de la pantalla de preguntas
export default function QuizScreen({ navigation, selectedGame, currentQuestionIndex, handleAnswer, score }) {

  // ------------------- Buscar preguntas del juego seleccionado -------------------
  let gameQuestions = []; // Inicializa un arreglo vacío para las preguntas
  for (let i = 0; i < preguntas.length; i++) { // Recorre todas las secciones de juegos
    if (preguntas[i].title === selectedGame) { // Si el título coincide con el juego seleccionado
      gameQuestions = preguntas[i].questions; // Guarda las preguntas de ese juego
      break; // Termina el bucle
    }
  }

  // ------------------- Navegar a la pantalla de resultados -------------------
  useEffect(() => {
    if (currentQuestionIndex >= gameQuestions.length) { // Si se terminaron las preguntas
      navigation.replace("Result"); // Navega a la pantalla de resultados reemplazando la actual
    }
  }, [currentQuestionIndex]); // Se ejecuta cada vez que cambia el índice de la pregunta actual

  if (currentQuestionIndex >= gameQuestions.length) return null; // Evita renderizar si ya no hay preguntas

  const currentQuestion = gameQuestions[currentQuestionIndex]; // Obtiene la pregunta actual

  return (
    <View style={styles.container}> {/* Contenedor principal de la pantalla */}
      <Text style={styles.question}>{currentQuestion.question}</Text> {/* Muestra la pregunta actual */}
      
      {currentQuestion.options.map((option, index) => ( // Recorre todas las opciones de la pregunta
        <TouchableOpacity
          key={index} // Clave única para cada opción
          style={styles.optionButton} // Aplica estilos al botón
          onPress={() => handleAnswer(index === currentQuestion.correctIndex)} // Llama handleAnswer con true o false dependiendo si la opción es correcta
        >
          <Text style={styles.optionText}>{option}</Text> {/* Texto de la opción */}
        </TouchableOpacity>
      ))}

      <View style={styles.infoContainer}> {/* Contenedor para el progreso y score */}
        <Text style={styles.progress}>Pregunta {currentQuestionIndex + 1} de {gameQuestions.length}</Text> {/* Muestra número de pregunta */}
        <Text style={styles.score}>Score: {score}</Text> {/* Muestra el puntaje actual */}
      </View>

      <Image
        style={styles.foto}
        source={{ uri: "https://st3.depositphotos.com/10878436/36623/v/450/depositphotos_366238718-stock-illustration-cartoon-turquoise-color-tasty-donut.jpg" }} // Imagen decorativa
      />
    </View>
  );
}

// ------------------- Estilos -------------------
const styles = StyleSheet.create({
  container: { // Contenedor principal
    flex: 1, // Ocupa toda la pantalla
    paddingTop: 40, // Espacio desde arriba
    paddingHorizontal: 16, // Espaciado horizontal
    backgroundColor: "#ffffffff", // Fondo blanco
  },
  foto: { // Imagen decorativa al final
    justifyContent: "center", // Centra contenido vertical (aunque no es estrictamente necesario para Image)
    alignSelf: "center", // Centra la imagen horizontal
    width: 250, // Ancho
    height: 250, // Alto
    borderRadius: 12, // Bordes redondeados
  },
  question: { // Estilo de la pregunta
    fontSize: 24, // Tamaño de texto
    marginBottom: 20, // Espaciado inferior
    fontWeight: "bold", // Negritas
    color: "#222", // Color gris oscuro
  },
  optionButton: { // Estilo de cada botón de opción
    backgroundColor: "#107C10", // Verde Xbox 360
    paddingVertical: 14, // Espaciado vertical
    paddingHorizontal: 12, // Espaciado horizontal
    marginVertical: 6, // Separación entre botones
    borderRadius: 10, // Bordes redondeados
    alignItems: "center", // Centra texto horizontal
  },
  optionText: { // Texto de las opciones
    fontSize: 18, // Tamaño de texto
    color: "#fff", // Blanco
    fontWeight: "bold", // Negritas
  },
  infoContainer: { // Contenedor de progreso y puntaje
    marginTop: 30, // Espacio superior
    alignItems: "center", // Centra horizontalmente
  },
  progress: { // Texto de la pregunta actual
    fontSize: 16, // Tamaño
    color: "#555", // Gris
  },
  score: { // Texto del puntaje
    fontSize: 16, // Tamaño
    color: "#333", // Gris más oscuro
    fontWeight: "bold", // Negritas
    marginTop: 4, // Separación superior
  },
});
