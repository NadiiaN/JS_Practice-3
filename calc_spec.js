describe('calculator', function () {     
        
            it('should add ' + 8 + ' plus ' + 2 + ' and be equals to ' + (8 + 2), function () {
            expect(8 + 2).toBe(10);
        });

        it('should subtract' + 8 + ' from ' + 2 + ' and be equals to ' + (8 - 2), function () {
            expect(8 - 2).toBe(6);
        });

        it('should multiply ' + 8 + 'x' + 2 + ' and be equals to ' + (8*2), function () {
           expect(8 * 2).toBe(16);
        });

        it('should divide ' + 8 + '/' + 2 + ' and be equals to ' + (2 && 8/2), function () {
            expect(8 / 2).toBe(4);
        });
});