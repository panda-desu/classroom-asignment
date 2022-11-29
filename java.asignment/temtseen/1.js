let Aa = 96;
let Ab =108;
let Ac = 89;
let Ba = 88;
let Bb = 91;
let Bc =110;
let Adundaj = (Aa+Ab+Ac)/3;
let Bdundaj = (Ba+Bb+Bc)/3;
if(Adundaj > 100 || Bdundaj > 100){
    if(Adundaj<Bdundaj)
    console.log('B baga ylsn');
    else if(Adundaj>Bdundaj)
    console.log('A baga ylsn');
    else 
    console.log('tentssen');
}else 
    console.log('yalagch bhgu');