var confirmpage= function () {

    this.confirm_message=function(index){
     return   element(by.id("title")).getText();

    };


};
module.exports=new confirmpage();