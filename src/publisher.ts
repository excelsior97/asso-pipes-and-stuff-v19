import { UnboundedQueue } from "./queue";
import { Registry } from "./broker";

export class Publisher {
    async push(queue: UnboundedQueue, arg: string): Promise<void> {
        queue.enqueue(arg);
    }
}

export class PublisherBroker {
    queue : UnboundedQueue = new UnboundedQueue();
    constructor(public name : string) { }
    register(registry : Registry) {
        registry.publishers.push(this);
    }
    async push(arg: string): Promise<void> {
        this.queue.enqueue(arg);
    }
}