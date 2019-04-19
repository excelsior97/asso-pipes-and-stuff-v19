"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const publisher_1 = require("./publisher");
const subscriber_1 = require("./subscriber");
const broker_1 = require("./broker");
function scenario4() {
    return __awaiter(this, void 0, void 0, function* () {
        let registry = new broker_1.Registry();
        let broker = new broker_1.Broker("broker", registry);
        let p1 = new publisher_1.PublisherBroker("p1");
        let p2 = new publisher_1.PublisherBroker("p2");
        let p3 = new publisher_1.PublisherBroker("p3");
        let s1 = new subscriber_1.SubscriberObsBroker('subscriber1');
        let s2 = new subscriber_1.SubscriberObsBroker('subscriber2');
        let s3 = new subscriber_1.SubscriberObsBroker('subscriber3');
        p1.register(registry);
        p2.register(registry);
        p3.register(registry);
        s1.subscribe(registry);
        s2.subscribe(registry);
        s3.subscribe(registry);
        broker.pull(p1);
        broker.pull(p1);
        broker.pull(p2);
        broker.pull(p3);
        broker.pull(p3);
        broker.pull(p3);
        p1.push('pub1message1');
        p1.push('pub1message2');
        p2.push('pub2message1');
        p3.push('pub3message1');
        p3.push('pub3message2');
        p3.push('pub3message3');
    });
}
scenario4();
//# sourceMappingURL=scenario4.js.map