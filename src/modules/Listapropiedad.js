import React from "react";

import Propiedad from "./Propiedad";

const Listad = ({producto}) =>
  producto.map((propiedad, indice) => {
    const nuevo = indice >= producto.length - 5;

    propiedad = {
      ...propiedad,
      nuevo,
    };

    return <Propiedad key={propiedad.Id} propiedad={propiedad} />;
  });

export default Listad;
