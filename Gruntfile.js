module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {
    pkg: grunt.file.readJSON('package.json'),

    photobox: {
      options: {
        urls: [ 'http://localhost:3000/' ],
        screenSizes: [ '400x800', '600x800', '1200x800' ],
        indexPath: 'public/photobox/'
      }
    },

    express: {
      dev: {
        options: {
          //background: false,
          script: './app.js'
        }
      }
    },

    watch: {
      files: ['./public/css/main.css'],
      tasks: ['photobox']
    }

  } );

  // Load photobox plugin
  grunt.loadNpmTasks( 'grunt-photobox' );
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask( 'default', [ 'express:dev', 'watch' ] );
};
