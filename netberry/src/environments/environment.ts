import authConfig from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: authConfig.domain,
    clientId: authConfig.clientId,
    redirectUri: window.location.origin,
  },
};

