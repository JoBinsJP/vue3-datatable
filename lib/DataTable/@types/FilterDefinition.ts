export interface FilterDefinition{
    code: string;
    indice: number;
    format?:string;
    typeControl: TypeControl;
    dataControl?: any[],
    defaultVauel?: any,
    keyProperty?: string;
    valueProperty?: string;
    typeData: TypeResult
}
export enum TypeControl{
    date,
    hour,
    text,
    textoMultiline,
    password,
    hidenField,
    checkBox,
    radioButton,
    selectionFile,
    comboBox,
    number
}
export enum TypeResult{
    date,
    time,
    text,
    boolean,
    number
}