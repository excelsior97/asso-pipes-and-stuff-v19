import { PublisherBroker } from "./publisher";
import { SubscriberObsBroker } from "./subscriber";

export class Registry {
    public publishers: Array<PublisherBroker> = new Array()
    public subscribers: Array<SubscriberObsBroker> = new Array()
}

export class Broker {
    constructor(public name: string, public registry : Registry) { }

    push(message : string) : void {
        this.registry.subscribers.forEach(subscriber => subscriber.queue.enqueue(message))
    }
    
    async pull(publisher: PublisherBroker): Promise<void> {
        publisher.queue.dequeue().then(res => {
            console.log(this.name + " : " + res)
            this.registry.subscribers.forEach(subscriber => subscriber.notify())
            this.push(res)
        })
    }
}

