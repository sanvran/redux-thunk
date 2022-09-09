import toast, { Toaster } from 'react-hot-toast';
import List from './components/List';
import AddToDo from './pages/Todo';
import Router from './routes';
import { AuthProvider } from './utils/auth';

const App = () => {


	return (
		<>
			{/* <AuthProvider > */}
				<Toaster position='top-center' />
				<Router />
			{/* </AuthProvider> */}
		</>
	)
}

export default App