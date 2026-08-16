import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react"

export function Contact() {
  return (
    <div id="contact" className="border-t bg-card">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 text-sm sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <strong>Contact</strong>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <PhoneIcon className="text-accent-foreground" size={16} />
            <a href="tel:6124054316">6124054316</a>
            <EnvelopeSimpleIcon className="text-accent-foreground" size={16} />
            <a href="mailto:siri@cuticlecrush.com">siri@cuticlecrush.com</a>
            <MapPinIcon className="text-accent-foreground" size={16} />
            <div>
              Minneapolis, MN
              <br />
              <span className="text-xs text-muted">
                Exact address shared 24 hours before your appointment.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong>Hours</strong>
          <div className="grid grid-cols-2 items-center gap-2 text-xs">
            <div>Monday</div>
            <div className="text-end text-muted">Closed</div>
            <div>Tuesday</div>
            <div className="text-end">8 AM – 8 PM</div>
            <div>Wednesday</div>
            <div className="text-end">8 AM – 8 PM</div>
            <div>Thursday</div>
            <div className="text-end">9 AM – 8:30 PM</div>
            <div>Friday</div>
            <div className="text-end">8 AM – 3 PM</div>
            <div>Saturday</div>
            <div className="text-end">9 AM – 1:30 PM</div>
            <div>Sunday</div>
            <div className="text-end text-muted">Closed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
