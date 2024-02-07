function calculateMoney(ticketSale){
    if (ticketSale <= 0){
        return 'error';
    }
    else {
        const total_earned = ticketSale*120;
        const zoo_cost = 1*500 + (8*50);
        return  total_earned - zoo_cost;
    }
}

function checkName(name){
    const name_type = typeof name;
    if (name_type != 'string'){
        return 'invalid';
    }
    else{
        for(let i of name){
            i = i.toLowerCase();
            if(i === 'a' || i === 'y' || i === 'i' || i === 'e' || i === 'o' || i === 'u'|| i === 'w'){
                return 'Bad Name';
            }
        }
        return 'Good Name';
    }
}
function deleteInvalids(array) {
    if (Array.isArray(array)) {
        for(let i of array){
            if (typeof i != 'number'){
                array.splice(array.indexOf(i),1);
            }
        }
        return array;
    }
    else{
        return 'Invalid Array';
    }
}

function password(obj){
     const obj_key = Object.keys(obj);
     const obj_val = Object.values(obj);
     const year = obj_val[1].toString();
     const year_len = year.length;
     let capital_head = obj_val[2];
     capital_head = capital_head.charAt(0).toUpperCase() + capital_head.slice(1);
     if(obj_key.length == 3 && year_len == 4){
        return capital_head+'#'+obj_val[0]+'@'+year;
     }
     else{
        return 'invalid';
     }
}

function monthlySavings(array,number){
    if(Array.isArray(array) && typeof number === 'number'){
        let collection = 0;
        for(let i of array){
            if(i >= 3000){
                collection = collection + (i/100)*80;
            }
            else{
                collection = collection + i;
            }
        }
        const savings = collection - number;
        if (savings < 0){
            return 'Earn More';
        }
        else{
            return savings ;
        }
    }
    else{
        return 'Invalid Input';
    }
}


