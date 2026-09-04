import { HeartIcon } from '@phosphor-icons/react';
import { Blog } from './blog';
import { Heading } from './heading';
import { Stat } from './stat';
import { Card } from './ui/card';

export const Rewards = () => {
  return (
    <Blog sectionId="rewards" title="Rewards" className="bg-secondary">
      <Heading level={2}>Crush Club</Heading>
      <p>
        Cuticle Crush values returning clients and wants to show that!!! I will
        manage your CC punchcard each service to track your progress toward
        rewards 🤑
      </p>
      <div className="flex flex-row gap-4">
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Crush tier</Heading>
          <div className="flex-1" />
          <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
          <div className="flex-1" />
          <Stat label="12th appt" value="10% off" />
          <div className="flex-1" />
        </Card>
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Beloved tier</Heading>
          <div className="flex-1" />
          <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
          <div className="flex-1" />
          <Stat label="12th appt" value="20% off" />
          <div className="flex-1" />
        </Card>
        <Card className="flex-1 gap-2 p-4 text-center">
          <div className="flex justify-center gap-1 text-2xl text-center text-accent">
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
            <HeartIcon weight="fill" />
          </div>
          <Heading level={3}>Devoted tier</Heading>
          <div className="text-muted-foreground">Repeats after filling</div>
          <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
          <Stat label="12th appt" value="30% off" />
          <Stat label="🎂🎁🎉" value="Birthday gift" />
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
