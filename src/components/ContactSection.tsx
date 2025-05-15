
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена');
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Готовы начать работу над вашим проектом? Оставьте заявку, и мы свяжемся с вами для обсуждения деталей.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Ваше имя
                </label>
                <Input id="name" placeholder="Введите ваше имя" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Телефон
                </label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваш проект или вопрос"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Адрес</h4>
                    <p>ул. Садовая, 123, г. Москва, 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>info@prirodnye-resheniya.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Режим работы</h4>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Facebook" className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Instagram" className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Vk" className="h-6 w-6" />
                  <span className="sr-only">Вконтакте</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
