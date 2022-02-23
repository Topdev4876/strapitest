module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e70a55b8b063596b2185643822aef67'),
  },
});
