
const myName = "Charles";
const myHeight = '1.78m';
const myCountry = "Nigeria";



// To Create new element nodes in a document with the above values as innertext

document.body.onload = addElement();
function addElement() {
    // create new h4 elements
    const name = document.createElement("p");
    const height= document.createElement("p");
    const country= document.createElement("p");

    // create content fot the elements
    name.innerText = `My name is ${myName}`;
    height.innerText = `My height is ${myHeight}`;
    country.innerText = `My country is ${myCountry}`

    // add the new element nodes to the document
    const newElements = [name,height,country]
    newElements.forEach((element)=>{
        document.body.appendChild(element)
    })

}


// To print the above values in a popup windows in a browser

alert(`My name is ${myName} \nMy height is ${myHeight} \n My country is ${myCountry}`);


// To write the above values to an open html document
//USING THIS METHOD DELETES EXISTING CONTENT

function myWriteFunction(){
    document.open();
    document.write('<h4>Name</h4>');
    document.write(`<p>${myName}</p>`);
    document.write('<h4>Height</h4>');
    document.write(`<p>${myHeight}</p>`);
    document.write('<h4>Name</h4>');
    document.write(`<p>${myCountry}</p>`);
    document.close();
}


// To print out the above values in  the browser debug console or node terminal:

console.log(`my name is ${myName}`);
console.log(`my height is ${myHeight}`);
console.log(`my country is ${myCountry}`);