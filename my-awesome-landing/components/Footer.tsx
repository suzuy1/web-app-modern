export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#030303] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg" />
            <span className="text-2xl font-bold tracking-tighter uppercase dark:text-white text-black">
              Lumina.
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            Crafting unforgettable digital experiences through innovative design and cutting-edge technology.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 dark:text-white text-black">Links</h4>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">Services</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 dark:text-white text-black">Social</h4>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">LinkedIn</li>
            <li className="hover:text-cyan-500 cursor-pointer transition-colors">GitHub</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-black/5 dark:border-white/5 text-center text-xs text-gray-400">
        © 2025 Lumina Studio. All rights reserved.
      </div>
    </footer>
  );
}
