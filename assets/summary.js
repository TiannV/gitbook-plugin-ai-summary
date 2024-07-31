var gitbook = window.gitbook;

require(["gitbook", "jQuery"], function (gitbook, $) {
	var app_url = ''
	var app_key = ''
	var summary_url = ''
	var client;
	
	gitbook.events.bind("start", function(e, config) {
	  app_url = config['ai-summary'].supabase_url
	  app_key = config['ai-summary'].supabase_key
	  summary_url = config['ai-summary'].summary_url
	  const { createClient } = supabase
	  client = createClient(app_url, app_key)

	})

	gitbook.events.bind("page.change", function() {
		new ChucklePostAI({
			el: '.page-inner',
			summary_directly: true,
			summary_toggle: false,
			rec_method: 'web',
			pjax: true,
			supabase: client,
			summary_url: summary_url
		})
	})

});
