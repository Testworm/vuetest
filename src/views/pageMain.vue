<template>
  <div class="pageMain">
    <!-- title -->
    <h1>{{msg}}</h1>
    <date></date>
    <h4>Name: {{getUserInfo.name1}}</h4>
    <h4>ID: {{getUserInfo.id1}}</h4>
    <!-- form -->
    <div class="block-name">
      <label for="name">change name</label>
      <input type="text" id="name" v-model="name1">
    </div>
    <div class="block-id">
      <label for="id">change id</label>
      <input type="text" id="id" v-model="id1">
    </div>
    <button @click="commitUserInfoFunc">commit</button>

    <button @click="getUserInfoFunc">获取user</button>
    <p>获取数据</p>
    <!--<ul>
        <template v-for="user in users">
          <li>{{user.name}}</li>
          <li>{{user.user_id}}</li>
        </template>
    </ul>-->
    <div class="userData">
      <table class="table table-hover table-striped">
        <h1 style="margin: 0 auto">显示列表</h1>
        <tr>
          <th>姓名</th>
          <th>部门</th>
          <th>邮箱</th>
          <th>测试组</th>
          <th>姓名</th>
          <th>部门</th>
          <th>邮箱</th>
          <th>测试组</th>
        </tr>
        <tr v-for="user in users">
          <td>{{user.name}}</td>
          <td>{{user.user_id}}</td>
          <td>{{user.realm_account}}</td>
          <td>{{user.name}}</td>
          <td>{{user.password}}</td>
          <td>{{user.empl_number}}</td>
          <td>{{user.test_group}}</td>
          <td>{{user.email}}</td>
        </tr>
      </table><br />
    </div>
    <div id="login">
      <h1 style="text-align: center">登陆系统</h1>
      账号：<input v-model="account" type="text" style="margin-top:30px" placeholder="请输入账号">
      密码：<input v-model="passWd" type="password" style="margin-top:30px" placeholder="密码">
      <button style="margin-top: 30px;margin-left: 125px" @click="getUserLogin()">登陆</button><br/>
    </div>

    <!--<my-component></my-component>-->
    <global></global>
  </div>
</template>

<script>
  // 工具
  import {mapGetters, mapActions} from 'vuex';
  import server from '@/services/server';
  // 组件
  import date from '@/components/date.vue';

  export default{
    data() {
      return {
        msg: 'pageMain',
        name1: '',
        id1: '',
        users: '',
        account: '',
        passWd: ''
      }
    },
    // created() {
    //   this.getUserInfoFunc();
    //   this.getListDataFunc();
    // },
    computed: {
      ...mapGetters([
        'getUserInfo'
      ])
    },
    methods: {
      ...mapActions([
        'changeUserInfo'
      ]),
      // vuex中state状态修改
      commitUserInfoFunc() {
        let userInfo = {
          name: this.name,
          id: this.id
        };
        this.changeUserInfo(userInfo);
      },
      // 接口调用
      getUserInfoFunc() {
        server.getUserInfo().then((res) => {
          console.log(typeof res.data.list);
          this.users = res.data.list;
        })
      },
      getListDataFunc() {
        server.getListData().then((res) => {
          console.log(JSON.parse(res));
        })
      },
      // post请求接口
      getUserLogin() {
        let info = {
          realm_account: this.account,
          password: this.passWd
        }
        console.log(info)
        server.getUserlogin(info).then((res) => {
          console.log(typeof res);
        })
      }
    },
    components: {
      date
    }
  }
</script>

<style scoped>
  .pageMain {
    background-color: #fff;
  }
  .pageMain .block-name input,
  .pageMain .block-id input {
    border: 1px solid #ddd;
  }
  .pageMain button {
    display: block;
    margin: 20px auto 0 auto;
    padding: 10px;
    border-radius: 4px;
    color: #fff;
    background-color: green;
  }
</style>
