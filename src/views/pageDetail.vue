<template>
  <div class="pageDetail">
    <h1>{{msg}}</h1>
    <p v-if="show">显示这段文本</p>
    <!--绑定元素属性，改变属性值-->
    <a v-bind:href="url">点击链接</a>
    <button type="button" v-on:click="show = false">点我隐藏文本</button>
    <!--绑定事件，监听事件，方法可以写在methods，this指向vue实例本身-->
    <button type="button" v-on:click="showText()">点我显示文本</button>
    <p>显示价格{{prices}}</p>
    <div class="static" v-bind:class="{'active': isActive, 'error': isError}">
      <p>我的属性class看可以改变</p>
    </div>

    <div class="static" v-bind:id="[activeCls, errorCls]">
      <p>我的属性class看可以改变</p>
    </div>

    <date v-bind:class="[activeCls, errorCls]"></date>
    <h1>Test v-if指令</h1>
    <p v-if="status === 1">显示v-if</p>
    <p v-else-if="status === 2">显示v-else-if</p>
    <p v-else="status === 1">显示v-else</p>

    <template v-if="type === 'name'">
      <label>用户名：</label>
      <input placeholder="用户名" key = "name=input">
    </template>
    <template v-else>
      <label>邮箱：</label>
      <input placeholder="邮箱" key = "mail=input">
    </template>
    <button @click="handleclick()">切换输入类型</button>

  </div>
</template>

<script>
  import date from '@/components/date.vue';
  export default{
    data() {
      return {
        type: 'name',
        status: 2,
        msg: 'pageDetail',
        show: true,
        url: 'http://www.hundsun.com',
        imgUrl: '',
        isActive: true,
        isError: true,
        activeCls: 'active',
        errorCls: 'error',
       // prices: 10,
        food: [
          {
            name: 'apple',
            price: 200
          },
          {
            name: 'banana',
            price: 200
          }
        ]
      }
    },
    components: {date},
    methods: {
      showText: function () {
        return this.showf();
      },
      showf: function () {
        this.show = true;
      },
      handleclick: function () {
        this.type = this.type === 'name' ? 'mail' : name;
      }
    },
    computed: {
      prices: function () {
        var prices = 0;
        for (var i = 0; i < this.food.length; i++) {
          prices += this.food[i].price;
        }
        return prices;
      //  console.log(this.food.length)
      }
    }
  }
</script>

<style scoped>
  .pageDetail {
    background-color: #fff;
  }
</style>
