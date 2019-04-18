import { UnboundedQueue } from "./queue";
import { Publisher } from "./publisher";
import { Subscriber } from "./subscriber";

async function scenario1() {
    console.log("Scenario 1")   
    let queue = new UnboundedQueue()
    let p1 = new Publisher()
    let s1 = new Subscriber('subscriber1')
    s1.pull(queue)
    p1.push(queue, 'message')
    p1.push(queue, 'message2')
    p1.push(queue, 'message3')
    s1.pull(queue)
}

scenario1();