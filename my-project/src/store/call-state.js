import { reactive } from "vue"; //IMPORT REACTIVE const from vue
import axios from "axios"; //IMPORT AXIOS to invoke get call

export const callState = reactive({
  products_url: "http://localhost:3000/products",
  products: [],
  getProducts(url) {
    axios.get(url).then((response) => {
      console.log(response);
      this.products = response.data;
    });
  },
});
