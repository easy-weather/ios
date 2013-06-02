
(function() {

	WEATHER.Views.Oops = Backbone.View.extend({
  
		initialize: function() {
			this.el = $(this.el);
			return this.template = _.template(WEATHER.Templates["error"]);
		}, 
		render: function() {
			$(this.el).html(this.template());
			return this;
		},
		postRender: function() {}
	});

}).call(this);