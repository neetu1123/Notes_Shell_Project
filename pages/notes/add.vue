<template>
  <nav
    class="
      bg-blue-500
      border-gray-200
      px-4
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-900
    "
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="../../assets/css/noteslogo.jpg"
          class="h-8 mr-3 sm:h-9"
          alt="Notes Logo"
        />
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >Notes list App</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="
            flex flex-col
            p-4
            mt-4
            border border-gray-100
            rounded-lg
            bg-gray-50
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
          <li>
            <nuxt-link
              to="/home"
              class="
                block
                py-2
                pl-3
                pr-4
                text-white
                bg-blue-700
                rounded
                md:bg-transparent md:text-blue-700 md:p-0
                dark:text-white
              "
              aria-current="page"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="
                block
                py-2
                pl-3
                pr-4
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/dashboard"
              class="
                block
                py-2
                pl-3
                pr-4
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >Dashboard</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="#"
              class="
                block
                py-2
                pl-3
                pr-4
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >contact</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/notes/list"
              class="
                block
                py-2
                pl-3
                pr-4
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >List</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="bg-pink-100">
    <h1 class="text-3xl font-bold text-center">Notelist</h1>
    <!-- for add notes list title and description -->
    <div class="inline-block mx-96">
      <label
        for=""
        class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >Title</label
      >
      <input
        class="
          block
          w-[50vh]
          p-4
          text-gray-900
          border border-gray-300
          rounded-lg
          bg-gray-50
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        type="text"
        v-model="newTitle"
        placeholder="add title"
      />
      <label
        for=""
        class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >Description</label
      >
      <input
        class="
          block
          w-[50vh]
          p-4
          text-gray-900
          border border-gray-300
          rounded-lg
          bg-gray-50
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        type="text"
        v-model="newDescription"
        @keypress.enter="addList"
        placeholder="add description"
      />
      <button
        @click="addList"
        class="
          text-white
          mt-4
          mb-96
          p-96
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Add notes list
      </button>
    </div>
  </main>
  <footer class="bg-pink-100"></footer>
</template>

<script setup lang="ts">
import useCounterStore from "../../stores";

const store = useCounterStore();
const newTitle = ref("");
const newDescription = ref("");

console.log(store);

function addList() {
  if (newTitle.value && newDescription.value) {
    store.ADD_LIST(newTitle.value, newDescription.value);
    newTitle.value = "";
    newDescription.value = "";
  }
}
</script>

<style scoped>
</style>