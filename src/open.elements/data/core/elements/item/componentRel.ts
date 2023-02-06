
 import {componentRelIntf} from './intf/componentRelIntf';
 import {pele} from './pele';
 // import {ComponentMgrService} from '../../service/component-mgr.service';
export class componentRel implements pele {

compositerId:string="";
composeeId:string="";



  eleid:string="";
//  pid:string="";
  name:string="";
  parentName:string="";
  parentType:string="";
  type:string="";
  versionId:string="";
    state:string="";
    status:string="";
createdBy:string="";
parentId:string="";
getInnerMap(json:any):Map<string,pele>{

 //UNCOMMENT FOR STRCTURE DEBUG  console.log("componentRelcall under get inner map: json received is:"+json);
   let mprtyp=Object.create(Map.prototype);
  let mapobj=Object.assign(mprtyp,json);
  let data:any[]=json;
  let m:Map<string,pele> = new Map<string,pele>();
  for(var i in data){
    //UNCOMMENT FOR STRCTURE DEBUG console.log("componentRelunder getinner map value of i is:"+i+"");

    var item=data[i];
if(i==="SEQ"){
  //m.set(i,componentSeq.fromJSON(item));
 }
  }
  //UNCOMMENT FOR STRCTURE DEBUG console.log("componentRelcall under get inner map: map returned is:");
  //UNCOMMENT FOR STRCTURE DEBUG console.log(m);
  return m
}
  static fromJSON(json:componentRelIntf):componentRel{
    let comp=Object.create(componentRel.prototype);
    return Object.assign(comp,json,{
      relationElements:comp.getInnerMap(json.relationalElements)
    });
  }

  static reviver(key:string,value:any):any{
    return key=== ""? componentRel.fromJSON(value):value;
  }

}
