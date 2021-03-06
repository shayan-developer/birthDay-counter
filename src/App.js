import React from 'react'
import Birthday from "./components/Birthday";
import { Provider } from "react-redux"
import store from './redux/store';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from "./ebconfig.js";
import { ConfigProvider } from 'antd';
function App() {
  return (
  <Provider store={store}>
    <EasybaseProvider ebconfig={ebconfig}>
    <ConfigProvider direction="rtl">
      <Birthday />
      </ConfigProvider>
    </EasybaseProvider>
  </Provider >
  );
}

export default App;
