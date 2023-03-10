import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", () => {
  // for array of title and description
  const notesLists = ref([]);

  // push the data 
  function ADD_LIST(title, description) {
    console.log(title, description);
    notesLists.value.push({ title, description });
  }

  function getNoteByindex(index) {
    return notesLists.value[index - 1];
 }
// filter the data
  const filterData = computed(() => {
    const getData = notesLists.value.filter((ele) => ele.title != title.value);
  });

  // return properties
  return {
    notesLists,
    filterData,
    ADD_LIST,
    getNoteByindex,
  };
});

export default useCounterStore;
