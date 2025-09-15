import { AlertCircle, CheckCircle, Info } from 'lucide-react';

const Mensaje = ({ children, tipo }) => {
	const estilos = {
		error: 'bg-red-900/20 border border-red-600 text-red-400',
		exito: 'bg-green-900/20 border border-green-600 text-green-400',
		info: 'bg-blue-900/20 border border-blue-600 text-blue-400'
	};

	const iconos = {
		error: AlertCircle,
		exito: CheckCircle,
		info: Info
	};

	const Icono = iconos[tipo] || AlertCircle;

	return (
		<div className={`p-4 rounded-lg flex items-center gap-3 font-semibold ${estilos[tipo] || estilos.error}`}>
			<Icono className="w-5 h-5 flex-shrink-0" />
			<span>{children}</span>
		</div>
	);
};
export default Mensaje;
