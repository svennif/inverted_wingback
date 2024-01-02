<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router'

export default {
    components: {
        RouterLink
    },
    computed: {
        routes() {
            return router.options.routes
        }
    },
    setup() {
        const isSidebarOpen = ref(false)

        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value
        }

        router.beforeEach((to, from, next) => {
            if (isSidebarOpen.value) {
                isSidebarOpen.value = false
            }
            next()
        })

        return {
            toggleSidebar,
            isSidebarOpen
        }
    }
}
</script>

<template>
    <div class="overflow-y-auto bg-gray-50 dark:bg-gray-800 md:hidden">
        <div class="flex row">
            <button @click="toggleSidebar" type="button" class="inline-flex items-center py-2 mt-2 ms-3 text-sm text-gray-100 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div class="font-medium my-4 content-center px-5 dark:text-white">Inverted Wingback</div>
        </div>
    </div>
    <header :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }" id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div>
                <button @click="toggleSidebar" type="button" class="absolute right-4 inline-flex items-end mt-0.5 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                    <span class="sr-only">Close sidebar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="font-medium my-4 content-center px-5 dark:text-white hidden md-block">Inverted Wingback</div>
            <ul class="space-y-2">
                <li v-for="route in routes" :key="route.path">
                    <RouterLink :to="route.path" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="ms-3">{{ route.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
