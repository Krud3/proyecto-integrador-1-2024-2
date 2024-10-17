import { cloneElement, useEffect, useState } from 'react';

function Ready({ setReady }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 3000); 
    return () => clearTimeout(timer);
  }, [setReady]);
  return null;
}

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <>
      {clicked && cloneElement(children, { ready: ready })}
      {!clicked && (
        <>
          <Ready setReady={setReady} />

          <div className={`fullscreen bg ${ready ? 'ready' : 'notready'}`}>
            <div className="stack">
              <button onClick={() => setClicked(true)}>
                {!ready ? 'Cargando...' : 'Click para continuar'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
