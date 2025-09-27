package com.example.miprimeraapp;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Button;
import android.view.View;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        TextView pantalla;
        TextView pantalla2;
        Button boton;
        Button boton2;
        EditText entrada;
        EditText entrada2;

        pantalla = findViewById(R.id.screen);
        pantalla2 = findViewById(R.id.screen2);
        boton = findViewById(R.id.click);
        boton2 = findViewById(R.id.click2);
        entrada = findViewById(R.id.enter);
        entrada2 = findViewById(R.id.enter2);

        boton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String texto = entrada.getText().toString();
                pantalla.setText(texto);
                entrada.setText("");
            }
        });
    }
}
