import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { RotateCcw, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      return gasto.cantidad + total;
    }, 0);

    const totalDisponible = presupuesto - totalGastado;

    // Calcular el % gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const handleResetApp = () => {
    const result = confirm('¿Deseas Reiniciar Presupuesto y Gastos?');

    if (result) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64">
              <CircularProgressbar
                value={porcentaje}
                styles={buildStyles({
                  pathColor: porcentaje > 100 ? '#DC2626' : '#2563eb',
                  trailColor: '#334155',
                  textColor: porcentaje > 100 ? '#DC2626' : '#2563eb',
                  pathTransitionDuration: 1.5,
                })}
                text={`${porcentaje}% Gastado`}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <button 
              className="btn-danger w-full flex items-center justify-center gap-2 mb-6" 
              type="button" 
              onClick={handleResetApp}
            >
              <RotateCcw className="w-5 h-5" />
              Resetear App
            </button>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg border border-slate-600">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300 font-semibold">Presupuesto:</span>
                </div>
                <span className="text-blue-400 font-bold text-xl">{formatearCantidad(presupuesto)}</span>
              </div>
              
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                disponible < 0 
                  ? 'bg-red-900/20 border-red-600 text-red-400' 
                  : 'bg-green-900/20 border-green-600 text-green-400'
              }`}>
                <div className="flex items-center gap-3">
                  {disponible < 0 ? (
                    <TrendingDown className="w-6 h-6" />
                  ) : (
                    <TrendingUp className="w-6 h-6" />
                  )}
                  <span className="font-semibold">Disponible:</span>
                </div>
                <span className="font-bold text-xl">{formatearCantidad(disponible)}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-orange-900/20 rounded-lg border border-orange-600">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-orange-400" />
                  <span className="text-orange-400 font-semibold">Gastado:</span>
                </div>
                <span className="text-orange-400 font-bold text-xl">{formatearCantidad(gastado)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ControlPresupuesto;
