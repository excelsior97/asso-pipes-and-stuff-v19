import { UnboundedQueue } from "./queue";
import { Publisher } from "./publisher";
import { Subscriber } from "./subscriber";

async function scenario2() {
    console.log("Scenario 2")   
    let queue = new UnboundedQueue()
    let p1 = new Publisher()
    let s1 = new Subscriber('subscriber1')
    let s2 = new Subscriber('subscriber2')
    let s3 = new Subscriber('subscriber3')
    s1.pull(queue)
    s2.pull(queue)
    s3.pull(queue)
    p1.push(queue, 'message1')
    p1.push(queue, 'message2')
    p1.push(queue, 'message3')
}

scenario2();