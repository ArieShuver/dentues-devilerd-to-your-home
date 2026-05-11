import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "מרכז המומחים לשיקום הפה | שיניים תותבות מקצועיות",
  description: "החזירו לעצמכם את החיוך והביטחון העצמי. פתרונות מתקדמים לשיניים תותבות בטכנולוגיה חדישה, יחס אישי ותוצאות טבעיות.",
  openGraph: {
    title: "מרכז המומחים לשינויים תותבות - דף הבית",
    description: "פתרון מקצועי ואסתטי לחיוך מושלם",
  },
};

export default function Home() {
  const whatsappLink = 'https://wa.me/+972501234567?text=שלום%20אני%20מעוניין%20ליצור%20קשר%20בנוגע%20לשיניים%20תותבות';

  return (
    <>
      {/* Hero Section - שימוש ב-Premium Navy */}
      <section className="bg-premium-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-right relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              לחזור לחייך בביטחון <br />
              <span className="text-blue-300">עם מראה טבעי ונוחות מקסימלית</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              אנחנו משלבים אומנות וטכנולוגיה כדי להעניק לך שיניים תותבות שמרגישות ונראות בדיוק כמו הדבר האמיתי.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start font-bold">
              <CTAButton
                href={whatsappLink}
                text="📱 תיאום פגישת ייעוץ בוואטסאפ"
                variant="primary"
                className="bg-premium-green-cta hover:bg-green-700 shadow-premium px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              />
              <CTAButton
                href="/services"
                text="לכל סוגי הטיפולים"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-premium-navy px-8 py-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - יתרונות מרכזיים */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-premium-navy mb-16">
            למה לבחור במרכז המומחים שלנו?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "מומחיות וניסיון",
                description: "צוות מקצועי עם ניסיון רב שנים המתמחה בשיקום פונקציונלי ואסתטי.",
                icon: "🏆",
              },
              {
                title: "חומרים פרימיום",
                description: "שימוש בחומרים העמידים והאיכותיים ביותר למניעת שחיקה ומראה חי.",
                icon: "✨",
              },
              {
                title: "סריקה דיגיטלית",
                description: "התאמה מדויקת למבנה הלסת ללא תחושת אי-נוחות או תזוזה.",
                icon: "🔬",
              },
              {
                title: "שירות מהלב",
                description: "ליווי אישי מרגע הייעוץ ועד להסתגלות המלאה והחיוך החדש.",
                icon: "🤝",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-subtle-gray-bg p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-premium-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - שלבי עבודה */}
      <section className="py-20 bg-subtle-gray-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-premium-navy mb-16">
            הדרך שלך לחיוך חדש
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "ייעוץ ואבחון",
                description: "פגישת הכרות לבדיקת מצב הפה והתאמת הפתרון האידיאלי עבורך.",
              },
              {
                step: "02",
                title: "תכנון ודיוק",
                description: "לקיחת מידות ושימוש בטכנולוגיה דיגיטלית לעיצוב חיוך מושלם.",
              },
              {
                step: "03",
                title: "התקנה וליווי",
                description: "מסירת התותבות, בדיקת נוחות סופית והדרכה מלאה לתחזוקה.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-black text-slate-200 absolute -top-8 -right-4 group-hover:text-blue-100 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold text-premium-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - עדות לקוחות */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-premium-navy mb-16">
            מטופלים מספרים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "דן כהן",
                review: "לא האמנתי שאוכל לחזור לאכול וליהנות מחיוך כזה. השירות והדיוק היו מעל המצופה.",
                rating: 5,
              },
              {
                name: "רונית לוי",
                review: "התייחסו אלי בסבלנות רבה. התותבות נראות טבעיות לחלוטין ומרגישות נוח מאוד.",
                rating: 5,
              },
              {
                name: "מוטי בר",
                review: "מקצועיות ללא פשרות. מהייעוץ ועד התוצאה הסופית הרגשתי בידיים טובות.",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md"
              >
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {Array(review.rating).fill("⭐").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">"{review.review}"</p>
                <p className="font-bold text-premium-navy border-r-4 border-premium-green-cta pr-3">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - קריאה אחרונה לפעולה */}
      <section className="bg-premium-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            מוכנים להתחיל לחייך מחדש?
          </h2>
          <p className="text-xl mb-10 text-slate-300">
            הצטרפו למאות המטופלים שכבר שינו את איכות חייהם. תיאום הייעוץ הוא הצעד הראשון.
          </p>
          <div className="inline-block">
            <CTAButton
              href={whatsappLink}
              text="📱 צור קשר בווטסאפ עכשיו"
              variant="primary"
              className="bg-premium-green-cta hover:bg-green-700 text-white font-bold py-5 px-12 rounded-full text-xl shadow-premium transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </section>
    </>
  );
}