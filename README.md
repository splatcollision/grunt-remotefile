# grunt-remotefile

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-remotefile --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-remotefile');
```

## The "remotefile" task

### Overview
In your project's Gruntfile, add a section named `remotefile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    remotefile: {
      remote_file_task: {
        url: '', // remote source url
        dest: '' // local dest path
      },
    },
})
```

### Usage Examples

```js
grunt.initConfig({
    remotefile: {
      jquery: {
          url:'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
          dest:'dist/jquery.min.js'
      },
      "jquery_ui": {
          url:'http://code.jquery.com/ui/1.10.2/jquery-ui.js',
          dest:'dist/jquery-ui.min.js'
      }
    }
    concat: {
        dist: {
            src: [
                '<%= remotefile.jquery.dest %>',
                '<%= remotefile.jquery_ui.dest %>'
            ],
            dest: 'dist/jquery_ui.merge.js'
        }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
