<!-- <template>
    <div>
        <v-btn>test</v-btn>
    </div>
</template> -->
<template>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <!-- 导航内容 -->
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" @click="navigate(item)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app>
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-btn @click.stop="drawer = !drawer" fab small></v-btn>
        <v-toolbar-title>My App</v-toolbar-title>
      </v-toolbar>

      <v-content>
        123
        <!-- 页面内容 -->
      </v-content>
    </v-app>
  </template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'home' },
        { title: 'About', icon: 'info' },
        { title: 'Contact', icon: 'mail' }
      ]
    }
  },
  methods: {
    navigate (item) {
      // 处理导航点击事件
      console.log('Navigating to:', item.title)
    }
  }
}
</script>
