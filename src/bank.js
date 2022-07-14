"use strict";
// Consider a bank.
// A bank receives cash deposits from dispensaries on some kind of regular cadence.
// The bank needs to know ahead of time which carrier service is dropping off these 
//deposits for each dispensary
// and be able to manage which carrier service belongs to which dispensaries.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = exports.Dispensary = void 0;
class Dispensary {
    //private _defaultCarrierService: CarrierService;
    //, carrierServices: CarrierService[]
    constructor(name) {
        this._name = name;
        //this._carrierServices = carrierServices
    }
    deposit() {
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get prefferredCarrierService() {
        return this._prefferredCarrierService;
    }
    set prefferredCarrierService(prefferredCarrierService) {
        if (!this._prefferredCarrierService) {
            this._prefferredCarrierService = prefferredCarrierService;
        }
    }
    set defaultCarrierService(defaultCarrierService) {
        if (!this._prefferredCarrierService) {
            this._prefferredCarrierService = defaultCarrierService;
        }
    }
}
exports.Dispensary = Dispensary;
//You should handle errors such as a nonexistent dispensary or carrier service.
class Bank {
    constructor(name, dispensaries) {
        this._name = name;
        this._dispensaries = dispensaries;
    }
    setDefaultCarrierService(defaultCarrierService) {
        let retVal = false;
        const len = this._dispensaries.length;
        for (let i = 0; i < len; i++) {
            retVal = true;
            this._dispensaries[i].defaultCarrierService = defaultCarrierService;
        }
        return retVal;
    }
    setPrefferredCarrierService(prefferredCarrierService, dispensaryName) {
        let retVal = false;
        const len = this._dispensaries.length;
        for (let i = 0; i < len; i++) {
            if (this._dispensaries[i].name === dispensaryName) {
                this._dispensaries[i].prefferredCarrierService = prefferredCarrierService;
                retVal = true;
                break;
            }
        }
        return retVal;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get dispensaries() {
        return this._dispensaries;
    }
    set dispensaries(dispensaries) {
        this._dispensaries = dispensaries;
    }
    getDispensariesByIndex(index) {
        if (index < this._dispensaries.length) {
            return this._dispensaries[index];
        }
        return null;
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map