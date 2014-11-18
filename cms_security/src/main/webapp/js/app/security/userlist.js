define(["jqxgrid.pager", "jqxgrid.sort", "jqxgrid.edit", "jqxgrid.selection", "jqxlistbox", "jqxdropdownlist", "jqxgrid", "jqxdata"], function () {
	var UserList = function(){
		
		//-------Grid-------
        
        var url = "service/security/users";
        
        var source =
        {
            datatype: "json",
            datafields: [
                { name: 'username', type: 'string' },
                { name: 'firstName', type: 'string' },
                { name: 'lastName', type: 'string' },
                { name: 'email', type: 'string' }
            ],
            id: 'username',
            beforeprocessing: function (data) {
                source.totalrecords = data.num;
            },
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
            	//console.log('data : ' + data);
            	
            },
            loadError: function (xhr, status, error) { }
        });
        // initialize jqxGrid
        var gridContainer = $('<div></div>').jqxGrid(
        {
            width: '100%',
            height: '100%',
            source: dataAdapter,                
            pageable: true,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: false,
            selectionmode: 'multiplerows',
            columns: [
              { text: 'Username', datafield: 'username', width: '25%' },
              { text: 'First Name', datafield: 'firstName', width: '25%' },
              { text: 'Last Name', datafield: 'lastName', width: '25%' },
              { text: 'Email', datafield: 'email', width: '25%' }
            ],
        	theme: 'metro',
        	pagesizeoptions: ['5', '10', '20', '100'],
        	virtualmode: true,
        	rendergridrows: function () {
                return dataAdapter.records;
            }
        });
        
        gridContainer.css({marginLeft: "-1px", marginTop: "-1px"});
        
        this.localElement = gridContainer;
        
        this.getElement = function(){
        	return this.localElement;
        }
        
        //------------------
	}

    return new UserList();
});

