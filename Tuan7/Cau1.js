/* Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
case1
Input: str = "tranduong"
Output: 0
case2
Input: str = "hitclubhiuhiu"
Output: 2
case3
Input: str = "aabb"
Output: -1
 */

const case1 ="tranduong";
const case2 ="hitclubhiuhiu";
const case3 ="aabb";

function Repeat(str) {
  for (let i in str) 
  {
    let char = str[i];
    if (str.indexOf(char) == str.lastIndexOf(char)) 
    {
      return i;
    }
  }
  return -1;
}
console.log(Repeat(case1));
console.log(Repeat(case2));
console.log(Repeat(case3));
