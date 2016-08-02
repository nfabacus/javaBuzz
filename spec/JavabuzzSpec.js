describe('Javabuzz', function(){
  var javabuzz;

  beforeEach(function(){
      javabuzz = new JavaBuzz();
    });

  describe('knows when the number', function(){
    it('is divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('is divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('is divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when the number', function(){
    it('is NOT divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });
    it('is NOT divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(4)).toBe(false);
    });
    it('is Not divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(14)).toBe(false);
    });
  });

  describe('when playing,', function(){
    it('says "Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
    it('says "Buzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
    it('says "JavaBuzz" when a number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });
    it('returns a number when the number is not divisible by 3,5, 15', function(){
      expect(javabuzz.says(4)).toEqual(4);
    });
  });
});
