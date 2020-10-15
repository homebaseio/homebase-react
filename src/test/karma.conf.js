module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        // The directory where the output file lives
        basePath: '../../out',
        reporters: ['progress'],
        // The file itself
        files: ['ci.js'],
        frameworks: ['cljs-test'],
        plugins: ['karma-cljs-test', 'karma-chrome-launcher'],
        colors: true,
        concurrency: Infinity,
        logLevel: config.LOG_DEBUG,
        client: {
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    })
};