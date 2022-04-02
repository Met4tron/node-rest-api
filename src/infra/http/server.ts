import { app } from './app';
import { environmentDetails } from '../../config/environment';

async function bootstrap() {
  try {
    app.log.info('Before ready')
    await app.ready();

    app.listen(environmentDetails.PORT);
  } catch (e) {
    app.log.error(e);
    process.exit(0);
  }
}

bootstrap()