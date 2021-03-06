import request from '@/utils/request'

const getDetail = {
    booksInfo() {
        return request({
            url: `books`,
            method: 'get',
        })
    },
    getDetail(id) {
        return request({
            url: `profile/${id}`,
            method: 'get',
        })
    },
    submitData(id, countNum, priceNum) {
         return request({
            url: `profile/${id}`,
             method: 'patch',
             data: {
                 count: countNum,
                 price: priceNum
            }
        })
    }
}


export default getDetail