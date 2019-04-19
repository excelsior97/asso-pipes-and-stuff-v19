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
class SubscriberObs {
    constructor(name) {
        this.name = name;
    }
    notify(message) {
        console.log(this.name + " : " + message);
    }
    subscribe(ventilator) {
        ventilator.subscribers.push(this);
    }
    pull(queue) {
        return __awaiter(this, void 0, void 0, function* () {
            queue.dequeue().then(res => console.log(this.name + " " + res));
        });
    }
}
exports.SubscriberObs = SubscriberObs;
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    pull(queue) {
        return __awaiter(this, void 0, void 0, function* () {
            queue.dequeue().then(res => console.log(this.name + " " + res));
        });
    }
}
exports.Subscriber = Subscriber;
//# sourceMappingURL=subscriber.js.map