import { UnboundedQueue } from "./queue";

 
 export class Subscriber {
    constructor(public name: string) { }

    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " " + res))
    }
}