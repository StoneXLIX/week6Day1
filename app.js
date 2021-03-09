const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

function forFunc(){
    $('#flexy').toggleClass('turnGray');
}
function darkMode(){
    $('body, #main.div ').toggleClass('darkMode');
    $('p').toggleClass('turnGray')
   // $('#flexy').toggleClass('turnGray');
    //$('#main').toggleClass('darkMode');
   // $('.bond').toggleClass('darkMode');
    //$('.item').toggleClass('darkMode');
}
let a = storeItems; 
function displayEach(){
    for(i=0; i < storeItems.length; i++){
        if(storeItems[i].inStock === true){
            $('.main').append(' <div id ="idOfItem" class ="item all bond">  <div id = "flexy"> <p class ="item1 bond">$'+a[i].price +' </p> <p class ="item2 bond">'+a[i].name+ '</p> <p class ="item3 bond">'+a[i].details+ '</p></div>   </div>')
           

        }
        else{

        }
    }
    //display each of them 
    
}

// use a for each to make all of these go in because store items 
//is an arra and will never be equal to true


displayEach();











