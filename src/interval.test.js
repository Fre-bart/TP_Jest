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
