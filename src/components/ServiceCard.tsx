
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
}

const ServiceCard = ({ title, description, icon, iconColor = "text-primary" }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <CardHeader className="pb-2">
        <div className={`mb-3 ${iconColor}`}>
          <Icon name={icon} className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
