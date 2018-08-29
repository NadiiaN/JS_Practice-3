describe("Equals 50", function () {
    let a = 22;
    let b = 28;
    it("compare two given numbers return true in case one of the number is 50 or if their sum is 50", function(){
        expect(a == 50 || b == 50 || a + b == 50).toEqual(true, "It's true");
    });
});