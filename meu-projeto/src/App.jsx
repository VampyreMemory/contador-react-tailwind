import { useState } from "react";
function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Teste de React + Tailwind</h1>
      <p>Aqui aparece o número {contador}</p>
      <button
        onClick={() => setContador(contador + 1)}
        className="px-4 py-2 bg-red-700 rounded hover:bg-green-800"
      >
        Aumente Aqui
      </button>
      <button
        onClick={() => setContador(contador - 1)}
        className="px-4 py-2 bg-yellow-500 rounded hover:bg-green-800"
      >
        Diminua Aqui
      </button>
    </div>
  );
}

export default App;
