/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    clean: ['dist/'],
    prettify: {
      options: {
        indent: 1,
        indent_char: '	',
        unformatted: [
          "noscript"
        ]
      },
      all: {
        expand: true,
        src: '*.html',
      }
    },
    esformatter: {
      src: '*.js'
    },
    uglify: {
      dist: {
        src: 'jquery.mouseoutall.js',
        dest: 'dist/jquery.mouseoutall.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-esformatter');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['clean', 'prettify', 'esformatter', 'uglify']);

};
