define(["jQuery", "demos", "jqxcore", "jqxbuttons", "jqxtree", "jqxpanel", "jqxscrollbar", "jqxexpander", "jqxsplitter", "jqxmenu", "jqxnavigationbar"], function () {
    var initialize = function () {
        $(document).ready(function () {
            //$('#jqxTree').jqxTree({ height: '300px', width: '300px' });
            //$('#jqxTree').css("visibility", "visible");
        	
        	var contentHeight = function(){
        		return $(document).height()-77;
        	}
        	
        	var feedExpanderHeight = function(){
        		return $(document).height()-101;
        	}
        	
        	
        	$('#mainSplitter').jqxSplitter({  width: '100%', height: contentHeight(), panels: [{ size: '15%', min: 100 }, {size: '85%', min: 200}], theme: 'metro' });
            $('#contentSplitter').jqxSplitter({ width: '100%', height: '100%',  orientation: 'horizontal', 
            	panels: [{ size: '70%', min: 100, collapsible: false }, { min: 100, collapsible: true}], theme: 'metro' });
        
            $("#feedExpander").jqxExpander({toggleMode: 'none', showArrow: false, width: "100%", height: feedExpanderHeight(), 
            	theme: 'arctic',
            	initContent: function () {
//                	$('#jqxTree').jqxTree({ height: '100%', width: '100%'});
                }
            });
            
            $("#jqxNavigationBar").jqxNavigationBar({ width: "100%", height: feedExpanderHeight(), expandMode: "singleFitHeight", theme: 'metro'});
            $('#jqxNavigationBar').css({marginLeft: "1px"});
            $('#jqxTree').jqxTree({ height: '100%', width: '100%', theme: 'metro'});
            
            $("#jqxMenu").jqxMenu({ width: '100%', theme: 'metro'});
            $("#jqxMenu").css('visibility', 'visible');
            
            $(window).resize(function(){
            	$('#mainSplitter').css({height: contentHeight()});
            	$('#feedExpander').css({height: feedExpanderHeight()});
            	$('#jqxNavigationBar').css({height: feedExpanderHeight()});
            });
            
        });
    };
    return {
        initialize: initialize
    };
});