export class Alumnado{
    constructor(
        public nombre:string,
        public apellidos:string,
        public dni:string, 
        public fechaNacimiento:Date, 
        public poblacion:string,
        public telefono:number,
        public curso:string,
        public listamodulos:Array<String>
    ){}

    public toString = () : String => {
        var cadena = this.nombre + " " + this.apellidos + " " + this.dni + " " + this.fechaNacimiento+ " " + this.poblacion + " " + this.telefono + " " + this.curso;
        for (let i = 0; i < this.listamodulos.length; i++) {
            cadena = cadena + " " + this.listamodulos[i];
        }

        return cadena;
    }
}