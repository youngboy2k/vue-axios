<template>
  <div id="app">
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="달력입니다!!!!"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable :first-day-of-week="0" locale="ko-kr">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '1984-12-19', // 지정일자 선택
      //date: new Date().toISOString().substr(0, 10), // 오늘 선택
      menu: false,
    }
  }
}
</script>
