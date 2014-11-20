define(["require", "jQuery", "demos", "jqxcore", "jqxtabs", "jqxbuttons", "jqxtree", "jqxpanel", "jqxscrollbar", "jqxexpander", 
        "jqxsplitter", "jqxmenu", "jqxnavigationbar", 
        "jqxgrid.pager", "jqxgrid.sort", "jqxgrid.edit", "jqxgrid.selection", "jqxlistbox", "jqxdropdownlist", "jqxgrid", "jqxdata"], function (require) {
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
            $('#contentSplitter').css({margin : "0px"})
        
            $("#feedExpander").jqxExpander({toggleMode: 'none', showArrow: false, width: "100%", height: feedExpanderHeight(), 
            	theme: 'arctic',
            	initContent: function () {
//                	$('#jqxTree').jqxTree({ height: '100%', width: '100%'});
                }
            });
            
//            $("#contentExpander").jqxExpander({toggleMode: 'none', showArrow: false, width: "100%", height: '100%', 
//            	theme: 'arctic',
//            	initContent: function () {
//                }
//            });
            
            $("#contentExpander").css({overflow: "hidden", marginTop: "0px", marginBottom: "0px"});
            
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
            
            
            $('#jqxTabs').jqxTabs({ width: '100%', height: '100%', position: 'top', showCloseButtons: true, scrollPosition: 'both', theme: 'metro'});
            $('#jqxTabs').css({marginLeft: "-1px", marginTop: "0px", borderBottom: "0px", borderTop: "0px"});
            
            require(['./app/security/userlist'], function (UserList) {
            	var test = new UserList($('#jqxGrid'));
            	$('#jqxGrid').css({height: "100px"});
            });
            
            
            //------------------
            
        });
    };
    return {
        initialize: initialize
    };
});