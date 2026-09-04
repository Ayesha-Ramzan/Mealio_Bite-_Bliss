import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, Star, Clock, Bike, ShieldCheck, Smartphone, ArrowRight, X, MessageCircle } from "lucide-react";

import heroFood from "@/assets/pk-hero.jpg";
import pkBiryani from "@/assets/pk-biryani.jpg";
import pkKarahi from "@/assets/pk-karahi.jpg";
import pkSeekh from "@/assets/pk-seekh.jpg";
import pkFish from "@/assets/pk-fish.jpg";
import pkPrawns from "@/assets/pk-prawns.jpg";
import pkZinger from "@/assets/pk-zinger.jpg";
import pkShawarma from "@/assets/pk-shawarma.jpg";
import pkNihari from "@/assets/pk-nihari.jpg";
import pkDessert from "@/assets/pk-dessert.jpg";
import rest1 from "@/assets/rest-1.jpg";
import rest2 from "@/assets/rest-2.jpg";
import rest3 from "@/assets/rest-3.jpg";
import rest4 from "@/assets/rest-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mealio_Bite Bliss — Halal Pakistani Food & Seafood, Delivered" },
      { name: "description", content: "Order halal Pakistani favourites from Mealio_Bite Bliss — biryani, karahi, nihari, seekh kebab, Karachi seafood and zinger burgers. Delivered hot in 30 minutes." },
      { property: "og:title", content: "Mealio_Bite Bliss — Halal Pakistani Food & Seafood, Delivered" },
      { property: "og:description", content: "Biryani, karahi, nihari, masala fish and zinger burgers — delivered hot in 30 minutes from Mealio_Bite Bliss." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// WhatsApp ordering
const WA_NUMBER = "923001234567"; // change to your restaurant's WhatsApp number
function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const categories = [
  { name: "Biryani", img: pkBiryani },
  { name: "Karahi", img: pkKarahi },
  { name: "BBQ & Kebab", img: pkSeekh },
  { name: "Seafood", img: pkFish },
  { name: "Fast Food", img: pkZinger },
  { name: "Mithai", img: pkDessert },
];

const restaurants = [
  { name: "Karachi Darbar", cuisine: "Biryani · Karahi · Desi", rating: 4.8, time: "20–30 min", price: "Rs 700", tag: "100% Halal", img: rest2 },
  { name: "Do Darya Seafood", cuisine: "Karachi Seafood · Grill", rating: 4.9, time: "25–35 min", price: "Rs 1,400", tag: "Top rated", img: rest3 },
  { name: "Lahori Nihari House", cuisine: "Nihari · Paye · Naan", rating: 4.7, time: "15–25 min", price: "Rs 600", tag: "Famous", img: rest4 },
  { name: "Zinger Junction", cuisine: "Burgers · Shawarma · Fries", rating: 4.6, time: "20–30 min", price: "Rs 450", tag: "Fast food", img: rest1 },
];

const dishes = [
  { name: "Sindhi Chicken Biryani", restaurant: "Karachi Darbar", price: "Rs 550", img: pkBiryani },
  { name: "Chicken Karahi (Full)", restaurant: "Karachi Darbar", price: "Rs 1,850", img: pkKarahi },
  { name: "Masala Fried Rahu Fish", restaurant: "Do Darya Seafood", price: "Rs 1,200", img: pkFish },
  { name: "Zinger Burger + Fries", restaurant: "Zinger Junction", price: "Rs 590", img: pkZinger },
];

const menu = [
  {
    section: "Desi Handi & Rice",
    items: [
      { name: "Sindhi Chicken Biryani", desc: "Aromatic basmati, aloo, kachumber raita", price: "Rs 550", img: pkBiryani },
      { name: "Chicken Karahi", desc: "Tomato, green chilli, fresh ginger — served in karahi", price: "Rs 1,850", img: pkKarahi },
      { name: "Lahori Beef Nihari", desc: "Slow-cooked overnight, ginger julienne & naan", price: "Rs 780", img: pkNihari },
    ],
  },
  {
    section: "Charcoal BBQ",
    items: [
      { name: "Chicken Seekh Kebab", desc: "6 pcs, hara masala, imli chutney", price: "Rs 690", img: pkSeekh },
      { name: "Malai Boti Platter", desc: "Creamy marinated boti with roghni naan", price: "Rs 950", img: pkSeekh },
    ],
  },
  {
    section: "Karachi Seafood (Halal)",
    items: [
      { name: "Masala Fried Rahu Fish", desc: "Karachi style, lemon & green chutney", price: "Rs 1,200", img: pkFish },
      { name: "Jhinga Masala Prawns", desc: "Butter garlic masala prawns, coriander", price: "Rs 1,450", img: pkPrawns },
      { name: "Grilled Surmai Steak", desc: "King fish steak with garlic rice", price: "Rs 1,650", img: pkFish },
    ],
  },
  {
    section: "Fast Food",
    items: [
      { name: "Zinger Burger", desc: "Crispy fillet, cheese, mayo garlic, fries", price: "Rs 590", img: pkZinger },
      { name: "Chicken Shawarma Roll", desc: "Tahini garlic sauce, pickles, paratha wrap", price: "Rs 350", img: pkShawarma },
    ],
  },
  {
    section: "Mithai & Sweets",
    items: [
      { name: "Gulab Jamun & Kheer", desc: "Warm gulab jamun with chilled rice kheer", price: "Rs 320", img: pkDessert },
    ],
  },
];

function Index() {
  const [signInOpen, setSignInOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header onSignIn={() => setSignInOpen(true)} />
      <Hero />
      <Categories />
      <Restaurants />
      <PopularDishes />
      <MenuList />
      <HowItWorks />
      <AppPromo />
      <Footer />
      <WhatsAppFab />
      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
    </div>
  );
}

function OrderNowButton({ className = "", label = "Order on WhatsApp" }: { className?: string; label?: string }) {
  return (
    <a
      href={waLink("Hi! I'd like to place an order from Mealio_Bite Bliss.")}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow ${className}`}
    >
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi! I'd like to place an order from Mealio_Bite Bliss.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-primary-glow"
    >
      <MessageCircle className="h-5 w-5" /> <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}

function SignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold">Sign in to Mealio_Bite Bliss</h3>
            <p className="mt-1 text-sm text-muted-foreground">Save your address & reorder in one tap.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="tel"
            placeholder="03xx xxxxxxx"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button type="submit" className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow">
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          Or{" "}
          <a href={waLink("Hi! I want to order from Mealio_Bite Bliss.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
            order directly on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col ${compact ? "items-start" : "items-center"}`}>
      <span className="font-brand text-2xl font-bold italic tracking-tight text-foreground leading-none">
        Mealio<span className="text-amber-600 not-italic">.</span>
      </span>
      <span className="text-[9px] uppercase tracking-[0.35em] font-medium text-muted-foreground leading-none mt-1">
        Bite Bliss
      </span>
    </div>
  );
}

function Header({ onSignIn }: { onSignIn: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <BrandLogo compact />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#restaurants" className="hover:text-foreground transition-colors">Restaurants</a>
          <a href="#categories" className="hover:text-foreground transition-colors">Cuisines</a>
          <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onSignIn} className="hidden text-sm font-medium text-foreground hover:text-primary md:inline">
            Sign in
          </button>
          <OrderNowButton label="Order now" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24 md:pb-32">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            100% Halal · Karachi, Lahore & Islamabad
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Authentic Pakistani <span className="italic text-primary">flavor</span>, delivered in 30 minutes.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Sindhi biryani, chicken karahi, Lahori nihari, charcoal seekh kebab, Karachi masala fish
            and hot zinger burgers — all halal, all fresh, straight to your door.
          </p>

          <form className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-card)] sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-1 items-center gap-2 px-3">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={2.25} />
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <a
              href={waLink("Hi! Please share the menu — I want to order from Mealio_Bite Bliss.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
            >
              <Search className="h-4 w-4" /> Find food
            </a>
          </form>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <Stat n="120+" label="Halal kitchens" />
            <span className="hidden h-8 w-px bg-border sm:block" />
            <Stat n="30 min" label="Average delivery" />
            <span className="hidden h-8 w-px bg-border sm:block" />
            <Stat n="4.9★" label="Customer rating" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-soft)]" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={heroFood}
              alt="Pakistani halal feast with biryani, karahi, seekh kebab and naan"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          <FloatingCard className="-left-6 top-10" icon={<Clock className="h-5 w-5" />} title="On the way" subtitle="Arrives in 12 min" />
          <FloatingCard className="-right-4 bottom-10" icon={<Star className="h-5 w-5 fill-primary-foreground" />} title="4.9 · 12k reviews" subtitle="Karachi Darbar" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function FloatingCard({
  className = "",
  icon,
  title,
  subtitle,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`absolute hidden items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pr-4 shadow-[var(--shadow-card)] backdrop-blur md:flex ${className}`}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <section id="categories" className="border-t border-border bg-[var(--gradient-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary-glow">Browse by cuisine</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">What are you craving?</h2>
          </div>
          <a href="#menu" className="hidden items-center gap-1 text-sm font-medium text-primary hover:text-primary-glow md:inline-flex">
            Full menu <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#menu"
              className="group rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="mx-auto aspect-square w-24 overflow-hidden rounded-full bg-muted">
                <img src={c.img} alt={c.name} width={400} height={400} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="mt-3 text-sm font-semibold text-foreground">{c.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Restaurants() {
  return (
    <section id="restaurants" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-glow">Featured</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Top halal restaurants near you</h2>
        </div>
        <a href="#menu" className="hidden items-center gap-1 text-sm font-medium text-primary hover:text-primary-glow md:inline-flex">
          See all <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {restaurants.map((r) => (
          <article
            key={r.name}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={r.img}
                alt={r.name}
                width={1000}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                {r.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{r.name}</h3>
                <div className="flex items-center gap-1 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  <Star className="h-3 w-3 fill-current" /> {r.rating}
                </div>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{r.cuisine}</p>
              <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {r.time}</span>
                <span className="inline-flex items-center gap-1"><Bike className="h-3.5 w-3.5" /> Free</span>
                <span className="ml-auto font-medium text-foreground">{r.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PopularDishes() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">Trending tonight</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Most ordered this week</h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl bg-card text-card-foreground transition hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img src={d.img} alt={d.name} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.restaurant}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-primary">{d.price}</span>
                  <a
                    href={waLink(`Assalam o Alaikum! I want to order: ${d.name} (${d.price}) from ${d.restaurant}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-glow"
                  >
                    Order +
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuList() {
  return (
    <section id="menu" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-primary-glow">Our menu</p>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Our full menu</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Every dish is 100% halal, cooked fresh to order. Tap any item to send it straight to our WhatsApp.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        {menu.map((group) => (
          <div key={group.section}>
            <div className="flex items-center gap-4">
              <h3 className="font-display text-2xl font-semibold text-foreground">{group.section}</h3>
              <span className="h-px flex-1 bg-border" />
            </div>

            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              {group.items.map((it) => (
                <li key={it.name} className="flex items-center gap-4 p-4 transition hover:bg-secondary/60 sm:gap-5 sm:p-5">
                  <img
                    src={it.img}
                    alt={it.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-lg font-semibold text-foreground">{it.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-display text-lg font-semibold text-primary">{it.price}</span>
                    <a
                      href={waLink(`Assalam o Alaikum! Order: ${it.name} — ${it.price}. Please confirm.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-glow"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Order
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: <MapPin className="h-6 w-6" />, title: "Set your address", body: "Karachi, Lahore, Islamabad or Rawalpindi — we'll show kitchens that deliver to you." },
  { icon: <Search className="h-6 w-6" />, title: "Pick your dish", body: "Biryani, karahi, BBQ, seafood or fast food — choose and customise the spice level." },
  { icon: <Bike className="h-6 w-6" />, title: "Piping hot delivery", body: "Track your rider live. Most orders reach you in under 30 minutes." },
];

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-primary-glow">How it works</p>
        <h2 className="mx-auto mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          From craving to doorstep in three steps.
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="absolute -top-4 left-8 grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
              {i + 1}
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">{s.icon}</div>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 rounded-2xl border border-border bg-[var(--gradient-soft)] p-8 md:grid-cols-3">
        <Promise icon={<ShieldCheck className="h-5 w-5" />} title="100% Halal certified" body="Every kitchen and every cut verified halal." />
        <Promise icon={<Clock className="h-5 w-5" />} title="On time, every time" body="Late delivery? Your order is on us." />
        <Promise icon={<Bike className="h-5 w-5" />} title="Live rider tracking" body="Know exactly where your food is at every moment." />
      </div>
    </section>
  );
}

function Promise({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">{icon}</div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function AppPromo() {
  return (
    <section id="app" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-10 text-primary-foreground md:p-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
              <Smartphone className="h-3.5 w-3.5" /> iOS & Android
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The whole city's kitchen, in your pocket.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/75">
              Save your favourites, reorder in one tap and unlock app-only deals. Free delivery
              on your first three orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreButton label="Download on the" store="App Store" />
              <StoreButton label="Get it on" store="Google Play" />
            </div>
          </div>

          <div className="relative hidden justify-center md:flex">
            <div className="rounded-[2.5rem] border-8 border-primary-foreground/10 bg-card p-2 shadow-[var(--shadow-elegant)]">
              <img src={pkPrawns} alt="Mealio_Bite Bliss app preview" width={320} height={420} loading="lazy" className="h-[420px] w-[320px] rounded-[2rem] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ label, store }: { label: string; store: string }) {
  return (
    <button className="rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-left transition hover:bg-primary-foreground hover:text-primary">
      <div className="text-[10px] uppercase tracking-widest opacity-70">{label}</div>
      <div className="font-display text-base font-semibold">{store}</div>
    </button>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center">
            <BrandLogo />
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Pakistan's favourite halal kitchen — desi handi, charcoal BBQ, Karachi seafood and
            fast food, delivered piping hot.
          </p>
          <OrderNowButton className="mt-5" />
        </div>

        <FooterCol title="Discover" links={["Biryani", "Karahi & Handi", "Karachi Seafood", "Fast Food"]} />
        <FooterCol title="Company" links={["About", "Careers", "Franchise", "Halal certification"]} />
        <FooterCol title="Help" links={["Support", "Partner with us", "Rider jobs", "Privacy"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Mealio_Bite Bliss. All rights reserved.</span>
          <span>Made with care for hungry people across Pakistan.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#menu" className="hover:text-primary transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
