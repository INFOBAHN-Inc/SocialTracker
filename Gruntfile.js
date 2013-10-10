/*jslint node:true, nomen:true, unparam:true*/

module.exports = function (grunt) {
    'use strict';

    var jsfiles = [
            'src/defines.js',
            'src/analytics.js',
            'src/facebook.js',
            'src/plusone.js',
            'src/twitter.js'
        ];

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-compiler');

    grunt.initConfig({
        'closure-compiler': {
            'main': {
                'js': jsfiles,
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'jsOutputFile': 'tracking.js',
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