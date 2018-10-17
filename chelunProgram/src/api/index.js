//获取域名
//判断是否是本地测试环境
// const host=/localhost/.test(window.location.host)?'http://baojia-test.chelun.com':'https://baojia.chelun.com';
const host='https://baojia.chelun.com';
//发请求
function sendRequest(url,method='GET',data={}){
    let params={
        method
    };
    //判断如果是一个post带上请求体信息
    if(method=='POST'){
        params.body=JSON.stringify(data);
    }
    //判断请求查询url是否携带query
    if(url.indexOf('?')==-1){
        url += `?_=${+new Date()}`
    }else{
        url +=`&_=${+new Date()}`
    }
   return fetch(host+url,params)
    .then(res=>res.json())
    .then(body=>body)
}

/**
 * 获取车辆品牌数据
 * @return promise
 */
export let getBrandList=()=>{
    return sendRequest('/v2-car-getMasterBrandList.html');
}
/**
 * 获取车系数据
 * @param id 车辆品牌的id
 * @return promise
 */

export let getMarkList=(id)=>{
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}
/**
 * 获取详情数据
 * @param id 车辆id
 * @return promise
 */

export let getDetailList=(id)=>{
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}
/**
 * 获取询价数据
 * @param id 车辆id
 * @return promise
 */
export let getinquiry=(carId,cityId)=>{
    return sendRequest(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`);
}
/**
 * 获取城市数据
 * @param id 车辆id
 * @return promise
 */

export let getCity=()=>{
    return sendRequest(`/v1-city-alllist.html?`);
}
/**
 * 获取cityId

 */

export let getCityId=()=>{
    return sendRequest(`/location-client.html?`);
}

/**
 * 获取图片列表的接口
 * @param {*} serialId  车系id
 * @param {*} imgId   图片分类id
 * @param {number} [page=1] 分页页码数
 * @param {number} [pageSize=30] 分页每页数量
 * @param {*} carId  车型id
 * @param {*} colorId 颜色id
 * @returns promise
 */
// ColorID   CarID   ImageID
export let getCategoryImgList = (param)=>{
    let search = ``;
    for(let i in param){
        if(param[i]){
             search += `&${i}=${param[i]}`;
        }
       
    }
    // 补充page与pageSize
    if (!param['Page']){
        search += `&Page=1`;
    }
    if (!param['PageSize']){
        search += `&PageSize=30`;
    }
    return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1, search.length)}`);
}

export let getImgList = (param)=>{
    
    let search = ``;
    for(let i in param){
        if(param[i]){
            search += `&${i}=${param[i]}`;
        }
        
    }
  
    return sendRequest(`/v2-car-getImageList.html?${search.slice(1, search.length)}`);
}
// 颜色数据

export let getColorList = (SerialID)=>{
    return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`);
}