//primero punto //
 class warrior{
    constructor(life,power){
        this.life = life;
        this.power = power;
    }
    attack(){
        return this.power
    }
    defend(damage) {
        this.life -= damage
        console.log(`vida restante:${this.life}`)
    }
 }
 // extension de clase warrior //
 class Maya extends warrior { 
    constructor (life,power,superpower,superlife) {
      super(life, power) // Llama al constructor del padre
      this.superpower =superpower;
      this.superlife = superlife;
      }
    drinkcolao(){
        this.superpower += 10
        console.log(`maya tiene el super poder:${this.superpower}`)
    }
  };
