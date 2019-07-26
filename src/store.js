import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "kwon", email: "aaa@abc.com", password: "1111" },
      { id: 2, name: "aman", email: "bbb@abc.com", password: "1111" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인 성공
    loginSuccess(state, payload) {
      state.isLogin = true
      console.log("로그인성공" + state.isLogin)
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인 실패
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    // 로그아웃
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
      localStorage.removeItem("access_token")
    }
  },
  actions: {
    // 로그인시도
    async login({ dispatch }, loginObj) {
      try {
        const res = await axios.post('https://reqres.in/api/login', loginObj)
        alert('1111111111' + res.data.token)
        // 로그인 성공시 토큰을 포함시켜서 유저정보를 요청
        let token = res.data.token
        // 토큰을 로컬스토리지에 저장
        localStorage.setItem("access_token", token)       
        dispatch("getmemberInfo")
      } catch {
        alert('이메일과 비밀번호를 확인하세요.2222')
      }
    },
    // 토큰으로 유저정보 가저온다
    getmemberInfo({ commit }) {
      console.log("getmemberInfo!!!!!!!!!!!!!!!!!!!!!!!");
      let token = localStorage.getItem("access_token")       
      let config = {
        headers: {
          "access-token": token
        }
      }
      if (token !== null) {
        axios.get("https://reqres.in/api/users/2", config)
        .then(response => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar
          }
          console.log(userInfo)
          commit('loginSuccess', userInfo)
          console.log("getmemberInfo 종료")
        })
        .catch(() => {
          alert('이메일과 비밀번호를 확인하세요.1')
        })
      }
    },
    // 로그아웃
    logout( {commit}) {
      commit("logout")
      router.push({ name: "home"})
    }
  }
})
