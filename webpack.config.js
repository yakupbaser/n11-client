const config = {
    entry: "./src/n11-client.js",
    output: {
        filename: 'n11-client.min.js',
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};
module.exports = config;