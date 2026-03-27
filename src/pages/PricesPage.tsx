import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { poolModels, pricingCategories, type PricingOption } from '../data/pricing';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricesPage: React.FC = () => {
  const { t } = useTranslation();
  
  // States
  const [selectedModelId, setSelectedModelId] = useState<string>('ibiza');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  // Calculations
  const selectedModel = poolModels.find(m => m.id === selectedModelId);
  
  const selectedAddons = useMemo(() => {
    const addons: PricingOption[] = [];
    pricingCategories.forEach(category => {
      const selectedIds = selectedOptions[category.categoryId] || [];
      selectedIds.forEach(optId => {
        const opt = category.options.find(o => o.id === optId);
        if (opt) addons.push(opt);
      });
    });
    return addons;
  }, [selectedOptions]);

  const totalPrice = useMemo(() => {
    let total = selectedModel?.price || 0;
    selectedAddons.forEach(opt => total += opt.price);
    return total;
  }, [selectedModel?.price, selectedAddons]);

  const handleOptionToggle = (categoryId: string, optionId: string, type: 'single' | 'multiple') => {
    setSelectedOptions(prev => {
      const catOptions = prev[categoryId] || [];
      if (type === 'single') {
        return {
          ...prev,
          [categoryId]: catOptions.includes(optionId) ? [] : [optionId]
        };
      } else {
        return {
          ...prev,
          [categoryId]: catOptions.includes(optionId)
            ? catOptions.filter(id => id !== optionId)
            : [...catOptions, optionId]
        };
      }
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden relative min-h-screen">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20">
        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto px-6 md:px-8 mb-10 md:mb-16 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
            <Sparkles size={14} /> {t("pricing.options_title")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
            {t("pricing.title")}
          </h1>
          <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-2xl lg:mx-0 mx-auto">
            {t("pricing.desc")}
          </p>
        </section>

        <section className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Form (7 cols to give right sidebar more room) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Base Models */}
              <div data-aos="fade-up">
                <h2 className="text-2xl font-bold text-warm-text mb-6 pb-4 border-b border-warm-border/50">
                  {t("pricing.select_model")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {poolModels.map((model) => {
                    const isSelected = selectedModelId === model.id;
                    return (
                      <div
                        key={model.id}
                        onClick={() => setSelectedModelId(model.id)}
                        className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 flex flex-col justify-between group
                          ${isSelected ? "border-gold bg-gold/5 warm-shadow" : "border-warm-border/30 bg-white hover:border-gold/30 hover:bg-cream"}
                        `}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                            ${isSelected ? "border-gold bg-gold" : "border-warm-border/50 group-hover:border-gold/50"}
                          `}
                          >
                            {isSelected && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                          <span className="font-black text-warm-text text-lg">
                            {formatPrice(model.price)}
                          </span>
                        </div>
                        <span
                          className={`font-bold leading-tight ${isSelected ? "text-warm-text" : "text-warm-text-light"}`}
                        >
                          {t(model.nameKey).split("(")[0].trim()}
                        </span>
                        <span className="text-xs text-warm-muted font-medium mt-1">
                          {t(model.nameKey).includes("(")
                            ? t(model.nameKey).split("(")[1].replace(")", "")
                            : "Dimensions TBD"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Categories & Options */}
              {pricingCategories.map((category) => (
                <div key={category.categoryId} data-aos="fade-up">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-border/50">
                    <h2 className="text-2xl font-bold text-warm-text">
                      {t(category.nameKey)}
                    </h2>
                    {category.type === "multiple" && (
                      <span className="text-[10px] md:text-xs text-warm-muted font-label uppercase tracking-widest bg-warm-border/10 px-3 py-1 rounded-full">
                        Multiple select
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    {category.options.map((opt) => {
                      const isSelected = (
                        selectedOptions[category.categoryId] || []
                      ).includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          onClick={() =>
                            handleOptionToggle(
                              category.categoryId,
                              opt.id,
                              category.type,
                            )
                          }
                          className={`cursor-pointer rounded-xl md:rounded-2xl p-4 border transition-all duration-300 flex items-center justify-between
                            ${isSelected ? "border-gold bg-gold/5" : "border-warm-border/30 bg-white hover:border-gold/30"}
                          `}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-5 h-5 flex items-center justify-center shrink-0
                              ${category.type === "single" ? "rounded-full" : "rounded-md"}
                              ${isSelected ? "bg-gold border-gold" : "border-2 border-warm-border/50"}
                            `}
                            >
                              {isSelected && (
                                <Check size={14} className="text-white" />
                              )}
                            </div>
                            <span
                              className={`text-sm md:text-base ${isSelected ? "font-bold text-warm-text" : "font-medium text-warm-text-light"}`}
                            >
                              {t(opt.nameKey)}
                            </span>
                          </div>
                          <span className="font-bold text-warm-text whitespace-nowrap">
                            +{formatPrice(opt.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Preview & Summary sticky card (5 cols for BIG image cards) */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* BIG Preview Image Cards */}
                {selectedModel && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    <div className="rounded-3xl overflow-hidden warm-shadow-lg border-2 border-warm-border/40 relative aspect-video bg-cream-dark group w-full">
                      <img
                        key={`${selectedModel.image}-photo`}
                        src={selectedModel.image}
                        alt="Pool Photo"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                      <div className="absolute bottom-5 left-6 right-6 text-white flex justify-between items-end">
                        <div>
                          <span className="text-3xl font-black tracking-wide drop-shadow-lg block mb-1">
                            {t(selectedModel.nameKey).split("(")[0].trim()}
                          </span>
                          <span className="text-sm font-bold uppercase tracking-widest text-gold drop-shadow-md">
                            {t(selectedModel.nameKey).includes("(")
                              ? t(selectedModel.nameKey)
                                  .split("(")[1]
                                  .replace(")", "")
                              : "Dimensions TBD"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Drawing Image */}
                    {selectedModel.drawingImage && (
                      <div className="rounded-3xl overflow-hidden warm-shadow border-2 border-warm-border/20 relative aspect-video bg-white">
                        <img
                          key={`${selectedModel.drawingImage}-drawing`}
                          src={selectedModel.drawingImage}
                          alt="3D Model Drawing"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Pricing Summary Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 warm-shadow-lg border border-warm-border/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[40px]"></div>
                  <h3 className="text-lg font-bold text-warm-text mb-6 border-b border-warm-border/50 pb-4 relative z-10">
                    {t("pricing.your_configuration", "Your Setup")}
                  </h3>

                  <div className="space-y-4 mb-8 relative z-10">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-warm-text-light text-sm font-medium">
                        {selectedModel
                          ? t(selectedModel.nameKey).split("(")[0].trim()
                          : ""}{" "}
                        Base
                      </span>
                      <span className="text-warm-text font-bold text-sm w-max whitespace-nowrap">
                        {selectedModel
                          ? formatPrice(selectedModel.price)
                          : "€0"}
                      </span>
                    </div>
                    {selectedAddons.length > 0 &&
                      selectedAddons.map((opt, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-start gap-4"
                        >
                          <span className="text-warm-muted text-sm leading-snug">
                            {t(opt.nameKey)}
                          </span>
                          <span className="text-warm-text font-medium text-sm w-max whitespace-nowrap">
                            +{formatPrice(opt.price)}
                          </span>
                        </div>
                      ))}
                  </div>

                  <div className="border-t border-warm-border/50 pt-6 mb-8 relative z-10">
                    <div className="flex justify-between items-end">
                      <span className="text-gold text-xs font-label uppercase tracking-widest">
                        {t("pricing.total_price")}
                      </span>
                      <div className="text-right">
                        <span className="text-4xl font-black text-warm-text block leading-none mb-1">
                          {formatPrice(totalPrice)}
                        </span>
                        <span className="text-xs font-bold text-warm-muted">
                          {t("pricing.excl_vat")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="gold-gradient text-white w-full py-4 rounded-xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
                  >
                    {t("pricing.contact_cta")} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto px-6 md:px-8 mt-20 border-t border-warm-border/50 pt-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-warm-text mb-2 text-center lg:text-left">
            {t("pricing.pdf_section_title")}
          </h2>
          <p className="text-sm text-warm-muted mb-6 max-w-2xl text-center lg:text-left lg:mx-0 mx-auto">
            {t("pricing.pdf_section_subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <a
              href="/pdf/knauf-pools.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border-2 border-warm-border/30 bg-white p-5 md:p-6 warm-shadow hover:border-gold/40 hover:bg-cream/50 transition-all duration-300"
            >
              <div className="flex items-start flex-col md:flex-row gap-4 mb-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/15 transition-colors">
                  <FileText size={24} strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-warm-text text-base md:text-lg leading-snug mb-2">
                    {t("pricing.pdf_knauf_title")}
                  </h3>
                  <p className="text-sm text-warm-text-light leading-relaxed">
                    {t("pricing.pdf_knauf_desc")}
                  </p>
                </div>
              </div>
              <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:gap-3 transition-all">
                {t("pricing.pdf_open")} <ExternalLink size={16} />
              </span>
            </a>
            <a
              href="/pdf/terracepool_full_models_options_catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border-2 border-warm-border/30 bg-white p-5 md:p-6 warm-shadow hover:border-gold/40 hover:bg-cream/50 transition-all duration-300"
            >
              <div className="flex items-start flex-col md:flex-row gap-4 mb-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/15 transition-colors">
                  <FileText size={24} strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-warm-text text-base md:text-lg leading-snug mb-2">
                    {t("pricing.pdf_catalog_title")}
                  </h3>
                  <p className="text-sm text-warm-text-light leading-relaxed">
                    {t("pricing.pdf_catalog_desc")}
                  </p>
                </div>
              </div>
              <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:gap-3 transition-all">
                {t("pricing.pdf_open")} <ExternalLink size={16} />
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricesPage;
