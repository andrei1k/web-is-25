
a = 1
function sum(a, b) {
    var c;

    if (a < 10) {
        c = 1;
        return a + b + c
    }

    return a + b + c
}

console.log(sum(10, 2))

var list = [1, 2]

list.splice(5, 0, 9);

list[6] = 9

console.log(list)

var object = {
    a: 1,
    b: () => {
        return true;
    }
}

object.asd = 10

delete object.b

console.log(object)

console.log(5 === 5)