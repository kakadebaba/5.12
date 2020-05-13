let a = [1,4,3,3,2,3]
console.log(a.push(5))//从最后推进数字，返回推进的数排在第几，改变数组，推进数组，跟参数无关，会在添加一个数组
console.log(a)
console.log(a.pop(3))//弹出最后一个数字，返回弹出的数字，跟输入的参数无关，只会弹出最后一个数字，改变数组
console.log(a.shift(1))//从开始弹出数字，返回弹出的数字，改变数组
console.log(a)
console.log(a.unshift(2,3,4))//从开始推进数字，参数可以多个，但是只能是数字，返回数组有几个数字，改变数组
console.log(a)
console.log(a.splice(2,4,77,'大九点开始'))//拼接数组，从第几个索引开始删除几个然后添加数字，字符串等。返回是弹出的子数组，改变数组
console.log(a)
console.log(a.slice(1,3,3))//裁剪数组，从第几个索引开始弹出，【）左闭右开的取子数组，返回是弹出子数组，不改变原数组。
console.log(a)
console.log(a.concat(1,2,3,4,[1,2,3],"dadad"))//从数组最后推进数字，字符串，数组，返回数组+推进，不改变原数组
console.log(a)
console.log(a.indexOf(2))//查找索引上的元素（element），返回元素（element）没有返回（-1），不改变原数组
console.log(a.lastIndexOf(3))//从结束往前找元素，返回元素在第几个索引（没有返回-1），不改变原数组
console.log(a.includes(3))//查找数组中是否包涵元素，返回布尔值
console.log(a.find(element=>element>6))//从开始找到第一个符合条件的元素，返回元素没有返回undefind，不改变原数组
console.log(a)
console.log(a.findIndex(element=>element>10))//从开始找到第一个符合条件的元素，返回元素索引（没有返回-1）,不改变原数组
console.log(a.filter(element=>element>10))//过滤出符合条件的元素，返回子数组没找到返回空数组，不改变原数组
a.forEach(element=>console.log(element))//迭代数组，不改变原数组
let arr1=[10,222,33]
let arr2 = arr1.map((item) => {
  return item * 10;
})
console.log(arr2)//迭代数组并构造新数组,不改变原数组
console.log(arr1)


let a = [1,2,3,4,5]
let arr3 = a.map((element) => {
  return element * 10;
})
console.log(arr3)

a.sort((a,b)=>b-a)
arr1.sort((a,b)=>a-b)
console.log(a)
console.log(arr1)//分类，可以分为从小到大，或者从大到小。改变数组

let b = [1,2,3,4]
b.reverse(b)
console.log(b)//逆向，将数组反向排序，改变数组

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[1])//将字符串分裂成数组，改变原数组

const elements = ['we', 'are', 'family'];

console.log(elements.join(' '));//加入，将数组改成字符串，改变原数组



let h = [1,2,3,4,5]
//console.log(h.isArray(h))
console.log(h.constructor.isArray(h))//判断是否为数组，不改变数组
let h = [1,2,3]
console.log(h.some(itme=>itme>4))//有一个元素符合条件返回布尔值，不改变数组，回调函数
console.log(h.every(itme=>itme>1))//每一个元素都符合条件，返回布尔值，不改变数组，回调函数
console.log(h.fill(0,2,3))
console.log(h)//填充函数，第一个参数为填充元素，第二个参数为开始填充位置但不包括，第三个参数为结束位置。改变原数组

//第二题
let object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
console.log(object1.property1);


let object12 = {};

Object.defineProperty(object12, 'property2',{
  value:33,
  writable:false     
});

object12.property = 44;
console.log(object12.property2)
