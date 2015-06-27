module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var nodeModules = 'node_modules';
    var typings = './typings/';

    var config = {
        /**
         * File paths
         */
        
        // All typescript settings
        ts: {
            // all typescript that we want to vet
            allts: [
                './src/**/*.ts',
                './*.ts'
            ],
            clientts: [
                './src/**/*.ts'
            ],
            defs: typings + '**/*.ts',
            output: '.tmp',
            refs: typings + 'app.d.ts',
            appRefs: '.tmp/typings/app-dts/',
            transformFn: function (filepath) {
                return '/// <reference path="..' + filepath + '" />';
            },
            tscjs:'node_modules/typescript/bin/tsc.js',
            tscOptions: {
                target: 'ES5',
                declarationFiles: true,
                noExternalResolve: true,
                module: 'commonjs',
                noImplicitAny: true,
                removeComments: false,
                sortOutput: true
            },
            typings: typings            
        },

        // all javascript that we want to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        fonts: bower.directory + 'font-awesome/fonts/**/*.*',
        html: client + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        // app js, with no specs
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],
        report: report,
        root: root,
        source: 'src/',
        temp: temp,

        /**
         * plato
         */
        plato: {js: clientApp + '**/*.js'},

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM files
         */
        bower: bower,
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
         * Node settings
         */
        nodeServer: './src/server/app.js',
        defaultPort: '8001'
    };

    /**
     * wiredep and bower settings
     */
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };


    return config;

    ////////////////
};
