module.exports = function (grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: "Styles/scss/**/*.scss",
                tasks: ['sass']
            }
        },
        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination         // source file
                    "Content/main.css": "Styles/scss/**/*.scss"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};