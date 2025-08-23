// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://52e82bb36f4adfd5f7822d2f8b5361ea@o4509854260592640.ingest.us.sentry.io/4509854277566464",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});