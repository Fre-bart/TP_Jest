const Interval = require('./interval');


describe('overlaps', function () {

    test('Test [1,5] overlaps [2,3] => true', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(2,3);
        expect(interval1.overlaps(interval2)).toBe(true);
    });

    test('Test [1,5] overlaps [6,8] => false', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(6,7);
        expect(interval1.overlaps(interval2)).toBe(false);
    });

});

describe('includes', function () {

    test('Test [1,5] include [2,3] => true', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(2,3);
        expect(interval1.includes(interval2)).toBe(true);
    });

    test('Test [1,5] include [1,3] => true', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(1,3);
        expect(interval1.includes(interval2)).toBe(true);
    });

    test('Test [1,5] include [2,7] => false', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(2,7);
        expect(interval1.includes(interval2)).toBe(false);
    });

    test('Test [1,5] include [5,7] => false', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(5,7);
        expect(interval1.includes(interval2)).toBe(false);
    });


});

describe('union', function () {

    test('Test résultat retourné est un array', () => {
      var interval1 = new Interval(1,3);
      var interval2 = new Interval(2,5);
      expect(Array.isArray(interval1.union(interval2))).toBe(true);
    });

    test('Test [1,3] union [2,5] equal [[1,5]]', () => {
        var interval1 = new Interval(1,3);
        var interval2 = new Interval(2,5);
        var res = new Interval(1,5);
        var tab = [res]
        expect(interval1.union(interval2)).toEqual(tab);
    });

    test('Test [1,3] union [4,8] equal [[1,3],[4,8]]', () => {
        var interval1 = new Interval(1,3);
        var interval2 = new Interval(4,8);
        var tab = [interval1,interval2]
        expect(interval1.union(interval2)).toEqual(tab);
    });

    test('Test [2,9] union [3,5] equal [[2,9]]', () => {
        var interval1 = new Interval(2,9);
        var interval2 = new Interval(3,5);
        var tab1 = [interval1];
        expect(interval1.union(interval2)).toEqual(tab1);
    });

    test('Test [4,6] union [2,9] equal [[2,9]]', () => {
        var interval1 = new Interval(4,6);
        var interval2 = new Interval(2,9);
        var tab1 = [interval2];
        expect(interval1.union(interval2)).toEqual(tab1);
    });

});

describe('intersection', function () {

    test('Test [1,5] intersect [2,7] equal [2,5]', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(2,7);
        var res = new Interval(2,5);
        expect(interval1.intersection(interval2)).toEqual(res);
    });

    test('Test [1,5] intersect [6,8] equal null', () => {
        var interval1 = new Interval(1,5);
        var interval2 = new Interval(6,8);
        expect(interval1.intersection(interval2)).toBeNull();
    });

    test('Test [2,9] intersect [3,5] equal [[3,5]]', () => {
        var interval1 = new Interval(2,9);
        var interval2 = new Interval(3,5);
        expect(interval1.intersection(interval2)).toEqual(interval2);
    });
});

describe('exclusion', function () {

    test('Test résultat retourné est un array', () => {
      var interval1 = new Interval(3,9);
      var interval2 = new Interval(2,5);
      expect(Array.isArray(interval1.exclusion(interval2))).toBe(true);
    });

    test('Test [2,9] exclusion [3,5] equal [[2,3],[5,9]]', () => {
        var interval1 = new Interval(2,9);
        var interval2 = new Interval(3,5);
        var res1 = new Interval(2,3);
        var res2 = new Interval(5,9);
        var tab = [res1,res2];
        expect(interval1.exclusion(interval2)).toEqual(tab);
    });

    test('Test [1,3] exclusion [4,8] equal [[1,3],[4,8]]', () => {
        var interval1 = new Interval(1,3);
        var interval2 = new Interval(4,8);
        var tab = [interval1,interval2];
        expect(interval1.exclusion(interval2)).toEqual(tab);
    });

    test('Test [1,8] exclusion [1,3] equal [[3,8]]', () => {
        var interval1 = new Interval(1,8);
        var interval2 = new Interval(1,3);
        var interval3 = new Interval(3,8)
        var tab = [interval3];
        expect(interval1.exclusion(interval2)).toEqual(tab);
    });

});
