import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // 国家列表
        countryList: [],
        detailsInfo: {}
    },
    mutations:{
        getCountryList(state, country_list) {
            state.countryList = country_list
        },
        getDetailsInfo(state, details_info) {
            state.detailsInfo = details_info
        }
    }
})

export default store