<template>
  <div class="app-container">
    <h3>windicss 使用</h3>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="@/assets/logo/logo.png" alt="Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>

    <div class="h-12 w-12 mt-10"></div>

    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:(py-4 flex items-center space-y-0 space-x-6)">
      <img class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)" src="@/assets/logo/logo.png" alt="Woman's Face"/>
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-gray-500 font-medium">Product Engineer</p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)">
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
