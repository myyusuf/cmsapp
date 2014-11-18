define(["jQuery", "demos", "jqxcore", "jqxbuttons", "jqxtree", "jqxpanel", "jqxscrollbar", "jqxexpander", 
        "jqxsplitter", "jqxmenu", "jqxnavigationbar", 
        "jqxgrid.pager", "jqxgrid.sort", "jqxgrid.edit", "jqxgrid.selection", "jqxlistbox", "jqxdropdownlist", "jqxgrid", "jqxdata"], function () {
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
            
            //-------Grid-------
            
            var url = "service/security/users";
            // prepare the data
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'username', type: 'string' },
                    { name: 'firstName', type: 'string' }
                ],
                root: "data",
                record: "user",
                id: 'code',
                url: url
            };
            var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                if (value < 20) {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
                }
                else {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
                }
            }
            var dataAdapter = new $.jqx.dataAdapter(source, {
                downloadComplete: function (data, status, xhr) { 
                },
                loadComplete: function (data) { 
                	console.log('data : ' + data)
                },
                loadError: function (xhr, status, error) { }
            });
            // initialize jqxGrid
            $("#jqxgrid").jqxGrid(
            {
                width: '100%',
                height: '100%',
                source: dataAdapter,                
                pageable: true,
                autoheight: true,
                sortable: true,
                altrows: true,
                enabletooltips: true,
                editable: true,
                selectionmode: 'multiplecellsadvanced',
                columns: [
                  { text: 'Code', datafield: 'username', width: '50%' },
                  { text: 'Name', datafield: 'firstName', width: '50%' }
                ],
            	theme: 'metro'
            });
            
            $('#jqxgrid').css({marginLeft: "-1px", marginTop: "-1px"});
            
            //------------------
            
        });
    };
    return {
        initialize: initialize
    };
});