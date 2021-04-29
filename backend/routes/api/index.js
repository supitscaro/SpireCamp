const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hostingsRouter = require('./hostings.js');
const reviewsRouter = require('./reviews.js');
const statesRouter = require('./stateHostings');
const stateRouter = require('./states');
const activitiesRouter = require('./activitiesHosting');
const bookingsRouter = require('./bookings');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/hostings', hostingsRouter);
router.use('/reviews', reviewsRouter);
router.use('/states', statesRouter);
router.use('/state', stateRouter);
router.use('/activities', activitiesRouter);
// router.use('/bookings', bookingsRouter);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

module.exports = router;

// fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": "SrjBlGSq-se1JXq7JDDXkd90GRbkA4K673Lo"
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));
