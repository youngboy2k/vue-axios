<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin === false" router :to="{name: 'login'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>로그인</v-list-tile-title> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin === true" router :to="{name: 'mypage'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>마이페이지</v-list-tile-title> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{name: 'about'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>about</v-list-tile-title> 
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div class="text-center">
          <v-menu offset-y v-if="isLogin">
            <template v-slot:activator="{ on }">
              <v-btn
                dark 
                v-on="on"
                flat
                icon
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile router :to="{name: 'mypage'}">
                마이페이지
              </v-list-tile>
              <v-list-tile 
                @click="$store.dispatch('logout')"
              >로그아웃
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat v-else router :to="{name: 'login'}">Log In</v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex"

  export default {
    data: () => ({
      drawer: null
    }),
    computed: {
      ...mapState(["isLogin"])
    },
    // methods: {
    //  ...mapActions(["logout"]) 
    // },
    props: {
      source: String
    }
  }
</script>