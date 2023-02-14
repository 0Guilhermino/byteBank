import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "src/app/models/transferencia";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();
   
    valor: number ;
    destino: number;

    constructor(private service: TransferenciaService, private router: Router){}

    transferir(){
        console.log("Solicitada nova transferência");

        const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }

        this.service.adicionarNovaTransferencia(valorEmitir).subscribe(resultado => {
            console.log(resultado);
            this.limparFormulario();
            this.router.navigateByUrl("extrato");
         },
         (error) => console.log(error)
        );
        
        
    }

    limparFormulario(){
        this.valor = null;
        this.destino = null;
    }

}