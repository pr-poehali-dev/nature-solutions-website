
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Ландшафтный дизайн',
    description: 'Создание концепции, проектирование и реализация ландшафтных решений с учетом особенностей вашего участка.',
    icon: 'PencilRuler'
  },
  {
    title: 'Благоустройство территории',
    description: 'Комплексное благоустройство придомовой территории, включая мощение дорожек, установку малых архитектурных форм.',
    icon: 'Home'
  },
  {
    title: 'Устройство рулонного газона',
    description: 'Подготовка почвы и укладка качественного рулонного газона для создания идеального зеленого покрытия.',
    icon: 'Sprout'
  },
  {
    title: 'Системы автополива',
    description: 'Проектирование и монтаж современных систем автоматического полива для поддержания здоровья растений.',
    icon: 'Droplets'
  },
  {
    title: 'Озеленение',
    description: 'Подбор и посадка растений, создание цветников, живых изгородей и декоративных композиций.',
    icon: 'Plant'
  },
  {
    title: 'Дренажные системы',
    description: 'Разработка и установка дренажных систем для отвода лишней влаги и защиты участка от подтоплений.',
    icon: 'Waves'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Мы предлагаем полный спектр услуг для создания и поддержания идеального ландшафта 
            на вашем участке
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>Получить консультацию</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
