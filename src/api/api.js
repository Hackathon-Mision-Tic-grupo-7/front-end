import axios from 'axios';
//import { nanoid } from 'nanoid';

const baseURL = "https://hackathon-backend1.herokuapp.com"



export const obtenerRegistros = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/api/mediciones`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearRegistro = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/api/mediciones`,
    headers: { 'Content-Type': 'application/json'},
   data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}; 

export const obtenerRegistroBovino = async (id,successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/api/mediciones/${id}`,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  

export const crearUsuarioAdmin = async (data, successCallback, errorCallback) =>{
    const options ={
        method:'POST',
        url :`${baseURL}/api/administradores`,
        headers: { 'Content-Type': 'application/json'},
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}; 
export const crearUsuarioGestor = async (data, successCallback, errorCallback) =>{
    const options ={
        method:'POST',
        url :`${baseURL}/api/gestores`,
        headers: { 'Content-Type': 'application/json'},
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}; 

export const obtenerUsuarios = async (successCallback, errorCallback ) => {
  const options = { 
    method: 'GET', 
    url: `${baseURL}/usuarios/`,

  
};
await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearBovino = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/api/bovinos`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerBovinos = async(successCallBack,errorCallBack) =>{
  const options = { method: 'GET', url: `${baseURL}/api/bovinos/`};

  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack);
};
