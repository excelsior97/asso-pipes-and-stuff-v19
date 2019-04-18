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
class UnboundedQueue {
    constructor() {
        this.queue = new Array();
        this.promises = new Array();
    }
    enqueue(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.promises.length > 0)
                this.promises.shift()(arg);
            else
                this.queue.push(arg);
        });
    }
    dequeue() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.queue.length > 0)
                return Promise.resolve(this.queue.shift());
            else
                return new Promise(res => this.promises.push(res));
        });
    }
}
exports.UnboundedQueue = UnboundedQueue;
//# sourceMappingURL=queue.js.map