const services = [
  {
    title: "Artist & Talent Launch",
    items: [
      "Singer Launch (India → International)",
      "Brand positioning & image building",
      "Debut song / music video launch",
      "PR + media coverage",
      "Spotify, YouTube & Apple Music strategy",
      "Actor / Model / Creator launch",
      "IMDb, Instagram & press kit curation",
      "Red carpet readiness",
    ],
  },
  {
    title: "Cannes Film Festival Services",
    items: [
      "Cannes accreditation guidance",
      "Red carpet look & styling",
      "Media presence planning",
      "International PR & visibility",
      "Red carpet reels & interviews",
      "Cannes after-movie production",
    ],
  },
  {
    title: "Celebrity & Influencer Booking",
    items: [
      "Bollywood & TV celebrities",
      "Web series actors",
      "International influencers",
      "Fashion & lifestyle icons",
      "Appearances & endorsements",
    ],
  },
  {
    title: "Music Production & Launch",
    items: [
      "Song production (audio + video)",
      "Music video direction",
      "Distribution & promotion",
      "Artist-brand collaborations",
    ],
  },
  {
    title: "Artist Branding & PR",
    items: [
      "Personal brand strategy",
      "Instagram growth & verification",
      "Press releases & media articles",
      "Magazine features & interviews",
    ],
  },
  {
    title: "Fashion & Styling Division",
    items: [
      "Cannes & red carpet styling",
      "Designer collaborations",
      "Fashion show production",
      "Celebrity look management",
    ],
  },
  {
    title: "Events & Show Production",
    items: [
      "Fashion shows",
      "Album launch events",
      "Movie promotions",
      "Brand activation events",
      "International showcases",
    ],
  },
  {
    title: "International Representation",
    items: [
      "Artist international exposure",
      "Global collaborations",
      "Cross-border placements",
      "Festival & award show entries",
    ],
  },
  {
    title: "Digital Media & Viral Growth",
    items: [
      "Reels & viral campaigns",
      "Personal brand growth strategy",
      "Artist fan-base building",
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-40">
      <div className="space-y-16 md:space-y-28">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 border-t border-[#312e2e]/20 pt-8 md:pt-16"
          >
            <h3 className="text-2xl md:text-3xl font-medium leading-tight text-[#312e2e]">
              {service.title}
            </h3>

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm md:text-base text-[#312e2e]/75">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#fcb900]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
