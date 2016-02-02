import {Command} from 'cli/command';
import {Commander} from 'cli/commander';
import {Option} from "cli/option";

@Command({})
class Install {

    @Option({})
    private name:string;

    @Option({})
    private method(jan:Array<any>):string{
        return 'hello';
    }
    @Option({})
    private get field():string{
        return 'hello';
    }
    private set field(v:string){

    }

    constructor(hello:string){

    }
}

Commander.run(['install','something','args']);