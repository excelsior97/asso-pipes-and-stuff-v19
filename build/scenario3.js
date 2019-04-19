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
const queue_1 = require("./queue");
const publisher_1 = require("./publisher");
const subscriber_1 = require("./subscriber");
const ventilator_1 = require("./ventilator");
function scenario3() {
    return __awaiter(this, void 0, void 0, function* () {
        let queue = new queue_1.UnboundedQueue();
        let p1 = new publisher_1.Publisher();
        let ventilator = new ventilator_1.Ventilator("ventilator");
        let s1 = new subscriber_1.SubscriberObs('subscriber1');
        let s2 = new subscriber_1.SubscriberObs('subscriber2');
        let s3 = new subscriber_1.SubscriberObs('subscriber3');
        s1.subscribe(ventilator);
        s2.subscribe(ventilator);
        s3.subscribe(ventilator);
        ventilator.pull(queue);
        ventilator.pull(queue);
        ventilator.pull(queue);
        p1.push(queue, 'message1');
        p1.push(queue, 'message2');
        p1.push(queue, 'message3');
    });
}
scenario3();
//# sourceMappingURL=scenario3.js.map