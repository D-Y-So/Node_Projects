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
    console.log('',this.a +' + '+ this.b +' = ' + this.add(),'\n',
                   this.a +' - '+ this.b +' = ' + this.subtract(),'\n',
                   this.a +' * '+ this.b +' = ' + this.multiply());
}

var c1 = new Calculator(5,10);
c1.log();

var c2 = new Calculator(-3,27);
c2.log();

setTimeout(c2.log(), 2000);
