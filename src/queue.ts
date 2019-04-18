interface AsyncQueue<T> {
    enqueue(elem: T): void
    dequeue(): Promise<T>
} 


export class UnboundedQueue implements AsyncQueue<string> {
    public queue: Array<string> = new Array()
    protected promises: Array<any> = new Array()

    async enqueue(arg: string): Promise<void> {
        if (this.promises.length > 0)
            this.promises.shift()(arg)
        else
            this.queue.push(arg)
    }

    async dequeue(): Promise<string> {
        if (this.queue.length > 0)
            return Promise.resolve(this.queue.shift())
        else
            return new Promise<string>(res => this.promises.push(res))
    }
}