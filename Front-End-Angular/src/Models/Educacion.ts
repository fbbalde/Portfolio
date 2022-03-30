export class Educacion{
    id:number
    institucion: string
    carrera: string
    fecha:string
    imagenEdu:string
    

    constructor(id:number,institucion: string ="", carrera: string ="", fecha:string="",imagenEdu:string=""){
        this.id=id;
        this.institucion= institucion;
        this.carrera= carrera;
        this.fecha= fecha;
        this.imagenEdu=imagenEdu;
    }

}