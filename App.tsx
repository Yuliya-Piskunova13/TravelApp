import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import NavigationProvider from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
        <NavigationProvider />
    </SafeAreaProvider>
  );
}

export default App;
