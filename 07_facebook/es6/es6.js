const point={x:1}
const {x}=point;
const {x=0, y=0} = point;

const arr=[1,2,3];
const[first,second]=arr;

const point ={name:'p1',position:{ x:1,y:2}};
const {x,y}=point.position;
const {
       name,position:{
           x,y
        }
      }=point;

getLength(point);

function getLength(point){
    return Math.sqrt(point.x*point.y);
}

function getLength(x,y){
    return Math.sqrt(x,y);
}


const point={pox:1,posy:2};
const {pox:x,poy:y}=point;
const leng=Math.sqrt(x*y);

//陣列解構不能重新名
const arry=[1,2,3];
const [first:x,second:y]=arr;

//字串模板

const firstname='scars';
const lastname='yao';

const greet='hello'+firstname+''+lastnmae+'|';

//反引號
const greet=`hello! 
            ${firstname} 
            ${lastname}`;

//物件縮寫
//Object shorthand
const obje={ 
    render:function(){
    }
};
//replace ==>
const object={
    render(){
    },
}

const students={};
//動態指定物件屬性
function createRecord(id,score){
    /*const record={};
    record[id]=score;*/
    return { [id]:score };
}

createRecord('roger',100);
//result { roger:100}

//arrow func
const double=function(x){
    return x * 2;
}
double(4);

//=>
//這不是lamda expresssion嗎??
//參數只有一個()可省略
const double=(x)=>{
    return x * 2;
}
double(4);

//=>
const double=x=>x*2;
//=>2參數
const multiply=(x,y)=>x*y;

<ul>
   {this.state.list.map(function(item){
        return <li>{item}</li>
   })}
</ul>


<ul>
   {this.state.list.map(item=><li>{item}</li>)})}
</ul>

//箭頭涵是的this指的就是外面的this
//類別

class Dog{
    static numSpecies=100
    name=''
    legs = 4
    constructor(name){
        this.name=name;
    }
    bark(){
        console.log('hi');
    }
}

const spot=new Dog('spot');
spot.name='spot';
spot.legs=3;
spot.bark();

class pug extends Dog{
    roll(){

    }
}

const yellow=new pug();
yello.name='yellow';
yello.roll();

Dog.numSpecies;//靜態屬性

/**********************************/

import TodoForm from './TodoForm';


