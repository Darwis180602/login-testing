<template>
    <div class="h-full flex flex-col items-center">
      <div class="w-full max-w-6xl px-2 py-2 text-white mt-1">
        <div class="flex items-center justify-between mt-[50px]">
            <h1 class="text-3xl text-[#000000] font-semibold">Product</h1>
        </div>
        <div class="flex space-x-8 text-[#000000] justify-end">
            <div class="flex justify-end">
                <button @click="tambah" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Tambah produk
                </button>
            </div>   
        </div>  
        <div class="flex flex-wrap justify-center mt-4 text-[#000000]">
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">No</th>
                        <th class="border px-4 py-2">Nama Produk</th>
                        <th class="border px-4 py-2">Deskripsi</th>
                        <th class="border px-4 py-2">Harga</th>
                        <th class="border px-4 py-2">Stok</th>
                        <th class="border px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product.id">
                        <td class="border px-4 py-2">{{ index + 1 }}</td>
                        <td class="border px-4 py-2">{{ product.title }}</td>
                        <td class="border px-4 py-2">{{ product.description }}</td>
                        <td class="border px-4 py-2">{{ product.price }}</td>
                        <td class="border px-4 py-2">{{ product.stock }}</td>
                        <td class="border px-4 py-2">
                            <button @click="edit(product)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    fill="currentColor"
                                    d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
                                    />
                                </svg>
                            </button>
                            <button @click="hapus(product.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    fill="currentColor"
                                    d="M19 6h-4V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H1v2h18V6zM7 20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-8H7v8zm5-6h2v4h-2v-4z"
                                    />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>

        <!-- Modal Root -->
        <div v-if="showModal" class="fixed inset-0 z-30 overflow-y-auto">
            <!-- Modal Overlay -->
            <div class="flex justify-center items-center min-h-screen">
                <div class="fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity"></div>

                <!-- Modal Content -->
                <div class="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg w-full mx-4">
                    <!-- Modal Header -->
                    <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Tambah Produk</h3>
                        <button @click="tutup" type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                            <span class="sr-only">Close</span>
                            <!-- X icon for closing -->
                            &#x2715;
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <form>
                            <div class="space-y-6">
                                <div>
                                    <label for="title" class="block text-sm font-medium text-gray-700">Nama Produk</label>
                                    <input v-model="product.title" type="text" name="title" id="title" required class="border mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 text-[#000000]">
                                </div>
                                <div>
                                    <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi</label>
                                    <textarea v-model="product.description" name="description" id="description" rows="3" required class="border mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[#000000]"></textarea>
                                </div>
                                <div>
                                    <label for="price" class="block text-sm font-medium text-gray-700">Harga</label>
                                    <input v-model="product.price" type="number" name="price" id="price" required class=" border mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 text-[#000000]">
                                </div>
                                <div>
                                    <label for="stock" class="block text-sm font-medium text-gray-700">Stok</label>
                                    <input v-model="product.stock" type="number" name="stock" id="stock" required class="border mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 text-[#000000]">
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- Modal Footer -->
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button v-if="titleShow === 'Tambah Produk'" @click="simpan" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Simpan</button>
                        <button v-if="titleShow === 'Edit Produk'" @click="update" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Simpan</button>
                        <button @click="tutup" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Batal</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </template>
  
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import ProductService from '../service/ProductService'

const products = ref([]);

const product = ref({
    id: '',
    title: '',
    description: '',
    price: 0,
    stock: 0
});

async function getProduct() {
    try {
        let response = await ProductService.getProducts();
        products.value = response.products;
        console.log('products:', products.value);
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

getProduct();

const showModal = ref(false);
const titleShow = ref('Tambah Produk');

function tambah() {
    showModal.value = true;
}

function edit(item) {
    titleShow.value = 'Edit Produk';
    product.value.id = item.id;
    product.value.title = item.title;
    product.value.description = item.description;
    product.value.price = item.price;
    product.value.stock = item.stock;
    showModal.value = true;
}
function tutup() {
    showModal.value = false;
}

function simpan() {
    ProductService.addProduct(product.value)
    .then(() => {
        getProduct();
        tutup();
    })
    .catch((error) => {
        console.error('Failed to create product:', error);
    });
}

function update() {
    let data = {
        title: product.value.title,
    }
    ProductService.updateProduct(product.value.id , data)
    .then(() => {
        getProduct();
        tutup();
    })
    .catch((error) => {
        console.error('Failed to update product:', error);
    });
}

function hapus(id) {
    ProductService.deleteProduct(id)
    .then(() => {
        getProduct();
    })
    .catch((error) => {
        console.error('Failed to delete product:', error);
    });
}

onMounted(() => {
    console.log('HomeView mounted')
})
</script>

<style scoped>
@media (max-width: 768px) {
.flex {
    flex-direction: column;
    align-items: center;
}

.space-x-10 {
    margin-bottom: 1rem;
}

.space-x-8 {
    margin-top: 1rem;
}
}
</style>