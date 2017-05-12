export function initialize(application) {
    application.inject('component', 'sockjs', 'service:sockjs');
    application.inject('route', 'sockjs', 'service:sockjs');
    application.inject('component', 'router', 'router:main');
}

export default {
    name: 'websockets',
    initialize
};
