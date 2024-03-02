import React from 'react'

function Card({username}) {
  return (
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?size=626&ext=jpg&ga=GA1.1.320397296.1708152807&semt=ais" alt="" width="250" height="312"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
       </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-500">
               Staff Engineer, {username}
        </div>
      </figcaption>
    </div>
  </figure>

  )
}

export default Card