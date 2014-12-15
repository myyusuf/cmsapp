/*
 *	Copyright 2014-2016 Oriza Indonesia, PT.
 *
 *	Commercial license
 *
 *
 *
 *
 */

package id.co.visitek.cms.security.domain.model;

import java.io.Serializable;

/**
 * Domain model for Cms User
 * 
 * <p>
 * Mainly used for security
 * </p>
 * 
 * @author Yusuf
 * @since May 22, 2014
 * 
 */

public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String username;

	private String password;

	private String firstName;

	private String lastName;

	private String email;

	private String notes;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

}
