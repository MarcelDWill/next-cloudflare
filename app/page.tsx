'use client'

import Image from "next/image";

export default function Home() {
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 transition-colors duration-500 font-[family-name:var(--font-geist-sans)] text-gray-900 dark:text-gray-100">
      
      {/* Background Image with Bright/Dark Mode Adjustments */}
      <Image 
        src="/BG2.png" 
        alt="Background"
        fill
        quality={100}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 brightness-100 dark:brightness-50"
      />
      
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start relative transition-opacity duration-500">
        <Image
          className="dark:invert transition-all duration-500"
          src="/L4.svg"
          alt="MD logo"
          width={380}
          height={380}
          priority
        />
        
      </main>

      {/* Footer 
      <footer>
      </footer>
      */}
    </div>
    
  );
  
}
