import { create } from "zustand";
import { products } from "../utils/data";

const useProductStore = create((set, get) => ({
  // Initial state
  products: products,
  filteredProducts: products,
  loading: false,
  selectedCategory: null,
  selectedCondition: null,
  searchValue: "",

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
    const { products, selectedCategory, selectedCondition, searchValue } =
      get();

    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.kategori === selectedCategory
        : false;

      const matchesCondition = selectedCondition
        ? product.condition === selectedCondition
        : false;

      const matchesSearchValue = searchValue
        ? product.name.toLowerCase().includes(searchValue.toLowerCase())
        : false;

      // Produk lolos jika sesuai dengan salah satu filter
      return matchesCategory || matchesCondition || matchesSearchValue;
    });

    // Jika tidak ada filter yang aktif, tampilkan semua produk
    const finalFilteredProducts =
      selectedCategory || selectedCondition || searchValue
        ? filtered
        : products;

    set({ filteredProducts: finalFilteredProducts });
  },
}));

// eslint-disable-next-line no-unused-vars
const unsub = useProductStore.subscribe(console.log);

export default useProductStore;
