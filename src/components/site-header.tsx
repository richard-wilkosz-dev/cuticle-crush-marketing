import { useIsMobile } from "@/hooks/use-mobile"
import { HeartIcon } from "@phosphor-icons/react"
import { Button } from "./ui/button"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

type SiteHeaderProps = {
  activeTab?: string
  onTabChange?: (value: string) => void
}

export function SiteHeader({
  activeTab = "about-me",
  onTabChange,
}: SiteHeaderProps) {
  const isMobile = useIsMobile()

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-card">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <HeartIcon className="h-6 w-6 text-primary" weight="bold" />
        <h1 className="text-sm font-semibold">
          {import.meta.env.DEV && isMobile ? "Mobile Crush" : "Cuticle Crush"}
        </h1>
        <div className="flex-1" />
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList variant="line">
            <TabsTrigger value="about-me">About me</TabsTrigger>
            <TabsTrigger value="studio">Studio</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          className="rounded-full"
          onClick={() =>
            window.navigation.navigate(
              "https://www.nailzy.com/book/cuticle-crush"
            )
          }
        >
          <span className="px-2 text-[13px] font-semibold">Book now</span>
        </Button>
      </div>
    </header>
  )
}
