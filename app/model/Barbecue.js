class Barbecue {
    constructor(nameBarbecue, dateBarbecue, addressBarbecue, timeBarbecue, durationBarbecue, numberGuests, meatKG) {
        this.nameBarbecue = nameBarbecue;
        this.dateBarbecue = dateBarbecue;
        this.addressBarbecue = addressBarbecue;
        this.timeBarbecue = timeBarbecue;
        this.durationBarbecue = durationBarbecue;
        this.numberGuests = numberGuests;
        this.meatKG = meatKG;
    }

    get dataChurrasco() {
        return new Date(this.dateBarbecue + 'UTC-3');
    }
}