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
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <v-toolbar-title>My App</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-actions>
                  <v-select v-model="size" :items="item" label="Size"></v-select>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                  <v-layout row wrap>
                    <v-flex
                      v-for="n in 9"
                      :key="n"
                      xs4
                    >
                      <v-card flat tile>
                        <v-img
                          :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                          height="150px"
                        ></v-img>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
        </v-layout>

        <!-- 页面内容 -->
      </v-content>
      <v-footer>
        <!-- this is footer -->
        <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0" style="text-align: center;">footer</v-card-text>
        </v-card>
      </v-flex>
          </v-footer>
    </v-app>
  </template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'home' },
        { title: 'About', icon: 'info' },
        { title: 'Contact', icon: 'mail' }
      ],
      size: 'sm',
      item: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    }
  },
  methods: {
    navigate (item) {
      // 处理导航点击事件
      console.log('Navigating to:', item.title)
      this.$router.push('/icon')
    }
  }
}
</script>
