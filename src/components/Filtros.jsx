import { Filter } from 'lucide-react';

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-6 h-6 text-blue-400" />
            <label className="text-lg font-semibold text-gray-300">
              Filtrar Gastos
            </label>
          </div>
          <select 
            className="select-field flex-1 max-w-xs" 
            value={filtro} 
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">-- Todas las categorías --</option>
            <option value="ahorro">💰 Ahorro</option>
            <option value="comida">🍕 Comida</option>
            <option value="casa">🏠 Casa</option>
            <option value="gasto">💸 Gastos varios</option>
            <option value="ocio">🎮 Ocio</option>
            <option value="salud">⚕️ Salud</option>
            <option value="suscripciones">📱 Suscripciones</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filtros;
