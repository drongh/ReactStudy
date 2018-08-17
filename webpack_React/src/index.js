//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 

//组件第二种方式的使用
//默认如果不做单独的配置的haunted不能省略.jsx后缀
import Hello from './components/Hello.jsx'

const dog={
    name:'大黄',
    age:3,
    gender:'雄' 
}

//调用render 函数渲染 jsx xml 可比html严格的多
//Hello 使用属性传值 然后Hello组件返回一个虚拟DOM .由render 渲染 
ReactDOM.render(<div>
    12312
{/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>  {...dog} 表示展开对象 */}
<Hello {...dog}></Hello>
</div>,document.getElementById('app'))




//演示 ... 展开符的使用
const o2={
    address:'上海',
    email:'333@qq.com',
    age:25
    }
const o1={
    name:'大海',
    ...o2
}
console.log(o1)