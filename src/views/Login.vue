<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert
          class="mb-3"
          :value="isLoginError"
          type="error">
            아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert
          class="mb-3"
          :value="isLogin"
          type="success">
            로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
            <div class="pa-3">
              <v-text-field 
                v-model="email"
                label="이메일을입력하세요"
              >
              </v-text-field>
              <v-text-field 
                v-model="password"
                type="password"
                label="패스워드를 입력하세요"
              >
              </v-text-field>
              <v-btn
                color="primary"
                depressed
                block
                large
                @click= "login({ email, password })">
                로그인
              </v-btn>
              eve.holt@reqres.in
              <br>
              cityslicka
              <!-- <v-btn v-on:click="test">테스트</v-btn>
              <v-btn v-on:click="postTest">POST테스트</v-btn> -->
            </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState(["isLogin","isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
    // async test() {
    //   try {
    //     const res = await axios.get('https://reqres.in/api/users?page=2')
    //     console.log(res);
    //   } catch (err){
    //     console.log(err);
    //   } finally {
    //     console.log("굿맨");
    //   }
    // },
    // async postTest() {
    //   try {
    //     const res = await axios.post('https://reqres.in/api/register', {
    //       "email": "eve.holt@reqres.in",
    //       "password": "pistol"
    //       })
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     console.log('이메일 : ' + this.email);
    //     console.log("굿맨");
    //   }
    // }
  }
}
</script>



