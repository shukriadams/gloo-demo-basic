module.exports = function(grunt) {

    'use strict';

   
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
          default : { 
            options : {
              copy : false
            }
          }        
        },

        connect: {
            server: {
                options: {
                    keepalive :true,
                    port: 8001,
                    base: 'dev'
                }
            }
        },

        copy: {
            default : {
                files: [
                    { expand: true, cwd : 'bower_components/gloo', src: ['**'], dest : 'gloo' },
                    { src: [ '/bower_components/requirejs/require.js'], dest : '/dev/lib/require.js', filter: 'isFile' }
                ]
            }
        },
        
        shell: {
            setup: {
            	options : {
                    execOptions : {
                        cwd : 'gloo',
                    },
                },
                command: ['npm install', 'bower install'].join('&&')
            }
        },

        hub: {
            gloo : {
                 src: ['gloo/gruntfile.js']
            }
            
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['bower', 'copy', 'shell:setup', 'hub:gloo', 'connect']);

};