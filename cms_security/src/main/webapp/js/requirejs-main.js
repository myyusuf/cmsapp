require.config({
    paths: {
        "jQuery": "jquery/jquery-1.11.1.min",
        "jqxcore": "jqwidgets/jqxcore",
        "jqxtabs": "jqwidgets/jqxtabs",
        "jqxbuttons": "jqwidgets/jqxbuttons",
        "jqxpanel": "jqwidgets/jqxpanel",
        "jqxscrollbar": "jqwidgets/jqxscrollbar",
        "jqxtree": "jqwidgets/jqxtree",
        "jqxexpander": "jqwidgets/jqxexpander",
        "jqxsplitter": "jqwidgets/jqxsplitter",
        "jqxmenu": "jqwidgets/jqxmenu",
        "jqxnavigationbar": "jqwidgets/jqxnavigationbar",
        "jqxgrid": "jqwidgets/jqxgrid",
        "jqxgrid.pager": "jqwidgets/jqxgrid.pager",
        "jqxgrid.sort": "jqwidgets/jqxgrid.sort",
        "jqxgrid.edit": "jqwidgets/jqxgrid.edit",
        "jqxgrid.selection": "jqwidgets/jqxgrid.selection",
        "jqxdropdownlist": "jqwidgets/jqxdropdownlist",
        "jqxlistbox": "jqwidgets/jqxlistbox",
        "jqxgrid": "jqwidgets/jqxgrid",
        "jqxdata": "jqwidgets/jqxdata",
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
        "jqxtabs": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
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
        },
        "jqxmenu": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxnavigationbar": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxgrid.pager": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxgrid"]
        },
        "jqxgrid.sort": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxgrid"]
        },
        "jqxgrid.edit": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxgrid"]
        },
        "jqxgrid.selection": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxgrid"]
        },
        "jqxlistbox": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxdropdownlist": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxlistbox"]
        },
        "jqxgrid": {
            export: "$",
            deps: ['jQuery', "jqxcore", "jqxdropdownlist"]
        },
        "jqxdata": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        }
    }
});
require(["requirejs-app"], function (App) {
    App.initialize();
});