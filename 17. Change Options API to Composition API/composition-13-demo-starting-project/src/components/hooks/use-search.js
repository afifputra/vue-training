import { ref, computed, watch } from 'vue';

const useSearch = (items, searchProp) => {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(() => {
    // console.log(activeSearchTerm.value);
    if (activeSearchTerm.value.length === 0) {
      return items;
    } else {
      return items.filter((item) =>
        item[searchProp]
          .toLowerCase()
          .includes(activeSearchTerm.value.toLowerCase())
      );
    }
  });

  const updateSearch = (searchTerm) => {
    enteredSearchTerm.value = searchTerm;
  };

  watch(enteredSearchTerm, (newValue) => {
    const timer = setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 500);
    return () => clearTimeout(timer);
  });

  return [enteredSearchTerm, availableItems, updateSearch];
};

export default useSearch;
