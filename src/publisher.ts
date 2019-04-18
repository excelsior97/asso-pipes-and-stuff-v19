import { UnboundedQueue } from "./queue";

export class Publisher {
    async push(queue: UnboundedQueue, arg: string): Promise<void> {
        queue.enqueue(arg);
    }
}