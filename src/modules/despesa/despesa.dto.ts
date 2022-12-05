export type DespesaDTO = {
    idDespesa?:      string;
    idFat?:          string;
    IdDespesaOwner: string;
    IdTipoDespesa:  number;
    idMoeda:        number;
    valor:          number;
    createdAt:      Date;
    updatedAt:      Date;
    dataDespesa:    Date;
    localDespesa:   string;
    comentario?:     string;
    imageNF?:        string;
    idStatus:       number;
    dateApproved:   Date;
}