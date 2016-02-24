module.exports = function(router) {
    router.get('/auth', function * auth(next) {
        if (true) throw new Error('Unknow Error');

        yield next;
    });
};
