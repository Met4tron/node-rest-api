import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyHelmet from 'fastify-helmet';
import fastifySwagger from 'fastify-swagger';

const app = fastify({
  logger: true
});

app.register(fastifyCors);
app.register(fastifyHelmet);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Node Rest API',
      version: '1.0.0'
    }
  },
  routePrefix: '/docs',
  exposeRoute: true
});

export { app };
