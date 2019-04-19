import { PublisherBroker } from "./publisher";
import { SubscriberObsBroker } from "./subscriber";
import { Registry, Broker } from "./broker";

async function scenario4() {   
    let registry = new Registry()
    let broker = new Broker("broker", registry)
    let p1 = new PublisherBroker("p1")
    let p2 = new PublisherBroker("p2")
    let p3 = new PublisherBroker("p3")
    let s1 = new SubscriberObsBroker('subscriber1')
    let s2 = new SubscriberObsBroker('subscriber2')
    let s3 = new SubscriberObsBroker('subscriber3')
    
    p1.register(registry)
    p2.register(registry)
    p3.register(registry)
    s1.subscribe(registry)
    s2.subscribe(registry)
    s3.subscribe(registry)
    broker.pull(p1)
    broker.pull(p1)
    broker.pull(p2)
    broker.pull(p3)
    broker.pull(p3)
    broker.pull(p3)
    p1.push('pub1message1')
    p1.push('pub1message2')
    p2.push('pub2message1')
    p3.push('pub3message1')
    p3.push('pub3message2')
    p3.push('pub3message3')
}

scenario4();