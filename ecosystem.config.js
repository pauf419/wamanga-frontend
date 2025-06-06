module.exports = {
  apps: [
    {
      name: "next-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      exec_mode: "cluster",
      instances: 12,
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "4000M",
    },
  ],
};
