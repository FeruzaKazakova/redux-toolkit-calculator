import Calculator from './components/Calculator';
import { Provider } from 'react-redux'
import { store } from './store';
import Header from './components/Header';
import Auth from './components/Auth'


function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Calculator />
      <Auth/>
    </Provider>
  );
}

export default App;
