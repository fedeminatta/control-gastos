import { Receipt, Inbox } from 'lucide-react';
import Gasto from './Gasto';

const ListadoGastos = ({
	gastos,
	setGastoEditar,
	eliminarGasto,
	filtro,
	gastosFiltrados,
}) => {
	const gastosAMostrar = filtro ? gastosFiltrados : gastos;
	const hayGastos = gastosAMostrar.length > 0;

	return (
		<div className="max-w-4xl mx-auto">
			<div className="flex items-center gap-3 mb-6">
				<Receipt className="w-8 h-8 text-blue-400" />
				<h2 className="text-3xl font-bold text-gray-100">
					{hayGastos ? 'Tus Gastos' : 'No Hay Gastos Aún'}
				</h2>
			</div>

			{!hayGastos ? (
				<div className="card p-12 text-center">
					<Inbox className="w-16 h-16 text-gray-500 mx-auto mb-4" />
					<p className="text-xl text-gray-400 mb-2">
						{filtro ? 'No hay gastos en esta categoría' : 'Aún no has registrado gastos'}
					</p>
					<p className="text-gray-500">
						{filtro ? 'Prueba con otra categoría' : 'Comienza agregando tu primer gasto'}
					</p>
				</div>
			) : (
				<div className="space-y-4">
					{gastosAMostrar.map((gasto) => (
						<Gasto
							key={gasto.id}
							gasto={gasto}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
						/>
					))}
				</div>
			)}
		</div>
	);
};
export default ListadoGastos;
