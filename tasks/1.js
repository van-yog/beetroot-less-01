/* 
Сечас переменная firstName выводится в следующем порядке 
        Fill 
        Tom
        Bill

 Не меняя областей видимости  изменить код так, чтобы последовательность
 вывода была
        Bill
        Fill
        Tom 
*/
let firlstName = "Bill";
{
  let firlstName = "Tom";

  {
    let firlstName = "Fill";
    console.log(firlstName);
  }
  console.log(firlstName);
}
console.log(firlstName);
