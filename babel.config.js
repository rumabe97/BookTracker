module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'transform-inline-environment-variables',
            {
                include: ['API_URL', 'API_AUTH'],
            },
        ],
    ],
};
