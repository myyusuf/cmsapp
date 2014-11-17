package id.co.visitek.dpu.cms.security.application;

import id.co.visitek.dpu.cms.security.domain.model.User;
import id.co.visitek.dpu.cms.security.domain.model.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	public List<User> getUsers(int startRow, int pageSize) {
		return userRepository.getAll(startRow, pageSize);
	}

	public Long countUsers() {
		return userRepository.countAll();
	}

}
