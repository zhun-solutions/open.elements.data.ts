import {ItemData}from '../item-data';

import {componentRel}from '../componentRel';
import {Item}from '../item';
import {pele}from '../pele' ;

export class EntityUtil{
 compressed;
  constructor(){
  }
  setCompressed(flag){
    this.compressed=flag;
  }
  getPele(i:string,json:any):any{
      if(i==="REL"){
      //UNCOMMENT FOR STRCTURE DEBUG   console.log("ComponentMgrService>json is:");
      //UNCOMMENT FOR STRCTURE DEBUG   console.log(json);

    return componentRel.fromJSON(json);//    m.set(i,ComponentMgrService.getPele(i,item));
  }  if(i==="ITEM"){
      //UNCOMMENT FOR STRCTURE DEBUG   console.log("ComponentMgrService>json is:");
       //UNCOMMENT FOR STRCTURE DEBUG  console.log(json);

    return Item.fromJSON(json);//    m.set(i,ComponentMgrService.getPele(i,item));
  }else return null;

    }




getRelMap(json:any):Map<string,componentRel>{

    //UNCOMMENT FOR STRCTURE DEBUG   console.log("getMap______1___call under get inner map: json received is:")
    //UNCOMMENT FOR STRCTURE DEBUG   console.log(json);
       let mprtyp=Object.create(Map.prototype);
      let mapobj=Object.assign(mprtyp,json);
      let data:any[]=json;
      let m:Map<string,componentRel> = new Map<string,componentRel>();
      for(var i in data){
     //UNCOMMENT FOR STRCTURE DEBUG    console.log("getMap______1___under getinner map value of i is:"+i+"");

        var item=data[i];
      m.set(i,this.getPele("REL",item));
      }
   //UNCOMMENT FOR STRCTURE DEBUG    console.log("getMap______1___call under get inner map: map returned is:");
    //UNCOMMENT FOR STRCTURE DEBUG   console.log(m);
      return m
    }

getItemMap(json:any):Map<string,Item>{

    //UNCOMMENT FOR STRCTURE DEBUG  console.log("getItemMap______1___call under get inner map: json received is:")
    //UNCOMMENT FOR STRCTURE DEBUG   console.log(json);
       let mprtyp=Object.create(Map.prototype);
      let mapobj=Object.assign(mprtyp,json);
      let data:any[]=json;
      let m:Map<string,Item> = new Map<string,Item>();
      for(var i in data){
   //UNCOMMENT FOR STRCTURE DEBUG      console.log("getItemMap______1___under getinner map value of i is:"+i+"");

        var item=data[i];
      m.set(i,this.getPele("ITEM",item));
      }
      //UNCOMMENT FOR STRCTURE DEBUG console.log("getItemMap______1___call under get inner map: map returned is:");
     //UNCOMMENT FOR STRCTURE DEBUG  console.log(m);
      return m
    }
  getInnerSeqMap(json:any):Map<number,string>{

      //UNCOMMENT FOR STRCTURE DEBUGconsole.log("getInnerSeqMap ______1___call under get inner map: json received is:")
    //UNCOMMENT FOR STRCTURE DEBUG   console.log(json);
       let mprtyp=Object.create(Map.prototype);
      let mapobj=Object.assign(mprtyp,json);
      let data:any[]=json;
      let m:Map<number,string> = new Map<number,string>();
      for(var i in data){
       //UNCOMMENT FOR STRCTURE DEBUG  console.log("getInnerSeqMap ______1___under getinner map value of i is:"+i+"");

        var item=data[i];
      m.set(+i,item);
      }
      //UNCOMMENT FOR STRCTURE DEBUG console.log("getInnerSeqMap ______1___call under get inner map: map returned is:");
       //UNCOMMENT FOR STRCTURE DEBUG console.log(m);
      return m
    }


    getInnerRefsMap(json:any):Map<string,string>{

      //UNCOMMENT FOR STRCTURE DEBUGconsole.log("getInnerSeqMap ______1___call under get inner map: json received is:")
    //UNCOMMENT FOR STRCTURE DEBUG   console.log(json);
       let mprtyp=Object.create(Map.prototype);
       let data:any[]=json;
      let m:Map<string,string> = new Map<string,string>();
      for(var i in data){
       //UNCOMMENT FOR STRCTURE DEBUG  console.log("getInnerSeqMap ______1___under getinner map value of i is:"+i+"");

        var item=data[i];
      m.set(i,item);
      }
      //UNCOMMENT FOR STRCTURE DEBUG console.log("getInnerSeqMap ______1___call under get inner map: map returned is:");
       //UNCOMMENT FOR STRCTURE DEBUG console.log(m);
      return m
    }

    getRelRefsBaseMap(json:any):Map<string,Map<string,string>>{
      let mprtyp=Object.create(Map.prototype);
      let mapobj=Object.assign(mprtyp,json);
      let data:any[]=json;

      let m:Map<string,Map<string,string>> = new Map<string,Map<string,string>>();
      for(var i in data){
        var item=data[i];
        // console.log("data of i:"+i+" is ");
        // console.log(data[i]);
        
        m.set(i,this.getInnerRefsMap(item));

      }
    return m
    }

      getRelsBaseMap(json:any):Map<string,Map<string,pele>>{

       //UNCOMMENT FOR STRCTURE DEBUG  console.log("call under get inner map: json received is:"+json);
         let mprtyp=Object.create(Map.prototype);
        let mapobj=Object.assign(mprtyp,json);
        let data:any[]=json;
        let m:Map<string,Map<string,pele>> = new Map<string,Map<string,pele>>();
        for(var i in data){
       //UNCOMMENT FOR STRCTURE DEBUG    console.log("under getinner map value of i is:"+i+"");

          var item=data[i];
          if(i === "REL"){
        m.set(i,this.getRelMap(item));
      }else{

        m.set(i,this.getItemMap(item));

      }
      }
     //UNCOMMENT FOR STRCTURE DEBUG    console.log("call under get inner map: map returned is:");
       //UNCOMMENT FOR STRCTURE DEBUG  console.log(m);
        return m
      }

      getSeqBaseMap(json:any):Map<string,Map<number,string>>{

        //UNCOMMENT FOR STRCTURE DEBUG console.log("getSeqMap call under get inner map: json received is:"+json);
         let mprtyp=Object.create(Map.prototype);
        let mapobj=Object.assign(mprtyp,json);
        let data:any[]=json;
        let m:Map<string,Map<number,string>> = new Map<string,Map<number,string>>();
        for(var i in data){
        //UNCOMMENT FOR STRCTURE DEBUG   console.log("getSeqMap under getinner map value of i is:"+i+"");

          var item=data[i];
        m.set(i,this.getInnerSeqMap(item));
      }
        //UNCOMMENT FOR STRCTURE DEBUG console.log("getSeqMap call under get inner map: map returned is:");
       //UNCOMMENT FOR STRCTURE DEBUG  console.log(m);
        return m
      }
      getFieldsMap(json:any):Map<string,ItemData>{

      //UNCOMMENT FOR STRCTURE DEBUG console.log("EntityUtil^getFieldsMap^______1___call under get inner map: json received is:")
      //UNCOMMENT FOR STRCTURE DEBUG console.log(json);
       let mprtyp=Object.create(Map.prototype);
      let mapobj=Object.assign(mprtyp,json);
      let data:any[]=json;
      let m:Map<string,ItemData> = new Map<string,ItemData>();
      for(var i in data){
     //UNCOMMENT FOR STRCTURE DEBUG    console.log("getFieldsMap______1___under getinner map value of i is:"+i+"");

        var item=data[i];
      m.set(i,this.getField(item));
      }
      //UNCOMMENT FOR STRCTURE DEBUG console.log("getFieldsMap______1___call under get inner map: map returned is:");
      //UNCOMMENT FOR STRCTURE DEBUG console.log(m);
      return m
    }
       getField(json:any){
        let compf=Object.create(ItemData.prototype);
        return Object.assign(compf,json);
    }
    /**
     * this is a nullstriped replacer. 
     * used to reduce and consize the data
     * **/
      replacerns(key,value){
       // console.log(`call under replacer with key :[${key}] and value :[${value}]`);
        
        if(value instanceof Map  ){
           let obj:Object= new Object();
           value.forEach((val: string, key: string) => {
            obj[key] = val;
              });
                // console.log("value is instance of map:reutring obj:"+JSON.stringify(obj)+" for key:"+key);
              return obj;
        }else{
           // console.log("workin on key:["+key+"] and value :["+value+"]");
            
            if(value===null || value ===""){
           //   console.log("value is null or empty string for key:"+key+ " returining undefinede");
              
              return undefined;
            }
          return value;
        }
      }
     
      replacer(key,value){
       // console.log("compressed is:"+this.compressed);
        
        if(value instanceof Map  ){
           let obj:Object= new Object();
           value.forEach((val: string, key: string) => {
            obj[key] = val;
              });
                // console.log("value is instance of map:reutring obj:"+JSON.stringify(obj)+" for key:"+key);
              return obj;
        }else{

         //  console.log("value is NOT an of map:reutring value:"+value+" for key:"+key)
          return value;
        }
      }
}
