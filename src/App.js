import React from 'react'
import Birthday from "./components/Birthday";
import {Provider} from "react-redux"
import  store  from './redux/store';
function App() {
  return (
<Provider store={store}>
      <Birthday />
</Provider>
  );
}

export default App;
