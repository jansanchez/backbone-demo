define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, router) {

    'use strict';

    // Add your modules routing here
    router.route("/*", "", function () {
        this.loadModule("module/application/main");
    });

    var root = $("[data-main][data-root]").data("root");
    root = root ? root : '/';

    return {
        initialize: function () {
            Backbone.history.start({
                pushState: true,
                root: root
            });
        }
    };
});