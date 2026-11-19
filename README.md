# Cruzian · paid acquisition reporting

A single static page. No build step, no dependencies, nothing to install.
Open `index.html` and it works.

**Live:** set by whichever host this is deployed to (see below).

---

## Updating it, every Friday

Everything the page shows lives in **`data.js`**. That is the only file
that changes week to week.

1. Read the week's figures out of Google Ads and GA4.
2. Add one object to the end of the `weeks` array:

   ```js
   {
     start: "2026-11-17",   // Monday of that week, YYYY-MM-DD
     label: "17–23 Nov",    // what the reader sees
     spend: 0,
     impressions: 0,
     avgCpc: 0,
     enquiries: 0,          // generate_lead conversions
     phoneTaps: null,
     newsletter: 0
   }
   ```

3. Refresh `campaigns`, `conversions` and the `ga4` block with that week's
   numbers.
4. Add any entries to `changelog` — newest first.
5. Update `readOn` to the date you read the figures.
6. Commit and push. The host redeploys on its own.

The **Overall** tab needs nothing: totals, cost per lead and the chart are all
worked out from `weeks`.

### Rules for the numbers

- **Clicks are derived**, not reported. Google gives spend and average cost per
  click; the page divides one by the other. Do not type a clicks figure in.
- **Cost per lead is derived** too, and shows a dash while enquiries are zero.
  Never invent one.
- **`ads: null`** in the GA4 block means "not a conversion action", and renders
  as a dash. `ads: 0` means Google Ads genuinely recorded nothing.
- Figures are read by hand because there is no Google Ads or GA4 connector on
  this account. If one is ever added, this page should read from it instead.

---

## Deploying

The page is static, so any host works.

**GitHub Pages** — Settings → Pages → Source: `main`, folder `/ (root)`.
Published at `https://<user>.github.io/<repo>/`.

**Vercel** — import the repo, framework preset **Other**, no build command,
output directory `.`. A custom domain such as `reports.thecruzian.com` can be
pointed at it.

Either way the URL belongs to Cruzian, which is the point: this is sent to
clients, so it should not live behind anyone else's branding.

`<meta name="robots" content="noindex, nofollow">` is set, so the page will not
turn up in search results. It is unlisted, not private — anyone with the link
can read it. Keep nothing confidential in `data.js`.

---

## Files

```
index.html          the whole report: markup, styles, rendering
data.js      every number the page shows — the only file edited weekly
logo.webp    Cruzian wordmark, white, for the navy masthead
```

Inter is loaded from Google Fonts, with a system fallback stack if it does not
load.
