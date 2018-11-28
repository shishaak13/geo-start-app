const test = require('./components/test');

test('hello webpack');

const test2 = () => {
    console.log('hi');
}

test2();

$(document).ready(function () {
    console.log('hi jquery', $);
});