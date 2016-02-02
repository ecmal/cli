export interface OptionSettings {
    help?:string;
    name?:string;
}
export function Option(settings:OptionSettings):PropertyDecorator {
    return (target: Object, key:string|symbol):void => {
        var type = Reflect.getDesignType(target,key);
        if (type.toString()=== Function.toString()) {
            console.info(key, '('+Reflect.getParamTypes(target, key).map(t=>t.name).join(',')+')=>'+Reflect.getReturnType(target, key).name);
        }
        else {
            console.info(key, type.name);
        }
    };
}