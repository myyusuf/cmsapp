package id.co.visitek.dpu.cms.security.domain.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "CMS_CONTACT")
public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "contact_seq_gen")
	@SequenceGenerator(name = "contact_seq_gen", sequenceName = "CONTACT_ENTITY_SEQ")
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "LANDLINE")
	private String landline;
	
	@Column(name = "MOBILE")
	private String mobile;

	public String getLandline() {
		return landline;
	}

	public void setLandline(String landline) {
		this.landline = landline;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Contact [id=");
		builder.append(id);
		builder.append(", landline=");
		builder.append(landline);
		builder.append(", mobile=");
		builder.append(mobile);
		builder.append("]");
		return builder.toString();
	}


}
