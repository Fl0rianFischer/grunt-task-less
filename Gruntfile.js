module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dist: {
        options: {
          compress: true          },
        files: {
                    "path/to/your/css-file": "path/to/your/less-file"

        }
      }
    },
    watch: {
      less: {
        files: [
            '../../addons/your-snippet/**/*.less'
        ],
        tasks: ['less:dist'],
        options: {
          livereload: true,
        }
      }
    }
  });
  // grunt.registerTask('watch', [ 'watch' ]);
  grunt.registerTask('default', [ 'less:dist','watch' ]);

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};