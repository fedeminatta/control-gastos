import { formatearFecha } from '../helpers/index';
import {
	Edit,
	Trash2,
	PiggyBank,
	Home,
	UtensilsCrossed,
	CreditCard,
	Gamepad2,
	Heart,
	Smartphone,
	Calendar,
} from 'lucide-react';

import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const diccionarioIconos = {
	ahorro: PiggyBank,
	casa: Home,
	comida: UtensilsCrossed,
	gasto: CreditCard,
	ocio: Gamepad2,
	salud: Heart,
	suscripciones: Smartphone,
};

const coloresCategoria = {
	ahorro: 'text-green-400 bg-green-900/20 border-green-600',
	casa: 'text-blue-400 bg-blue-900/20 border-blue-600',
	comida: 'text-orange-400 bg-orange-900/20 border-orange-600',
	gasto: 'text-purple-400 bg-purple-900/20 border-purple-600',
	ocio: 'text-pink-400 bg-pink-900/20 border-pink-600',
	salud: 'text-red-400 bg-red-900/20 border-red-600',
	suscripciones: 'text-cyan-400 bg-cyan-900/20 border-cyan-600',
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
	const { categoria, nombre, cantidad, id, fecha } = gasto;
	const IconoCategoria = diccionarioIconos[categoria];

	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction
				onClick={() => setGastoEditar(gasto)}
				className='bg-blue-600 text-white flex items-center justify-center gap-2 font-semibold'
			>
				<Edit className='w-5 h-5' />
				Editar
			</SwipeAction>
		</LeadingActions>
	);

	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction
				onClick={() => eliminarGasto(id)}
				destructive={true}
				className='bg-red-600 text-white flex items-center justify-center gap-2 font-semibold'
			>
				<Trash2 className='w-5 h-5' />
				Eliminar
			</SwipeAction>
		</TrailingActions>
	);

	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<div
					className='card p-6 hover:shadow-xl transition-all duration-300 cursor-pointer'
					onClick={() => setGastoEditar(gasto)}
				>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<div
								className={`p-3 rounded-full border ${coloresCategoria[categoria]}`}
							>
								<IconoCategoria className='w-8 h-8' />
							</div>

							<div className='space-y-1'>
								<div className='flex items-center gap-2'>
									<span
										className={`py-1 rounded-full text-base font-semibold uppercase tracking-wide ${coloresCategoria[categoria]}`}
									>
										{categoria}
									</span>
								</div>
								<h3 className='text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors'>
									{nombre}
								</h3>
								<div className='flex items-center gap-2 text-gray-400'>
									<Calendar className='w-4 h-4' />
									<span className='text-sm'>
										Agregado el {formatearFecha(fecha)}
									</span>
								</div>
							</div>
						</div>

						<div className='text-right'>
							<p className='text-3xl font-bold text-blue-400'>
								${cantidad.toLocaleString()}
							</p>
						</div>
					</div>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	);
};
export default Gasto;
