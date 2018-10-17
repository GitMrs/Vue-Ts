<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <div id="listMovieBox">
          <div class="item" v-for="(item, index) in movieListData"  :key = 'index'>
            <a >
              <div class="movie-cover">
                <img :src="item.images.small"  width="88" height="110">
              </div>
              <div class="movie-des">
                <p class="title">{{item.title}}</p>
                <p class="genres"><span>类别:</span><span v-if="item.genres.length === 0">未知</span><span v-else-if="item.genres">{{item.genres}}</span></p>
                <p class="cast">
                  主演:<span v-for="items in item.casts" :key="items.name" style="margin-right: 4px;">{{ items.name}}</span>
                </p>
                <p class="director">导演:<span v-if="item.casts[1]">{{ item.casts[1].name }}</span></p>
                <p class="ratings">{{item.rating.average}} <span>分</span></p>
              </div>
            </a>
          </div>
        </div>
      </van-tab>
      <van-tab title="即将上映">

      </van-tab>
      <van-tab title="Top250">
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { Tab, Tabs } from 'vant';
import { constants } from 'http2';

@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
})
export default class Home extends Vue {
  private cate = 'in_theaters';
  private active = 0;
  private movieListData = [];
  @Action private movieList!: (cate: string) => any;


  private created() {
    this.movieList(this.cate).then((res: any) => {
      this.movieListData = res.subjects;
    });
  }
}
</script>
<style lang="sass">
  #listMovieBox
    padding: 0 16px
    .item
      padding: 10px 0
      border-bottom: 1px solid #eee
      a
        position: relative
        display: flex
        .movie-cover
          width: 88px
          flex: 0
          height: 110px
          color: #000
        .movie-des
          flex: 1
          padding-left: 10px
          vertical-align: top
          .ratings
            position: absolute
            font-size: 20px
            font-weight: bold
            font-family: "Microsoft New Tai Lue"
            color: #FFB400
            right: 0px
            top: 16px
            span
              font-size: 14px
          .title
            line-height: 1.5rem
            padding-top: 4px
            font-size: 16px
          .genres
            font-size: 12px
            color: #666
            line-height: 24px
          .cast
            font-size: 12px
            width: 200px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            color: #666
            line-height: 24px
          .director
            font-size: 14px
            color: #999
            line-height: 26px
</style>