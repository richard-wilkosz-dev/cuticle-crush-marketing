import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type SiteNavProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const items = [
  { label: "About me", value: "about-me" },
  { label: "Studio", value: "studio" },
  { label: "Products", value: "products" },
  { label: "Rewards", value: "rewards" },
  { label: "Contact", value: "contact" },
]

export function SiteNav({ value, defaultValue, onValueChange }: SiteNavProps) {
  const selectedItem =
    items.find((item) => item.value === value) ??
    items.find((item) => item.value === defaultValue)

  const handleSelectValueChange = (nextValue: string | null) => {
    if (nextValue) {
      onValueChange?.(nextValue)
    }
  }

  return (
    <>
      <Select
        items={items}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleSelectValueChange}
      >
        <SelectTrigger className="sm:hidden">
          <SelectValue>{selectedItem?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Tabs
        className="hidden sm:block"
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <TabsList variant="line">
          {items.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  )
}
