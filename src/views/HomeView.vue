<template>
  <div class="h-full flex flex-col items-center">
    <div class="w-full max-w-6xl px-2 py-2 text-white mt-1">
      <div class="flex items-center justify-between mt-[50px]">
        <div class="flex items-center space-x-10">
          <button @click="goToHome" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'home' }">Home</button>
          <button @click="goToAbout" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'about' }">About</button>
          <button @click="goToBlog" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'blog' }">Blog</button>
          <button @click="goToPage" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'page' }">Page</button>
          <button @click="goToContact" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'contact' }">Contact</button>
        </div>
        <div class="flex items-center space-x-8">
          <select class="text-[#000000] bg-[#F6F6F6] hover:text-[#4461F2]">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
          <button @click="goToLogin" class="text-[#000000] hover:text-[#4461F2]" :class="{ 'text-[#4461F2] border-b-2 border-[#4461F2] pb-2 transition-all': pageActive === 'login' }">Sign in</button>
          <div class="border-fuchsia-600">
            <button 
              @click="goToRegister" 
              class="text-[#4461F2] hover:text-[#4461F2] bg-[#FFFFFF] border px-3 py-1 rounded-xl"
              :class="{ 'text-[#4461F2] border-b-2 border-[#FFFFFF] pb-2 transition-all': pageActive === 'register' }"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <section class="h-[560px]">
        <div class="w-full h-full px-1">
            <div class="flex h-full items-center justify-center">
                <div class="w-1/3 mb-20">
                    <div class="text-[#000000] absolute">
                      <svg width="609" height="480" viewBox="0 0 889 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_6_97)">
                      <circle cx="459" cy="670" r="113" fill="#4461F2"/>
                      </g>
                      <g opacity="0.45" filter="url(#filter1_f_6_97)">
                      <circle cx="255" cy="404" r="113" fill="#DDA82A"/>
                      </g>
                      <defs>
                      <filter id="filter0_f_6_97" x="29" y="240" width="860" height="860" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="158.5" result="effect1_foregroundBlur_6_97"/>
                      </filter>
                      <filter id="filter1_f_6_97" x="-175" y="-26" width="860" height="860" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="158.5" result="effect1_foregroundBlur_6_97"/>
                      </filter>
                      </defs>
                      </svg>
                    </div>
                    <p class="text-4xl font-bold text-[#000000]">
                        Sign In to
                    </p>
                    <p class="text-4xl font-bold text-[#000000]">
                        Recharge Direct
                    </p>
                    <p class="text-[#000000] mt-12">
                        if you don't an account
                    </p>
                    <div class="flex space-x-1">
                        <p class="text-[#000000]">you can</p>
                        <p href="#" class="text-[#4461F2]"><a href="">Register Here!</a></p>
                    </div>
                </div>

                <div class="w-1/3 text-center mr-[150px] mt-[50px]">
                    <img src="../../public/2.png" alt="image" class="w-full h-full object-cover">
                </div>

                <div class="w-1/3">
                  <div class="flex flex-col space-y-4" v-if="!register">
                    <div class="relative">
                      <input type="text" placeholder="Enter Email" v-model="email" class="w-full px-3 py-2 border border-[#000000] rounded-md text-[#000000]">
                      <button @click="email = ''" v-if="email !== ''">
                        <svg class="absolute top-0 right-0 m-3 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3.5" y="3.5" width="17.5" height="17.5" rx="8.75" stroke="#667085"/>
                          <path d="M14.7946 10.0021L10.0026 14.7941" stroke="#667085" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M14.796 14.797L10 10" stroke="#667085" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div class="relative">
                      <input placeholder="Enter Password" v-bind:type="showPassword ? 'text' : 'password'" v-model="password" class="w-full px-3 py-2 border border-[#000000] rounded-md text-[#000000]">
                      <button @click="togglePassword">
                        <svg v-if="showPassword" class="absolute top-0 right-0 m-3 h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8 1.16577C10.209 1.16577 12.0275 2.40216 13.3398 3.73427C13.989 4.39332 14.493 5.0549 14.8346 5.55215C14.9529 5.72443 15.0511 5.87613 15.1286 6.00008C15.0511 6.12403 14.9529 6.27574 14.8345 6.44803C14.493 6.94528 13.9889 7.60687 13.3397 8.26592C12.0273 9.59805 10.2088 10.8344 8 10.8344C5.79123 10.8344 3.97267 9.59805 2.66032 8.26592C2.01107 7.60687 1.50703 6.94528 1.16548 6.44803C1.04715 6.27574 0.9489 6.12404 0.871435 6.00008C0.94889 5.87613 1.04712 5.72443 1.16544 5.55215C1.50696 5.0549 2.01096 4.39332 2.66019 3.73427C3.97247 2.40216 5.79103 1.16577 8 1.16577Z"
                            stroke="#989899"
                            stroke-width="1.5" />
                          <ellipse
                            cx="8"
                            cy="6"
                            rx="2.5"
                            ry="2.53833"
                            fill="#989899" />
                        </svg>
                        <svg v-if="!showPassword" class="absolute top-0 right-0 m-3 h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8 2.27148C10.209 2.27148 12.0275 3.50788 13.3398 4.83999C13.989 5.49903 14.493 6.16061 14.8346 6.65787C14.9529 6.83014 15.0511 6.98184 15.1286 7.10579C15.0511 7.22975 14.9529 7.38145 14.8345 7.55374C14.493 8.051 13.9889 8.71259 13.3397 9.37163C12.0273 10.7038 10.2088 11.9401 8 11.9401C5.79123 11.9401 3.97267 10.7038 2.66032 9.37163C2.01107 8.71259 1.50703 8.051 1.16548 7.55374C1.04715 7.38145 0.9489 7.22975 0.871435 7.10579C0.94889 6.98184 1.04712 6.83014 1.16544 6.65787C1.50696 6.16061 2.01096 5.49903 2.66019 4.83999C3.97247 3.50788 5.79103 2.27148 8 2.27148Z"
                            stroke="#989899"
                            stroke-width="1.5" />
                          <ellipse
                            cx="8"
                            cy="7.10571"
                            rx="2.5"
                            ry="2.53833"
                            fill="#989899" />
                          <rect
                            width="1.51154"
                            height="18.1385"
                            rx="0.75"
                            transform="matrix(0.701707 0.712466 -0.701707 0.712466 13.5835 0.105713)"
                            fill="#989899" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center justify-end">
                      <div class="flex items-center space-x-1">
                        <p class="text-[#000000] text-[12px]">Forgot Password ?</p>
                      </div>
                    </div>
                    <button class="w-full bg-[#4461F2] text-[#FFFFFF] py-2 rounded-md" @click="login">Sign In</button>
                    <div class="flex items-center justify-center">
                      <div class="w-1/3 h-0.5 border-b"></div>
                      <p class="text-[#ACADAC] px-1 text-[12px]">Or Continue With</p>
                      <div class="w-1/3 h-0.5 border-b"></div>
                    </div>
                    <div class="flex items-center justify-center space-x-4">
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/google.png" alt="image" class="w-6 h-6 object-cover ml-9"></button>
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/ios.png" alt="image" class="w-6 h-6 object-cover  ml-9"></button>
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/fb.png" alt="image" class="w-6 h-6 object-cover ml-9"></button>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-4" v-if="register">
                    <div class="relative">
                      <input type="text" placeholder="Enter Email" v-model="email" class="w-full px-3 py-2 border border-[#000000] rounded-md text-[#000000]">
                      <button @click="email = ''" v-if="email !== ''">
                        <svg class="absolute top-0 right-0 m-3 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3.5" y="3.5" width="17.5" height="17.5" rx="8.75" stroke="#667085"/>
                          <path d="M14.7946 10.0021L10.0026 14.7941" stroke="#667085" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M14.796 14.797L10 10" stroke="#667085" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div class="relative">
                      <input placeholder="Enter Password" v-bind:type="showPassword ? 'text' : 'password'" v-model="password" class="w-full px-3 py-2 border border-[#000000] rounded-md text-[#000000]">
                      <button @click="togglePassword">
                        <svg v-if="showPassword" class="absolute top-0 right-0 m-3 h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8 1.16577C10.209 1.16577 12.0275 2.40216 13.3398 3.73427C13.989 4.39332 14.493 5.0549 14.8346 5.55215C14.9529 5.72443 15.0511 5.87613 15.1286 6.00008C15.0511 6.12403 14.9529 6.27574 14.8345 6.44803C14.493 6.94528 13.9889 7.60687 13.3397 8.26592C12.0273 9.59805 10.2088 10.8344 8 10.8344C5.79123 10.8344 3.97267 9.59805 2.66032 8.26592C2.01107 7.60687 1.50703 6.94528 1.16548 6.44803C1.04715 6.27574 0.9489 6.12404 0.871435 6.00008C0.94889 5.87613 1.04712 5.72443 1.16544 5.55215C1.50696 5.0549 2.01096 4.39332 2.66019 3.73427C3.97247 2.40216 5.79103 1.16577 8 1.16577Z"
                            stroke="#989899"
                            stroke-width="1.5" />
                          <ellipse
                            cx="8"
                            cy="6"
                            rx="2.5"
                            ry="2.53833"
                            fill="#989899" />
                        </svg>
                        <svg v-if="!showPassword" class="absolute top-0 right-0 m-3 h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8 2.27148C10.209 2.27148 12.0275 3.50788 13.3398 4.83999C13.989 5.49903 14.493 6.16061 14.8346 6.65787C14.9529 6.83014 15.0511 6.98184 15.1286 7.10579C15.0511 7.22975 14.9529 7.38145 14.8345 7.55374C14.493 8.051 13.9889 8.71259 13.3397 9.37163C12.0273 10.7038 10.2088 11.9401 8 11.9401C5.79123 11.9401 3.97267 10.7038 2.66032 9.37163C2.01107 8.71259 1.50703 8.051 1.16548 7.55374C1.04715 7.38145 0.9489 7.22975 0.871435 7.10579C0.94889 6.98184 1.04712 6.83014 1.16544 6.65787C1.50696 6.16061 2.01096 5.49903 2.66019 4.83999C3.97247 3.50788 5.79103 2.27148 8 2.27148Z"
                            stroke="#989899"
                            stroke-width="1.5" />
                          <ellipse
                            cx="8"
                            cy="7.10571"
                            rx="2.5"
                            ry="2.53833"
                            fill="#989899" />
                          <rect
                            width="1.51154"
                            height="18.1385"
                            rx="0.75"
                            transform="matrix(0.701707 0.712466 -0.701707 0.712466 13.5835 0.105713)"
                            fill="#989899" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center justify-end">
                      <div class="flex items-center space-x-1">
                        <p class="text-[#000000] text-[12px]">Forgot Password ?</p>
                      </div>
                    </div>
                    <button class="w-full bg-[#4461F2] text-[#FFFFFF] py-2 rounded-md">Sign Up</button>
                    <div class="flex items-center justify-center">
                      <div class="w-1/3 h-0.5 border-b"></div>
                      <p class="text-[#ACADAC] px-1 text-[12px]">Or Continue With</p>
                      <div class="w-1/3 h-0.5 border-b"></div>
                    </div>
                    <div class="flex items-center justify-center space-x-4">
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/google.png" alt="image" class="w-6 h-6 object-cover ml-9"></button>
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/ios.png" alt="image" class="w-6 h-6 object-cover  ml-9"></button>
                      <button class="w-1/2 bg-[#FFFFFF] border py-2 rounded-md hover:bg-[#FFFFFF] shadow hover:shadow"><img src="../../public/fb.png" alt="image" class="w-6 h-6 object-cover ml-9"></button>
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import AuthService from '../service/AuthService'

const email = ref('')
const password = ref('')

const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

onMounted(() => {
  console.log('HomeView mounted')
})

const router = useRouter()
const pageActive = ref('login')
const goToHome = () => {
  pageActive.value = 'home'
  router.push('/')
}

const goToAbout = () => {
  pageActive.value = 'about'
  router.push('/about')
}

const goToContact = () => {
  pageActive.value = 'contact'
  router.push('/contact')
}

const register = ref(false)
const goToLogin = () => {
  pageActive.value = 'login'
  register.value = false
}

const goToRegister = () => {
  pageActive.value = 'register'
  register.value = true
}

const goToBlog = () => {
  pageActive.value = 'blog'
  router.push('/blog')
}

const goToPage = () => {
  pageActive.value = 'page'
  router.push('/page')
}

function login() {
  let data = {
    username: email.value,
    password: password.value,
  }
  AuthService.login(data)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    }
  )
}
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