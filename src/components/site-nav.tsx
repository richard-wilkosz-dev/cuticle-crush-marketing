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

  return (
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
  );
}
