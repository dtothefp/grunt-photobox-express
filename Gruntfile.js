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
    }

  } );

  // Load photobox plugin
  grunt.loadNpmTasks( 'grunt-photobox' );

  // Default task(s).
  grunt.registerTask( 'default', [ 'photobox' ] );
};
