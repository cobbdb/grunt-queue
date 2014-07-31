# grunt-queue [![NPM version](https://badge.fury.io/js/grunt-queue.svg)](http://badge.fury.io/js/grunt-queue)

Queue up tasks for use with config.merge

    $ npm install grunt-queue

-------------
## Example Use
grunt-queue is designed for very large projects with many
modules - each having their own Grunt config files.

    // my-component.task.js
    module.exports = function (grunt) {
        grunt.config.merge({
            queue: {
                'my-component': {
                    tasks: [
                        'first:task',
                        'second:task'
                    ]
                }
            }
        });
    };

    // main-gruntfile.js
    grunt.registerTask('build', 'Build all components', [
        'queue'
    ]);

## Task Configuration
The `queue` task only takes a single array of task names:

    'queue': {
        'my-component': {
            tasks: [
                'first:task',
                'second:task'
            ]
        }
    }

The task can be loaded like any other grunt contrib:

    grunt.loadNpmTasks('grunt-queue');

---------
* See: https://www.npmjs.org/package/grunt-docker-clone
* See: http://github.com/cobbdb/grunt-docker-clone
* License: MIT
