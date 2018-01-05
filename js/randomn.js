console.log(" random.js is running");

const options = $(".door");
// console.log(options);
for(var i = 0; i < options.length; i++){
    const target = Math.floor(Math.random() * options.length -1) + 1;
    const target2 = Math.floor(Math.random() * options.length -1) +1;
    options.eq(target).before(options.eq(target2));
}

// Select all options elements from the DOM 
// then generate two randoms between 0 and options.length. 
// Use eq to select a random element in the selected elements 
// and position it before another randomly selected element in 
// the set of selected elemnts.