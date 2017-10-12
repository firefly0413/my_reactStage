import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'

promise.polyfill();

const fetchApi = (options) => {

    options.method = options.method || 'GET'

    switch(options.method.toUpperCase()) {

        case 'POST':
        case 'PUT':
            fetch(options.url, {
                method: options.method,
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options.data)
            })
                .then(req => req.json())
                .then(res => resHandler(res, options))
            break;

        default:
            fetch(options.url, {
                method: options.type,
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(req => req.json())
                .then(res => resHandler(res, options))
    }
}

// export const gpoLog = data => {
//     fetchJson({
//         url: 'www.xxx.com',
//         type: 'POST',
//         data
//     });
// }

// 请求成功处理
function resHandler(res, options) {
    if (res.status && res.status != 200) {
        return errorHandler(res.error, options);
    } else {
        options.success && options.success(res);
    }
}

// 异常处理
function errorHandler(error, options) {
    options.error && options.error(error);
    alert('网络异常，请稍后重试')
}

export default fetchApi;
