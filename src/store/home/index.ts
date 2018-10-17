import {State} from '@/store/interface';
import {Commit} from 'vuex';
import {getMovieList } from '@/api/home';
const state: State = {
    movieList: [],
}

const getters = {
    // tslint:disable-next-line:no-shadowed-varible;
    movieList: (state:State) => state.movieList
}

const mutations = {

};

const actions = {
    async movieList(context: {commit: Commit}, cate:String){
        const res: any = await getMovieList(cate)
                            .then((response: any) => response)
                            .catch((e: string) => console.log(e));
        return res;
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}

