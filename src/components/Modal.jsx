import { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';
import Mensaje from './Mensaje';

const Modal = ({
	setModal,
	animarModal,
	setAnimarModal,
	guardarGasto,
	gastoEditar,
	setGastoEditar,
}) => {
	const [mensaje, setMensaje] = useState('');
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState('');
	const [categoria, setCategoria] = useState('');
	const [fecha, setFecha] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setNombre(gastoEditar.nombre);
			setCantidad(gastoEditar.cantidad);
			setCategoria(gastoEditar.categoria);
			setId(gastoEditar.id);
			setFecha(gastoEditar.fecha);
		}
	}, []);

	const ocultarModal = () => {
		setAnimarModal(false);
		setGastoEditar({});
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, cantidad, categoria].includes('')) {
			setMensaje('Todos los campos son obligatorios');

			setTimeout(() => {
				setMensaje('');
			}, 1800);
			return;
		}

		guardarGasto({ nombre, cantidad, categoria, id, fecha });
	};

	return (
		<div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
			<div
				className={`card max-w-md w-full transition-all duration-300 transform ${
					animarModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
				}`}
			>
				<div className='flex items-center justify-between p-6 border-b border-dark-600'>
					<div className='flex items-center gap-3'>
						{gastoEditar.nombre ? (
							<Edit className='w-6 h-6 text-blue-400' />
						) : (
							<Plus className='w-6 h-6 text-blue-400' />
						)}
						<h2 className='text-2xl font-bold text-blue-400'>
							{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}
						</h2>
					</div>
					<button
						onClick={ocultarModal}
						className='p-2 hover:bg-dark-700 rounded-lg transition-colors'
					>
						<X className='w-6 h-6 text-gray-400 hover:text-white' />
					</button>
				</div>

				<form onSubmit={handleSubmit} className='p-6 space-y-6'>
					{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

					<div>
						<label
							htmlFor='nombre'
							className='block text-lg font-semibold text-gray-300 mb-2'
						>
							Nombre del Gasto
						</label>
						<input
							id='nombre'
							type='text'
							className='input-field w-full'
							placeholder='Ej. Cena en restaurante'
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
						/>
					</div>

					<div>
						<label
							htmlFor='cantidad'
							className='block text-lg font-semibold text-gray-300 mb-2'
						>
							Cantidad
						</label>
						<input
							id='cantidad'
							type='number'
							className='input-field w-full'
							placeholder='$0.00'
							value={cantidad}
							onChange={(e) => setCantidad(Number(e.target.value))}
						/>
					</div>

					<div>
						<label
							htmlFor='categoria'
							className='block text-lg font-semibold text-gray-300 mb-2'
						>
							Categoría
						</label>
						<select
							id='categoria'
							className='select-field w-full'
							value={categoria}
							onChange={(e) => setCategoria(e.target.value)}
						>
							<option value=''>-- Selecciona una categoría --</option>
							<option value='ahorro'>💰 Ahorro</option>
							<option value='comida'>🍕 Comida</option>
							<option value='casa'>🏠 Casa</option>
							<option value='gasto'>💸 Gastos varios</option>
							<option value='ocio'>🎮 Ocio</option>
							<option value='salud'>⚕️ Salud</option>
							<option value='suscripciones'>📱 Suscripciones</option>
						</select>
					</div>

					<button
						type='submit'
						className='btn-primary w-full flex items-center justify-center gap-2'
					>
						{gastoEditar.nombre ? (
							<>
								<Edit className='w-5 h-5' />
								Guardar Cambios
							</>
						) : (
							<>
								<Plus className='w-5 h-5' />
								Añadir Gasto
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};
export default Modal;
