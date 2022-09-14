const aCar = { 
    owner : "Joe Bloggs", 
    address: "3 Walkers Lane",
    previous_owners: [
        {
            name: "Pat Smith",
            address: "1 Main Street"
        },
        {
            name: "Sheila Dwyer",
            address: "2 High Street"
        }
    ],
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: '1.8'
    }, 
    registration : {
        year: '201',
        countryCode: 'WD',
        number: '1058'
    }  
};

aCar.milage = "10000";
aCar.colour = "red";
aCar.interior_fabric= {
    texture: 'leather',
    shade: 'cream'};

console.log("It is a " + aCar.colour + " car, " + aCar.milage + " mileage, with " + aCar.interior_fabric.texture + " interior"); 
//console.log(aCar.owner + " drives a " + aCar.type.make)

//console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.countryCode + "-" + aCar.registration.number)

//console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address )
