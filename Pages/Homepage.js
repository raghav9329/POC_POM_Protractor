require ('../Pages/animal.js');
var Homepage= function () {

    this.enterfieldvalue=function(value) {
        element(by.model('person.name')).sendKeys(value);
        };
    this.elem=function () {
      return element(by.binding('person.name')).getText();

    };

    this.clickContinue=function () {
         element(by.buttonText('CONTINUE')).click();
        return require ('./animal.js');
    };


};
module.exports=new Homepage();