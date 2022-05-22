


// const mark = [10,2,8,4,6];
// const size = mark.length

// console.log(mark);
// console.log(size);
const a = 8;
const b = 3;
const d = 7;

if (a === b) { 
    const c = 5;
    console.log(c);
} else {

    const c = 10;
    console.log(c) ;
}

if (a === b) { 
    const c = 5;
    console.log(c);
} else if (a > d) {

    const c = 10;
    console.log(c) ;
}

console.log('+++++++++++++++++++++++++++++++++')

const parosMetas = 'vakaras';
const arlyja = true;

if (parosMetas === 'rytas')
    if (arlyja) {
        console.log('labas rytas, nepamirsk skecio')
    } else {
    console.log('labas rytas')

} else if (parosMetas === 'diena')
            if (arlyja){
                console.log('Laba diena, nepamirsk skecio')
            } else{
    console.log('Laba diena')

} else if (parosMetas === 'vakaras')
            if(arlyja) {
                console.log('Labas vakaras, nepamirsk skecio')
            } else {  
    console.log('Labas vakaras')
} else {
    console.log('Neatpazintas paros metas')
}


const abc =['a', 'c'];

console.log(abc)

abc.push('d');
console.log(abc)
abc.shift();
console.log(abc)
abc.pop();
console.log(abc)
abc.unshift('a');
console.log(abc)
const a1 = ['a', 'c']
const a2 = ['g', 'd']
const modern = [...a1, ...a2]
console.log(modern)

console.log('ss--------------------------------')

const s1 = 5
const s2 = -3
const s3 = 7
const suma = s1 + s2 + s3; 
console.log (suma)

const w1 = 'Labas'
const w2 = 'rytas'
const w3 = 'tau'
const sakinys = w1 +' '+ w2 + ' ' + w3
console.log(sakinys)
const sakinys2 = ` ${w1} ${w2} ${w3} `
console.log(sakinys2)

const x = [10,20,5,8,8]
const altern = x[0] - x[1] + x[2] -x[3]
console.log(altern)

const f = [w1, w2, w3]

const sakinys3 = `${d[2]}, ${d[1]}, ${d[0]} `

console.log(sakinys3)
const d1 = [...f];
const dr =d1.reverse();
console.log(dr)

const sakinys5 = dr.join(', ')
console.log(sakinys5)


console.log('-----------------------')

d2 = [...f];
const sakinys6 = d2.reverse().join(', ');  //apsuka reverse, join sujungia elementus
console.log(sakinys6)


 const dictionary = ['sakau', 'tau', 'rytas', 'labas']

 let reverse = ' '

 reverse += dictionary[3];
 reverse += ' '
 reverse += dictionary[2]
 reverse += ' '
 reverse += dictionary[1]
 reverse += ' '
 reverse += dictionary[0]


 console.log(reverse)

 reverse = `${dictionary[3]}, ${dictionary[2]}, ${dictionary[1]}, ${dictionary[0]}`
 console.log(reverse)

 console.log('---------------------------------')
 const d5 = [...dictionary]
 const jras = d5.reverse().join(', ') //apsuka reverse, join sujungia elementus 
 console.log(jras)


 //alternuojanti eilute

const listas = [10, 2, 20, 8, 4, 6]
let suma1 = 0;
suma1 += listas[0]
suma1 -= listas[1]
suma1 += listas[2]
suma1 -= listas[3]
suma1 += listas[4]
suma1 -= listas[5]
 console.log(suma1)


 //_________________________________________________________

 const hi = 'labas rytas'
 const hiSize = hi.length;
 console.log(hi, ' ', hiSize)

 //_________________________________________________

 // ternary operator klausimas = teigimas ar neigiamas 
 console.log('++++++++++++++++++++++++++++++++++++++++++++++')
 const arLyja = true;

 const sketis = arLyja ? 'Pasiimk' : 'nereikia'  // trumpesnis if else naudojamas kaip trumpa salyga

 console.log(sketis)

 const skaicius = 4 < 2 ? 'daugiau' : 'maziau';
 console.log(skaicius)

 console.log('---------+-------------------+--------------')

 let skaicius2 = ''
 if (4 < 2) {
     skaicius2 = 'daugiau'
 } else {
     skaicius2 = 'maziau'
 }

 console.log(skaicius2)

 
 console.log('---------+-------------------+--------------')

 // nestintas ternary trumpom salygom

 
 const color = 'red'
 const x1 = color === 'blue' ? 'melyna' : (color === 'red' ? 'Raudona' : 'nezinoma')

 console.log(x1)

 // switch

 const akys = 'brown'
 switch (akys){
     case 'blue':
        console.log('Melynos');
        break;

    case 'green' :
        console.log('Zalios')
        break

        case 'brown' :
            console.log('Rudos')
            break

        default:
            console.log('Neatpazinta spalva')
            break;

 }

console.log('============================================-==============')
 const day = 50

 switch (day){
    case 1 :
         console.log('darbo diena')
         break
    case 2 :
         console.log('darbo diena')
         break
    case 3 :
         console.log('darbo diena')
         break

    case 4 :
         console.log('darbo diena')
         break

    case 5 :
         console.log('darbo diena')
         break

    case 6 :
         console.log('Savaitgalis')
         break
    case 7 :
         console.log('Savaitgalis')
         break
    default:
        console.log('Neatpazinta')
         break
 }

 console.log('============================================-==============')

 //trumpesnis uzrasymas grupavimas 


 const day1 = 7
 switch (day1){
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
         console.log('darbo diena')
         break

    case 6 :
    case 7 :
         console.log('Savaitgalis')
         break
    default:
        console.log('Neatpazinta')
         break
 }

 console.log('============================================-==============')

/// if trumpinimas '||' = arba   "&&" = ir 

 if ( day1 === 1 || day1 === 2 || day1 === 3 || day1 === 4 || day1 === 5) {
     console.log( ' Darbadienis')
 } else if ( day1 === 6 ||day1 === 7) {  
    console.log( 'Savaitgalis')
 } else { 
    console.log( 'Belekas')
 }

 console.log('============================================-==============')


 if ( day1 >= 0 && day1 < 6) {
    console.log( ' Darbadienis5')
} else if ( day1 >= 6 && day1 <= 7) {  
   console.log( 'Savaitgalis')
} else { 
   console.log( 'Belekas')
}