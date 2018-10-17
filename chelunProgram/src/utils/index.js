/**
 *合并成一个对象
 *{"":[{},{}]}
 */
export function mergeCar(list){
    let keys=[],
        arr={};
    list.forEach((item)=>{
        let key=item.exhaust_str+'/'+item.max_power_str+'/'+item.inhale_type;
        if(keys.indexOf(key)!=-1){
            arr[key].push(item)
        }else{
            keys.push(key);
            //赋键值对
            arr[key]=[item];
        }
    })
    return arr;
}
/**
 * @param {*} list 车辆列表排序
 * @returns
 */
export function sortCar(list){
    return list.sort((a,b)=>{
        //如果排量不相等就升序排列
        if(a.exhaust!=b.exhaust){
            return a.exhaust-b.exhaust
        }else{
            //根据发动机功率升序排序
            if(a.max_power_str!=b.max_power_str){
                return a.max_power_str-b.max_power_str
            }else{
                //根据吸气方式升序排列
                if(a.inhale_type!=b.inhale_type){
                    return a.inhale_type-b.inhale_type
                }else{
                    //根据年份排列  降序
                    return b.market_attribute.year-a.market_attribute
                }
            }
        }
    })
}
/**
 *年份过滤
 *
 * @param {*} year
 * @param {*} list
 * @returns
 */
export function filter(year,list){
    return list.filter(item=>item.market_attribute.year==year)
}