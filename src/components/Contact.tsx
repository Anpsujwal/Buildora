import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Mail, Send, Copy, Check, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: initialService || siteConfig.contactForm.serviceOptions[0],
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
    instructions?: string;
  } | null>(null);

  // Update service if changed externally
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.brand.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service category.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief summary of your project idea or requirements.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please write at least 10 characters so we can understand your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatusMessage(null);

    try {
      const recipient = siteConfig.brand.contactEmail;
      const subject = `New Buildora Project Inquiry — ${formData.service}`;
      const body = `Hi Buildora Team,

I would like to discuss a project inquiry:

• Full Name: ${formData.fullName}
• Contact Email: ${formData.email}
• Requested Service: ${formData.service}

Project Requirements & Details:
${formData.projectDetails}

Looking forward to hearing from you!
`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open user's default email client
      window.location.href = mailtoUrl;

      // Provide clear feedback on how the dispatch works
      setStatusMessage({
        type: 'success',
        text: 'Inquiry prepared in your email client!',
        instructions:
          'Your default email application has opened with your inquiry pre-filled. Please review and click "Send" to deliver your message to ananthujwal24@gmail.com.',
      });
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Unable to launch email client automatically. Please send directly to ' + siteConfig.brand.contactEmail,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04] overflow-hidden">
      {/* Prominent subtle violet-blue gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[250px] sm:h-[450px] bg-gradient-to-r from-[#8B5CF6]/15 via-[#3B82F6]/10 to-transparent blur-[100px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121B] border border-[#8B5CF6]/30 mb-3.5 sm:mb-4 shadow-lg shadow-[#8B5CF6]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#A78BFA]">
              LET'S COLLABORATE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-4">
            Have an Idea?{' '}
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">
              Let's Build It.
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            Tell us what you're working on. Whether you need a web application, an AI/ML project, a technical prototype, a presentation, or complete documentation, let's discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Value Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#12121B] border border-white/[0.08] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 blur-[50px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <Mail className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#A1A1B5]">
                    Direct Project Mailbox
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#34D399] flex items-center gap-1">
                    ● Active Inquiries
                  </span>
                </div>
              </div>

              {/* Email address row with responsive wrap/stack protection */}
              <div className="my-4 sm:my-5 p-3 sm:p-3.5 rounded-xl bg-[#0B0B12] border border-white/[0.06] flex items-center justify-between gap-2">
                <a
                  href={`mailto:${siteConfig.brand.contactEmail}`}
                  className="text-xs sm:text-sm md:text-base font-mono font-medium text-white hover:text-[#A78BFA] transition-colors truncate"
                  title="Click to email directly"
                >
                  {siteConfig.brand.contactEmail}
                </a>

                <button
                  onClick={copyEmail}
                  className="shrink-0 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] active:bg-white/[0.15] text-[#A1A1B5] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#34D399]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-[#A1A1B5] leading-relaxed">
                Prefer email? Contact us at{' '}
                <a
                  href={`mailto:${siteConfig.brand.contactEmail}`}
                  className="text-[#A78BFA] hover:underline font-mono"
                >
                  {siteConfig.brand.contactEmail}
                </a>{' '}
                with your project brief, syllabus, or deadline.
              </p>
            </div>

            {/* Student Deliverables Assurance */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#12121B] border border-white/[0.06] space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>What to expect when you contact us:</span>
              </h4>
              <ul className="text-xs text-[#A1A1B5] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                  <span>Discussion of your exact requirements and deadline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                  <span>Technology recommendation tailored to your curriculum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mt-1.5 shrink-0" />
                  <span>Complete deliverable planning (Code, Report, PPT & Demo).</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-5 sm:p-8 rounded-2xl bg-[#12121B] border border-white/[0.08] shadow-2xl relative"
            >
              <div className="space-y-4 sm:space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
                    Full Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#09090F] border text-base sm:text-sm text-white placeholder-[#525266] focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                        : 'border-white/[0.08] focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
                    Your Email Address <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@university.edu"
                    className={`w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#09090F] border text-base sm:text-sm text-white placeholder-[#525266] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                        : 'border-white/[0.08] focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
                    Service Required <span className="text-[#EF4444]">*</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#09090F] border border-white/[0.08] text-base sm:text-sm text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
                  >
                    {siteConfig.contactForm.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#12121B] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label htmlFor="projectDetails" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
                    Project Details & Scope <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                    }}
                    placeholder="Tell us what you're building, specific tech preferences, college submission requirements, or upcoming viva deadlines..."
                    className={`w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#09090F] border text-base sm:text-sm text-white placeholder-[#525266] focus:outline-none transition-colors ${
                      errors.projectDetails
                        ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                        : 'border-white/[0.08] focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`p-3.5 sm:p-4 rounded-xl text-xs leading-relaxed ${
                      statusMessage.type === 'success'
                        ? 'bg-[#34D399]/10 border border-[#34D399]/30 text-[#D1FAE5]'
                        : 'bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#FEE2E2]'
                    }`}
                  >
                    <div className="font-semibold mb-1 flex items-center gap-1.5">
                      {statusMessage.type === 'success' ? (
                        <Check className="w-4 h-4 text-[#34D399]" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                      )}
                      <span>{statusMessage.text}</span>
                    </div>
                    {statusMessage.instructions && (
                      <p className="text-[#A1A1B5] mt-1">{statusMessage.instructions}</p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] shadow-lg shadow-[#8B5CF6]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] disabled:opacity-50 min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                <p className="text-center text-[10px] sm:text-[11px] text-[#A1A1B5]">
                  Form submission prepares your inquiry for dispatch to{' '}
                  <strong className="text-white">{siteConfig.brand.contactEmail}</strong>.
                </p>

              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
