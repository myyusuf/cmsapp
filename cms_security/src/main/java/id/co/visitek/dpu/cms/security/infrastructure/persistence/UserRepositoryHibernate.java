package id.co.visitek.dpu.cms.security.infrastructure.persistence;

import id.co.visitek.dpu.cms.security.domain.model.User;
import id.co.visitek.dpu.cms.security.domain.model.repository.UserRepository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public class UserRepositoryHibernate implements UserRepository {
	
	final Logger logger = LoggerFactory.getLogger(UserRepositoryHibernate.class);

	private static final String SELECT_ALL_USER_HQL = "select u from User u ";
	private static final String SELECT_COUNT_ALL_USER_HQL = "select count(u) from User u ";
	
	@Autowired
	private SessionFactory sessionFactory;


	@SuppressWarnings("unchecked")
	public List<User> getAll(int startRow, int pageSize) {
		return sessionFactory.getCurrentSession()
			.createQuery(SELECT_ALL_USER_HQL)
			.setFirstResult(startRow)
			.setMaxResults(pageSize)
			.list();
	}
	
	@Override
	public Long countAll() {
		return (Long)sessionFactory.getCurrentSession()
				.createQuery(SELECT_COUNT_ALL_USER_HQL)
				.uniqueResult();
	}
	
}
