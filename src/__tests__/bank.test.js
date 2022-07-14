//import {Bank, Dispensary, CarrierService} from '../bank';
/*
The bank can assign a preferred carrier service to a particular dispensary.
- The bank can assign a default carrier service across all of the dispensaries.
- If the bank has already assigned a preferred carrier, then setting the default should not
override that preferred carrier.
- A dispensary can assign its own preferred carrier service unless the bank has already
assigned one to it.
- A dispensary knows who its carrier service is.
 */
const file = require('../bank');
describe('Bank', () => {
    it('should initialize Bank', () => {
        const bank = new file.Bank('Bank', []);
        expect(bank).toBeDefined();
    });
    it('bank can assign a default carrier service across all of the dispensaries', () => {
        let arrDispensary = [];
        arrDispensary.push(new file.Dispensary("Dispensary 1"));
        arrDispensary.push(new file.Dispensary("Dispensary 2"));
        arrDispensary.push(new file.Dispensary("Dispensary 3"));
        arrDispensary.push(new file.Dispensary("Dispensary 4"));
        const bank = new file.Bank('Bank', arrDispensary);
        const carrierService = { name: 'Carrier Service 1' };
        bank.setDefaultCarrierService(carrierService);
        console.log(bank.getDispensariesByIndex(0).prefferredCarrierService.name);
        expect(bank.getDispensariesByIndex(0).prefferredCarrierService.name).toEqual(carrierService.name);
    });
    it('bank has already assigned a preferred carrier, then setting the default should not\n' +
        'override that preferred carrier', () => {
        const dispensary = new file.Dispensary("Dispensary 1");
        const bank = new file.Bank('Bank', [dispensary]);
        const carrierService = { name: 'Carrier Service 1' };
        bank.setPrefferredCarrierService(carrierService, "Dispensary 1");
        const carrierService1 = { name: 'Carrier Service 2' };
        bank.setDefaultCarrierService(carrierService1);
        console.log(bank.getDispensariesByIndex(0).prefferredCarrierService.name);
        expect(bank.getDispensariesByIndex(0).prefferredCarrierService.name).toEqual(carrierService.name);
    });
    it('dispensary can assign its own preferred carrier', () => {
        const dispensary = new file.Dispensary("Dispensary 1");
        const carrierService = { name: 'Carrier Service 1' };
        dispensary.prefferredCarrierService = carrierService;
        console.log(dispensary.prefferredCarrierService.name);
        expect(dispensary.prefferredCarrierService.name).toEqual(carrierService.name);
    });
    it('dispensary can assign its own preferred carrier service unless the bank has already\n' +
        'assigned one to it', () => {
        const dispensary = new file.Dispensary("Dispensary 1");
        const bank = new file.Bank('Bank', [dispensary]);
        const carrierService = { name: 'Carrier Service 1' };
        bank.setPrefferredCarrierService(carrierService, "Dispensary 1");
        const carrierService1 = { name: 'Carrier Service 2' };
        dispensary.prefferredCarrierService = carrierService1;
        console.log(dispensary.prefferredCarrierService.name);
        expect(dispensary.prefferredCarrierService.name).toEqual(carrierService.name);
    });
    it('setting prefferredCarrierService for non existent Dispensary', () => {
        const dispensary = new file.Dispensary("Dispensary 1");
        const bank = new file.Bank('Bank', [dispensary]);
        const carrierService = { name: 'Carrier Service 1' };
        const carrierService1 = { name: 'Carrier Service 2' };
        expect(bank.setPrefferredCarrierService(carrierService, "Dispensary 2")).toEqual(false);
    });
});
//# sourceMappingURL=bank.test.js.map