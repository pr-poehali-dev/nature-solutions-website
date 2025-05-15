
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Частный дом в Подмосковье',
    category: 'Ландшафтный дизайн',
    imageUrl: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Коттеджный поселок "Сосновый бор"',
    category: 'Благоустройство территории',
    imageUrl: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Загородный дом в Истре',
    category: 'Рулонный газон',
    imageUrl: 'https://images.unsplash.com/photo-1617850687395-620757feb1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Резиденция в Рублево',
    category: 'Системы автополива',
    imageUrl: 'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Ознакомьтесь с нашими последними проектами по благоустройству и ландшафтному дизайну
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <CardContent className="p-0 relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="text-sm uppercase tracking-wider mb-1">{project.category}</div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="gap-2">
            Смотреть все проекты
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
