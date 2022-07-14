 // Consider a bank.
 // A bank receives cash deposits from dispensaries on some kind of regular cadence.
 // The bank needs to know ahead of time which carrier service is dropping off these 
 //deposits for each dispensary
 // and be able to manage which carrier service belongs to which dispensaries.

// The bank has a list of dispensaries. Each dispensary has a name and a list of carrier services. 
//The bank needs to know which carrier service belongs to which dispensary.

 // Acceptance Criteria:
 //     - The bank can assign a preferred carrier service to a particular dispensary.
 // - The bank can assign a default carrier service across all of the dispensaries.
 // - If the bank has already assigned a preferred carrier, then setting the default should not
 // override that preferred carrier.
 // - A dispensary can assign its own preferred carrier service unless the bank has already
 // assigned one to it.

 // - A dispensary knows who its carrier service is.
 //     Create an API (or APIs) to manage the relationship between the Bank, Dispensaries, and CarrierServices. 
 //This should not be a Web API.
 //     Don’t provide any data storage or retrieval.
 //     Do not spend any time creating a UI, we are looking for code that is well organized and simple. 
 //You should handle errors such as a nonexistent dispensary or carrier service.
 //     Your solution should include a way to run automated tests to prove that it works.

// • Date
// • Time
// • Total sale price
// • Quantity in ounces
 // • State
// • City
// • Dispensary Name


 // Create a type for the dispensary
 // Create a type for the carrier service
 // Create a type for the bank
 //

//  let Greeting = "Welcome to Go Green!";
// console.log(Greeting);

// type Sale = {
//     id: number;
//     dispensaryName: string;
//     date: string;
//     time: string;
//     totalSalePrice: number;
//     quantityInOunces: number;
//     state: string;
//     city: string;
// }
/*type Deposit = {
    ID: number;
    Amount : number;
    Date : string;
    DispensaryName : string;
    carrierName: string;
}*/

export type CarrierService = {
    name: string;
}


export class Dispensary {
    private _name: string;
//    private _carrierServices: CarrierService[];
    private _prefferredCarrierService: CarrierService;
    //private _defaultCarrierService: CarrierService;
    //, carrierServices: CarrierService[]
    constructor(name: string) {
        this._name = name;
        //this._carrierServices = carrierServices
      }

      // public deposit(){
      //
      // }
     
      public get name() {
            return this._name;
        }
    
        public set name(name: string) {
            this._name = name;
        }

        public get prefferredCarrierService() {
            return this._prefferredCarrierService;
        }
    
        public set prefferredCarrierService(prefferredCarrierService: CarrierService) {
            if(!this._prefferredCarrierService) {
                this._prefferredCarrierService = prefferredCarrierService;
            }
        }

        public set defaultCarrierService(defaultCarrierService: CarrierService) {
            if(!this._prefferredCarrierService) {
                this._prefferredCarrierService = defaultCarrierService;
            }
        }

        /*public get defaultCarrierService() {
            return this._defaultCarrierService;
        }
    
        public set defaultCarrierService(defaultCarrierService: CarrierService) {
            this._defaultCarrierService = defaultCarrierService;
        }*/
    
        /*public get carrierServices() {
            return this._carrierServices;
        }
    
        public set carrierServices(carrierServices: CarrierService[]) {
            this._carrierServices = carrierServices;
        }*/
}

//You should handle errors such as a nonexistent dispensary or carrier service.

export class Bank {
   private _name: string;
   private _dispensaries: Dispensary[];
 
  constructor(name: string, dispensaries: Dispensary[]) {
    this._name = name;
    this._dispensaries = dispensaries
  }

  public setDefaultCarrierService(defaultCarrierService: CarrierService){
      let retVal = false;
    const len = this._dispensaries.length;
    for(let i = 0; i<len; i++)
    {
        retVal = true;
        this._dispensaries[i].defaultCarrierService = defaultCarrierService;
    }
      return retVal;
  }

  public setPrefferredCarrierService(prefferredCarrierService: CarrierService, dispensaryName: string ) {
      let retVal = false;
    const len = this._dispensaries.length;
    for(let i = 0; i<len; i++)
    {
        if(this._dispensaries[i].name === dispensaryName) {
            this._dispensaries[i].prefferredCarrierService = prefferredCarrierService;
            retVal = true;
            break;
        }
    }
    return retVal;
  }
 
  public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get dispensaries() {
        return this._dispensaries;
    }

    public set dispensaries(dispensaries: Dispensary[]) {
        this._dispensaries = dispensaries;
    }

    public getDispensariesByIndex(index: number){
        if(index < this._dispensaries.length) {
            return this._dispensaries[index];
        }
        return null;
    }

    
}
 

