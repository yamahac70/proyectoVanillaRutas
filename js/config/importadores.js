export async function impor(strin) {

  //funcion para importar los html los cuales tienen un contenedor con id="main"
  //asi tambien el css que cambia segun la pagina
  const r = await fetch("./js/vistas/" + strin + ".html");
  const res = await r.text();
  const paraseDom = new DOMParser().parseFromString(res, "text/html");
  const elemento = paraseDom.getElementById("main").innerHTML;
  console.log(elemento.replace("=&gt;", "=>"));
  return elemento.replace("=&gt;", "=>");
}
