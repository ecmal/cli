export interface CommandSettings {
    help?:string;
    name?:string;
}
export function Command(settings:CommandSettings):ClassDecorator {
    return (target:Function):void => {
        return null;
    };
}