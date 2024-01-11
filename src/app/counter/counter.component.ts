export class CounterComponent{
  public nombre: string= 'Alvaro';
  public edad: number=this.calcularEdad();

  public calcularEdad(){

    const longevidad= 2023-1981;
    return longevidad;


  }



}
