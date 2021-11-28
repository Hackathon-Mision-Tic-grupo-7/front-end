import React ,{useState}from 'react'
import "../../css/Resumen/resumen.css"
import { GraficaBarras } from '../graficas/GraficaBarras'
import { GraficaLinea } from '../graficas/GraficaLinea'
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'
import '../../css/Resumen/resumen.css'
import { useParams} from 'react-router-dom';

export const ResumenVaca = () => {
  const { _id } = useParams();
  let data = require("../../api/apiMedicionesBovinos.json");

  const sortedData = data.sort((a, b) => b.fecha_muestra - a.fecha_muestra)
  const tem = [];
  const label2 = [];
 const rpm = [];
 const lpm = [];
 const malacardi = [];
 const malresp = [];
 const maltem = [];


 

  {sortedData.map((data)=>{
    if(data.idbovino.$oid === _id ){
      tem.push(data.temperatura);
      rpm.push(data.FR);
      lpm.push(data.FC);
    
    if(data.FC>80 || data.FC<40){
      malacardi.push(data.FC);
    }
    if(data.FR >30 || data.FR<10){
      malresp.push(data.FR)
    }
    if(data.temperatura>39 || data.temperatura<37.7){
      maltem.push(data.temperatura)
    }
  }
  })}
  for ( var i = 1; i <= tem.length; i++) {
    label2.push(i);
 }

  const dataset = [
    {
      label: 'Temperatura',
      data: Array(1).fill(maltem.length),
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Latidos',
      data: Array(1).fill(malacardi.length),
      backgroundColor: 'rgba(53, 162, 235)',
    },
    {
      label: 'Respiraciones',
      data: Array(1).fill(malresp.length),
      backgroundColor: 'rgba(57, 180, 205)',
    }
  ]

  const label = ["Datos fuera rango"]

  const temperatura = [
    {
      label: 'Temperatura Vaca',
      data: tem,
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'temperatura media',
      data: Array(24).fill(38.5),
      backgroundColor: 'rgba(53, 162, 235)',
    }
  ]
  const respiracion = [
    {
      label: 'Respiraciones por minuto',
      data: rpm,
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'respiraciones promedias',
      data: Array(24).fill(23),
      backgroundColor: 'rgba(53, 162, 235)',
    }
  ]
  const latidos = [
    {
      label: 'Latidos por minuto',
      data: tem,
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'latidos promedio',
      data: Array(24).fill(60),
      backgroundColor: 'rgba(53, 162, 235)',
    }
  ]



  


  return (
    <>
      <BarraNavegacion />
      <div className='body-resumen'>
        <h1>Revisa las estadisticas de tu bovino</h1>

        <div className="estadisticas-flex">
          <div className="estadistica-graph">
            <GraficaBarras datasets={dataset} labels={label} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={temperatura} labels={label2} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={respiracion} labels={label2} />
          </div>
          <div className="estadistica-graph">
            <GraficaLinea datasets={latidos} labels={label2} />
          </div>
        </div>

      </div>
    </>
  )
}


