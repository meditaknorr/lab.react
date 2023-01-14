import { Provider } from 'react-redux';
import { Store as store } from '@@reduxStore/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className={'HOC'}>Test</div>
    </Provider>
  );
}
