// Se importa useState para manejar estados dentro del componente
import React, { useState } from "react";
// Se importa NavigationContainer, para que este funcione como un contenedor principal de la navegación
import { NavigationContainer } from "@react-navigation/native";
// Se importa createNativeStackNavigator para crear un stack de pantallas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Se importan cada una de las pantallas del proyecto
// Dentro de cada una principalmente se manejan los estados, la lógica de cada pantalla y el diseño
import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";

// Se crea el Stack de navegación (una pila de pantallas)
const Stack = createNativeStackNavigator();

// Componente principal de la aplicación
export default function App() {
  // ----------------- ESTADOS GLOBALES -----------------

  // selectedGame guarda el nombre del juego seleccionado en la pantalla HomeScreen
  const [selectedGame, setSelectedGame] = useState("");
  // currentQuestionIndex guarda el número de la pregunta actual en la que se encuentre el usuario
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // score guarda el puntaje acumulado del usuario
  const [score, setScore] = useState(0);
  // answers guarda un arreglo con las respuestas (true/false) del usuario, llevando un historial de sus respuestas correctas e incorrectas
  const [answers, setAnswers] = useState([]);

  // ----------------- FUNCIONES PRINCIPALES -----------------

  // startQuiz: inicia el quiz con el juego seleccionado
  const startQuiz = (gameTitle) => {
    // Cada una de las siguientes funciones se implementa para reiniciar los estados cada vez que se inicia un nuevo quiz
    setSelectedGame(gameTitle);      // asigna el juego seleccionado
    setCurrentQuestionIndex(0);      // reinicia el índice de preguntas
    setScore(0);                     // reinicia el puntaje
    setAnswers([]);                  // vacía las respuestas previas
  };

  // handleAnswer: se ejecuta al responder una pregunta
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);                    // suma 1 al score si es correcta
    setAnswers([...answers, isCorrect]);                   // agrega true/false al arreglo answers
    setCurrentQuestionIndex(currentQuestionIndex + 1);     // pasa a la siguiente pregunta
  };

  // resetQuiz: reinicia todo el quiz y vuelve al inicio
  const resetQuiz = () => {
    //Contrario al startQuiz, aquí se reinician todos los estados a su valor inicial despues de finalizar el quiz
    setSelectedGame("");           // limpia el juego seleccionado
    setCurrentQuestionIndex(0);    // reinicia preguntas
    setScore(0);                   // reinicia puntaje
    setAnswers([]);                // vacía respuestas
  };

  // ----------------- Contenedores de las funciones -----------------
  return (
    // Contenedor principal de la navegación
    <NavigationContainer>
      {/* Stack de pantallas */}
      <Stack.Navigator>
        
        {/* Pantalla de inicio */}
        <Stack.Screen name="Start" options={{ headerShown: false }}>
          {/* Pasamos las props automáticamente a StartScreen */}
          {props => <StartScreen {...props} />}
        </Stack.Screen>

        {/* Pantalla de selección de juegos */}
        <Stack.Screen name="Home" options={{ title: "Juegos" }}>
          {/* Pasamos startQuiz como prop para que HomeScreen la use */}
          {props => <HomeScreen {...props} startQuiz={startQuiz} />}
        </Stack.Screen>

        {/* Pantalla del quiz */}
        <Stack.Screen name="Quiz" options={{ title: "Quiz" }}>
          {/* Pasamos todas las props necesarias para manejar el quiz */}
          {props => (
            <QuizScreen
              {...props}
              selectedGame={selectedGame}                  // nombre del juego
              currentQuestionIndex={currentQuestionIndex}  // índice de pregunta actual
              handleAnswer={handleAnswer}                 // función para manejar respuesta
              score={score}                               // puntaje actual
            />
          )}
        </Stack.Screen>

        {/* Pantalla de resultados */}
        <Stack.Screen name="Result" options={{ title: "Resultado" }}>
          {/* Pasamos score y resetQuiz para mostrar resultados y reiniciar */}
          {props => (
            <ResultScreen
              {...props}
              score={score}           // puntaje final
              resetQuiz={resetQuiz}   // función para reiniciar quiz
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
