module.exports =  {
    path: '/',
    component: require('../app/App'),
    childRoutes: [
        {
            path: 'index',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../pages/Index'));
                }, 'Index');
            }
        },
        {
            path: 'test/:relativeId',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../pages/test'));
                }, 'test');
            }
        },
        {
            path: 'simple',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../pages/simple'));
                }, 'simple');
            },
        }
    ],
    indexRoute: {
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/Index'));
            }, 'Index');
        }
    }
}