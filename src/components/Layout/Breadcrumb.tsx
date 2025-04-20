
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  currentPage: string;
}

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Button variant="ghost" size="sm" asChild className="gap-1">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Назад
        </Link>
      </Button>
      <Separator orientation="vertical" className="h-6" />
      <div className="text-sm text-muted-foreground">
        Команда / {currentPage}
      </div>
    </div>
  );
};

export default Breadcrumb;
