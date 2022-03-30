export class Experiencia{
    id:number
    icono: string
    trabajo: string
    fecha:string
    tareas:string

    constructor(id:number,icono: string ="", trabajo: string ="", fecha:string="",tareas:string=""){
        this.id=id;
        this.icono= icono;
        this.trabajo= trabajo;
        this.fecha= fecha;
        this.tareas=tareas;
    }

}