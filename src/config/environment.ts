import { cleanEnv, str, port } from 'envalid';

const environmentDetails = cleanEnv(process.env, {
  PORT: port({
    devDefault: 3000
  })
});

export { environmentDetails };
