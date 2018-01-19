<template>
    <div id="testvue">
      <p>{{msg}}我是testvue组件</p>
      <p>测试互斥按钮</p>
      <input type="radio" v-model="picked" value="html" id="html"/>
      <label for="html">html</label><br />
      <input type="radio" v-model="picked" value="vuejs" id="js"/>
      <label for="js">js</label><br />
      <input type="radio" v-model="picked" value="css" id="css"/>
      <label for="css">css</label><br />
      <p>{{picked}}</p>

      <div id="opt">

        <select v-model="selected">
          <option>html</option>
          <option value="js">javascript</option>
          <option >css</option>
        </select>
        <p>你的选项是{{selected}}</p>
      </div>
        <my-component></my-component>
      <input type="text" v-model="parentMessage"/>
      <global :message="parentMessage" style="color:red"></global>
      <child></child>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          msg: 'hello',
          picked: 'js',
          selected: 'html',
          parentMessage: ''
        }
      },
      methods: {
        handdle: function () {
          this.msg = 'hello vue'
        }
      },
      components: {
        'my-component': {
          template: '<div>我是组件</div>'
        },
        'child': {
          template: '<h1>我是child组件</h1>'
        }
      },
      name: 'testvue'
    }
</script>

<style scoped>

</style>
