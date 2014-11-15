define(["jQuery", "demos", "jqxcore", "jqxbuttons", "jqxtree", "jqxpanel", "jqxscrollbar", "jqxexpander", "jqxsplitter"], function () {
    var initialize = function () {
        $(document).ready(function () {
            //$('#jqxTree').jqxTree({ height: '300px', width: '300px' });
            //$('#jqxTree').css("visibility", "visible");
        	
        	$('#mainSplitter').jqxSplitter({  width: '100%', height: '100%', panels: [{ size: '18%', min: 100 }, {size: '82%', min: 200}] });
            $('#contentSplitter').jqxSplitter({ width: '100%', height: '100%',  orientation: 'horizontal', panels: [{ size: '70%', min: 100, collapsible: false }, { min: 100, collapsible: true}] });
        
            $("#feedExpander").jqxExpander({toggleMode: 'click', showArrow: false, width: "100%", height: "100%", 
            	theme: 'arctic',
            	initContent: function () {
                	$('#jqxTree').jqxTree({ height: '100%', width: '100%'});
                }
            });
        });
    };
    return {
        initialize: initialize
    };
});