import { useIsMobile } from '@/hooks/use-mobile';
import { HeartIcon } from '@phosphor-icons/react';
import { SiteNav } from './site-nav';
import { Button } from './ui/button';

type SiteHeaderProps = {
  activeTab?: string;
  onTabChange?: (value: string) => void;
};

export function SiteHeader({
  activeTab = 'about-me',
  onTabChange,
}: SiteHeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-card">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        {/* <div className="sm:hidden">
          <SiteDrawer>
            <NavTabs
              value={activeTab}
              onValueChange={onTabChange}
              orientation="vertical"
            />
          </SiteDrawer>
        </div> */}
        <HeartIcon className="h-6 w-6 text-primary" weight="bold" />
        <span className="text-sm font-semibold">
          {import.meta.env.DEV && isMobile ? 'Mobile Crush' : 'Cuticle Crush'}
        </span>
        <div className="flex-1" />
        <SiteNav value={activeTab} onValueChange={onTabChange} />
        <Button
          className="rounded-full"
          onClick={() =>
            window.navigation.navigate(
              'https://www.nailzy.com/book/cuticle-crush?book=1',
            )
          }
        >
          <span className="px-2 text-[13px] font-semibold">Book now</span>
        </Button>
      </div>
    </header>
  );
}
