/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir

//Test :

Array.prototype.includesCi= function (substr) {
    var result=false
    this.forEach(element => {
        if(element.toString().toLowerCase().includes(substr.toString().toLowerCase())){
          result = true
        }
        })
        return result
  }


const array = ["Patika","219","Akbank","React","Bootcamp"]

console.log(array.includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array.includesCi("kırmızı")===false ? "Beklendiği gibi" : "Beklendiği gibi değil")
