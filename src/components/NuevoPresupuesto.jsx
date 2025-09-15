import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
	presupuesto,
	setPresupuesto,
	setIsValidPresupuesto,
}) => {
	const [mensaje, setMensaje] = useState('');

	const handlePresupuesto = (e) => {
		e.preventDefault();

		if (!presupuesto || presupuesto < 0) {
			setMensaje('No es un presupuesto válido');
			setIsValidPresupuesto(false);
			return;
		}

		setMensaje('');
		setIsValidPresupuesto(true);
	};

	return (
		<div className="max-w-2xl mx-auto">
			<div className="card p-8">
				<div className="flex items-center justify-center mb-6">
					<DollarSign className="w-12 h-12 text-blue-400 mr-3" />
					<h2 className="text-3xl font-bold text-blue-400">Definir Presupuesto</h2>
				</div>
				
				<form onSubmit={handlePresupuesto} className="space-y-6">
					<div>
						<label className="block text-lg font-semibold text-gray-300 mb-3 text-center">
							Ingresa tu presupuesto mensual
						</label>
						<input
							type="number"
							className="input-field w-full text-center text-xl"
							placeholder="$0.00"
							value={presupuesto}
							onChange={(e) => setPresupuesto(Number(e.target.value))}
						/>
					</div>

					<button type="submit" className="btn-primary w-full text-xl py-4">
						Establecer Presupuesto
					</button>

					{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
				</form>
			</div>
		</div>
	);
};
export default NuevoPresupuesto;
