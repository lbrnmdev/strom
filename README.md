# strom (strom)

A frontend for monitoring Telco event activity 

## Install the dependencies
```bash
npm install
```

## Configure Websocket environment variables

Create a `.env.prod` file in the application root if one is not already present.

Set the production websocket path like so in `.env.prod`:

`TELCO_SOCK_PATH=<your_production_websocket_path>`

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
