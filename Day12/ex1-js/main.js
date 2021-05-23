var colors = require('colors');

console.log('Hello World');

function Calculator(a,b){
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function(){
    return this.a + this.b;
}

Calculator.prototype.subtract = function(){
    return this.a - this.b;
}

Calculator.prototype.multiply = function(){
    return this.a * this.b;
}

Calculator.prototype.log = function(){
    /*console.log('',this.a +' + '+ this.b +' = ' + this.add(),'\n',
                   this.a +' - '+ this.b +' = ' + this.subtract(),'\n',
                   this.a +' * '+ this.b +' = ' + this.multiply());
                   */
    var s1 = this.a +' + '+ this.b +' = ' + this.add();
    s1 = s1.bgMagenta;
    console.log(s1);

    var s2 = this.a +' - '+ this.b +' = ' + this.subtract();
    s2 = s2.rainbow;
    console.log(s2);

    var s3 = this.a +' - '+ this.b +' = ' + this.subtract();
    s3 = s3.cyan;
    console.log(s3);
}

var c1 = new Calculator(5,10);
c1.log();

var c2 = new Calculator(-3,27);
c2.log();

setTimeout(function(){c2.log()}, 2000);
//setTimeout(c2.log.bind(c2),2000);


//setTimeout(c2.log(), 2000); //calls the function immediatley //in node.js gives invalid callback error
//setTimeout(c.log, 2000); //error