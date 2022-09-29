function echo(param){
    let type = typeof(param);
    console.log(type);
       if(type == 'string' || type == 'number'){
           console.log(param);
       } else {
           console.log('Parameter is not suitable for printing')
       }

}
echo('Hello, JavaScript!');
echo(18);
echo(null);