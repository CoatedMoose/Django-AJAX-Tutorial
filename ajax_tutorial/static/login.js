var ajax_example = {
    init: function() {
        // Grab the elements we'll need.
        ajax_example.form = document.getElementById('ajax_example');
        ajax_example.results_div = document.getElementById('results');
          
        // This is so we can fade it in later.
        YAHOO.util.Dom.setStyle(ajax_example.results_div, 'opacity', 0);
  
        // Hijack the form.
        YAHOO.util.Event.addListener(ajax_example.form, 'submit', ajax_example.submit_func);
    },
}
