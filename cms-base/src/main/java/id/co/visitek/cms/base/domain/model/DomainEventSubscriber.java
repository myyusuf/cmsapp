package id.co.visitek.cms.base.domain.model;

public interface DomainEventSubscriber<T> {

	public void handleEvent(T aDomainEvent);
	public Class<?> subscribedToEventType();

}
