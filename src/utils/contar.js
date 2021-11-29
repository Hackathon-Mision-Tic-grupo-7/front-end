import {getMonth, getYear } from "./datosfechas"

export const contarPorMesYear = (data = [], mes, year, varFecha) => {

    return data.filter(item => getMonth(item[varFecha]) === mes && getYear(item[varFecha]) === year);
}

export const contarPorMesYearDatoVital = (data = [], mes, year, varFecha, dVital={varVt:"",saludable:true,min:0,max:0}) => {
    // dVital={varVt:"",saludable=true,min:0,max:0}
    // varVt: Variable a buscar
    // saludable: Buscar datos en el rango saludable
    // min, max: limites de salud saludable

    const datosGen = contarPorMesYear(data, mes, year, varFecha)
    if (dVital.saludable) {
        return datosGen.filter(item => item[dVital.varVt] >= dVital.min && item[dVital.varVt] <= dVital.max);
    }
    else{
        return datosGen.filter(item => item[dVital.varVt] < dVital.min || item[dVital.varVt] > dVital.max);
    }
}

export const contarVariosMesYearDatoVital = (data = [], meses = [], year, varFecha, dVital={varVt:"",saludable:true,min:0,max:0}, contarData=false) => {
    // dVital={varVt:"",saludable=true,min:0,max:0}
    // varVt: Variable a buscar
    // saludable: Buscar datos en el rango saludable
    // min, max: limites de salud saludable
    const dataList = []
    if(contarData){
        meses.forEach((mes) => {
            dataList.push(contarPorMesYearDatoVital(data, mes, year, varFecha, dVital).length)
        })
    }else{
        meses.forEach((mes) => {
            dataList.push(contarPorMesYearDatoVital(data, mes, year, varFecha, dVital))
        })
    }

    return dataList;
}



export const contarVariosMesesYear = (data = [], meses = [], year, varFecha) => {
    
    const dataList = []
    meses.forEach((mes) => {
        dataList.push(contarPorMesYear(data, mes, year, varFecha))
    })

    return dataList;
}

export const contarPorYear = (data = [], year, varFecha) => {

    return data.filter(item => getYear(item[varFecha]) === year);
}

export const contarPorMes = (data = [], mes, varFecha) => {

    return data.filter(item => getMonth(item[varFecha]) === mes);
}




