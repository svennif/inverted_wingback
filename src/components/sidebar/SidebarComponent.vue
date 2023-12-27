<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    },
    setup() {
        const isSidebarOpen = ref(false)

        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value
        }

        return {
            toggleSidebar,
            isSidebarOpen
        }
    }
}
</script>

<template>
    <button @click="toggleSidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>
    <header  :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }" id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" aria-label="Sidebar">

            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div>
                    <button @click="toggleSidebar" type="button" class="absolute right-4 inline-flex items-end mt-0.5 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                        <span class="sr-only">Close sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul class="space-y-2 font-medium">
                    <li>
                        <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="ms-3">Home</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="ms-3">About</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
    </header>
</template>
