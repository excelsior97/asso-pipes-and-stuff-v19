import { UnboundedQueue } from "./queue";

export interface Observer {
    notify(message: string) : void
    subscribe(ventilator: Ventilator) : void
} 

export class Ventilator {
    public subscribers: Array<Observer> = new Array()
    constructor(public name: string) { }
    async pull(queue: UnboundedQueue): Promise<void> {
        queue.dequeue().then(res => {
            console.log(this.name + " : " + res)
            this.subscribers.forEach(observer => observer.notify(res))
        })
    }
}