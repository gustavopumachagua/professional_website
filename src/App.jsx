import { useState, useEffect } from "react";
import { MdSignalWifiOff } from "react-icons/md"; // Icono para la alerta
import { FaSpinner } from "react-icons/fa"; // Icono para el loader
import Home from "./pages/Home";

const App = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simula la carga inicial de la aplicación
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el loader después de 2 segundos
    }, 2000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(timer); // Limpia el temporizador
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <FaSpinner className="text-4xl text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Alerta de conexión */}
      {isOffline && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center p-2 flex items-center justify-center z-50 shadow-md">
          <MdSignalWifiOff className="mr-2 text-2xl" />
          <span>Sin señal. Estás trabajando sin conexión.</span>
        </div>
      )}
      <Home />
    </div>
  );
};

export default App;
