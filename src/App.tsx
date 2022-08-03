import { MainContext } from './contexts/MainContext';

import { MainLayout } from './layouts/Main';

function App() {
    return (
        <MainContext.Provider value={{ title: 'lol' }}>
            <MainLayout />
        </MainContext.Provider>
    );
}

export default App;
