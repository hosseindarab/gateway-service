import * as fastify from 'fastify';

import userRoute from './../routes/v1/auth/user';
import authRoute from './../routes/v1/auth/auth';

export default (app: fastify.FastifyInstance) => {

    app.register(userRoute, { prefix: '/api/v1/user' });
    app.register(authRoute, { prefix: '/api/v1/user' });
    
};