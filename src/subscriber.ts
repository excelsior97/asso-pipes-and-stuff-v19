import { UnboundedQueue } from "./queue";
import { Observer, Ventilator } from "./ventilator";
import { Registry } from "./broker";

export interface ObserverBroker {
    notify() : void
    subscribe(registry: Registry) : void
} 

export class SubscriberObs implements Observer {
    notify(message: string): void {
        console.log(this.name + " : " + message);
    }
    subscribe(ventilator: Ventilator): void {
        ventilator.subscribers.push(this)
    }
    constructor(public name: string) { }

    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " received : " + res))
    }
}

export class Subscriber {
    constructor(public name: string) { }

    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " received : " + res))
    }
}

export class SubscriberObsBroker implements ObserverBroker {
    queue : UnboundedQueue = new UnboundedQueue()
    notify(): void {
        this.pull();
    }
    subscribe(registry: Registry): void {
        registry.subscribers.push(this);
    }
    constructor(public name: string) { }

    async pull(): Promise<void> {
        this.queue.dequeue().then(res => console.log(this.name + " received : " + res))
    }
}