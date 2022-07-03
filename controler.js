import { cosasDom } from "./js/modules/funciones.js";
import { paginas } from "./js/modules/vistas.js";
import { inicio } from "./js/vistas/datos.js";
(async () => {
  //  const estilo = document.getElementById("estilo").item;
  const main = document.getElementById("main");
  window.addEventListener("hashchange", async () => {
    console.log(location.hash);
    const css = "./css/" + location.hash.split("#")[1] + ".css";
    cosasDom.changeCSS(css, 1);
    const direccion = location.hash.split("#")[1];
    const c = await paginas.ruta(direccion);
    main.innerHTML = eval("`" + c + "`");
  });
})();
