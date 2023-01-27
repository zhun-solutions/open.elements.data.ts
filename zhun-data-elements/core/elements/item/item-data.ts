
import {componentIntf} from './intf/componentIntf';

import {pele} from './pele';
import { v4 as uuid } from 'uuid';
export class ItemData  {


 

constructor(fname:string,fvalue:any){
this.eleid=  uuid();
this.name=fname;
this.fieldValue=fvalue;
// this.value=fvalue;
}
// private value:any;
t_type:string="";
b_type:string="";
c_type:string="";
    eleid:uuid=null;
    seqId:number=-1;
  //  pid:string="";
    name:string="";
    parentName:string="";
    parentType:string="";
    type:string="";
    versionId:string="";
      state:string="";
      status:string="";
  createdBy:string="";
  field_td_type:string=""; //technical data type
	fieldValue:any;
	 field_b_typ:string=""; //business type
	 ref_comp_type:string="";// reference componentname
	/** name of this field in the reference component**/
   ref_comp_fld_name:string="";
   ref_comp_fld_type:string="";

   ref_comp_id:uuid;

public   getValue():any{
     return this.fieldValue;
   }
static fromJSON(json:componentIntf):ItemData{
  let comp=Object.create(ItemData.prototype);
  //UNCOMMENT FOR STRCTURE DEBUG console.log("ItemData^fromJSON^call under from JSON of component: values are:");
  //UNCOMMENT FOR STRCTURE DEBUG console.log(json);
let data=  Object.assign(comp,json  );
  // console.log("data created in jsonparsing:");
  //
  // console.log(data)
  // console.log("RELATION ELEMENTS ARE:");
  //
  // console.log(data.relationElements)
  //UNCOMMENT FOR STRCTURE DEBUG  console.log("data returned from JSON:");
  //UNCOMMENT FOR STRCTURE DEBUG  console.log(data)
  return data;
}

static reviver(key:string,value:any):any{
  return key=== ""? ItemData.fromJSON(value):value;
}
}
