/*
 * grunt-remotefile
 * https://github.com/eastsun/grunt-remotefile
 *
 * Copyright (c) 2013 eastkiki
 * Licensed under the MIT license.
 */

'use strict';
var request = require("request");
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('remotefile', 'Download remote file data.', function() {   
        var self = this;
        this.files.forEach(function(f) {
            var done = self.async(),
                src = f.url,
                dest = f.dest;

            console.log(src, dest);
            request(src, function (err, res, body) {
                if (!err && res.statusCode === 200) {
                    grunt.file.write(f.dest, body);
                    grunt.log.writeln('File "' + f.dest + '" created.');
                    done(true);
                    return true;
                } else {
                    grunt.log.warn('Source file "' + src + '" not found.');
                    // if dest exists already from a previous run, use as a backup and return true
                    if (grunt.file.exists(f.dest)) {
                        grunt.log.writeln('File dest exists: "' + f.dest + '" will be used as an offline backup.');
                        done(true);
                        return true;
                    }
                    done(false);
                    return false;
                }
            });
        });
    });

};
