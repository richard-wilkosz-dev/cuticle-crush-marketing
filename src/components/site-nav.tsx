import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SiteNavProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const items = [
  { label: 'Services', value: 'services' },
  { label: 'Products', value: 'products', parent: 'About' },
  { label: 'Studio', value: 'studio', parent: 'About' },
  { label: 'About me', value: 'about-me', parent: 'About' },
  { label: 'Policies', value: 'policies', parent: 'About' },
  { label: 'Accessibility', value: 'accessibility', parent: 'About' },
  { label: 'Rewards', value: 'rewards' },
  { label: 'Contact', value: 'contact' },
];

export function SiteNav({ value, defaultValue, onValueChange }: SiteNavProps) {
  const selectedItem =
    items.find((item) => item.value === value) ??
    items.find((item) => item.value === defaultValue);

  const handleSelectValueChange = (nextValue: string | null) => {
    if (nextValue) {
      onValueChange?.(nextValue);
    }
  };

  // const mainItems = items.filter((item) => !item.parent);

  return (
    <>
      <Select
        items={items}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleSelectValueChange}
      >
        <SelectTrigger>
          <SelectValue>{selectedItem?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key="services" value="services">
              Services
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>About</SelectLabel>
            {items.slice(1, 5).map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectItem key="rewards" value="rewards">
              Rewards
            </SelectItem>
            <SelectItem key="contact" value="contact">
              Contact
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <NavigationMenu className="hidden sm:block">
        <NavigationMenuList className="gap-1">
          {mainItems.map((item) => {
            const childItems = items.filter(
              (child) => child.parent === item.value,
            );

            if (!childItems.length) {
              return (
                <NavigationMenuItem key={item.value}>
                  <NavigationMenuLink
                    className={cn(
                      'rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground',
                      (value ?? defaultValue) === item.value &&
                        'bg-muted text-foreground',
                    )}
                    onClick={() => onValueChange?.(item.value)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={item.value}>
                <NavigationMenuTrigger
                  className={cn(
                    'rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground',
                    (value ?? defaultValue) === item.value &&
                      'bg-muted text-foreground',
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto p-2">
                  <ul className="grid w-[180px] gap-1">
                    {childItems.map((child) => (
                      <li key={child.value}>
                        <NavigationMenuLink
                          className={cn(
                            'block rounded-2xl px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground',
                            (value ?? defaultValue) === child.value &&
                              'bg-muted text-foreground',
                          )}
                          onClick={() => onValueChange?.(child.value)}
                        >
                          {child.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu> */}
    </>
  );
}
