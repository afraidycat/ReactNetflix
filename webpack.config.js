module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
          Main: 'app/components/Main.jsx',
          Logo: 'app/components/Logo.jsx',
          Navigation: 'app/components/Navigation.jsx',
          UserProfile: 'app/components/UserProfile',
          Hero: 'app/components/Hero',
          HeroButton: 'app/components/HeroButton',
          TitleList: 'app/components/TitleList',
          Item: 'app/components/Item',
          ListToggle: 'app/components/ListToggle',
          applicationStyles: 'app/styles/app.css',
          Header: 'app/components/Header',
          Search: 'app/components/Search'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
