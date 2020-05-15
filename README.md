###5.12号作业
####数组方法和object.defineproperty方法
方法名|作用|参数|返回值|是否修改原数组
--- | ---- |--- | --- | ---
push|从结束推进元素|一个参数，要推进的元素|推进的元素排在第几|修改
pop|从结束弹出元素|一个参数，可以不写，结果只会弹出一个|弹出的元素|修改
shift|从开始弹出元素|一个参数，可以不写，结果只会弹出第一个|弹出的元素|改变
unshift|从开始推进元素|多个参数,会一直推进|数组有几个数|改变
splice|拼接数组|三个参数（X,Y,Z）X是数组第几个索引，Y是从X后弹出Y个元素，Z是推进的元素|返回数组有几个数|改变
slice|裁剪数组|二个参数（X,Y）X是数组第几个索引，Y是数组第几个索引。左闭右开，Y取不到|返回数组|不改变
concat|从数组结束推进元素|多个参数|返回修改的数组|不改变数组
indexOf|查找第一个元素在索引的位置|元素|返回查找出来的元素的索引，没有返回-1|不改变
lastIndexOf|从结束开始往前找元素索引位置|元素|返回查找出来的元素索引，没有返回-1|不改变
includes|查找元素是否在数组里|元素|布尔|flase
find||从开始查找第一个符合条件元素|回调函数|返回元素，没有的话返回布尔|fales
filter|过滤数组，过滤出符合条件的数组|回调函数|返回子数组|false
findIndex|从开始查找第一个符合条件元素|回调函数|返回元素索引，没有返回-1|false
forEach|迭代数组|回调函数|返回数组|false
map|迭代数组|回调函数|返回数组|false
sort|分类数组，可从大到小，从小到大|回调函数（a,b）=>a-b/b-a||改变
reverse|逆向数组，把数组逆向排列|Array|返回数组|改变
split|将字符串改成数组|跟随原对象分隔符||改变
join|加入函数，把数组改成字符串|‘’||改变
reduce|产生方法，把数组叠加产生最终值|三个参数，第一个是累加器，第二个是数组，最后一个是初始值|返回最终值|不改变
Array.isArray|判断函数是否为数组|对象||布尔值
some|有一个元素符合条件|回调函数|布尔值|false
every|每一个元素都符合条件|回调函数|布尔值|false
fill|填充函数|三个参数，第一个是填充元素，第二个是开始填充索引位置，第三个为索引结束位置左闭右开||改变
copyWithin|内复制子数组|三个参数，第一个是复制数组推进的索引位置，第二个是复制数组开始的索引位置，第三个是复制数组结束的索引位置，左闭右开|返回复制数组|不改变

