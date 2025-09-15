import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({
	gastos,
	setGastos,
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
}) => {
	return (
		<header className='bg-gradient-to-r from-slate-800 to-slate-900 py-12 mb-8 px-10 mt-20 mx-auto rounded-xl w-[92%] shadow-2xl'>
			<div className='container mx-auto px-4'>
				<h1 className='text-8xl md:text-10xl text-center text-blue-400 font-bold uppercase tracking-wider mb-8 '>
					Planificador de Gastos
				</h1>

				{isValidPresupuesto ? (
					<ControlPresupuesto
						gastos={gastos}
						setGastos={setGastos}
						presupuesto={presupuesto}
						setPresupuesto={setPresupuesto}
						setIsValidPresupuesto={setIsValidPresupuesto}
					/>
				) : (
					<NuevoPresupuesto
						presupuesto={presupuesto}
						setPresupuesto={setPresupuesto}
						setIsValidPresupuesto={setIsValidPresupuesto}
					/>
				)}
			</div>
		</header>
	);
};
export default Header;
