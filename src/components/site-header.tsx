import { HeartIcon } from '@phosphor-icons/react';
// import { useIsMobile } from '@/hooks/use-mobile';
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
  // const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-card">
      <div className="flex h-(--header-height) max-w-3xl mx-auto w-full items-center gap-1 px-4">
        {/* <div className="sm:hidden">
          <SiteDrawer>
            <NavTabs
              value={activeTab}
              onValueChange={onTabChange}
              orientation="vertical"
            />
          </SiteDrawer>
        </div> */}
        {/* <img src="/public/favicon.png" alt="Cuticle Crush Logo" /> */}
        <div className="flex flex-1 text-sm font-semibold">Cuticle Crush</div>

        <div className="flex" />
        <SiteNav value={activeTab} onValueChange={onTabChange} />
        <a
          href="https://www.nailzy.com/book/cuticle-crush?book=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full">
            <span className="px-2 text-[13px] font-semibold">Book now</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
