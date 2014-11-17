package id.co.visitek.dpu.cms.security.interfaces;

import id.co.visitek.dpu.cms.security.application.UserService;
import id.co.visitek.dpu.cms.security.domain.model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/security/users", method=RequestMethod.GET, produces="application/json")
	public Map<String, Object> getUserList(@RequestParam(required=false) Map<String, String> params){
		
		int limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 0;
		int start = params.get("start") != null ? Integer.parseInt(params.get("start")) : 0;
		
		List<String> listKeys = new ArrayList<String>(params.keySet());
		params.keySet();
		for (String key : listKeys) {
			System.out.println("key : " + key + ", value : " + params.get(key));
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		
//		List<User> users = userService.getUsers(start, limit);
		List<User> users = userService.getUsers(0, 10);
		Long usersCount = userService.countUsers();
		result.put("num", usersCount);
		result.put("data", users);
		result.put("success", true);
		
		return result;
	}
	
	
}
