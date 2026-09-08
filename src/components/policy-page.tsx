import { Blog } from './blog';
import { SiteHeader } from './site-header';

export const PolicyPage = () => {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SiteHeader />
      <div className="flex flex-col">
        <Blog sectionId="guests" title="Guests">
          <ul className="list-disc space-y-2">
            <li>
              Up to 1 guest may be approved ahead of time via text or booking
              comment. Ages 12+, no exceptions.
            </li>
            <li>
              For clients 12-17, a parent or guardian guest is always welcome.
              Please communicate this in a booking comment or text ahead of your
              first appointment so I know what to expect.
            </li>
            <li>
              The client age policy is due to the intricacy of manicure and
              pedicure requiring little movement, and due to the safety hazards
              and delicate equipment in my studio. Thank you for understanding.
            </li>
          </ul>
        </Blog>

        <Blog sectionId="client-age-policy" title="Client age policy">
          <ul className="list-disc space-y-2">
            <li>
              Clients must be 12 years old or older to book with me. Any client
              under the age of 18 must have a parent or guardian connect with me
              either over the phone or at the beginning of their appointment to
              ensure they are aware of my policies and comfortable with their
              minor child being present in my studio.
            </li>
            <li>
              1 parent or guardian guest is always welcome for clients under the
              age of 18.
            </li>
            <li>
              The client age policy is due to the intricacy of manicure and
              pedicure requiring little movement, and due to the safety hazards
              and delicate equipment in my studio. Thank you for understanding.
            </li>
          </ul>
        </Blog>

        <Blog sectionId="nail-damage" title="Nail damage">
          <ul className="list-disc space-y-2">
            <li>
              If a client has preexisting nail damage, their results are not
              guaranteed. The polish fix policy does not apply.
            </li>
            <li>
              If a client&apos;s nails are severely damaged they will not be
              serviced at my discretion. Their $25 appointment deposit will be
              forfeit.
            </li>
            <li>
              To avoid this, please text a photo of your nail damage before
              booking for a virtual assessment.
            </li>
          </ul>
        </Blog>

        <Blog sectionId="polish-fix-policy" title="Polish fix policy">
          <p>
            Request a polish fix by sending a photo of the natural product
            lifting or chipping within the timeframes below and the fix will be
            free:
          </p>
          <ul className="list-disc space-y-2">
            <li>Dazzle dry mani - 5 days</li>
            <li>Dazzle dry pedi - 10 days</li>
            <li>Gel mani - 7 days</li>
            <li>Gel pedi - 14 days</li>
            <li>Structured mani - 10 days</li>
          </ul>
          <p>
            Many see beautiful results that last much longer, but nail longevity
            often depends highly on circumstances of a client&apos;s daily life
            that are out of my control.
          </p>
          <p>
            Polish fixes due to picking at your nails/cuticles or using your
            nails as tools are not covered and will be subject to a $5/nail
            charge for up to 4 nails. 5+ nails needing a fix due to
            lifestyle/habit damage will need to book a new service.
          </p>
        </Blog>

        <Blog
          sectionId="structured-gel-nail-break-policy"
          title="Structure gel nail break policy"
        >
          <ul className="list-disc space-y-2">
            <li>
              Clients getting structured gel manicures who have 1-3 natural
              nails break between appointments may add on 1-3 sculpted
              extensions to match the length of their other natural nails at
              $7/nail.
            </li>
            <li>
              Structure gel breaks will only receive free fixes per the polish
              fix policy. Polish issue = eligible for a free fix within 10 days.
              Natural nail issue = $7/nail extension fix.
            </li>
          </ul>
        </Blog>

        <Blog sectionId="right-to-refuse" title="Right to refuse">
          <p>
            I retain the right to refuse service to anyone due to violation of
            my policies, disruptive behavior or any other abusive, hostile or
            inappropriate actions toward myself or others.
          </p>
        </Blog>

        <Blog sectionId="late-policy" title="Late policy">
          <p>
            Any client that is 10+ minutes late to their scheduled appointment
            will not be serviced and their deposit will be forfeit.
          </p>
        </Blog>

        <Blog
          sectionId="cancellation-reschedule-policy"
          title="Cancellation/ reschedule policy"
        >
          <ul className="list-disc space-y-2">
            <li>
              Any appointment cancelled/rescheduled with less than 24 hours
              notice will forfeit their appointment&apos;s deposit.
            </li>
            <li>
              Any client that cancels/reschedules more than two times in a row
              without following through on an appointment will be banned from
              future booking.
            </li>
          </ul>
        </Blog>

        <Blog sectionId="deposits" title="Deposits">
          <p>
            All appointments require a $25 deposit that secures your spot and
            remains refundable up to 24 hours before the appointment.
          </p>
          <p>Deposits count toward the appointment total.</p>
        </Blog>
      </div>
    </div>
  );
};
