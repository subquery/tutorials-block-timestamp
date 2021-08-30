// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class BlockTs implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockHeight: bigint;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save BlockTs entity without an ID");
        await store.set('BlockTs', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove BlockTs entity without an ID");
        await store.remove('BlockTs', id.toString());
    }

    static async get(id:string): Promise<BlockTs | undefined>{
        assert((id !== null && id !== undefined), "Cannot get BlockTs entity without an ID");
        const record = await store.get('BlockTs', id.toString());
        if (record){
            return BlockTs.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new BlockTs(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
