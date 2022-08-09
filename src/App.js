import toast, { Toaster } from 'react-hot-toast';
import List from './components/List';
import AddToDo from './pages/Todo';
import Router from './routes';

const App = () => {

	
	return (
		<>
			<Toaster position='top-center' />
			<Router/>
		</>
	)
}

export default App