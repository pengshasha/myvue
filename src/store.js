/**
 * Created by Administrator on 2017/8/15.
 */
const VUE_KEY = 'vue-key'
export default {
  getValue() {
    return JSON.parse(window.localStorage.getItem(VUE_KEY));
  },
  saveValue(items) {
    window.localStorage.setItem(VUE_KEY, JSON.stringify(items))
  }
}
