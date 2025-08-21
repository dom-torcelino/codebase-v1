import * as Sentry from '@sentry/node';

const initSentry = (app) => {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1.0, // Adjust this value in production
    });

    // Request handler must be the first middleware on the app
    app.use(Sentry.Handlers.requestHandler());

    // Error handler must be before any other error middleware
    app.use(Sentry.Handlers.errorHandler());

    // Optional fallthrough error handler
    app.use((err, req, res, next) => {
        res.statusCode = 500;
        res.end(res.sentry + '\n');
    });
};

export default initSentry;