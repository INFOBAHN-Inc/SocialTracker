/*jslint node:true, nomen:true, unparam:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    var _ = require('underscore'),
        basedir        = '.',
        config         = {},
        jsfiles        = {},
        closureConfig  = {},
        watchFiles     = {};

    _([
        'grunt-contrib-watch',
        'grunt-closure-compiler'
    ]).each(function (element, index, list) {
        grunt.loadNpmTasks(element);
    });

    jsfiles = {
        main: {
            js: [
                '<%= basedir %>/src/defines.js',
                '<%= basedir %>/src/analytics.js',
                '<%= basedir %>/src/facebook.js',
                '<%= basedir %>/src/plusone.js',
                '<%= basedir %>/src/twitter.js',
            ],
            jsOutputFile: '<%= basedir %>/tracking.js'
        }
    };

    // jsFile => ClosureCompiler Setting
    closureConfig = {};

    _(jsfiles).each(function (element, key, jsfiles) {

        closureConfig[key] =  {
            js: element.js,
            closurePath: '/usr/local/opt/closure-compiler/libexec/',
            jsOutputFile: element.jsOutputFile,
            options: {
                'output_wrapper': '(function() {%output%})();'
            }
        };
    });

    // jsFiles => Watch File List
    watchFiles = _(jsfiles).map(function (element, key, jsfiles) {
        return {
            files: element.js,
            tasks: ['closure-compiler:' + key]
        };
    });

    config = {
        'basedir': basedir,
        'closure-compiler': closureConfig,
        'watch': watchFiles
    };

    grunt.initConfig(config);
    grunt.registerTask('default', ['closure-compiler']);
};