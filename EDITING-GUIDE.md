# How to Edit Your Site

All your site content lives in simple text files on GitHub. When you save a change, the site automatically rebuilds in about 1-2 minutes.

---

## Quick Start: Editing on GitHub.com

1. Go to **https://github.com/g3rbinson/RainSite**
2. Navigate into `src/content/` and open the folder for what you want to edit (`prints/`, `originals/`, or `events/`)
3. Click a `.md` file to open it
4. Click the **pencil icon** (✏️) to edit
5. Make your changes in the frontmatter (the section between the `---` lines)
6. Click **"Commit changes…"** → add a short description → **"Commit changes"**

The site will redeploy automatically. Check it at https://g3rbinson.github.io/RainSite/ after a minute or two.

---

## Prints

Files live in: `src/content/prints/`

### Edit an existing print

Open the file (e.g. `the-hollow-king.md`) and change any value between the `---` lines.

### Template for a new print

To add a print: go to `src/content/prints/`, click **"Add file" → "Create new file"**, name it something like `my-new-print.md`, and paste this template:

```markdown
---
title: "Your Print Title"
image: "/images/your-image.jpg"
price: 30
medium: "Digital Print on Matte Paper"
size: '11×14"'
buyLink: "https://buy.stripe.com/your-link-here"
featured: false
sortOrder: 10
published: true
---
```

### Field reference

| Field       | What it does | Example |
|-------------|-------------|---------|
| `title`     | Display name | `"Moth & Flame"` |
| `image`     | Path to image file (upload to `public/images/` first) | `"/images/moth-and-flame.jpg"` |
| `price`     | Price in dollars (number, no `$` sign) | `35` |
| `salePrice` | *(Optional)* Temporary sale price | `25` |
| `saleEnds`  | *(Optional)* When sale expires (ISO date) | `"2025-12-31"` |
| `medium`    | Print medium description | `"Digital Print on Matte Paper"` |
| `size`      | Print dimensions | `'11×14"'` |
| `buyLink`   | Stripe payment link URL | `"https://buy.stripe.com/abc123"` |
| `featured`  | Show on homepage? `true` or `false` | `true` |
| `sortOrder` | Display order (lower = first) | `1` |
| `published` | Visible on site? `true` or `false` | `true` |

### Running a sale

Add these two fields to any print:

```yaml
salePrice: 20
saleEnds: "2025-12-31"
```

The sale badge and crossed-out original price will show automatically. When the date passes, the regular price takes over — no action needed.

To end a sale early, just delete those two lines.

---

## Originals

Files live in: `src/content/originals/`

### Template for a new original

```markdown
---
title: "Your Painting Title"
image: "/images/your-image.jpg"
price: 500
medium: "Oil on Canvas"
size: '18×24"'
sold: false
inquireEmail: "hello@darkbloomstudio.com"
featured: false
sortOrder: 10
published: true
---
```

### Field reference

Same as prints, except:

| Field          | What it does | Example |
|----------------|-------------|---------|
| `sold`         | Mark as sold (`true` / `false`) | `true` |
| `inquireEmail` | Email for purchase inquiries | `"artist@email.com"` |

*(Originals don't have `buyLink`, `salePrice`, or `saleEnds`)*

### Marking a piece as sold

Open the file and change:
```yaml
sold: true
```

---

## Events

Files live in: `src/content/events/`

### Template for a new event

```markdown
---
title: "Event Name"
date: "March 15, 2026"
sortDate: "2026-03-15"
location: "Venue Name, City ST"
description: "A short description of the event."
link: "https://example.com/event-page"
image: "/images/event-image.jpg"
published: true
---
```

### Field reference

| Field         | What it does | Example |
|---------------|-------------|---------|
| `title`       | Event name | `"Gothic Arts Market"` |
| `date`        | Human-readable date (displayed on site) | `"March 15, 2026"` |
| `sortDate`    | Machine-readable date for sorting (YYYY-MM-DD) | `"2026-03-15"` |
| `location`    | Venue and city | `"The Old Chapel, Portland OR"` |
| `description` | Short blurb | `"Prints, stickers, and originals available."` |
| `link`        | Link to event page or ticket sales | `"https://example.com"` |
| `image`       | Event image path | `"/images/event-1.jpg"` |
| `published`   | Visible on site? `true` or `false` | `true` |

Past events (where `sortDate` is before today) automatically move to the "Past Events" section.

---

## Uploading Images

1. On GitHub, navigate to `public/images/`
2. Click **"Add file" → "Upload files"**
3. Drag your images in and commit
4. Reference them in your markdown as `/images/your-filename.jpg`

**Tip:** Use lowercase filenames with hyphens: `moth-and-flame.jpg`, not `Moth & Flame.jpg`

---

## Hiding Content

To temporarily hide any print, original, or event without deleting it:

```yaml
published: false
```

---

## Common Tasks Cheat Sheet

| I want to…                  | Do this |
|-----------------------------|---------|
| Change a price              | Edit the `price:` line in the file |
| Run a sale                  | Add `salePrice:` and `saleEnds:` lines |
| End a sale early            | Delete the `salePrice:` and `saleEnds:` lines |
| Add a new print             | Create new `.md` file in `src/content/prints/` using the template above |
| Mark an original as sold    | Change `sold: false` to `sold: true` |
| Add a new event             | Create new `.md` file in `src/content/events/` |
| Remove an old event         | Either delete the file or set `published: false` |
| Hide something temporarily  | Set `published: false` |
| Upload new artwork images   | Upload to `public/images/` on GitHub |
| Change what shows on homepage | Set `featured: true` on the prints you want there |
| Reorder prints              | Change `sortOrder:` numbers (lower = first) |
