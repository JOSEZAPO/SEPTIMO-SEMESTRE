// Importamos React y useState desde la librería react
// useState permite manejar el estado interno de los componentes funcionales
import React, { useState } from 'react';

// Importamos StatusBar desde expo-status-bar para controlar la barra de estado del dispositivo
import { StatusBar } from 'expo-status-bar';

// Importamos componentes esenciales de react-native para construir la interfaz
// StyleSheet permite definir estilos
// Text muestra texto en pantalla
// View es un contenedor de elementos
// TouchableOpacity permite crear componentes presionables con efecto de opacidad
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Componente funcional "Texto" que renderiza un texto que puede cambiar al ser presionado
const Texto = () => {
  // Declaramos una variable de estado "texto" y su función "setTexto" para actualizarla
  // Se inicializa con el texto 'Mas vale malo por conocido'
  const [texto, setTexto] = useState('Mas vale malo por conocido');

  // Función que se ejecuta cuando se presiona el texto
  // Actualiza el estado de "texto" a un nuevo valor
  const actualizaTexto = () => {
    setTexto('Que bueno por conocer');
  };

  // Renderizamos un TouchableOpacity que envuelve un Text
  // Esto permite que el texto sea presionable
  // Al presionar, se ejecuta la función actualizaTexto
  return (
    <TouchableOpacity onPress={actualizaTexto} style={styles.textoBox}>
      <Text style={styles.textoCentral}>{texto}</Text>
    </TouchableOpacity>
  );
};


// Componente funcional "Favorita" que recibe propiedades (props)
const Favorita = (props) => {
  // Desestructuramos la propiedad "texto" de props
  const { texto } = props;

  // Renderizamos un View con estilos y un Text dentro
  // Esto permite mostrar un mensaje pasado como propiedad
  return (
    <View style={styles.favoritaBox}>
      <Text style={styles.textoCentral}>{texto}</Text>
    </View>
  );
};


// Componente principal "App" que representa toda la aplicación
export default function App() {
  // Renderizamos la estructura principal de la app
  return (
    // View principal con estilos de contenedor
    // Centra todos los elementos en pantalla y define el fondo
    <View style={styles.container}>
      
      {/* Tres textos de ejemplo con diferentes colores */}
      <Text style={[styles.cajaColor, styles.rojo]}>Hola Mundo React Native</Text>
      <Text style={[styles.cajaColor, styles.verde]}>Hola Mundo React Native</Text>
      <Text style={[styles.cajaColor, styles.azul]}>Hola Mundo React Native</Text>

      {/* Componente interactivo que cambia de texto al presionar */}
      <Texto />  

      {/* Componente que muestra un texto pasado como prop */}
      <Favorita texto={'Esta es mi clase favorita'} />

      {/* Barra de estado del dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}


// Definición de los estilos utilizando StyleSheet.create
// Esto permite mantener los estilos organizados y optimizados
const styles = StyleSheet.create({
  // Estilo del contenedor principal
  container: {
    flex: 1,                      // Ocupa toda la pantalla
    backgroundColor: '#f2f2f2',   // Color de fondo gris claro
    alignItems: 'center',          // Centra elementos horizontalmente
    justifyContent: 'center',      // Centra elementos verticalmente
    padding: 20,                   // Espacio interno alrededor de los elementos
  },

  // Estilo base para los textos con fondo de color
  cajaColor: {
    width: '80%',                  // Ocupa 80% del ancho del contenedor
    textAlign: 'center',           // Centra el texto dentro de la caja
    padding: 15,                   // Espaciado interno de la caja
    marginVertical: 10,            // Margen arriba y abajo
    borderRadius: 10,              // Bordes redondeados
    fontSize: 24,                  // Tamaño de fuente
    fontWeight: 'bold',            // Fuente en negrita
  },

  // Colores específicos para cada caja
  rojo: {
    backgroundColor: 'red',        // Fondo rojo
    color: 'white',                // Texto blanco
  },
  verde: {
    backgroundColor: 'green',      // Fondo verde
    color: 'yellow',               // Texto amarillo
  },
  azul: {
    backgroundColor: 'blue',       // Fondo azul
    color: 'orange',               // Texto naranja
  },

  // Estilo del componente Texto interactivo
  textoBox: {
    backgroundColor: '#ff6b6b',    // Fondo rojo suave
    padding: 15,                    // Espaciado interno
    borderRadius: 10,               // Bordes redondeados
    marginVertical: 10,             // Margen vertical
    width: '80%',                    // Ancho del 80% del contenedor
    alignItems: 'center',           // Centra el texto dentro de la caja
  },

  // Estilo del componente Favorita
  favoritaBox: {
    backgroundColor: '#6bc1ff',     // Fondo azul claro
    padding: 15,                     // Espaciado interno
    borderRadius: 10,                // Bordes redondeados
    marginVertical: 10,              // Margen vertical
    width: '80%',                     // Ancho del 80% del contenedor
    alignItems: 'center',            // Centra el texto dentro de la caja
  },

  // Estilo del texto centralizado dentro de los componentes interactivos
  textoCentral: {
    color: 'white',                  // Color del texto
    fontSize: 20,                    // Tamaño de fuente
    fontWeight: 'bold',              // Fuente en negrita
    textAlign: 'center',             // Centrado horizontal del texto
  },
});

