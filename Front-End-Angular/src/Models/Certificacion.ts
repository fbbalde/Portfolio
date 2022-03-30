export class Certificacion{
    id:number
    icono: string
    titulo: string
    otorgadoPor:string
    fecha:string
    constructor(id:number,icono: string ="", titulo: string ="", fecha:string="",otorgadoPor:string=""){
        this.id=id;
        this.icono= icono;
        this.titulo= titulo;
        this.fecha= fecha;
        this.otorgadoPor=otorgadoPor;
    }

}