require.config({
    paths: {
        "jQuery": "jquery/jquery-1.11.1.min",
        "jqxcore": "jqwidgets/jqxcore",
        "jqxbuttons": "jqwidgets/jqxbuttons",
        "jqxpanel": "jqwidgets/jqxpanel",
        "jqxscrollbar": "jqwidgets/jqxscrollbar",
        "jqxtree": "jqwidgets/jqxtree",
        "jqxexpander": "jqwidgets/jqxexpander",
        "jqxsplitter": "jqwidgets/jqxsplitter",
        "demos": "demos"
    },
    //waitSeconds: 60,
    shim: {
        "demos": {
            export: "$",
            deps: ["jQuery"]
        },
        "jqxcore": {
            export: "$",
            deps: ['jQuery']
        },
        "jqxbuttons": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxpanel": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxscrollbar": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxtree": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxexpander": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxsplitter": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        }
    }
});
require(["requirejs-app"], function (App) {
    App.initialize();
});