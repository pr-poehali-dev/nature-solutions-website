
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Создаем гармонию природы и комфорта
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Профессиональное благоустройство территории, ландшафтный дизайн и озеленение для вашего дома или бизнеса.
            Превращаем пространство в уютный уголок природы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Наши проекты
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
