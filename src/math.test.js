const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {

    test('Test somme de nombre premier de 2 à 6 égal à 10', () => {
        expect(Util.sumPrime(6)).toBe(10);
    });

    test('Test somme de nombre premier de 2 à 8 égal à 17', () => {
        expect(Util.sumPrime(8)).toBe(17);
    });

    test('Test somme de nombre premier de 2 à 8 n\'est pas égal à 18', () => {
        expect(Util.sumPrime(8)).not.toBe(18);
    });

    test('Test n <= 0 => throw exception', () => {
        expect(() => { Util.sumPrime(-22) }).toThrow('Impossible de faire l\'operation pour n <= 0');
    });

    test('Test n = 1 => throw exception', () => {
        expect(() => { Util.sumPrime(1) }).toThrow('Impossible de faire l\'operation pour n = 1');
    });
});

describe('fizzBuzz', function () {

    test('Test n <= 0 => throw exception', () => {
        expect(() => { Util.fizzBuzz(-22) }).toThrow('Impossible de faire l\'operation pour n <= 0');
    });

    test('Test résultat retourné est un array', () => {
      expect(Array.isArray(Util.fizzBuzz(15))).toBe(true);
    });

    test('Test fizzbuzz pour n=15', () => {
      const fizz = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
      expect(Util.fizzBuzz(15)).toEqual(fizz);
    });

    test('Test qui contient FizzBuzz pour n=15',() => {
      const fizz = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
      expect(fizz).toContain('FizzBuzz');
    })
});

describe('cipher', function () {

    test('Test ("Test Unitaire") => "Uftu Vojubjsf"', () => {
        expect(Util.cipher("Test Unitaire")).toEqual("Uftu Vojubjsf");
    });

    test('Test ("Zebre") => "Afcsf"', () => {
        expect(Util.cipher("Zebre")).toEqual("Afcsf");
    });

    test('Test ("zoe") => "apf"', () => {
        expect(Util.cipher("zoe")).toEqual("apf");
    });

    test('Test ("&é") => "&é"', () => {
        expect(Util.cipher("&é")).toEqual("&é");
    });

});

describe('pairs', function () {

    test('Test Util.pairs([]) => 0', () => {
        expect(Util.pairs([])).toBe(0)
    });

    test('Test Util.pairs([3]) => 0', () => {
        expect(Util.pairs([3])).toBe(0)
    });

    test('Test Util.pairs([3,3]) => 1', () => {
        expect(Util.pairs([3,3])).toBe(1)
    });

    test('Test Util.pairs([3,3,5,]) => 1', () => {
        expect(Util.pairs([3,3,5,])).toBe(1)
    });

    test('Test Util.pairs([3,3,5,5,5]) => 4', () => {
        expect(Util.pairs([3,3,5,5,5])).toBe(4)
    });

    test('Test Util.pairs([3,3,5,5,5,7,7,7]) => 7', () => {
        expect(Util.pairs([3,3,5,5,5,7,7,7])).toBe(7)
    });
});
