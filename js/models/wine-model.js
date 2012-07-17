define(
['jquery', 'lodash', 'backbone'],

function($, _, Backbone) {

    Wine = Backbone.Model.extend({
        urlRoot: "wines/",
        defaults: {
            "id": null,
            "name": "",
            "grapes": "",
            "country": "USA",
            "region": "Wisconsin",
            "year": "",
            "description": "",
            "picture": ""
        }
    });

    return Wine;
});