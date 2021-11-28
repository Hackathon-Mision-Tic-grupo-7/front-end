import { contarVariosMesYearDatoVital } from "./contar"

export const genDataVars = (dataArray, nameDataSet = "Dataset 1") => {

    return {
        label: nameDataSet,
        data: dataArray,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
}

export const genDataSet = (dataArray=[], nameDataSets = ["Dataset 1"]) => {

    let dataSet = []

    for(let i=0;i < nameDataSets.length; i++){
        dataSet.push(genDataVars(dataArray[i], nameDataSets[i]))
    }
    return dataSet 
}

export const generarDataSetVariosMesYearDatoVital= (data, meses=[], year, varFecha, variableAGraficar, datosMinMax = [], nameDataSets = ["Saludables", "No saludables"]) => {
  const datosVitales = {
    varVt: variableAGraficar,
    saludable: true,
    min: datosMinMax[0],
    max: datosMinMax[1]
  }

  const dataList = [
    contarVariosMesYearDatoVital(data, meses, year, varFecha, datosVitales, true),
    contarVariosMesYearDatoVital(data, meses, year, varFecha, {...datosVitales, saludable: false}, true)
  ]

  return genDataSet(dataList, nameDataSets)
}