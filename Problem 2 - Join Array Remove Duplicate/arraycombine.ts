function arrayCombine(arrA: string[], arrB: string[]): string[] {
    // Menggabungkan kedua array
    const gabungArray = arrA.concat(arrB);

    // Menggunakan Set untuk menghilangkan duplikat
    const hapusDuplikat = Array.from(new Set(gabungArray));

    return hapusDuplikat;
}

console.log(arrayCombine(["apel", "anggur"], ["lemon", "leci", "nanas"]));  //["apel", "anggur", "lemon", "leci", "nanas"]
console.log(arrayCombine(["samsung", "apple"], ["apple", "sony", "xiaomi"]));  //["samsung", "apple", "sony", "xiaomi"]
console.log(arrayCombine(["football", "basketball"], ["basketball", "football"])); //["football", "basketball"]
