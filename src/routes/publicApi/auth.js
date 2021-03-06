const { AuthController } = require('../../controllers');

module.exports = router => {
    router.post('/login', AuthController.login);
    router.post('/session', AuthController.validateSession);
    router.post('/register', AuthController.register);
    router.post('/confirmEmail', AuthController.confirmEmail);
    router.post('/verifyEmail', AuthController.verifyEmail);
    router.post('/recoveryPassword', AuthController.recoveryPassword);
    router.post('/resetPassword', AuthController.resetPassword);

    return router;
};
