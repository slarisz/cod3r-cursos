//Anonymous function
(function (a, b, c){
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(() => {
    console.log('Arrow 01')
}) ();

(() => console.log('Arrow 02')) ();