require("../Pages/confirm.js")
var animal2= function () {

    this.selectAnimal=function(index){
        element(by.model("animal")).$('[value="' + index + '"]').click();

    };

    this.clickContinue1=function () {
         element(by.buttonText("CONTINUE")).click();
    return require('./confirm.js');
    };


};
module.exports=new animal2();