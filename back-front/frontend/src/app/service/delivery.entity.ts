export type Delivery = {

  id?: string;

  clienteId: string;

  dataRitiro: Date;

  dataConsegna?: Date;

  stato:
    | 'Da ritirare'
    | 'In deposito'
    | 'In consegna'
    | 'Consegnata'
    | 'In giacenza';

  chiaveConsegna?: string;
}