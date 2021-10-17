import React from "react";

import Propiedad from "./Propiedad";

const Listad = ({producto}) =>
  producto.map((propiedad, indice) => {
    const nuevo = indice >= producto.length - 5;

    propiedad = {
      ...propiedad,
      nuevo,
    };

    return propiedad.Disponible && <Propiedad key={propiedad.Id} propiedad={propiedad} />; //Muestra en la grid los que Disponible != ""
  });

export default Listad;
