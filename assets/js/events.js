/**
 * AIN Events Page — React Application
 * Loaded via Babel Standalone (type="text/babel") from events.html
 * React + ReactDOM are available as globals from CDN.
 */

/* ────────────────────────────────────────────────────────────
   DATA — Event Definitions
   status: 'active' | 'upcoming' | 'past'
──────────────────────────────────────────────────────────── */
const EVENTS = [
  {
    id: 'hackathon-2025',
    title: 'AIN Hackathon 2026',
    date: '2026-5-1',
    location: 'An-Najah University, Nablus',
    status: 'active',
    description: 'The flagship hackathon — 48 hours of ideas, code, and breakthrough innovation.',
    fullDescription: 'Join teams of passionate students for a 48-hour sprint of building, prototyping, and pitching ideas that matter. Mentored by industry experts, judged by innovators, and witnessed by the entire AIN community.',
    images: [
      '/images/Hackathon1.jpg'
    ],
    registrationLink: '/hack.html',
    tags: ['Tech', 'Innovation', 'Competition'],
    attendees: 200,
  },
  {
    id: 'ain-camp-4',
    title: 'AIN Camp 4',
    titleAr: 'عينك على ذاتك',
    date: '2026-01-15',
    location: 'City Hub, Nablus',
    status: 'past',
    description: 'An immersive self-development camp to unlock your inner potential.',
    fullDescription: `أقامت الهيئة العاشرة للشبكة العربية للابتكار ممثلةً بفرعها الطلابي في جامعة النجاح الوطنية مخيم "عينك على ذاتك 4"،
    
    والذي شكّل محطة استثنائية في مسيرة العمل الطلابي الريادي والإبداعي، حيث اجتمعت الطاقات الشابة في تجربة علمية متكاملة امتدت على مدار ثلاثة أيام حافلة بالعطاء والإنجاز.
    \n
    \nوقد جاء استضافة هذا المخيم برعاية وتعاون كريم من المجلس الأعلى للشباب والرياضة الفلسطيني، من خلال توفيرهم المكان الذي أُقيمت فيه فعاليات المخيم، وهو مدينة الأمل الشبابية الرياضية، مما أسهم في توفير بيئة مثالية وملهمة احتضنت الطاقات الشبابية وأتاحت لهم مساحة متكاملة للإبداع والعمل والتفاعل.\n
    \nشهد المخيم انطلاقة فعالياته منذ ساعات الفجر الأولى، واستمرت برامجه حتى منتصف الليل، في أجواء نابضة بالحيوية والحماس. وقد تنوعت الأنشطة ما بين ورش عمل علمية متخصصة، جلسات عصف ذهني، تدريبات ريادية، فعاليات ثقافية وترفيهية، وأنشطة اجتماعية هدفت إلى كسر الحواجز بين الطلبة وتعزيز روح الفريق والتعاون.\n
    \nوكان الحدث الأبرز في المخيم هو الهاكاثون العلمي، الذي مثّل مساحة تنافسية إبداعية مكثفة، عمل خلالها الطلبة على تطوير أفكار ريادية مبتكرة تسعى إلى تقديم حلول عملية لتحديات واقعية.\n
    \nوفي ختام الهاكاثون، تم الإعلان عن المشاريع الفائزة:
    \n🥇 المركز الأول: Prizo
    \n🥈 المركز الثاني: اسفلت
    \n🥉 المركز الثالث: Parkeen\n
    \nكما تخلل المخيم ثلاث جلسات نوعية حملت طابعًا تحفيزيًا وفكريًا عميقًا:
    \n• المهندس غالي شهاب — التحفيز في بناء المشاريع
    \n• الأستاذة صبحية مسلم — التفكير وآلياته
    \n• المهندس محمد سويلم — سلبيات وإيجابيات الرسائل الضمنية وأثرها على المجتمعات
    \n
    \nوقد عبّر الطلبة المشاركون عن إعجابهم الكبير بالمخيم، مؤكدين أن التجربة كانت مفعمة بالإيجابية، وغنية بالمعرفة، وذات أثر عميق على المستوى الشخصي والأكاديمي.`,
    images: [
      '/images/CAMP201.jpg',
      '/images/CAMP202.jpg',
      '/images/CAMP203.jpg',
    ],
    registrationLink: '/aincamp.html',
    tags: ['Self-Development', 'Leadership'],
  },
  {
    id: 'escape-2-ain',
    title: 'ESCAPE 2 AIN',
    date: '2025-10-11',
    location: 'An-Najah University',
    status: 'past',
    description: 'An immersive escape-room experience celebrating creativity, teamwork, and fast thinking.',
    fullDescription: `
    ‏🧩 Escape To AIN 2, رحلة البحث عن الجوهرة المفقودة\n

‏في يوم السبت 11 تشرين الأول 2025، نظّمت الشبكة العربية للابتكار–عين فعالية Escape To AIN 2 في جامعة النجاح الوطنية–الحرم الجديد، تحديدًا في كلية الهندسة والعلوم وملاعب كلية الرياضة، من الساعة 9 صباحًا حتى 5 مساءً.

‏حملت الفعالية هذا العام عنوان “العثور على الجوهرة المفقودة”، وشارك فيها 100 طالب موزعين على 25 فريقًا، خاضوا تجربة مليئة بالحماس والتحدي عبر سبع غرف متتالية من الألغاز والاختبارات الذهنية.
‏في كل غرفة، كان على الفرق حل سلسلة من الألغاز لجمع بطاقات تحمل تلميحات عن موقع الجوهرة، حتى يتمكن الفريق الذي يجمع البطاقات السبع من اكتشاف المكان النهائي للجوهرة والفوز بالسباق الكبير 🏆.

‏تخلّل النشاط استراحة للغداء والصلاة في ساحة النافورة–مبنى العلوم B2، قبل استكمال المنافسة في الأجواء الممتعة.

‏وشهد الافتتاح لحظة مؤثرة بإلقاء قصيدة شعرية بمناسبة انتهاء الحرب في غزة، كما تم خلال الفعالية تكريم متطوعي تحدي الثلاثين تقديرًا لعطائهم.
‏واختُتم اليوم بتكريم الفريقين الفائزين بالمركزين الأول والثاني بمكافآت مالية، إضافةً إلى توزيع هدايا وكوبونات على جميع المشاركين، وسط أجواء من الفخر والإنجاز والروح الإيجابية.`,
    extraDescription: 'Teams raced through four rooms of cryptic clues, logic puzzles, and hidden codes, each unlocking a piece of the story.',
    images: ['/images/ESCP1.jpg', '/images/ESCP2.jpg', '/images/ESCP3.jpg'],
    tags: ['Games', 'Teamwork'],
    attendees: 150,
  },
  {
    id: 'thirty-challenge',
    title: 'تحدي الثلاثين',
    date: '2025-08-16',
    location: 'An-Najah University',
    status: 'past',
    description: 'A knowledge tournament with 30 competing teams across four rapid-fire rounds.',
    fullDescription: 'نظّمت الشبكة العربية للابتكار (عين) فعالية تحدي الثلاثين — منافسة المعرفة والإبداع.',
    images: ['/images/301.jpg', '/images/302.jpg', '/images/303.jpg'],
    tags: ['Quiz', 'Competition'],
    attendees: 140,
  },
  {
    id: 'ain-exhibition-2025',
    title: 'معرض عين على المستقبل',
    date: '2025-05-20',
    location: 'An-Najah University',
    status: 'past',
    description: 'An exploration of university majors and career paths, showcasing the breadth of innovation.',
    fullDescription:
      "عين على المستقبل" + `
وهو معرض طلابي شامل جمع بين الإبداع العلمي والابتكار العملي في مختلف التخصصات. أقيمت الفعالية بإشراف عمادة شؤون الطلبة وحديقة النجاح للابتكار، واستمرّت على مدار يومين في ساحة كلية الهندسة بالحرم الجديد، وسط حضور واسع من الطلبة والأكاديميين والإداريين.
ضمّ المعرض عشرات الزوايا التفاعلية التي عرض فيها الطلبة مشاريعهم وأفكارهم الريادية في مجالات الهندسة، والطب، والاقتصاد، والتكنولوجيا، والفنون، وغيرها، ليقدّم صورة حيّة عن طاقات الشباب وقدرتهم على الابتكار وصناعة التغيير.
جاءت الفعالية لتجسد رؤية الجامعة في دعم أهداف التنمية المستدامة، وتعزيز الشراكة بين الطلبة والجهات الداعمة للابتكار، فكانت بحق نافذة تطل على المستقبل وتُعبّر عن روح الريادة في جامعة النجاح الوطنية.
    `,
    images: ['/images/EXB1.jpg', '/images/EXB2.jpg', '/images/EXB3.jpg'],
    tags: ['Exhibition', 'Careers'],
  },
  // {
  //   id: 'ain-camp-3',
  //   title: 'مخيم عينك على ذاتك 3',
  //   date: '2023-10-5',
  //   location: 'جبل النجمة - رام الله',
  //   status: 'past',
  //   description: 'Third edition of the flagship self-development camp for AIN members.',
  //   fullDescription: 'مخيم عينك على ذاتك 3 — النسخة الثالثة من المخيم التطويري الرائد لأعضاء عين.',
  //   images: ['/images/CAMP1.jpg', '/images/CAMP4.jpg', '/images/CAMP5.jpg'],
  //   tags: ['Self-Development'],
  // },
  // {
  //   id: 'ain-network-exhibition',
  //   title: 'معرض الشبكة العربية للابتكار',
  //   date: '2023-09-22',
  //   location: 'City Hub',
  //   status: 'past',
  //   description: 'Annual showcase of the Arab Innovation Network across Palestine.',
  //   fullDescription: 'معرض الشبكة العربية للابتكار — عرض سنوي لمنجزات الشبكة في فلسطين.',
  //   images: ['/images/EXB11.jpg', '/images/EXB12.jpg'],
  //   tags: ['Exhibition', 'Network'],
  // },
  // {
  //   id: 'wamdah',
  //   title: 'ومضة',
  //   date: '2023-03-15',
  //   location: 'City Hub',
  //   status: 'past',
  //   description: 'Lightning talks — rapid 5-minute ideas from the brightest student innovators.',
  //   fullDescription: 'ومضة: منصة أفكار سريعة ومُلهِمة من أبرز المبتكرين الطلابيين في فلسطين.',
  //   images: ['/images/WAMDAH1.jpg', '/images/WAMDAH2.jpg'],
  //   tags: ['Talks', 'Innovation'],
  // },
];

/* ─── Sorting utility ──────────────────────────────────────── */
function sortEvents(events) {
  const active = events.find(e => e.status === 'active') || null;
  const upcoming = events.filter(e => e.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const past = events.filter(e => e.status === 'past')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { active, upcoming, past };
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* ─── Hook: scroll reveal ──────────────────────────────────── */
function useScrollReveal(ref) {
  React.useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll('.evp-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
    return () => io.disconnect();
  }, []);
}

/* ─── Hook: auto slide timer ───────────────────────────────── */
function useAutoSlide(count, interval, onNext, paused) {
  const idxRef = React.useRef(0);
  React.useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => {
      if (!paused.current) {
        idxRef.current = (idxRef.current + 1) % count;
        onNext(idxRef.current);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [count, interval]);

  return idxRef;
}

/* ════════════════════════════════════════════════════════════
   COMPONENT: EventDetailModal
════════════════════════════════════════════════════════════ */
function EventDetailModal({ event, onClose }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const pausedRef = React.useRef(false);
  const imgs = event.images || [];
  const count = imgs.length;

  // Keep ref in sync with state (so interval closure sees current value)
  React.useEffect(() => { pausedRef.current = paused; }, [paused]);

  // Auto-slide
  React.useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => {
      if (!pausedRef.current) {
        setIdx(i => (i + 1) % count);
      }
    }, 4000);
    return () => clearInterval(t);
  }, [count]);

  // Keyboard nav
  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % count);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [count, onClose]);

  // Lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const isUpcoming = event.status === 'upcoming' || event.status === 'active';

  return (
    <div
      className="evp-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Event details: ${event.title}`}
    >
      <div className="evp-modal" onClick={e => e.stopPropagation()}>

        {/* ── LEFT: Slideshow ── */}
        <div
          className="evp-modal__slider"
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${event.title} photo ${i + 1}`}
              className={`evp-modal__img${i !== idx ? ' exiting' : ''}`}
              style={{ zIndex: i === idx ? 2 : 1 }}
            />
          ))}

          {/* Pause overlay */}
          {paused && (
            <div className="evp-pause-overlay">⏸</div>
          )}

          <span className="evp-modal__hint">🖱 Hold to pause</span>

          {/* Arrows */}
          {count > 1 && (
            <>
              <button
                className="evp-arrow prev"
                onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + count) % count); }}
                aria-label="Previous photo"
              >‹</button>
              <button
                className="evp-arrow next"
                onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % count); }}
                aria-label="Next photo"
              >›</button>
            </>
          )}

          {/* Dots */}
          <div className="evp-dots">
            {imgs.map((_, i) => (
              <button
                key={i}
                className={`evp-dot${i === idx ? ' active' : ''}`}
                onClick={e => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar animates per slide */}
          {count > 1 && !paused && (
            <div
              key={idx}
              className="evp-progress-bar"
              style={{
                animation: 'evpProgressGrow 4s linear forwards',
              }}
            />
          )}
        </div>

        {/* ── RIGHT: Details ── */}
        <div className="evp-modal__details">
          <div className="evp-modal__details-scroll">
            <div className="evp-modal__head">
              {event.tags && (
                <div className="evp-modal__tags">
                  {event.tags.map(t => (
                    <span key={t} className="evp-card__tag">{t}</span>
                  ))}
                </div>
              )}
              <h2 className="evp-modal__title">{event.title}</h2>
              <div className="evp-modal__meta">
                <div className="evp-modal__meta-row">
                  <span className="evp-meta-icon">📅</span>
                  {fmtDate(event.date)}
                </div>
                <div className="evp-modal__meta-row">
                  <span className="evp-meta-icon">📍</span>
                  {event.location}
                </div>
                {event.attendees && (
                  <div className="evp-modal__meta-row">
                    <span className="evp-meta-icon">👥</span>
                    {event.attendees}+ attendees
                  </div>
                )}
              </div>
            </div>

            <div className="evp-modal__desc">
              {(event.fullDescription || event.description).split('\n').filter(Boolean).map((para, i) => (
  <p key={i} className="evp-modal__full-desc">{para}</p>
))}
              {event.extraDescription && (
                <p className="evp-modal__extra-desc">{event.extraDescription}</p>
              )}
            </div>
          </div>

          {/* CTA */}
          {isUpcoming && event.registrationLink && (
            <div className="evp-modal__cta">
              <a href={event.registrationLink} className="evp-modal__reg-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                🚀 Register Now
              </a>
            </div>
          )}

          <p className="evp-modal__counter">
            Photo {idx + 1} / {count} · Hold image to pause
          </p>
        </div>

        {/* Close */}
        <button className="evp-modal__close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <style>{`
        @keyframes evpProgressGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT: HeroEvent (Active/Live event)
════════════════════════════════════════════════════════════ */
const HeroEvent = React.memo(function HeroEvent({ event }) {
  const [imgIdx, setImgIdx] = React.useState(0);
  const [modalOpen, setModal] = React.useState(false);
  const imgs = event.images || [];

  return (
    <>
      <div className="evp-hero-event" style={{ minHeight: '72vh' }}>
        {/* Background image */}
        <img
          src={imgs[imgIdx] || ''}
          alt={event.title}
          className="evp-hero-event__bg"
        />
        <div className="evp-hero-event__overlay" />

        {/* Thumbnails */}
        {imgs.length > 1 && (
          <div className="evp-hero-event__thumbs">
            {imgs.map((src, i) => (
              <button
                key={i}
                className={`evp-thumb${i === imgIdx ? ' active' : ''}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Preview image ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="evp-hero-event__body">
          <div className="evp-live-badge">
            <span />
            LIVE EVENT
          </div>

          {event.tags && (
            <div className="evp-hero-event__tags">
              {event.tags.map(t => <span key={t} className="evp-tag">{t}</span>)}
            </div>
          )}

          <h2 className="evp-hero-event__title">{event.title}</h2>

          <p className="evp-hero-event__desc">{event.description}</p>

          <div className="evp-hero-event__meta">
            <span>📅 {fmtDate(event.date)}</span>
            <span>📍 {event.location}</span>
            {event.attendees && <span>👥 {event.attendees}+ registered</span>}
          </div>

          <div className="evp-hero-event__actions">
            {event.registrationLink && (
              <a href={event.registrationLink} className="evp-btn-primary">
                🚀 Register Now
              </a>
            )}
            <button className="evp-btn-secondary" onClick={() => setModal(true)}>
              View Gallery →
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <EventDetailModal event={event} onClose={() => setModal(false)} />
      )}
    </>
  );
});

/* ════════════════════════════════════════════════════════════
   COMPONENT: EventCard
════════════════════════════════════════════════════════════ */
const EventCard = React.memo(function EventCard({ event }) {
  const [modalOpen, setModal] = React.useState(false);
  const thumb = event.images?.[0] || '';
  const isPast = event.status === 'past';

  return (
    <>
      <article
        className="evp-card"
        onClick={() => setModal(true)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setModal(true)}
        aria-label={`View details for ${event.title}`}
      >
        {/* Image */}
        <div className="evp-card__img-wrap">
          <img src={thumb} alt={event.title} loading="lazy" />
          <div className="evp-card__overlay">
            <div className="evp-card__quick">
              <span>📅 {fmtDate(event.date)}</span>
              <span>📍 {event.location}</span>
            </div>
          </div>
          {isPast && <span className="evp-card__badge" style={{ background: '#64748b' }}>Past</span>}
          {!isPast && <span className="evp-card__badge">Upcoming</span>}
          {event.images?.length > 1 && (
            <span className="evp-card__photo-count">{event.images.length} photos</span>
          )}
        </div>

        {/* Body */}
        <div className="evp-card__body">
          {event.tags && (
            <div className="evp-card__tags">
              {event.tags.slice(0, 2).map(t => <span key={t} className="evp-card__tag">{t}</span>)}
            </div>
          )}
          <h3 className="evp-card__title">{event.title}</h3>
          <p className="evp-card__desc">{event.description}</p>

          <div className="evp-card__footer">
            <div className="evp-card__meta-small">
              {event.attendees && <span>👥 {event.attendees}+</span>}
            </div>
            <span className="evp-card__cta">View Story →</span>
          </div>
        </div>
      </article>

      {modalOpen && (
        <EventDetailModal event={event} onClose={() => setModal(false)} />
      )}
    </>
  );
});

/* ════════════════════════════════════════════════════════════
   COMPONENT: EventList (grid section)
════════════════════════════════════════════════════════════ */
function EventList({ title, events }) {
  const gridRef = React.useRef(null);
  useScrollReveal(gridRef);

  return (
    <section>
      <div className="evp-section-head">
        <h2>{title}</h2>
        <span className="evp-count-badge">{events.length} events</span>
      </div>

      {events.length === 0 ? (
        <p className="evp-empty">No events found.</p>
      ) : (
        <div className="evp-grid" ref={gridRef}>
          {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      )}
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT: FilterBar
════════════════════════════════════════════════════════════ */
function FilterBar({ query, onQuery, filter, onFilter }) {
  const PILLS = [
    { label: 'All Events', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Past', value: 'past' },
  ];

  return (
    <div className="evp-toolbar">
      <div className="evp-search-wrap">
        <span className="evp-search-icon">⌕</span>
        <input
          type="text"
          value={query}
          onChange={e => onQuery(e.target.value)}
          placeholder="Search events…"
          aria-label="Search events"
        />
      </div>
      <div className="evp-filter-pills">
        {PILLS.map(p => (
          <button
            key={p.value}
            className={`evp-pill${filter === p.value ? ' active' : ''}`}
            onClick={() => onFilter(p.value)}
            aria-pressed={filter === p.value}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT: HeroSection (canvas + heading)
════════════════════════════════════════════════════════════ */
function HeroSection() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#24a0ba', '#31b2cc', '#79d8eb', '#157e91'];
    let points = [];
    let mouse = { x: 0, y: 0 };
    let raf;

    class Point {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9;
        this.r = Math.random() * 220 + 100;
        this.c = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -this.r) this.x = canvas.width + this.r;
        if (this.x > canvas.width + this.r) this.x = -this.r;
        if (this.y < -this.r) this.y = canvas.height + this.r;
        if (this.y > canvas.height + this.r) this.y = -this.r;
        const dx = mouse.x - this.x, dy = mouse.y - this.y;
        if (Math.hypot(dx, dy) < 500) { this.x += dx * 0.005; this.y += dy * 0.005; }
      }
      draw() {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        g.addColorStop(0, this.c + 'aa');
        g.addColorStop(1, this.c + '00');
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      points = Array.from({ length: 15 }, () => new Point());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#1a8ca3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      points.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(animate);
    }

    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <header className="evp-hero" aria-label="Events hero section">
      <canvas id="evp-canvas" ref={canvasRef} />
      <div className="evp-hero-content">
        <h1>Our Events</h1>
        <p>From innovation hackathons to self-development camps — every event shapes the future.</p>
      </div>
    </header>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT APP COMPONENT
════════════════════════════════════════════════════════════ */
function EventsApp() {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('all');
  const [deepLinkEvent, setDeepLink] = React.useState(null);

  const { active, upcoming, past } = React.useMemo(() => sortEvents(EVENTS), []);

  // Deep-link: /events.html#event-id → auto-open that event's modal
  React.useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) { setDeepLink(null); return; }
      const found = EVENTS.find(e => e.id === hash);
      if (found) setTimeout(() => setDeepLink(found), 300);
    }
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const search = (arr) => {
    const t = query.toLowerCase().trim();
    if (!t) return arr;
    return arr.filter(e =>
      e.title.toLowerCase().includes(t) ||
      e.description.toLowerCase().includes(t) ||
      (e.tags || []).some(g => g.toLowerCase().includes(t))
    );
  };

  const shownUpcoming = filter !== 'past' ? search(upcoming) : [];
  const shownPast = filter !== 'upcoming' ? search(past) : [];

  return (
    <>
      <HeroSection />
      <div className="evp-page">
        {/* Active / Hero event */}
        {active && filter === 'all' && (
          <section style={{ marginBottom: '4rem' }}>
            <div className="evp-section-head" style={{ marginTop: 0 }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  fontSize: '0.65rem', background: '#dc2626', color: 'white',
                  padding: '0.3rem 0.7rem', borderRadius: '99px',
                  fontWeight: 800, letterSpacing: '0.1em',
                }}>LIVE</span>
                Active Event
              </h2>
            </div>
            <HeroEvent event={active} />
          </section>
        )}

        {/* Filter bar */}
        <FilterBar query={query} onQuery={setQuery} filter={filter} onFilter={setFilter} />

        {/* Upcoming */}
        {filter !== 'past' && (
          <EventList title="Upcoming Events" events={shownUpcoming} />
        )}

        {/* Past */}
        {filter !== 'upcoming' && (
          <EventList title="Past Events" events={shownPast} />
        )}
      </div>

      {/* Deep-link modal — opened automatically when URL has #event-id */}
      {deepLinkEvent && (
        <EventDetailModal
          event={deepLinkEvent}
          onClose={() => {
            setDeepLink(null);
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }}
        />
      )}
    </>
  );
}

/* ─── Mount React ────────────────────────────────────────── */
const root = ReactDOM.createRoot(document.getElementById('events-root'));
root.render(React.createElement(EventsApp));
