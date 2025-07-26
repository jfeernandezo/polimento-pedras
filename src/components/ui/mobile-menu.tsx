import { Button } from "./button"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <a 
            href="#services" 
            className="block px-2 py-1 text-lg text-stone-600 hover:text-elegant-600 transition-colors"
          >
            Serviços
          </a>
          <a 
            href="#differentials" 
            className="block px-2 py-1 text-lg text-stone-600 hover:text-elegant-600 transition-colors"
          >
            Diferenciais
          </a>
          <a 
            href="#testimonials" 
            className="block px-2 py-1 text-lg text-stone-600 hover:text-elegant-600 transition-colors"
          >
            Depoimentos
          </a>
          <a 
            href="#contact" 
            className="block px-2 py-1 text-lg text-stone-600 hover:text-elegant-600 transition-colors"
          >
            Contato
          </a>
          <Button
            className="mt-4 w-full bg-elegant-600 hover:bg-elegant-700 text-white transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Orçamento
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
