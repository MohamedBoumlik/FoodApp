module.exports = {
  apps: [
    {
      name: "app",
      script: "build/server.js",
      instances: "max",
      max_restarts: 1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
