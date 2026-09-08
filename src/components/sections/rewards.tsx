import { HeartIcon } from '@phosphor-icons/react';
import { Blog } from '../blog';
import { Heading } from '../heading';
import { Stat } from '../stat';
import { Card } from '../ui/card';

export const Rewards = () => {
  return (
    <Blog sectionId="rewards" title="Rewards">
      <Heading level={2} className="mb-2">
        Crush Club
      </Heading>
      <div className="flex flex-row gap-4">
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Crush tier</Heading>
          <div inert className="text-muted-foreground">
            New clients start here
          </div>
          <div className="flex-1" />
          <Stat label="appts 2, 4, 6, 8, and 10" value="10% off" />
          <div className="flex-1" />
          <Stat label="12th appt" value="20% off" />
        </Card>
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Beloved tier</Heading>
          <div className="text-muted-foreground">After completing Crush</div>
          <div className="flex-1" />
          <Stat label="appts 2, 4, 6, 8, and 10" value="10% off" />
          <div className="flex-1" />
          <Stat label="12th appt" value="40% off" />
        </Card>
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Devoted tier</Heading>
          <div className="text-muted-foreground">After completing Beloved</div>
          <div className="flex-1" />
          <Stat label="appts 2, 4, 6, 8, and 10" value="10% off" />
          <div className="flex-1" />
          <Stat label="12th appt" value="60% off" />
        </Card>
      </div>
      <Heading className="pt-8" level={2}>
        Feedback please!
      </Heading>
      <p>
        Leave a Google Review, and get $5 off your next appointment! (Once per
        client.)
      </p>
    </Blog>
  );
};
