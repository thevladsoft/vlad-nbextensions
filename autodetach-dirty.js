var autodetach = 1;

$([IPython.events]).on('app_initialized.NotebookApp', function(){
          IPython.toolbar.add_buttons_group([
             {
//                 'label'   : 'toggle auto-detach pager',
  		 'label'   : 'Auto-detach pager ON',
                 'icon'    : 'icon-external-link',
		 'id'      : 'auto-detach_button',
                 'callback': function () {
                    if(autodetach == 0){autodetach = 1;
			document.getElementById('auto-detach_button').title= 'Auto-detach pager ON'; 
//                      $([IPython.events]).trigger('toggle-auto-detachon.Notebook');
                    }
                    else{autodetach = 0;
			document.getElementById('auto-detach_button').title= 'Auto-detach pager OFF';
//                      $([IPython.events]).trigger('toggle-auto-detachoff.Notebook');
                    }
                 }
             }
         ]);
});

//version para IPython3?
//No se todavía si funcionará, pero estoy cerca
//menos sucia
/*IPython.Pager.prototype.bind_events.events.on('open_with_text.Pager', function (event, payload) {
            // FIXME: support other mime types
            if (payload.data['text/plain'] && payload.data['text/plain'] !== "") {
                //that.clear();
                //that.expand();
                that.detach();
                that.append_text(payload.data['text/plain']);
            }
});*/

//Version para IPython 2
//Sucia porque copia demasiado de la funcion
//$([IPython.events]).on("app_initialized.NotebookApp", function () {
   IPython.Pager.prototype.bind_events = function () {
        var that = this;

        this.pager_element.bind('collapse_pager', function (event, extrap) {
            var time = (extrap != undefined) ? ((extrap.duration != undefined ) ? extrap.duration : 'fast') : 'fast';
            that.pager_element.hide(time);
        });

        this.pager_element.bind('expand_pager', function (event, extrap) {
            var time = (extrap != undefined) ? ((extrap.duration != undefined ) ? extrap.duration : 'fast') : 'fast';
            that.pager_element.show(time);
        });

        this.pager_splitter_element.hover(
            function () {
                that.pager_splitter_element.addClass('ui-state-hover');
            },
            function () {
                that.pager_splitter_element.removeClass('ui-state-hover');
            }
        );

        this.pager_splitter_element.click(function () {
            that.toggle();
        });
//        var autodetach = 1;
        $([IPython.events]).on('open_with_text.Pager', function (event, data) {
            if (data.text.trim() !== '') {
                that.clear();
                if(autodetach == 0){
                that.expand();
                }
                that.append_text(data.text);
                if(autodetach == 1) that.detach();
            };
        });
   };
//});

