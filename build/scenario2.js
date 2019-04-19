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
function scenario2() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Scenario 2");
        let queue = new queue_1.UnboundedQueue();
        let p1 = new publisher_1.Publisher();
        let s1 = new subscriber_1.Subscriber('subscriber1');
        let s2 = new subscriber_1.Subscriber('subscriber2');
        let s3 = new subscriber_1.Subscriber('subscriber3');
        s1.pull(queue);
        s2.pull(queue);
        s3.pull(queue);
        p1.push(queue, 'message1');
        p1.push(queue, 'message2');
        p1.push(queue, 'message3');
    });
}
scenario2();
//# sourceMappingURL=scenario2.js.map