export interface FilterDefinition {
    code: string;
    indice: number;
    format?: string;
    typeControl: TypeControl;
    dataControl?: any[];
    defaultVauel?: any;
    keyProperty?: string;
    valueProperty?: string;
    typeData: TypeResult;
}
export declare enum TypeControl {
    date = 0,
    hour = 1,
    text = 2,
    dateRange = 3,
    textoMultiline = 4,
    password = 5,
    hidenField = 6,
    checkBox = 7,
    radioButton = 8,
    selectionFile = 9,
    comboBox = 10,
    number = 11
}
export declare enum TypeResult {
    date = 0,
    time = 1,
    text = 2,
    boolean = 3,
    number = 4
}
