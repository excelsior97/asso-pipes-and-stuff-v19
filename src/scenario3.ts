import { UnboundedQueue } from "./queue";
import { Publisher } from "./publisher";
import { SubscriberObs } from "./subscriber";
import { Ventilator } from "./ventilator";

async function scenario3() {   
    let queue = new UnboundedQueue()
    let p1 = new Publisher()
    let ventilator = new Ventilator("ventilator")
    let s1 = new SubscriberObs('subscriber1')
    let s2 = new SubscriberObs('subscriber2')
    let s3 = new SubscriberObs('subscriber3')
    s1.subscribe(ventilator)
    s2.subscribe(ventilator)
    s3.subscribe(ventilator)
    ventilator.pull(queue)
    ventilator.pull(queue)
    ventilator.pull(queue)
    p1.push(queue, 'message1')
    p1.push(queue, 'message2')
    p1.push(queue, 'message3')
}

scenario3();