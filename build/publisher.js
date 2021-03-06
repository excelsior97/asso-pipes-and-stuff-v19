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
class Publisher {
    push(queue, arg) {
        return __awaiter(this, void 0, void 0, function* () {
            queue.enqueue(arg);
        });
    }
}
exports.Publisher = Publisher;
class PublisherBroker {
    constructor(name) {
        this.name = name;
        this.queue = new queue_1.UnboundedQueue();
    }
    register(registry) {
        registry.publishers.push(this);
    }
    push(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            this.queue.enqueue(arg);
        });
    }
}
exports.PublisherBroker = PublisherBroker;
//# sourceMappingURL=publisher.js.map