class Producto {
  static id: number = 1;
  static nombre: string = 'test static';
  static precio: string = '120.000';

  static hello(): void {
    console.log(`Hello ${this.nombre}`);
  }
}

console.log('Producto.id: ', Producto.id);
console.log('test');
console.log('test 2');
Producto.hello();

`
    ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
    R/ a veces la flexbilidad no es lo más favorable, ya que se tendría que manejar constantemente los errores de tipos por cuenta propia. Typescript obliga al desarrollador a aplicar buenas prácticas programación, restringiendo la manera en la que se usan los tipos de datos, ya que estos siempre deben ser declarados y pueden ser casteados, pero hay que hacerlo de manera explícita. 
`;
