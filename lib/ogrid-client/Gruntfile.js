module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.initConfig({

        qunit: {
            all: ['test/*.html']
        },

        requirejs: {
            std: {
                options: {
                    almond: true,
                    baseUrl: 'src',
                    paths: {
                        src: 'src/'
                    },
                    include: ['src'],
                    exclude: ['jquery', 'underscore'],
                    out: 'dist/ogrid.concat.js'
                }
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                nomen: true,
                globals: {
                    define: true,
                    jQuery: true
                }
            },
            files: ['src/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['jshint', 'qunit']);
    grunt.registerTask('build', 'requirejs');

};