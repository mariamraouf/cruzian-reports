/**
 * Every number this report shows.
 *
 * One file, edited each Friday. Add a row to `weeks`, refresh `campaigns`,
 * `conversions`, `ga4` and `changelog`, commit. Nothing else needs touching.
 *
 * Figures are read by hand from the Google Ads and GA4 interfaces, because
 * there is no connector on either account. `readOn` says when.
 */
window.CRUZIAN_REPORT = {
  readOn: "19 November 2026",
  note: "Google Ads and GA4 only. No Meta campaign is running — that ad account does not exist yet.",

  // Newest last. week_label is what the reader sees.
  weeks: [
    {
      start: "2026-11-03",
      label: "3–9 Nov",
      spend: 2.88,
      impressions: 1262,
      avgCpc: 0.41,
      enquiries: 0,
      phoneTaps: null,        // links were not tracked yet
      newsletter: null,
    },
    {
      start: "2026-11-10",
      label: "10–16 Nov",
      spend: 32.85,
      impressions: 5490,
      avgCpc: 0.23,
      enquiries: 0,
      phoneTaps: null,
      newsletter: 0,
    },
  ],

  campaigns: [
    {
      name: "Personal Services",
      full: "Cruzian | Personal Services | Jacksonville + Orange Park",
      type: "Performance Max",
      status: "Eligible (Limited)",
      dailyBudget: 5,
      spend: 29.56,
      impressions: 4504,
      interactions: 252,
      landing: "/personal-services",
    },
    {
      name: "Business marketing",
      full: "Performance Max-1",
      type: "Performance Max",
      status: "Eligible (Limited)",
      dailyBudget: 5,
      spend: 3.29,
      impressions: 986,
      interactions: 87,
      landing: "/",
    },
    {
      name: "Search",
      full: "Search | Jacksonville + Orange Park | Core Services",
      type: "Search",
      status: "Paused",
      dailyBudget: 5,
      spend: 0,
      impressions: 0,
      interactions: 0,
      landing: "—",
    },
  ],

  conversions: [
    { action: "generate_lead", source: "GA4", role: "Primary", counts: "One", window: 90, recorded: 0,
      note: "Quote form submissions. The one that matters." },
    { action: "contact", source: "Website", role: "Primary", counts: "One", window: 30, recorded: 0,
      note: "Phone and email taps. Fired on only 1 of 10 links until 17 Nov." },
    { action: "book_appointment", source: "Website", role: "Primary", counts: "One", window: 30, recorded: 0,
      note: "Strategy call bookings." },
    { action: "Begin checkout", source: "GA4", role: "Secondary", counts: "Every", window: 30, recorded: 0,
      note: "Moved from Primary on 17 Nov. It was steering bids toward clicks to Stripe." },
    { action: "Purchase", source: "GA4", role: "Secondary", counts: "Every", window: 90, recorded: 0,
      note: "Cannot ever fire. Checkout is on buy.stripe.com, which our tag cannot see." },
  ],

  // What the site actually sent, beside what Google Ads recorded for it.
  ga4: {
    range: "22 Oct – 18 Nov 2026",
    users: 495,
    pageViews: 1986,
    events: [
      { event: "page_view",           count: 1986, users: 495, ads: null, note: "Not a conversion." },
      { event: "session_start",       count: 650,  users: 495, ads: null, note: "Not a conversion." },
      { event: "first_visit",         count: 491,  users: 487, ads: null, note: "Not a conversion." },
      { event: "user_engagement",     count: 290,  users: 144, ads: null, note: "Not a conversion." },
      { event: "scroll",              count: 104,  users: 52,  ads: null, note: "Not a conversion." },
      { event: "click",               count: 50,   users: 9,   ads: null, note: "Outbound link clicks." },
      { event: "begin_checkout",      count: 10,   users: 1,   ads: 0,    note: "Ten clicks to Stripe from one person." },
      { event: "assessment_complete", count: 8,    users: 6,   ads: null, note: "Calculator finished." },
      { event: "contact",             count: 6,    users: 4,   ads: 0,    note: "Four people tapped the phone number. Google Ads recorded none." },
      { event: "contact_click_phone", count: 6,    users: 4,   ads: null, note: "Pairs one-to-one with contact, so nothing double-counts." },
      { event: "generate_lead",       count: 1,    users: 1,   ads: 0,    note: "One, direct traffic, around 30 Oct. Not from an ad." },
      { event: "contact_click_email", count: 0,    users: 0,   ads: 0,    note: "Nobody has clicked an email link in 28 days." },
    ],
    keyEventsMarked: 5,
    keyEventsFiring: 2,
    deadKeyEvents: ["qualify_lead", "close_convert_lead", "purchase"],
  },

  linkTests: [
    { page: "/personal-services", links: 8, firedOnce: 8, failed: 0, tested: "18 Nov, 15:55 UTC" },
    { page: "/privacy",           links: 9, firedOnce: 9, failed: 0, tested: "18 Nov, 15:55 UTC" },
    { page: "/billing",           links: 8, firedOnce: 8, failed: 0, tested: "18 Nov, 15:56 UTC" },
    { page: "Quote form, end to end", links: 1, firedOnce: 1, failed: 0, tested: "18 Nov, 15:56 UTC" },
  ],

  changelog: [
    { date: "19 Nov", tag: "Audit",     text: "GA4 audited. Four people tapped the phone number; Google Ads recorded none of them." },
    { date: "18 Nov", tag: "Tracking",  text: "Five more contact links found dead and fixed, including the mobile-only email icon." },
    { date: "18 Nov", tag: "Verified",  text: "All 25 contact links retested on the live site. No duplicates." },
    { date: "18 Nov", tag: "Forms",     text: "Formspree notifications repaired and confirmed end to end." },
    { date: "17 Nov", tag: "Form",      text: "Quote form rebuilt — service, budget band, ZIP, phone, one button." },
    { date: "17 Nov", tag: "Privacy",   text: "Consent Mode v2. Europe asked, Jacksonville unaffected." },
    { date: "17 Nov", tag: "Copy",      text: "Dropped the “usually the same day” quote promise." },
    { date: "17 Nov", tag: "Bidding",   text: "Begin checkout moved from Primary to Secondary." },
    { date: "17 Nov", tag: "Targeting", text: "Eight search themes and five audience signals added to Personal Services." },
  ],
};
