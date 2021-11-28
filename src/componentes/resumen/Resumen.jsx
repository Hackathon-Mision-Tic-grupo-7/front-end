import React from 'react'
import "../../css/Resumen/resumen.css"
import { GraficaBarras } from '../graficas/GraficaBarras'
import { GraficaLinea } from '../graficas/GraficaLinea'
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'
import '../../css/Resumen/resumen.css'
import vacas from "../../api/apiPruebaBovinos.json"
import medicionVaca from "../../api/apiMedicionesBovinos.json"
import { contarPorMesYear } from '../../utils/contar'
import { getMonth, getYear } from '../../utils/datosfechas'
// import { getDay } from '../../utils/datosfechas'

export const Resumen = () => {
  
  
  const dataset = [
    {
      label: 'Dataset 1',
      data: [1, 5],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [3, 4],
      backgroundColor: 'rgba(53, 162, 235)',
    }
  ]

  const label = ["l1", "l2"]

  const dataset2 = [
    {
      label: 'Dataset 1',
      data: [1, 5, 4],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [3, 4, 2],
      backgroundColor: 'rgba(53, 162, 235)',
    }
  ]

  const label2 = ["l1", "l2", "l3"]

  // console.log((getDay(medicionVaca[0].fecha_muestra)));

  console.log(contarPorMesYear(medicionVaca,6,2021,"fecha_muestra"));
  // console.log(medicionVaca.filter(item => parseInt(item["temperatura"]) === 38));
  

  return (
    <>
      <BarraNavegacion />
      <div className='body-resumen'>
        <h1>Bienvenido a "Nombre finca"</h1>
        <p>Mira las estadisticas de tus bovinos</p>
        <div className="estadisticas-flex">
          <div className="estadistica-graph">
            <GraficaBarras datasets={dataset} labels={label} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={dataset2} labels={label2} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={dataset2} labels={label2} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={dataset2} labels={label2} />
          </div>
        </div>

      </div>
    </>
  )
}


