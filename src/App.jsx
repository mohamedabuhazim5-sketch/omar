import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "omar";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "عمر",
      heroSub: "حبيب عمري ونصي التاني 💍✨",
      heroText:
        "وجودك فرق وخلى حياتي ليها معنى واجمل وخلاني احب كل حاجه بعملها ❣️ وفالاخر انتا اجمل هديه ربنا بعتها ..حبيب عمري ونصي التاني💍✨",
      meetTitle: "أول يوم شفتك 🫂",
      meetDate: "2026-01-22",
      timerTitle: "من أول يوم شفتك ❤️",
      timerText:
        "هوا مش محتاجه يوم معين عشان اقولك قد ايه بحبك بس بحاول اعرفك ان انا اكتر حد بيحبك فدنيا دي ومحدش هيحبك زيي ولا حد هيحب حد زي ما بحبك ...🏡🎀",
      longMessage:
        "انتا مش مجرد حد بحبو انتا حد انا عاوزا اكمل معاه الباقي من حياتي وعوزاك تكون انتا اب لولادي ... انتا بجد كل حاجه ليا انتا أهلي كلهم وابويا وصاحب وسند ليا وبحس معاك بالامآن وبتكملني وبتديني الي ناقصني ..انتا اجمل حاجه دخلت حياتي ♥️",
      cuteText:
        "الموقع ده معمول ليك إنتا وبس 💖",
      footerText: "بحبك يا عمر ❤️🌷",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أول يوم شفتك",
        image: "/1.jpg",
        date: "2026-01-22",
        text: "اول يوم شفتك فيه وكانو أحلا ساعتين فحياتي وعمري مهنسا عيونك اليوم ده 22/1/2026🫂",
      },
      {
        id: 2,
        title: "تفاصيلي الحلوة",
        image: "/2.jpg",
        date: "ذكرى مميزة",
        text: "بحبك وأنتا بتشجعني على تفاهاتي بذات وبتاخدني على قد علقي ❤️",
      },
      {
        id: 3,
        title: "حته مني",
        image: "/3.jpg",
        date: "أجمل كلام",
        text: "عاوزا اقولك ان انتا حته مني وضلي وتؤام روحي واكتر حد شبهي 🌼🫵🏻",
      },
      {
        id: 4,
        title: "متبعدش عني",
        image: "/4.jpg",
        date: "من قلبي",
        text: "مش عوزاك تبعد عني ابدا ...بجد يعمر انتا اكتر حد برتاح معاه ونفسي يفضل معايا على طول فدنيا دي 🌏🌸",
      },
      {
        id: 5,
        title: "صوتك",
        image: "/5.jpg",
        date: "أكتر حاجة بحبها",
        text: "تعرف ان صوتك حلو اوي بجد وانا بحبو ويمكن دي اكتر حاجه انا برتاح عليها والكول الي بنتكلمو ده بيهون عليا حجات كتير وبينسيني زعلي وبيخليني اكمل اليوم او بختم بيه يومي وببقا نايمه مبسوطه... انتا اكتر حد بيسمعني وبيستحمل هبلي ونا ببقا فقمه سعاتي وانا سمعاك بتحكي وبتتكلم حتا لو حكيت الموضوع اكتر من مرا ببقا بسمعو منك كل مرا بنفس الحماس والاهتمام بتاع اول مرا ..ربنا ميحرمني من صوتك ولا كلامك ويجعلني خفيفه ع قلبك 🫀🌷",
      },
      {
        id: 6,
        title: "أكتر حد بيحبك",
        image: "/6.jpg",
        date: "حب كبير",
        text: "هوا مش محتاجه يوم معين عشان اقولك قد ايه بحبك بس بحاول اعرفك ان انا اكتر حد بيحبك فدنيا دي ومحدش هيحبك زيي ولا حد هيحب حد زي ما بحبك ...🏡🎀",
      },
      {
        id: 7,
        title: "وعد",
        image: "/7.jpg",
        date: "وعد مني",
        text: "وعد اني هفضل معاك لحد اخر يوم فحياتي وهفضل احبك وعمري ما هزهق منك وهحاول عشانك زي ما بتحاول عشاني وهقدرك وهسمع كلامك وهتفضل كبير فنظري ومش هشوف حد غيرك ...👑👫",
      },
      {
        id: 8,
        title: "فخورة بيك",
        image: "/8.jpg",
        date: "دعم وحب",
        text: "عيدا عن ان الصورة بضحك بس بجد انا بضحك من قلبي .... وعوزا اقولك اني واثقه فيك اوي وفوق ما تتخيل ...وانا عارفه انك هتجيب المجموع الي نفسك فيه وهتفرح أهلك الاول وبعدها هتفرحني ونحقق حلمنا سوا وهبقا معاك ..وقبل اي حاجه انا هبقا فخوره بأبسط حاجه هتعملها وهبقا اول واحده بتشجعك ومش هسيبك يعمورتي 👩‍❤️‍💋‍👨💘",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول مرة شفتك",
        date: "2026-01-22",
        text: "اليوم اللي كان من أحلى ساعتين في حياتي وعمري ما هنسى عيونك فيه 🫂",
      },
      {
        title: "صوتك",
        date: "كل يوم",
        text: "صوتك بيهون عليا حاجات كتير وبينسيني زعلي وبيخليني أكمل يومي 🫀🌷",
      },
      {
        title: "وجودك فرق",
        date: "من وقتها",
        text: "وجودك فرق وخلى حياتي ليها معنى وأجمل وخلاني أحب كل حاجة بعملها ❣️",
      },
      {
        title: "وعد العمر",
        date: "دايمًا",
        text: "هفضل معاك لحد آخر يوم في حياتي ومش هشوف حد غيرك 👑👫",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "أجمل ضحكة", value: "ضحكتك" },
      { title: "مستوى الحب", value: "∞" },
      { title: "الفرحة", value: "وجودك" },
      { title: "الأمان", value: "معاك" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["ضحكتك", "حنيتك", "عيونك", "رجولتك", "غيرتك", "صوتك", "وجودك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2026-01-22T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا قلبي");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أجمل مفاجأة ليك 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="عمر" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💖 خاص بيك</div>

          <h1>اكتب كلمه السر يا حلو</h1>

          <p className="password-subtext">
            الموقع ده معمول مخصوص عشانك، ومش هيفتح غير لما تكتب كلمة السر ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتب كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للموقع ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ نسخة كبيرة جدًا</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزل تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="عمر" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم حب</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة قرب</span>
          </div>
          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>ذكريات</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="عمر" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحب</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 الرسالة دي ليك</span>
          <h2>الكلام ده من قلبي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها فيك</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بكون معاك</h3>
            <ul>
              <li>مرتاحة</li>
              <li>مبسوطة</li>
              <li>مطمّنة</li>
              <li>بحب الدنيا</li>
              <li>بضحك من قلبي</li>
              <li>حاسه بالأمان</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>ترتيب بسيط ولطيف للحظات المهمة</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>الكروت المتحركة</h3>
              <p>كل صورة تحتها الكلام بتاعها بشكل سلايدر متحرك</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “اول يوم شفتك فيه وكانو أحلا ساعتين فحياتي وعمري مهنسا عيونك اليوم ده 🫂”
          </div>
          <div className="quote-box">
            “عاوزا اقولك ان انتا حته مني وضلي وتؤام روحي واكتر حد شبهي 🌼🫵🏻”
          </div>
          <div className="quote-box">
            “وعد اني هفضل معاك لحد اخر يوم فحياتي وهفضل احبك وعمري ما هزهق منك 👑👫”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري أكبر</h3>
            <p>صور أكتر بشكل أنضف وأوسع</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>وجودك فرق</h3>
            <p>خلّى كل حاجة في حياتي أخف وأجمل وأهدى ❣️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أماني معاك</h3>
            <p>بحس معاك بالأمان وإنك السند الحقيقي ليا ♥️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أجمل هدية</h3>
            <p>إنتا أجمل هدية ربنا بعتها ليا وحبيب عمري ونصي التاني 💍✨</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>انتا أجمل حاجة حصلتلي، وأجمل شخص دخل حياتي ♥️</p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}