/*
 * grunt-remotefile
 * https://github.com/eastsun/grunt-remotefile
 *
 * Copyright (c) 2013 eastkiki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['dist'],
    },

    // Configuration to be run (and then tested).
    remotefile: {
      jquery: {
        url:'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
        dest:'dist/jquery.min.js'
      },
      "jquery-ui": {
        url:'http://code.jquery.com/ui/1.10.2/jquery-ui.js',
        dest:'dist/jquery-ui.min.js'
      },
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'remotefile']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
