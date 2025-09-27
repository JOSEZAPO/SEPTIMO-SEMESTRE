package com.example.calcualdorapropinas;

// Se indica el paquete principal de la aplicación, necesario para que Android
// identifique las clases y recursos pertenecientes a este proyecto.
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

// Librerías de AndroidX para compatibilidad con versiones recientes y funcionalidades modernas
import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

// Declaración de la clase principal de la aplicación que hereda de AppCompatActivity
// Esto permite que la actividad tenga compatibilidad con ActionBar, temas modernos y ciclo de vida de Android
public class MainActivity extends AppCompatActivity {

    // Declaración de las variables que se usarán para manipular los elementos de la interfaz
    TextView total;       // Mostrará el total que paga cada persona
    EditText cuenta;      // Entrada de texto para el monto total de la cuenta
    EditText personas;    // Entrada de texto para la cantidad de personas
    Button calcular;      // Botón que ejecutará el cálculo de propina

    // Declaración de los RadioButtons que permiten seleccionar el porcentaje de propina
    RadioButton cinco;    // RadioButton para 5%
    RadioButton diez;     // RadioButton para 10%
    RadioButton quince;   // RadioButton para 15%

    // Método onCreate, que se ejecuta al iniciar la actividad
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);  // Llama al constructor de la superclase
        EdgeToEdge.enable(this);             // Habilita que la UI pueda mostrarse extendida detrás de barras de navegación o estado
        setContentView(R.layout.activity_main); // Vincula este Activity con el layout XML correspondiente (activity_main.xml)

        // Asignación de los elementos de la interfaz a las variables usando findViewById
        // Esto permite manipular los elementos desde código Java
        personas = findViewById(R.id.personas);
        cuenta = findViewById(R.id.cuenta);
        cinco = findViewById(R.id.cinco);
        diez = findViewById(R.id.diez);
        quince = findViewById(R.id.quince);
        calcular = findViewById(R.id.calcula);
        total = findViewById(R.id.total);

        // Configuración del listener del botón "calcular"
        // Al hacer clic en el botón, se ejecuta el código dentro de onClick
        calcular.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                // Se obtienen los textos ingresados por el usuario en los EditText
                String cuentaTxt = cuenta.getText().toString();      // Total de la cuenta
                String personasTxt = personas.getText().toString();  // Número de personas

                // Validación básica: verificar que los campos no estén vacíos
                // Si alguno está vacío, se muestra un mensaje y se detiene la ejecución
                if(cuentaTxt.isEmpty() || personasTxt.isEmpty()){
                    Toast.makeText(MainActivity.this, "Ingresa todos los datos", Toast.LENGTH_SHORT).show();
                    return; // Sale del método onClick para evitar errores
                }

                // Declaración de variables para almacenar los valores numéricos después de convertirlos
                double montoCuenta;   // Monto total de la cuenta convertido a double
                int numPersonas;      // Número de personas convertido a entero

                // Intento de conversión de los textos a números
                try {
                    montoCuenta = Double.parseDouble(cuentaTxt);  // Convierte String a double para operaciones matemáticas
                    numPersonas = Integer.parseInt(personasTxt);  // Convierte String a entero
                } catch (NumberFormatException e) {
                    // Si ocurre un error al convertir (por ejemplo, ingreso texto no numérico)
                    // se muestra un mensaje de error y se detiene la ejecución
                    Toast.makeText(MainActivity.this, "Ingresa valores válidos", Toast.LENGTH_SHORT).show();
                    return;
                }

                // Validación: el número de personas debe ser mayor a 0
                // Evita división por cero y errores en el cálculo
                if(numPersonas <= 0){
                    Toast.makeText(MainActivity.this, "El número de personas debe ser mayor a 0", Toast.LENGTH_SHORT).show();
                    return;
                }

                // Determinar el porcentaje de propina según el RadioButton seleccionado
                double porcentaje = 0;  // Inicializa el porcentaje en 0
                if(cinco.isChecked()){   // Si el usuario seleccionó 5%
                    porcentaje = 0.05;
                } else if(diez.isChecked()){  // Si el usuario seleccionó 10%
                    porcentaje = 0.10;
                } else if(quince.isChecked()){ // Si el usuario seleccionó 15%
                    porcentaje = 0.15;
                } else {
                    // Si no se seleccionó ningún RadioButton, se muestra un mensaje de error
                    Toast.makeText(MainActivity.this, "Selecciona un porcentaje de propina", Toast.LENGTH_SHORT).show();
                    return;
                }

                // Cálculo del total con propina incluida
                double totalConPropina = montoCuenta * (1 + porcentaje);

                // Cálculo del total que debe pagar cada persona dividiendo entre el número de personas
                double totalPorPersona = totalConPropina / numPersonas;

                // Se muestra el resultado en el TextView, formateando a 2 decimales y agregando el símbolo de moneda
                total.setText(String.format("$ %.2f", totalPorPersona));
            }
        });
    }
}
