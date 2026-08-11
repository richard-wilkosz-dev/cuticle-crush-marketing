import { HeartHandshake } from "lucide-react"
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
  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <HeartHandshake className="h-6 w-6 text-primary" />
        <span className="font-semibold">Cuticle Crush</span>
        <div className="flex-1" />
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList variant="line">
            <TabsTrigger value="about-me">About me</TabsTrigger>
            <TabsTrigger value="studio">Studio</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button>Book now</Button>
      </div>
    </header>
  )
}
