export const randomPosition=(arr:Array<string>):Array<string>=>{
    debugger
    let rand=Math.ceil(1+Math.random()*3)
    for(let i=0;i<rand;i++)
    {arr.unshift(arr.pop()!)}
    return arr
}
