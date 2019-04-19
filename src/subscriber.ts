import { UnboundedQueue } from "./queue";
import { Observer, Ventilator } from "./ventilator";
 
export class SubscriberObs implements Observer {
    notify(message: string): void {
        console.log(this.name + " : " + message);
    }
    subscribe(ventilator: Ventilator): void {
        ventilator.subscribers.push(this);
    }
    constructor(public name: string) { }

    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " " + res))
    }
}

export class Subscriber {
    constructor(public name: string) { }

    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " " + res))
    }
}