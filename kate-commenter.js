//cargar con IPython.load_extensions('kate-commenter'); en custom.js
// $([IPython.events]).on("app_initialized.NotebookApp", function () {
//	IPython.load_extensions('kate-commenter');
// });
//en custom.js
//window.alert("HELP!");
/*IPython.CodeCell.options_default.cm_config.extraKeys= {
                "Tab" :  "indentMore",
                "Shift-Tab" : "indentLess",
                "Backspace" : "delSpaceToPrevTabStop",
                "Cmd-/" : "toggleComment",
                "Ctrl-/" : "toggleComment",//Los siguientes son los mios
                "Ctrl-D": "toggleComment",
                "Shift-Ctrl-D": "toggleComment",
                "Shift-Alt-D": "deleteLine"
            } */
//Forma más corta y probablemente más segura
IPython.CodeCell.options_default.cm_config.extraKeys["Ctrl-D"] = "toggleComment";
IPython.CodeCell.options_default.cm_config.extraKeys["Shift-Ctrl-D"] = "toggleComment";
IPython.CodeCell.options_default.cm_config.extraKeys["Shift-Alt-D"] = "deleteLine";

//});
