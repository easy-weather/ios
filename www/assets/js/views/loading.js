// Generated by CoffeeScript 1.4.0
(function() {
  var initialize, postRender, render;

  WEATHER.Views.Loading = Backbone.View.extend(initialize = function() {
    this.el = $(this.el);
    return this.template = _.template(WEATHER.Templates["loading"]);
  }, render = function() {
    return this.el.html(this.template());
  }, postRender = function() {});

}).call(this);
