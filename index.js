module.exports = {
	website: {
	assets: './assets',
	js: [
        'summary.js'
	],
},

    book: {
        html: {
            "html:start": function() {
                return "<!-- Start book "+this.options.title+" -->"
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },

            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        }
    },
    hooks: {
        // For all the hooks, this represent the current generator

        // This is called before the book is generated
        "init": function() {
    
        },
        // This is called after the book generation
        "finish": function() {
            console.log("finish!");
        },

        // The following hooks are called for each page of the book
        // and can be used to change page content (html, data or markdown)


        // Before parsing markdown
        "page:before": function(page) {
            // page.path is the path to the file
            // page.content is a string with the file markdown content

            // Example:
            //page.content = "# Title\n" + page.content;
                           var str = `
                <script src="./gitbook/gitbook-plugin-ai-summary/plugin.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>`
                page.content += str
            return page;
        },

        // Before html generation
        "page": function(page) {

            // page.path is the path to the file
            // page.sections is a list of parsed sections

            // Example:
            //page.sections.unshift({type: "normal", content: "<h1>Title</h1>"})
            return page;
        },

        // After html generation
        "page:after": function(page) {


		  return page;
	  }
  }


};
