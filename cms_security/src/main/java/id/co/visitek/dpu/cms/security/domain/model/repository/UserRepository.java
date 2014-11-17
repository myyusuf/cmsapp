package id.co.visitek.dpu.cms.security.domain.model.repository;

import id.co.visitek.dpu.cms.security.domain.model.User;

import java.util.List;

public interface UserRepository {

	List<User> getAll(int startRow, int pageSize);

	Long countAll();

}
