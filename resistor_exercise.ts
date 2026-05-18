
const dict = {black:0, brown:1, red:2, orange:3, yellow:4, green:5, blue:6, violet:7, grey:8, white:9};

function decode_color(number: number){
    for (const key in dict){
        if(dict[key as keyof typeof dict] === number){
            return key;
        }
    }
}


function get_number(color: string){
    return dict[color as keyof typeof dict];
}

console.log(get_number("white"));
console.log(decode_color(2));