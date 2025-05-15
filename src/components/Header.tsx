
import * as React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Leaf" className="h-7 w-7 text-primary" />
          <span className="font-montserrat font-bold text-lg md:text-xl text-primary">
            Природные решения
          </span>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="font-medium hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            О нас
          </a>
          <a href="#projects" className="font-medium hover:text-primary transition-colors">
            Проекты
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Контакты
          </a>
          <Button>Связаться с нами</Button>
        </nav>

        {/* Меню для мобильных устройств */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
              <span className="sr-only">Меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col mt-10 gap-4">
              <a href="#services" className="px-4 py-2 hover:bg-muted rounded-md font-medium">
                Услуги
              </a>
              <a href="#about" className="px-4 py-2 hover:bg-muted rounded-md font-medium">
                О нас
              </a>
              <a href="#projects" className="px-4 py-2 hover:bg-muted rounded-md font-medium">
                Проекты
              </a>
              <a href="#contact" className="px-4 py-2 hover:bg-muted rounded-md font-medium">
                Контакты
              </a>
              <Button className="mt-2">Связаться с нами</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
