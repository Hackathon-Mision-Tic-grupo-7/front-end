import React from 'react'
import "../../css/Resumen/resumen.css"
import { GraficaBarras } from '../graficas/GraficaBarras'
import { GraficaLinea } from '../graficas/GraficaLinea'
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'
import '../../css/Resumen/resumen.css'
import vacas from "../../api/apiPruebaBovinos.json"
import medicionVaca from "../../api/apiMedicionesBovinos.json"
import { contarPorMesYear, contarPorMesYearDatoVital, contarVariosMesYearDatoVital } from '../../utils/contar'
import { genMonths, getMonth, getYear } from '../../utils/datosfechas'
import { genDataSet, generarDataSetVariosMesYearDatoVital } from '../../utils/genDataSet'

export const Resumen = () => {

  const year = 2021;
  const meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  const label = genMonths(meses);

  //Datos temperatura
  const datasetT = generarDataSetVariosMesYearDatoVital(medicionVaca, meses, year, "fecha_muestra", "temperatura", [37.7, 39])

  //Datos frecuencia cardiaca
  const datasetLpm = generarDataSetVariosMesYearDatoVital(medicionVaca, meses, year, "fecha_muestra", "FC", [40, 80])

  //Datos frecuencia respiratoria
  const datasetRpm = generarDataSetVariosMesYearDatoVital(medicionVaca, meses, year, "fecha_muestra", "FR", [10, 30])

 
  return (
    <>
      <BarraNavegacion />
      <div className='body-resumen'>
        <h1>Bienvenido a "Nombre finca"</h1>
        <p>Mira las estadisticas de tus bovinos</p>
        <p>Año {year}</p>
        <div className="estadisticas-flex">
          <div className="estadistica-graph">
            <GraficaBarras datasets={datasetT} labels={label} title="Temperatura (°C)" />
          </div>

          <div className="estadistica-graph">
            <GraficaBarras datasets={datasetLpm} labels={label} title="Frecuencia cardiaca (Lpm)" />
          </div>

          <div className="estadistica-graph">
            <GraficaBarras datasets={datasetRpm} labels={label} title="Frecuencia Respiratoria (Lpm)" />
          </div>
        </div>

      </div>
    </>
  )
}


