package id.co.visitek.cms.base.domain.model;

import java.util.Date;

public interface DomainEvent {
	public int eventVersion();
	public Date occuredOn();
}
