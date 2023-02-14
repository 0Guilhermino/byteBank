import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transferencia } from "src/app/models/transferencia";


@Injectable({
    providedIn: 'root'
})
export class TransferenciaService {
    private listaDeTransferencia: any[];
    private URL = "http://localhost:3000/transferencias";
    
    constructor(private httpClient: HttpClient) {
        this.listaDeTransferencia = [];
    }

    get transferencias(){
        return this.listaDeTransferencia;
    }

    ExibeTodasTransferências(): Observable<Transferencia[]>{
        return this.httpClient.get<Transferencia[]>(this.URL)
    }

    adicionarNovaTransferencia(transferencia: Transferencia): Observable<Transferencia>{
        this.hidratar(transferencia);

        return this.httpClient.post<Transferencia>(this.URL,transferencia);
    }

    private hidratar(transferencia: any){
        transferencia.data = new Date();
    }

}