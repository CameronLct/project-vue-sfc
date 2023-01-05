import Vue from "vue"
import {createStore} from "vuex"
import commonStore from "@/store/modules/common/common.module"
// import createPersistedState from "vuex-persistedstate"


let store = createStore({
    modules: {
        commonStore,
    },
})

export default store