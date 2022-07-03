import { impor } from "../config/importadores.js";
//lo que hace es mandar la ruta o el nombre de la pagina y devuelve el html
export const paginas = {

  ruta: async function (e) {
    console.log(e);
    //return await eval("this." + e);
    return await impor(e);
  },
};
