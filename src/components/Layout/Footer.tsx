
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto bg-accent/20 border-t border-accent/30 py-6">
      <div className="container mx-auto px-4">
        <Separator className="mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 КиберCS2 - Все права защищены
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="text-sm hover:text-primary">Главная</Link>
            <Link to="/team" className="text-sm hover:text-primary">Команды</Link>
            <Link to="/tournaments" className="text-sm hover:text-primary">Турниры</Link>
            <Link to="/about" className="text-sm hover:text-primary">О нас</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
