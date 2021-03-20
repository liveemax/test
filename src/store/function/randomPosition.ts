export const randomPosition=(arr:Array<string>):Array<string>=>{
    let rand=Math.ceil(Math.random()*4)
    for(let i=0;i<rand;i++)
    {arr.unshift(arr.pop()!)}
    return arr
}
