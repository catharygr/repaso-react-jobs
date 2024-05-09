import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CuentaAtras({ valorInicial = 60 }) {
  const [cuentaAtras, setCuentaAtras] = useState(valorInicial);
  const referencia = useRef(cuentaAtras);

  useEffect(() => {
    referencia.current = cuentaAtras;
  }, [cuentaAtras]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (referencia.current <= 0) {
        clearInterval(interval);
        return;
      }
      setCuentaAtras((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <h1>Cuenta atrás</h1>
      <p>El contador se decrementara cada segundo</p>
      <p>{cuentaAtras}</p>
    </div>
  );
}
