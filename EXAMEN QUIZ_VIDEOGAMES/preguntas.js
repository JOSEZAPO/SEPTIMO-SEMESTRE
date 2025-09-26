// Exporta un arreglo de objetos que contienen las preguntas de los distintos videojuegos
export default [
  {
    title: "Halo", // Nombre del juego
    questions: [ // Arreglo con las preguntas del juego
      { 
        question: "¿Cuál es el nombre del protagonista de la saga Halo?", // Texto de la pregunta
        options: ["Cortana", "ODST", "Arbiter", "Master Chief"], // Opciones de respuesta
        correctIndex: 3 // Índice de la opción correcta en el arreglo options
      },
      { question: "¿Qué IA acompaña a Master Chief?", options: ["Serina", "Cortana", "Alyx", "Elizabeth"], correctIndex: 1 },
      { question: "¿Cómo se llama el compañero de Master Chief en Halo 3?", options: ["Arbiter", "Cortana", "Keyes", "ODST"], correctIndex: 1 },
      { question: "¿Cómo se le conoce a los humanos altamente entrenados y mejorados en Halo?", options: ["Spartans", "Marines", "ODSTs", "Covenant"], correctIndex: 0 },
      { question: "¿Qué planeta es central en Halo 4?", options: ["Reach", "Requiem", "Earth", "Installation 04"], correctIndex: 1 },
      { question: "¿Quién es el líder de los Covenant?", options: ["Arbiter", "Prophet of Truth", "Brute Chieftain", "Serina"], correctIndex: 1 },
      { question: "¿Cómo se llama la inteligencia artificial que guía al protagonista en Halo 2?", options: ["Cortana", "Serina", "Delta", "Elizabeth"], correctIndex: 0 },
      { question: "¿Qué raza alienígena juega un papel importante en la historia de Halo 3?", options: ["Flood", "Brutes", "Forerunners", "Grunts"], correctIndex: 0 },
      { question: "¿Cuál es la misión principal de Master Chief en Halo: Combat Evolved?", options: ["Salvar la Tierra", "Detener a los Covenant", "Explorar el Halo", "Capturar al Flood"], correctIndex: 2 },
      { question: "¿Cuál es la organización militar humana principal en Halo?", options: ["UNSC", "Covenant", "Forerunners", "Spartans"], correctIndex: 0 },
    ],
  },
  {
    title: "Hollow Knight", // Nombre del juego
    questions: [
      { question: "¿Cuál es el nombre de la ciudad principal?", options: ["Dirtmouth", "Greenpath", "Fog Canyon", "Hallownest"], correctIndex: 3 },
      { question: "¿Quién guía al protagonista al inicio?", options: ["Hornet", "Quirrel", "Grimm", "Zote"], correctIndex: 1 },
      { question: "¿Cuál es el enemigo recurrente que lanza púas?", options: ["Vengefly", "Hopper", "Mantis Warrior", "Aspid"], correctIndex: 0 },
      { question: "¿Qué objeto permite al protagonista planear?", options: ["Mothwing Cloak", "Shade Cloak", "Monarch Wings", "Crystal Heart"], correctIndex: 0 },
      { question: "¿Quién es el jefe del coliseo del Coliseo de Follies?", options: ["Broken Vessel", "Uumuu", "Nosk", "Dung Defender"], correctIndex: 3 },
      { question: "¿Cómo se llama el enemigo final opcional?", options: ["Radiance", "Hollow Knight", "Void Entity", "Grimm"], correctIndex: 0 },
      { question: "¿Qué personaje vende amuletos y artefactos?", options: ["Leg Eater", "Zote", "Cornifer", "Sly"], correctIndex: 3 },
      { question: "¿Qué se obtiene al derrotar a enemigos y jefes?", options: ["Geo", "Essence", "Soul", "Nail upgrades"], correctIndex: 0 },
      { question: "¿Qué poder permite atacar con proyectiles?", options: ["Desolate Dive", "Vengeful Spirit", "Howling Wraiths", "Sharp Shadow"], correctIndex: 1 },
      { question: "¿Cuál es el enemigo que aparece volando y lanza cuchillas?", options: ["Aspid", "Vengefly King", "Mantis Lords", "Hornet"], correctIndex: 1 },
    ],
  },
  {
    title: "Minecraft",
    questions: [
      { question: "¿Cuál es el material básico para hacer un pico de madera?", options: ["Piedra", "Hierro", "Madera", "Diamante"], correctIndex: 2 },
      { question: "¿Cuál es el enemigo que aparece en el Nether?", options: ["Blaze", "Enderman", "Zombie", "Creeper"], correctIndex: 0 },
      { question: "¿Qué se necesita para abrir el portal al Ender Dragon?", options: ["Carbón", "Ojos de Ender", "Diamantes", "Redstone"], correctIndex: 1 },
      { question: "¿Qué animal puede montarse y ser domesticado con zanahorias?", options: ["Caballo", "Cerdo", "Lobo", "Oveja"], correctIndex: 0 },
      { question: "¿Qué bloque es necesario para encender un portal al Nether?", options: ["Arenisca", "Obsidiana", "Madera", "Ladrillo"], correctIndex: 1 },
      { question: "¿Qué material es necesario para crear un horno?", options: ["Hierro", "Diamante", "Piedra", "Madera"], correctIndex: 2 },
      { question: "¿Cómo se obtiene la piedra roja (Redstone)?", options: ["Crafteando", "Mata mobs", "Intercambiando", "Minando"], correctIndex: 3 },
      { question: "¿Qué criatura explota al acercarse al jugador?", options: ["Slime", "Ghast", "Creeper", "Enderman"], correctIndex: 2 },
      { question: "¿Qué herramienta es necesaria para extraer diamantes?", options: ["Pico de madera", "Pico de hierro o superior", "Hacha", "Pico de piedra"], correctIndex: 1 },
      { question: "¿Qué alimento restaura la barra de hambre rápidamente?", options: ["Manzana dorada", "Pan", "Carne cocida", "Zanahoria"], correctIndex: 0 },
    ],
  },
  {
    title: "Red Dead Redemption",
    questions: [
      { question: "¿Quién es el protagonista de RDR1?", options: ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Bill Williamson"], correctIndex: 1 },
      { question: "¿Qué profesión tiene John Marston?", options: ["Ex-bandido", "Sheriff", "Ganadero", "Cazarrecompensas"], correctIndex: 0 },
      { question: "¿En qué época se desarrolla RDR?", options: ["Años 50", "Siglo XIX - Oeste americano", "Años 20", "Siglo XX"], correctIndex: 1 },
      { question: "¿Qué caballo es más rápido?", options: ["Appaloosa", "Mustang", "Turkoman", "American Standardbred"], correctIndex: 3 },
      { question: "¿Cómo se llama la familia que persigue a John?", options: ["Van der Linde", "Marston", "Miller", "Smith"], correctIndex: 0 },
      { question: "¿Qué herramienta se usa para cazar animales?", options: ["Rifle", "Pistola", "Arco", "Lazo"], correctIndex: 3 },
      { question: "¿Qué misión consiste en robar un banco?", options: ["Robbery", "Rescue", "Chase", "Defend"], correctIndex: 0 },
      { question: "¿Qué pueblo sirve como centro de misiones?", options: ["Blackwater", "Valentine", "Rhodes", "Armstrong"], correctIndex: 1 },
      { question: "¿Qué tren se puede asaltar?", options: ["Transcontinental", "Union", "Ferrocarril Central", "Stagecoach"], correctIndex: 0 },
      { question: "¿Qué modo de transporte es icónico del juego?", options: ["Caballo", "Carro", "Tren", "Coche"], correctIndex: 0 },
    ],
  },
  {
    title: "GTA",
    questions: [
      { question: "¿Cuál es el protagonista de GTA III?", options: ["Claude", "CJ", "Tommy Vercetti", "Niko Bellic"], correctIndex: 2 },
      { question: "¿Cuál es el protagonista de GTA: Vice City?", options: ["Claude", "CJ", "Tommy Vercetti", "Niko Bellic"], correctIndex: 2 },
      { question: "¿Quién es el protagonista de GTA: San Andreas?", options: ["CJ", "Tommy Vercetti", "Niko Bellic", "Trevor"], correctIndex: 0 },
      { question: "¿Quién es el protagonista de GTA IV?", options: ["Claude", "CJ", "Niko Bellic", "Trevor"], correctIndex: 2 },
      { question: "¿Quién es el protagonista de GTA V?", options: ["Michael", "Franklin", "Trevor", "CJ"], correctIndex: 0 },
      { question: "¿En qué ciudad se desarrolla GTA: Vice City?", options: ["Liberty City", "Vice City", "Los Santos", "San Fierro"], correctIndex: 1 },
      { question: "¿En qué ciudad se desarrolla GTA IV?", options: ["Liberty City", "Vice City", "Los Santos", "San Fierro"], correctIndex: 0 },
      { question: "¿En qué ciudad se desarrolla GTA: San Andreas?", options: ["Los Santos", "Liberty City", "Vice City", "Las Venturas"], correctIndex: 0 },
      { question: "¿Cuál es la familia rival de CJ en GTA: San Andreas?", options: ["Ballas", "Vagos", "Mafia", "Yakuza"], correctIndex: 0 },
      { question: "¿Qué personaje famoso aparece como aliado de Trevor en GTA V?", options: ["Lance Vance", "CJ", "Franklin", "Michael"], correctIndex: 0 },
    ],
  },
];
