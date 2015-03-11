module.exports = function(grunt) {

    "use strict";

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({

        sass: {

            dev: {
                options: {
                    style: "compressed"
                },

                files : {
                    "style.min.css": "sass/style.scss"
                }
            }
        },

        uglify: {

            dev: {
                options: {
                    compress: {},
                    mangle: true,
                    preserveComments: false
                },

                files: {
                    "script.min.js" : ["js/script.js"]
                }
            }
        },

        connect: {

            server : {
                options: {
                    open: {
                        target: 'http://localhost:8000/'
                    }
                }
            }
        },

        watch: {
            options:{
                livereload: true
            },

            js: {
                files: ["js/*.js"],
                tasks: ["uglify:dev"]
            },

            scss: {
                files: ["sass/*.scss"],
                tasks: ["sass:dev"]
            }
        }
    });

    grunt.registerTask("riff", ["sass:dev", "uglify:dev", "connect:server", "watch"]);
};