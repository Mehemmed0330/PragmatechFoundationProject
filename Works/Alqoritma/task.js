function numberSum(N) {
    let total = 0;
    for (let i = 1; i <= N; i++) {
        total += i;
    }
    return total;
}
number = numberSum(100);
console.log(number)






let str1 = "Bu sahəyə yeni başlayanlar üçün programlaşdırma həddindən artıq qarışıq və çətin gələ bilər. İnternetdə tonlarla qaynaqları görüb gözünüz qorxa bilər. Düşünə bilərsiniz ki, bu qədər konsepti necə öyrənə bilərəm və yaxud bu mənim nə qədər zamanımı alar. Əfsanələrə görə, əgər riyaziyyatı yaxşı bilmirsinizsə sizin bu sahədə uğurlu ola bilməyiniz mümkün deyil. Və yaxud bu sahədə ali təhsiliniz yoxdursa heç bir yerdə iş tapa bilməyəcəksiniz. Əslində isə bu sahəyə giriş etdikdən sonra heç də elə olmadığını görəcəksiniz.";

function textResearch() {
    console.log(str1.length + " eded " + "herf" + " var");
    let findWords = str1.match(/(\w+)/g).length;
    console.log(findWords + " eded " + "soz " + "var");
    let re = /[s]/g;
    let charCount = str1.match(re).length;
    console.log(charCount + " eded" + " s " + "herfi " + "var");

}
textResearch()




let arr = [1, 3, 4, 6, 89, 12, 67, 34, 89, 123];

function numberFind() {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    console.log(largest + " ededi " + " daha" + " boyukdur")
    let sum = arr.reduce((v, i) => (v + i));
    console.log("reqemlerin " + "cemi " + sum);


}
numberFind()






let numbers = [1, 3, 4, 6, 89, 12, 67, 34, 89, 123];
let oddNumbers = [];

function classifyNumbers(arr) {

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 1) {

            oddNumbers.push(arr[i]);
        }
    }
}
classifyNumbers(numbers);
console.log('Tek ededler: ' + oddNumbers);






// let x = [1, 3, 4, 6, 89, 12, 67, 34, 89, 123]

// console.log(x ** 2);