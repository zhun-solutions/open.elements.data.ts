import {ItemData}from './item-data';
import {componentIntf} from './intf/componentIntf';
import {pele} from './pele';
import {EntityUtil} from './util/entity-util';
import { v4 as uuid } from 'uuid';
// import { Observable, of, BehaviorSubject } from 'rxjs';
 import {DomainConstants} from './domain-constants';
// import {Map} from 'typescript/Map';
export class Item implements pele {

  constructor() {
//   this.relationalElements=new Map<string,Map<string,pele>>();
//   this.relationalElementRefs= new Map<string,Map<string,string>>();
//   this.relationalSeqs=new Map<string,Map<number,string>>();
// // this.eleid=''+uuid();
//   this.fields=new Map();
  //  console.log(this);
  
 }
name:string='';
type:string='';
b_type:string='';
t_type:string='';
d_name:string='';
c_type:string='';
contextId:string='';
   id:typeof uuid=uuid();
   func_id:string='';
  // eleid:string= '';
  seqId:number=-1;

   parentName:string="";
  parentType:string="";
  parentId:typeof uuid=null;
  versionId:string="";
    state:string="";
    // type:string="";
    status:string="";
createdBy:string="";
createdDate:Date=new Date();
updatedBy:string='';
updatedDate:Date=new Date();
// fields:Map<string,ItemData>;
relationalElements:Map<string,Map<string,pele>>;
relationalElementRefs:Map<string,Map<string,string>>;
relationalSeqs:Map<string,Map<number,string>>;
// map:Map<string,Item>;
fields:Map<string,ItemData>;
public addRelElements(key:string,itm:Item){
  if(this.relationalElements==undefined){
    this.relationalElements=new Map<string,Map<string,pele>>();
  }
  if(  this.relationalElements.get(DomainConstants.MD_COMP_DT)==undefined){
      this.relationalElements.set(DomainConstants.MD_COMP_DT, new Map<string,pele>());
  }
  this.relationalElements.get(DomainConstants.MD_COMP_DT)?.set(key,itm);
}



public addRelElementsRefs(key:string,itm:string){
  if( this.relationalElementRefs==undefined){
    this.relationalElements= new Map<string,Map<string,string>>();
   }
  if(  this.relationalElementRefs.get(DomainConstants.MD_COMP_DT)==undefined){
      this.relationalElementRefs.set(DomainConstants.MD_COMP_DT, new Map<string,string>());
  }
  this.relationalElementRefs.get(DomainConstants.MD_COMP_DT)?.set(key,itm);
}
public addRelElementsOnType(type:string,key:string,itm:Item){
 if( this.relationalElements==undefined){
  this.relationalElements= new Map<string,Map<string,pele>>();
 }
  if(  this.relationalElements.get(type)==undefined){
      this.relationalElements.set(type, new Map<string,pele>());
  }
  if(type=='MD'){
    this.addRelElements(key,itm);
  }else{
  this.relationalElements.get(type)?.set(key,itm);
}
// console.log("relemens at theend of set are");
// console.log(this);
}

public addRelElementRefsOnType(type:string,key:string,name:string){
  console.log("relelementsRef map in item before adding is below for addition of type:"+type+" key:"+key+" name:"+name);
  console.log(this.relationalElementRefs);
  console.log(typeof this.relationalElementRefs);
  
  if(  this.relationalElementRefs.get(type)==undefined){
      this.relationalElementRefs.set(type, new Map<string,string>());
  }
  if(type=='MD'){
    this.addRelElementsRefs(key,name);
  }else{
  this.relationalElementRefs.get(type)?.set(key,name);
}}



public addAllRelElementRefsOnType(type:string, itms:Map<string,string>){
  this.relationalElementRefs.set(type, itms); 
}
public addAllRelElementsOnType(type:string, itms:Map<string,pele>){
  if(this.relationalElements==undefined){
    this.relationalElements=new Map<string,Map<string,pele>>();
  }
  this.relationalElements.set(type, itms); 
}


public getRelElementRefsOnType(type:string){
  if(  this.relationalElementRefs.get(type)==undefined){
      this.relationalElementRefs.set(type, new Map<string,string>());
  }
   return  this.relationalElementRefs.get(type);
}
public getRelElementsOnType(type:string){
  
  if(  this.relationalElements==undefined){
    this.relationalElements=new Map<string,Map<string,pele>>();
  }
  if(  this.relationalElements.get(type)==undefined){
      this.relationalElements.set(type, new Map<string,pele>());
  }
   return  this.relationalElements.get(type);
}

public getRelElementsOnTypeAsArray(type:string){
  if(  this.relationalElements==undefined){
    this.relationalElements=new Map<string,Map<string,pele>>();
  }
  if(  this.relationalElements.get(type)==undefined){
      this.relationalElements.set(type, new Map<string,pele>());
  }
   return  Array.from(Array(this.relationalElements.get(type)?.values()));
}

public getRelElementRefs(){
  if(  this.relationalElementRefs.get(DomainConstants.MD_COMP_DT)==undefined){
      this.relationalElementRefs.set(DomainConstants.MD_COMP_DT, new Map<string,string>());
  }
   return  this.relationalElementRefs.get(DomainConstants.MD_COMP_DT);
}


public getRelElements(){
  if(this.relationalElements==undefined){
    this.relationalElements=new Map<string,Map<string,pele>>();
  }
  if(  this.relationalElements.get(DomainConstants.MD_COMP_DT)==undefined){
      this.relationalElements.set(DomainConstants.MD_COMP_DT, new Map<string,pele>());
  }
   return  this.relationalElements.get(DomainConstants.MD_COMP_DT);
}

public getAllRelElementRefs(){
  return this.relationalElementRefs;
}
public getAllRelElements(){
  return this.relationalElements;
}
public getRelElement(key:string){

   if(  this.relationalElements.get(DomainConstants.MD_COMP_DT)==undefined){
      this.relationalElements.set(DomainConstants.MD_COMP_DT, new Map<string,pele>());
  }
  return this.relationalElements.get(DomainConstants.MD_COMP_DT)?.get(key);
}

public getRelElementRefOnType(type:string,key:string):string|undefined{
  if(  this.relationalElementRefs.get(type)==undefined){
      this.relationalElementRefs.set(type, new Map<string,string>());
  }  
  return this.relationalElementRefs.get(type)?.get(key);

}
public getRelElementOnType(type:string,key:string):pele|undefined{
  if(  this.relationalElements.get(type)==undefined){
      this.relationalElements.set(type, new Map<string,pele>());
  }  
  return this.relationalElements.get(type)?.get(key);

}
public setRelElementsMapOnType(type:string,data:Map<string,Item>){
  this.relationalElements.set(type,data);
}
public setRelElementsMap(data:Map<string,Item>){
    this.relationalElements.set(DomainConstants.MD_COMP_DT,data);
}
addData(key:string,itm:ItemData){
  if(this.fields==undefined){
    this.fields=new Map<string,ItemData>();
  }
  this.fields.set(key,itm);
}
addDat(key:string,value:any,type:string){
  let itm= new ItemData(key,value);
  itm.type=type;
  if(this.fields==undefined){
    this.fields=new Map<string,ItemData>();
  }
  this.fields.set(key,itm);
}

public addDataMap(datamap){
  return this.fields=datamap;
}
public getDataMap(){
  return this.fields;
}

public getData(key:string){
  return this.fields.get(key);
}
public removeData(key:string){
  this.fields.delete(key);
}
//  public getData_sub(key:string):Observable<any>{
// return  of(this.fields.get(key));
//   }

public initializeId(){
  // this.eleid=uuid();
}
  public getRelationalElements(str:string):Map<string,pele>|undefined{
   if(this.relationalElements.get(str)!=undefined){
    return  this.relationalElements.get(str);
  }else{
    return undefined;
  }
  }

public  getId():typeof uuid{
    return this.id;
  } 

  public  getType():string{
    return this.type;
  } 
static fromJSON(json:componentIntf):Item{
  let comp=Object.create(Item.prototype);
   //UNCOMMENT FOR STRCTURE DEBUG console.log("Item^fromJSON^call under from JSON of component: values are:");
 //UNCOMMENT FOR STRCTURE DEBUG  console.log(json);
  let  eu:EntityUtil= new EntityUtil();
let data=  Object.assign(comp,json,{
    // uiid:json.id,
    relationalElements:eu.getRelsBaseMap(json.relationalElements),
    relationalElementRefs:eu.getRelRefsBaseMap(json.relationalElementRefs),

    relationalSeqs:eu.getSeqBaseMap(json.relationalSeqs),
    fields:eu.getFieldsMap(json.fields)
  });
   //UNCOMMENT FOR STRCTURE DEBUG console.log("Item^fromJSON^data returned from JSON:");
  //UNCOMMENT FOR STRCTURE DEBUG  console.log(data)
  return data;
}

static reviver(key:string,value:any):any{
  return key=== ""? Item.fromJSON(value):value;
}
}
