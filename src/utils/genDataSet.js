// const dataset = [
//     {
//       label: 'Dataset 1',
//       data: [1, 5],
//       backgroundColor: 'rgba(255, 99, 132)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [3, 4],
//       backgroundColor: 'rgba(53, 162, 235)',
//     }
//   ]



export const genDataVars = (typeDataSet = "Bar", dataArray, nameDataSet = "Dataset 1") => {
    if (typeDataSet === "Bar"){
        return [dataArray[0],{
            label: nameDataSet,
            data: dataArray[1],
            backgroundColor: `"rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})"`
        }
    }
    else if(typeDataSet === "Lin"){

    }
}