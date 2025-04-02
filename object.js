/*Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(),
 que muestra por pantalla las propiedades de la persona*/

 class Persona{
    constructor(nombre, edad, genero,) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero= genero;
      
    }
    obtdetalles() {
      console.log(`mi nombre es ${this.nombre}  con ${this.edad} años  y genero ${this.genero}`);
    }
  }
  
  let Mipersona = new Persona("Dina", "24", "femenino",);
  Mipersona.obtdetalles();

//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(),
//  que muestre por pantalla el resultado.//

  class Estudiante extends Persona{ 
    constructor (nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.curso = curso;
      this.grupo = grupo;
      }
  
  registrar() {
    console.log(`Nombre: ${this.nombre}
   Edad: ${this.edad}
   Género: ${this.genero}
   Curso: ${this.curso}
  Grupo: ${this.grupo}`);
  }
  }

let Miestudiante = new Estudiante("Dina", "24", "femenino", "11", "4b");
Miestudiante.registrar();
  // Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(),
  //  que muestre por pantalla el resultado.

  class Profesor extends Persona{ 
    constructor (nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.asignatura = asignatura;
      this.nivel = nivel;
      }
  
  asignar() {
    console.log(`Nombre: ${this.nombre}
   Edad: ${this.edad}
   Género: ${this.genero}
  asignatura: ${this.asignatura}
  nivel: ${this.nivel}`);
  }
  }
  let Miprofesor = new Profesor("Dina", "24", "femenino", "matematicas", "3");
Miprofesor.asignar();
 
  //
  
  
 