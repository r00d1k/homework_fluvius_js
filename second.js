const list = [30, -5, 0, 10, 5];

function mySort(list) {
    let n = list.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (list[j + 1] < list[j]) {
                let t = list[j + 1];
                list[j + 1] = list[j];
                list[j] = t;
            }
        }
    }
    return list;
}

mySort(list);

console.log(list); // [-5, 0, 5, 10, 30]
