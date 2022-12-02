export type DespesaDTO = {
    idDespesa?:         String;
    IdDespesaOwner:     String;
    IdTipoDespesa:      String;
    idMoeda:            Number;
    valor:              Number;
    createdAt?:         Date;
    updatedAt?:         Date;
    dataDespesa:        Date;
    localDespesa:       String;
    comentario?:        String;
    imageNF?:           String;
    idStatus:           Number;
    dateApproved?:      Date;
}