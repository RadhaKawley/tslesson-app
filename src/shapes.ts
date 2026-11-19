type Circle={
    radius:number
};
type Rectangle={
    width:number,
    height:number
};
const describeShape =(shape:Circle|Rectangle)=>{
    if('radius' in shape){
        console.log('shape is circle');

    }else{
        console.log('shape is rectangle');
    }
}
//const circle={radius:1}
//const rectangle={width:50,height:12,radius:50}
const rectangle={width:50,height:12}
describeShape(rectangle);