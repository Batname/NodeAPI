module.exports = function(grunt) {

    var paths = {
        jade: ['scr/jade/**/*.jade'],
        coffee: ['scr/coffee/**/*.coffee'],
        sass: ['scr/scss/**/*.scss']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // здесь будут настроенные нами таски
        watch : {
            jade : {
                files : paths.jade,
                tasks : 'jade'
            },
            coffee : {
                files : paths.coffee,
                tasks : 'coffee'
            },
            sass : {
                files : paths.sass,
                tasks : 'sass'
            }
        },
        express : {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        jade: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "scr/jade",
                    src: ["**/*.jade"],
                    dest: "public",
                    ext: ".html"
                }],
                options: {
                    livereload: true
                }
            }
        },
        sass : {
            compile: {
                files: [{
                    expand: true,
                    cwd: "scr/scss",
                    src: ["**/*.scss"],
                    dest: "public/stylesheets",
                    ext: ".css"
                }]
            }
        },
        coffee : {
            compile: {
                files: {
                    'public/javascripts/app.js': paths.coffee
                }
            }
        }
    });

    // здесь будут подключаться необходимые модули
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    // а здесь - вызываться таски
    grunt.registerTask('default', ['sass', 'coffee', 'jade', 'express', 'watch', 'livereload']);
};