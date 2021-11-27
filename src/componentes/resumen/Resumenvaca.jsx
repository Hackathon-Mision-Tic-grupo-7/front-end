import React from 'react'
import "../../css/Resumen/resumen.css"
import { GraficaBarras } from '../graficas/GraficaBarras'
import { GraficaLinea } from '../graficas/GraficaLinea'
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'
import '../../css/Resumen/resumen.css'

export const ResumenVaca = () => {
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


  return (
    <>
      <BarraNavegacion />
      <div className='body-resumen'>
        <h1>Revisa las estadisticas de tu bovino "id Bovino"</h1>

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


