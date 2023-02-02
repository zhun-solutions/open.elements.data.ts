 import { v4 as uuid } from 'uuid';
import { Item } from './item';

export class EmbedRef{
    embedRefId:uuid;
    embedOnRefId:uuid;
    embedAsType:string='';
    embedAsCoreDef:string='';
    embed:boolean=false;
    embedOnKey:string='';
    toEmbedOnKey:boolean=false;
    embedOnRefEle:Item;
    mode:string='';
    public constructor(){
    this.embedOnRefEle=new Item();
}}
