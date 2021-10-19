import WeatherPageContainer from './components/WeatherPageContainer';

import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <WeatherPageContainer />
        </Provider>
    );
}

export default App;
