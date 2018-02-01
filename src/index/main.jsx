import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import IndexStore from './store';
import IndexAction from './action';
import Layout from './layout';

const store = new IndexStore();
const action = new IndexAction(store);

ReactDOM.render(
  <Provider action={action} {...store}>
    <Layout />
  </Provider>,
  document.getElementById('app-root')
);
