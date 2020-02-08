const marks = [20, 50, 60, 40];
const increasemarks = marks.map(function(mark) {
  return mark + 5;
});
console.log("increased marks", increasemarks);
const increaseMarks = marks.map(mark => mark + 5);

// console.log(mark,markIndex);  mark+5;
const filteredMarks = marks.filter(mark => {
  if (mark > 30) {
    return true;
  }
  return false;
});
const simplifiedfilter = marks.filter(mark => mark > 30);
console.log("filtered marks", simplifiedfilter);

const simplifiedFind = marks.find(mark => mark === 20);
console.log("Found mark", simplifiedFind);
const reducer = (accumlator, mark) => {
  console.log(accumlator, mark);
  return accumlator + mark;
};
const totalmarks = marks.reduce(reducer, 0);

const simplifiedTotal = marks.reduce((acc, mark) => acc + mark, 0);
console.log("total marks", simplifiedTotal);

console.log(`Total marks is${marks.reduce((acc, mark) => acc + mark, 0)}`);

const myHtmlGenerator = text => `
<div>
<p>
<span>i</span>
${text}
</p>
</div>`;
console.log("Template sting", myHtmlGenerator("hello html"));

const [eng = 30, tamil = 40, maths = 90, science = 50, ss = 60] = marks;
console.log(eng, tamil, maths, science, ss);

const myobject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};
const { one, two, three, ...otherprops } = myobject;
console.log(one, two, three, otherprops);
//enhanced object literals
console.log({ one: one, two: two, three: three });
console.log(one, two, three);
// block scoped & function scoped variable
/**
 * var-function scope(ES5)
 */
function myfunction() {
  //function scope
  var myvar = "hai";
}
if (true) {
  //block scope
  var myvar = "hai";
  let myvar1 = "some text";
  const myvar3 = "some text";
}
console.log(myvar);
