


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
const sakinys6 = d2.reverse().join(', ');
console.log(sakinys6)


 