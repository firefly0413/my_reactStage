
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, Router } from 'react-router';
import routes from './route/index'
import configureStore from './redux/store';

const store = configureStore(hashHistory);
// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(hashHistory,store);
const rootElement = document.getElementById('app');

ReactDOM.render(
    // 利用Provider可以使我们的 store 能为下面的组件所用
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
    rootElement
);
