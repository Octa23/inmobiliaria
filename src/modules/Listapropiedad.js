import React from "react";

import Propiedad from "./Propiedad";

const Listad = (props) => {
  return props.producto
    .filter((ele) =>
      props.filtro.operacion == "TODOS"
        ? true
        : ele.Operacion.toUpperCase() == props.filtro.operacion,
    )
    .filter((ele) =>
      props.filtro.propiedad == "TODOS"
        ? true
        : ele.Propiedad.toUpperCase() == props.filtro.propiedad,
    )
    .map((propiedad) => {
      return propiedad.Disponible && <Propiedad key={propiedad.Id} propiedad={propiedad} />; //Muestra en la grid los que Disponible != ""
    });
};

export default Listad;
