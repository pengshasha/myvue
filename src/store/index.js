/**
 * Created by Administrator on 2017/9/18.
 */
export default {
  state: {
    num: 1,
    total: 0
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.num++
    }
  }
}

