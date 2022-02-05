import FilterDataList from "./FilterDataList";
export interface FilterDefinition {
    code: string;
    indice: number;
    format?: string;
    list?: FilterDataList[];
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
    list = 4,
    textoMultiline = 5,
    password = 6,
    hidenField = 7,
    checkBox = 8,
    radioButton = 9,
    selectionFile = 10,
    comboBox = 11,
    number = 12
}
export declare enum TypeResult {
    date = 0,
    time = 1,
    text = 2,
    boolean = 3,
    number = 4
}
