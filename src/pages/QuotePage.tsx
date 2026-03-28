import React, { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Clock, Sparkles, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteSchema } from "../schemas/quote.ts";
import { toast } from "sonner";

const FORMSPARK_ACTION_URL = "https://submit-form.com/wMAh4kZT4";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteSchema>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteSchema) => {
    console.log(data);
    setIsLoading(true);
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });
      toast.success("Quote request sent successfully");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20 md:pb-28 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
            <Sparkles size={14} /> {t("contact.hero.label")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
            {t("contact.hero.title_1")}
            <br />
            <span className="font-serif italic gold-text">
              {t("contact.hero.title_2")}
            </span>
          </h1>
          <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-lg">
            {t("contact.hero.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="lg:col-span-8 bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden warm-shadow">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gold/3 rounded-full blur-[80px]"></div>
            <h3 className="font-bold text-warm-text text-[11px] mb-5 md:mb-6 font-label uppercase tracking-wider">
              {t("contact.form.title")}
            </h3>
            <div className="relative z-10">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">
                    {t("contact.form.name")}
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm"
                    placeholder={t("contact.form.name_placeholder")}
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">
                    {t("contact.form.email")}
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm"
                    placeholder={t("contact.form.email_placeholder")}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm"
                    placeholder={t("contact.form.phone_placeholder")}
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">
                    {t("contact.form.subject")}
                  </label>
                  <select
                    {...register("subject")}
                    className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-muted appearance-none focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm"
                  >
                    <option>{t("contact.form.subjects.terrace")}</option>
                    <option>{t("contact.form.subjects.renovation")}</option>
                    <option>{t("contact.form.subjects.other")}</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm"
                    placeholder={t("contact.form.message_placeholder")}
                    rows={4}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 pt-2">
                  <button
                    className="gold-gradient text-white w-full px-8 py-4 md:py-5 rounded-2xl font-bold text-base gold-glow hover:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        {t("contact.form.send_btn")} <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl warm-shadow">
              <h3 className="text-base md:text-lg font-bold text-warm-text mb-5 md:mb-6">
                {t("contact.sidebar.direct")}
              </h3>
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">
                      {t("contact.sidebar.phone")}
                    </p>
                    <a
                      href="tel:+34639448448"
                      className="text-warm-text font-semibold text-sm hover:text-gold transition-colors"
                    >
                      +34 639 448 448
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">
                      {t("contact.sidebar.email")}
                    </p>
                    <a
                      href="mailto:info@terracepool.com"
                      className="text-warm-text font-semibold text-sm hover:text-gold transition-colors"
                    >
                      info@terracepool.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">
                      {t("contact.sidebar.hours")}
                    </p>
                    <p className="text-warm-text font-semibold text-sm">
                      {t("contact.sidebar.hours_val")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl warm-shadow">
              <p className="text-warm-text font-bold text-xs md:text-sm text-center">
                {t("contact.sidebar.serving")}
              </p>
            </div>
          </aside>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl warm-shadow mt-4 md:mt-10">
          <h3 className="text-base md:text-lg font-bold text-warm-text mb-4">
            {t("contact.sidebar.offices")}
          </h3>
          <div className="space-y-4 md:space-y-5">
            {[
              "Showroom in Spain Costa de Sol/ Marbella and Pamela de mallorca",
              "Av. Puerta del Mar, 59, 29680 Estepona, Málaga",
              "Adress Costa De sol / Marbella & Estepona Av. Puerta del Mar, 59, 29680 Estepona, Málaga",
              "Av. Puerta del Mar, 59, 29680 Estepona, Málaga",
              "Adress Costa De sol / Marbella & Estepona Av. Puerta del Mar, 59, 29680 Estepona, Málaga",
              "Adress Palma de Mallorca Carrer d'Anselm Turmeda, 9, Nord, 07010 Palma, Illes Balears",
            ].map((line, i) => (
              <div
                key={`office-${i}`}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={18} />
                </div>
                <p className="text-warm-text font-semibold text-sm">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
