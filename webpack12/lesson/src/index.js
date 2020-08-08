import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }

import counter from './counter';
import number from './number';

counter();
number();

//如果当前模块开启了HMR功能
if(module.hot) {
	//如果number发生了变化，就执行后面的函数
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number();
	})
}
