import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent {

    nombre: string = 'Ironman';

    edad: number = 45;

    get nombreCapitalazado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }

    cambiarHeroe(){
        this.nombre = 'Alain';
    }

    cambiarEdad(){
        this.edad = 34;

    }



}