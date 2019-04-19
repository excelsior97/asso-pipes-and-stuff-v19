import { UnboundedQueue } from "./queue";
import { Publisher } from "./publisher";
import { SubscriberObs } from "./subscriber";
import { Ventilator } from "./ventilator";

async function scenario3() {   
    let queue = new UnboundedQueue()
    let p1 = new Publisher()
    let v1 = new Ventilator("ventilator")
    let s1 = new SubscriberObs('subscriber1')
    let s2 = new SubscriberObs('subscriber2')
    let s3 = new SubscriberObs('subscriber3')
    s1.subscribe(v1)
    s2.subscribe(v1)
    s3.subscribe(v1)
    v1.pull(queue)
    v1.pull(queue)
    v1.pull(queue)
    p1.push(queue, 'message1')
    p1.push(queue, 'message2')
    p1.push(queue, 'message3')
}

scenario3();