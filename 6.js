let arr = [1, 3, 5];
let theSame = true;
    for (let i = 0; i < arr - 1; i++) {
        for ( let j = i + 1; j < arr; j++) {
            if (typeof(arr[i] !== typeof(arr[j]))){
                theSame = false;
            }
        }
    }

    