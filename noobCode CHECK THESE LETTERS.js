https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

    function letterCheck(arr) {
        let s1 = arr[0].toLowerCase();
        let s2 = arr[1].toLowerCase();
        let s3 = s2.split('').filter(el => s1.includes(el));
        return s3.length === s2.length;
    }