import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const emailAddress = 'shatil4135@gmail.com';

const copyTextToClipboard = async (text: string) => {
  try {
    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text);
    } else if (typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } else {
      throw new Error('Clipboard not available');
    }
    return true;
  } catch (error) {
    console.error('Failed to copy text', error);
    return false;
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [contactCopyStatus, setContactCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'email-opened' | 'copied' | 'manual'
  >('idle');
  const [preparedMessage, setPreparedMessage] = useState('');
  const [submissionCopyStatus, setSubmissionCopyStatus] = useState<
    'idle' | 'copied' | 'failed'
  >('idle');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const subject = `Contact from ${formData.name}`;
      const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(messageBody)}`;
      const fallbackMessage = `To: ${emailAddress}\nSubject: ${subject}\n\n${messageBody}`;

      setPreparedMessage(fallbackMessage);
      setSubmissionCopyStatus('idle');

      let launchedEmailClient = false;

      try {
        const openedWindow = window.open(mailtoLink, '_blank', 'noopener,noreferrer');

        if (openedWindow) {
          launchedEmailClient = true;
        } else {
          window.location.href = mailtoLink;
          launchedEmailClient = true;
        }
      } catch (error) {
        console.warn('Unable to open email client automatically', error);
      }

      if (launchedEmailClient) {
        setSubmissionStatus('email-opened');
      } else {
        const copied = await copyTextToClipboard(fallbackMessage);

        if (copied) {
          setSubmissionStatus('copied');
          setSubmissionCopyStatus('copied');
        } else {
          setSubmissionStatus('manual');
          setSubmissionCopyStatus('failed');
        }
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleCopyEmail = async () => {
    const copied = await copyTextToClipboard(emailAddress);
    setContactCopyStatus(copied ? 'copied' : 'failed');

    if (copied) {
      setTimeout(() => setContactCopyStatus('idle'), 2500);
    }
  };

  const handleCopyPreparedMessage = async () => {
    if (!preparedMessage) return;

    const copied = await copyTextToClipboard(preparedMessage);
    setSubmissionCopyStatus(copied ? 'copied' : 'failed');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmissionStatus('idle');
    setPreparedMessage('');
    setSubmissionCopyStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 p-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
                  <p className="text-slate-900 dark:text-white font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {emailAddress}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      Copy email
                    </button>
                    <span className="text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
                      {contactCopyStatus === 'copied' && 'Email copied to clipboard.'}
                      {contactCopyStatus === 'failed' && 'Copy failed. Long-press to copy manually.'}
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Moshiuzzaman4135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">GitHub</p>
                  <p className="text-slate-900 dark:text-white font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    @Moshiuzzaman4135
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/moshiuzzaman-shatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">LinkedIn</p>
                  <p className="text-slate-900 dark:text-white font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    moshiuzzaman-shatil
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 dark:bg-slate-900/80 backdrop-blur rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/60 dark:shadow-none"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Message Ready!
                </h3>
                {submissionStatus === 'email-opened' && (
                  <p className="text-slate-600 dark:text-slate-400">
                    Your default email app should now be open with the message ready to send. If nothing appeared, use the details
                    below to send the email manually.
                  </p>
                )}
                {submissionStatus === 'copied' && (
                  <p className="text-slate-600 dark:text-slate-400">
                    The email details have been copied to your clipboard. Paste them into a new message addressed to{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">{emailAddress}</span> and hit send.
                  </p>
                )}
                {submissionStatus === 'manual' && (
                  <p className="text-slate-600 dark:text-slate-400">
                    I couldn’t launch your email app automatically. Please copy the details below and send them to{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">{emailAddress}</span>.
                  </p>
                )}

                {preparedMessage && (
                  <div className="mt-6 text-left bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Email details</p>
                    <pre className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap break-words font-mono">
                      {preparedMessage}
                    </pre>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyPreparedMessage}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        Copy details
                      </button>
                      <span className="text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
                        {submissionCopyStatus === 'copied' && 'Copied! Paste the text into your email app.'}
                        {submissionCopyStatus === 'failed' && 'Copy didn\'t work. Select the text manually.'}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none`}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
