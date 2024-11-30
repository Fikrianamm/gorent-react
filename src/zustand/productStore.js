import { create } from "zustand";
import { products } from "../utils/data";

const useProductStore = create((set, get) => ({
  // Initial state
  products: products,
  filteredProducts: products,
  loading: false,
  selectedCategory: null,
  selectedCondition: null,
  searchValue:"",

  // Setters for filters
  setCategory: (category) => set({ selectedCategory: category }),

  setCondition: (condition) => set({ selectedCondition: condition }),

  setSearchValue: (searchVal) => set({ searchValue: searchVal }),
  
  resetFilters: () =>
    set({
      selectedCategory: null,
      selectedCondition: null,
      filteredProducts: get().products, // Reset to all products
    }),

  // Apply filters to update filteredProducts
  applyFilters: () => {
    const { products, selectedCategory, selectedCondition } = get();

    const filtered = products.filter((product) => {
      if (selectedCategory && selectedCondition) {
        return (
          product.kategori === selectedCategory &&
          product.condition === selectedCondition
        );
      } else if (selectedCategory) {
        return product.kategori === selectedCategory;
      } else if (selectedCondition) {
        return product.condition === selectedCondition;
      } else {
        true;
      }
    });

    // Simpan hasil filter ke state filteredProducts
    set({ filteredProducts: filtered });
  },
}));

// eslint-disable-next-line no-unused-vars
const unsub = useProductStore.subscribe(console.log);

export default useProductStore;
