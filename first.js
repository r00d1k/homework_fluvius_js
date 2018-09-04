const list = [10, 20, 30];

function changeElements(list) {
    const first = list[0];
    const second = list[1];
    list[0] = second;
    list[1] = first;
}

changeElements(list);

console.log(list); // [20, 10, 30];
