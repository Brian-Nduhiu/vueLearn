//Object Getters & Setters

const banks = {
    primaryBank: "NCBA",
    secondaryBank: "Morgan Chase",
    get banksUsed() {
        return `Banks used 1: ${banks.primaryBank} 2: ${banks.secondaryBank}`;
    },
    set newBanks(bankNames) {
        const banks = bankNames.split(',');
        this.primaryBank = banks[0];
        this.secondaryBank = banks[1];
    }
};

banks.newBanks = "KCB, JP Morgan";
// console.log(banks);


//Proxies

const handler = {
    get: function (target, name) {
        if (name in target) {
            return target[name];
        }
        else {
            return `Sorry ${name} does not exist in ${target} object`;
        }
    },
    set: function (obj, prop, value) {
        console.log(`obj : ${obj} prop : ${prop} value : ${value}`);

    }
};
const bankProxy = new Proxy(banks, handler);

// console.log(bankProxy.thirdBank);

bankProxy.newBanks = "Barclays, BOI";

console.log(banks);