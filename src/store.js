/**
 * Created by Administrator on 2017/8/15.
 */
const VUE_KEY = 'vue-key'
export default {
  getValue() {
    return JSON.parse(window.localStorage.getItem(arguments[0]||VUE_KEY));
  },
  saveValue(items) {
    if(arguments.length > 1) {
      window.localStorage.setItem(arguments[0], JSON.stringify(arguments[1]))
    } else {
      window.localStorage.setItem(VUE_KEY, JSON.stringify(items))
    }
  }
}
