var iphone = {
    color : 'Golt',
    model : '6S+',
    owner : {
        name : 'Vasya',
        address : {
            street : 'Jovtneva'
        }
    },
    ring : function(contactId){
        console.log('Ring-Ring!!!' + this.contacts[contactId].phoneNumber);
    },
    contacts : []
};

console.log(iphone.owner.address.street);

var person ={
    name : 'Vasya',
    second : 'Petrov',
    phoneNumber : '367-34-56'
};

iphone.contacts.push(person);
iphone.ring(0);

/*var baryga = [];

baryga.push(iphone);

console.log(baryga[0].color.toUpperCase());
console.log(iphone);
console.log(iphone.color.toUpperCase());
iphone.ring(1);
console.log(baryga[0].ring(0));
console.log(baryga[0].ring(1));*/






