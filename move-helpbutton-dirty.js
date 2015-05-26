$([IPython.events]).on("app_initialized.NotebookApp", function () {
IPython.Pager.prototype.create_button_area = function(){
        var that = this;
        this.pager_button_area.append(
            $('<a>').attr('role', "button")
                    .attr('title',"Open the pager in an external window")
                    .addClass('ui-button')
                    .click(function(){that.detach()})
                    .attr('style','position: absolute; left: 5px;')/*VLAD*/
                    .append(
                        $('<span>').addClass("ui-icon ui-icon-extlink")
                    )
        )
};
});
