/*jslint node:true, nomen:true, unparam:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    var jsfiles        = [
            '<%= basedir %>/src/defines.js',
            '<%= basedir %>/src/analytics.js',
            '<%= basedir %>/src/facebook.js',
            '<%= basedir %>/src/plusone.js',
            '<%= basedir %>/src/twitter.js',
        ];

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-compiler');

    grunt.initConfig({
        'basedir': '.',
        'closure-compiler': {
            'main': {
                'js': jsfiles,
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'jsOutputFile': '<%= basedir %>/tracking.js',
                'options': {
                    'output_wrapper': '(function(){%output%}());'
                }
            }
        },
        'watch': {
            'main': {
                'files': jsfiles,
                'tasks': ['closure-compiler:main']
            }
        }
    });

    grunt.registerTask('default', ['closure-compiler']);
};