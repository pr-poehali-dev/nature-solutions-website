
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'CheckCircle',
    title: 'Гарантия качества',
    description: 'Мы предоставляем гарантию на все виды проведенных работ и используемые материалы до 5 лет.'
  },
  {
    icon: 'Leaf',
    title: 'Экологичные материалы',
    description: 'Используем только экологически чистые материалы, которые безопасны для детей и домашних животных.'
  },
  {
    icon: 'Timer',
    title: 'Быстрые сроки',
    description: 'Четко соблюдаем установленные сроки и выполняем проекты любой сложности в срок.'
  },
  {
    icon: 'Users',
    title: 'Профессиональная команда',
    description: 'Наши специалисты имеют многолетний опыт работы в сфере ландшафтного дизайна.'
  },
];

const FeatureSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Мы создаем уникальные ландшафтные решения, которые радуют глаз и улучшают качество жизни.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">
                <Icon name={feature.icon} className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p>Лет на рынке</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p>Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
