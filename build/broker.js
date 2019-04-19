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
class Registry {
    constructor() {
        this.publishers = new Array();
        this.subscribers = new Array();
    }
}
exports.Registry = Registry;
class Broker {
    constructor(name, registry) {
        this.name = name;
        this.registry = registry;
    }
    push(message) {
        this.registry.subscribers.forEach(subscriber => subscriber.queue.enqueue(message));
    }
    pull(publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            publisher.queue.dequeue().then(res => {
                console.log(this.name + " : " + res);
                this.registry.subscribers.forEach(subscriber => subscriber.notify());
                this.push(res);
            });
        });
    }
}
exports.Broker = Broker;
//# sourceMappingURL=broker.js.map