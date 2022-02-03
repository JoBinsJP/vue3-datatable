export interface FilterDefinition {
    code: string;
    fieldName: string;
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
    textoMultiline = 3,
    password = 4,
    hidenField = 5,
    checkBox = 6,
    radioButton = 7,
    selectionFile = 8,
    comboBox = 9,
    number = 10
}
export declare enum TypeResult {
    date = 0,
    time = 1,
    text = 2,
    boolean = 3,
    number = 4
}
