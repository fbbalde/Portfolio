import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
 @Input() texto: string= "";
 @Input() clasesAd: string="";
constructor() { }

  ngOnInit(): void {
  }

}
