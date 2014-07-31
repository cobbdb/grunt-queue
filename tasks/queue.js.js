module.exports = function (grunt) {
    grunt.registerMultiTask(
        'queue',
        'Queue up tasks for use with config.merge',
        function () {
            this.data.tasks.forEach(function (task) {
                grunt.task.run(task);
            });
            grunt.verbose.ok();
        }
    );
};
