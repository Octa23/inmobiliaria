import React from "react";

import Propiedad from "./Propiedad";

const Listad = ({producto}) =>
  producto.map((propiedad) => <Propiedad key={propiedad.Id} propiedad={propiedad} />);

export default Listad;
