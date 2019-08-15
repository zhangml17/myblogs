<template>
  <div class="home">
    <h1>myblog 首页</h1>
    <div class="blog-wrapper">
      <div class="blog-item" v-for="(item,index) in list" :key="index">
        <h1 class="blog-title"> <a href="#">blog-1 title</a></h1>
        <p class="blog-content"><a href="#">python操作mysql数据库</a></p>
        <div class="blog-opt">
          <div class="content-info">
            <span class="date">2019-08-02 15:06:31</span>
            <span class="num">阅读数：</span>
            <span class="read-num">100</span>
            <span class="num">评论数：</span>
            <span class="read-num">10</span>
          </div>

          <div class="content-opt">
            <a class="opt-edit" href="#"> 编辑 |</a>
            <a class="opt-edit" href="#"> 删除</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data:function() {
    return {
      list:[
        {name:'A'},
        {name:'A'},
        {name:'A'},
        {name:'A'},
        {name:'A'},
        {name:'A'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';
.home::-webkit-scrollbar{
  display:none;
}
.home {
 overflow-y: scroll;
 height:800px;
}
.home {
  h1 {
    text-align: center;
    padding-top: px2rem(18);
  }

  .blog-wrapper{
    .blog-item{
      padding-top: px2rem(10);
      margin:0 auto;
      width:px2rem(600);
      border: 1px dashed black;

      .blog-title{
        font-size: px2rem(20);
        width:100%;
        text-align: left;
        font-weight: 600;
      }
      .blog-content{
        margin-top: px2rem(10);
        font-size:px2rem(16);
        text-align: left;
      }
      .blog-opt{
        // display: flex;
        display: table;
        height:px2rem(30);
        .content-info{
          // flex:1;
          display: table-cell;
          font-size:px2rem(12);
          height:100%;
          .date{
            line-height: px2rem(30);
          }

          .num{
            margin-left: px2rem(20);
          }

          .read-num{
            color:aqua;
          }
        }

        .content-opt{
          // flex:1;
          display: table-cell;
          margin-left: 10px;
          height:100%;
          .opt-edit{
            vertical-align: right;
            line-height: px2rem(30);
            font-size:px2rem(12);
          }
        }
      }
    }
  }
}
</style>

