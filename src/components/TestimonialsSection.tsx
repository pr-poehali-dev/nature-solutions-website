
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Анна Сергеева',
    position: 'Владелец частного дома',
    content: 'Очень благодарна компании "Природные решения" за качественное благоустройство моего участка. Профессиональный подход, соблюдение сроков и превосходный результат!',
    rating: 5
  },
  {
    name: 'Иван Петров',
    position: 'Председатель ТСЖ',
    content: 'Выражаю благодарность за благоустройство придомовой территории нашего ЖК. Все работы были выполнены на высоком уровне, жители довольны результатом.',
    rating: 5
  },
  {
    name: 'Елена Иванова',
    position: 'Директор загородного клуба',
    content: 'Сотрудничаем с компанией уже 3 года. Всегда радуют своим профессионализмом и индивидуальным подходом к нашим требованиям. Рекомендую!',
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Мы гордимся отзывами наших клиентов и стремимся превосходить их ожидания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="mb-6 text-foreground/90">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                    <span className="font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
