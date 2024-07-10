<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <CommonModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">할 일을 입력해 주세요.</div>
    </CommonModal>
  </div>
</template>

<script>
import CommonModal from "./common/CommonModal.vue";
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  components: {
    CommonModal
  },
  methods: {
    ...mapMutations({

    }),

    addTodo() {
      if(this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        const todoItem = this.newTodoItem.trim();
        this.$store.commit("addItem", todoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: #FFFFFF;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: #FFFFFF;
  vertical-align: middle;
}

.closeModalBtn {
  float: right;
  color: #42b983;
}
</style>