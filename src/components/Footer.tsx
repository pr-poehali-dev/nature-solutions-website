
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" className="h-7 w-7" />
              <span className="font-montserrat font-bold text-xl">
                Природные решения
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Экологичные решения для благоустройства территории, которые сохраняют красоту природы и создают комфортное пространство для жизни.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Vk" className="h-5 w-5" />
                <span className="sr-only">Вконтакте</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 shrink-0 mt-0.5" />
                <span>ул. Садовая, 123, г. Москва, 123456</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 shrink-0" />
                <span>info@prirodnye-resheniya.ru</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Ландшафтный дизайн</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Благоустройство территории</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Устройство рулонного газона</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Система автоматического полива</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Озеленение</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/70">
          <p>&copy; {currentYear} Природные решения. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
