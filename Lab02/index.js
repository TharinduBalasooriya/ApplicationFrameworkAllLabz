//exercise 1
/*function getValue(){

	let value = 0;



	return new Promise(function (resolve,reject){
		setTimeout(function(){
			value = 10;
			//if asynchronous operations in handle success
			resolve(value);

		},1000)


	})
	
}*/

/*
function getNewValue(value){





	return new Promise(function (resolve,reject){
		setTimeout(function(){

			//if asynchronous operations in handle success
			resolve(value * 100);

		},1000)


	})

}
*/

/*function setValue(value){

	return value + 1999;
}

/!* getValue().then(function (value){
 	return getNewValue(value)
 }).then(function (value){
 	console.log(value);
 });*!/

//understanding async await

async function print(){
	let value = await getValue();
	try{
		value = await getNewValue(value);
	}catch(e) {

	}

	value = setValue(value);
	return value;
}
print().then(function (value){
	console.log(value);
});*/


//q2

//q1 recap

/*
function getVal(){
    let val;
    setTimeout(()=>{
        val = 10;
    },1000);

}
function mul(val){
    setTimeout(()=>{
        val = val * 2;
        callBack(val);
    },1000);

}


let get1stVal = new Promise((resolve,reject)=>{
    let val;
    setTimeout(()=>{
        val = 10;
        resolve(val);
    },1000);

})

let mulByTwo = (intiVal)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            intiVal = intiVal * 3;
            resolve(intiVal);
        },1000);

    })
}

get1stVal.then((firstVA)=>{
    return mulByTwo(firstVA);
}).then((finalVal)=>{
    console.log(finalVal);
})

async function  resolveAllPromise(){
    let firstVal = await get1stVal;
    let secondVal = await mulByTwo(firstVal);
    //console.log(secondVal);
    return secondVal;
}
let s  = resolveAllPromise();
s.then(val=>{
    console.log(val * 3);
})*/

//q1
function Vehicle(type){
    this.type = type;
    Vehicle.COUNT++;
}

Vehicle.prototype.print = function (){
    console.log('Vehicle is driving')
}
Vehicle.COUNT = 0;

let toyota = new Vehicle('Toyota');
console.log(Vehicle.COUNT);

console.log(Vehicle.prototype.constructor);
console.log(Vehicle.constructor)
function Car(name,speed){
    this.name = name;
    this.speed = speed;
    Vehicle.call(this,'CAR');

}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
let myCar = new Car('Allion',200);
//console.log(myCar.__proto__)