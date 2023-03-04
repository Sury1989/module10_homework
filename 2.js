let x;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
   console.log ('Это число');
}
else if (typeof(x) == 'string') {
    console.log ('Это строка');
} else if (typeof(x) == 'boolean') {
    console.log('Это Boolean');
} else {
    console.log ('undefined');
}




