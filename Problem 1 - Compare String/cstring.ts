function compareString(a: string, b: string): string {
    let result = '';

    // Looping setiap karakter yang berada di string pertama
    for (let i = 0; i < a.length; i++) {
        // Ulangi setiap karakter yang berada di string kedua
        for (let j = 0; j < b.length; j++) {
            // Mengecek kecocokan karakter
            if (a[i] === b[j]) {
                let commonSubstring = a[i];
                
                // Mengecek karakter selanjutnya
                let x = i + 1;
                let y = j + 1;
                while (x < a.length && y < b.length && a[x] === b[y]) {
                    commonSubstring += a[x];
                    x++;
                    y++;
                }

                // Perbarui hasil jika substring umum lebih panjang dari hasil saat ini
                if (commonSubstring.length > result.length) {
                    result = commonSubstring;
                }
            }
        }
    }

    return result;
}

console.log(compareString("AKA",  "AKASHI"));  // AKA
console.log(compareString("KANGAROO",  "KANG"));  // KANG
console.log(compareString("KI",  "KIJANG"));  // KI
console.log(compareString("KUPU-KUPU",  "KUPU"));  // KUPU
console.log(compareString("ILALANG",  "ILA"));  // ILA
