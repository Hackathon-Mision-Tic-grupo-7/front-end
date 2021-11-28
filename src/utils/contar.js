import { getMonth, getYear } from "./datosfechas"

export const contarPorMesYear = (data = [], mes, year, vars) => {

    return data.filter(item => getMonth(item[vars]) === mes && getYear(item[vars]) === year);
}

export const contarPorYear = (data = [], year, vars) => {

    return data.filter(item => getYear(item[vars]) === year);
}

export const contarPorMes = (data = [], mes, vars) => {

    return data.filter(item => getMonth(item[vars]) === mes);
}
