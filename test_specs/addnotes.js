describe("checking functionality of Zoo Adaption Center",function () {

    beforeEach(function () {
    browser.get("http://www.thetestroom.com/jswebapp/");

});

    var Homepage=require('../Pages/Homepage.js');
    it("should be able to adopt an animal by POM",function () {
        Homepage.enterfieldvalue('raghav');
         var homepagetext=Homepage.elem();
        expect(homepagetext).toBe('raghav');
       var animal_page =  Homepage.clickContinue();
         animal_page.selectAnimal(1);
     var confirm=  animal_page.clickContinue1();
     var confirmpagetext= confirm.confirm_message();
      expect(confirmpagetext).toBe('Thank you');
    });


});
