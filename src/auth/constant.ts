import { JwtModuleOptions } from '@nestjs/jwt';
const refresh_secret = 'refreshKey';

export const jwtConstants = {
  secret: 'secretKey',
  refresh_sign_options: {
    expiresIn: '5m',
    secret: refresh_secret,
  },
  refresh_verify_options: {
    secret: refresh_secret,
  },
};

export const jwtSignOptions: JwtModuleOptions = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '60s' },
};