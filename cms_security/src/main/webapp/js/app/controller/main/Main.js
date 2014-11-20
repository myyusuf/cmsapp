define(["jQuery", "jqxcore", "jqxtabs",], function () {
	
	var MainController = function(container){
		
		var tabs = $('<div id="tabs"><ul><li>Dashboard</li></ul><div></div></div>');
		
		tabs.appendTo(container);
		tabs.jqxTabs({ width: '100%', height: '100%', position: 'top', showCloseButtons: true, scrollPosition: 'both', theme: 'metro'});
		tabs.css({marginLeft: "-1px", marginTop: "0px", borderTop: "0px"});
		
		$.subscribe("viewUserListEvent", function(e, data){
			console.log("data.name : " + data.name);
			
			var userListGrid = $('<div id="userListGrid">aaa</div>');
			
			tabs.jqxTabs('addLast', 'User List' , 'userListGrid');
			tabs.jqxTabs('setContentAt', 1 , '<div id="userListGrid">User Grid : [Loading]</div>');
			
			var hello = $('#userListGrid');
			require(['./app/security/userlist'], function (UserList) {
            	var test = new UserList(hello);
            });
		});
	};
	
	return MainController;
});