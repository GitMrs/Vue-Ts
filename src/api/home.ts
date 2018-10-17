import requset from '@/utils/requset';

export const getMovieList = function(cate:String){
    return requset({
        url:'/api/movie/' + cate,
        method: 'GET'
    })
}