import React, { useState } from 'react';
import styles from '../css/donate.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

export default function Donate() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState(null);
  const [showCustom, setShowCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const donationTiers = [
    {
      id: 1,
      amount: 5,
      title: 'Supporter',
      description: 'Help support our mission to provide free education',
      perks: [
        'Recognition on our website',
        'Updates on program impact'
      ],
      impact: 'Provides 1 hour of free tutoring'
    },
    {
      id: 2,
      amount: 25,
      title: 'Contributor',
      description: 'Make a meaningful impact on students\' lives',
      perks: [
        'All Supporter benefits',
        'Exclusive impact reports',
        'Special badge'
      ],
      impact: 'Helps 5 students complete a course',
      featured: true
    },
    {
      id: 3,
      amount: 50,
      title: 'Champion',
      description: 'Become a champion for accessible education',
      perks: [
        'All Contributor benefits',
        'Quarterly impact newsletter',
        'Exclusive event invitations'
      ],
      impact: 'Supports an entire course module'
    },
    {
      id: 4,
      amount: 100,
      title: 'Partner',
      description: 'Partner with us to transform education',
      perks: [
        'All Champion benefits',
        'Personal thank you letter',
        'Featured in our hall of fame'
      ],
      impact: 'Fully funds one student\'s learning journey',
      premium: true
    }
  ];

  const impactStats = [
    { icon: '👥', label: '50,000+ Students', description: 'Learning with us worldwide' },
    { icon: '🎓', label: '100+ Courses', description: 'Available free of charge' },
    { icon: '🌍', label: '150+ Countries', description: 'Served by our platform' },
    { icon: '⏰', label: '1M+ Hours', description: 'Of education provided' }
  ];

  const faqs = [
    {
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, Panda Bear Academy is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.'
    },
    {
      question: 'How is my donation used?',
      answer: 'Your donation directly supports our mission to provide free, high-quality education. Funds are allocated to platform development, course creation, teacher support, and scholarships.'
    },
    {
      question: 'Can I donate monthly?',
      answer: 'Absolutely! Monthly donations provide sustainable funding for our programs and help us plan long-term initiatives. You can set up a recurring donation at any tier.'
    },
    {
      question: 'Can I donate anonymously?',
      answer: 'Yes, you can choose to remain anonymous during the donation process. We respect your privacy and will never share your information without your consent.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are secure and encrypted.'
    },
    {
      question: 'Can I make a large donation?',
      answer: 'Yes! For donations over $1,000, please contact our development team directly at donations@pandabearacademy.com for special arrangements.'
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleDonate = (tier) => {
    setSelectedTier(tier.id);
    // In a real app, this would redirect to payment processing
    alert(`Redirecting to payment for $${tier.amount} donation`);
  };

  const handleCustomDonate = () => {
    if (customAmount && customAmount > 0) {
      alert(`Redirecting to payment for $${customAmount} donation`);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Header />

        <main className={styles.content}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Support Free Education for Everyone</h1>
              <p className={styles.heroDescription}>
                Your donation directly supports our mission to provide high-quality, accessible education to students around the world—completely free.
              </p>
              <p className={styles.heroSubtext}>
                When you donate to Panda Bear Academy, you're investing in the future of education and empowering students to achieve their dreams.
              </p>
            </div>
          </section>

          {/* Impact Stats */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Our Impact</h2>
              <p>See how we're transforming education worldwide</p>
            </div>
            <div className={styles.statsGrid}>
              {impactStats.map((stat) => (
                <div key={stat.label} className={styles.impactCard}>
                  <div className={styles.impactIcon}>{stat.icon}</div>
                  <h3 className={styles.impactLabel}>{stat.label}</h3>
                  <p className={styles.impactDescription}>{stat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Donation Tiers */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Choose Your Impact</h2>
              <p>Select a donation tier that works for you</p>
            </div>
            <div className={styles.tiersGrid}>
              {donationTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`${styles.tierCard} ${tier.featured ? styles.featured : ''} ${tier.premium ? styles.premium : ''}`}
                >
                  {tier.featured && <div className={styles.featuredBadge}>Most Popular</div>}
                  {tier.premium && <div className={styles.premiumBadge}>Premium</div>}
                  
                  <div className={styles.tierAmount}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{tier.amount}</span>
                  </div>
                  <h3 className={styles.tierTitle}>{tier.title}</h3>
                  <p className={styles.tierDescription}>{tier.description}</p>
                  
                  <div className={styles.impactBox}>
                    <p className={styles.impactBoxLabel}>Your Impact:</p>
                    <p className={styles.impactBoxText}>{tier.impact}</p>
                  </div>

                  <div className={styles.perksList}>
                    <p className={styles.perksLabel}>Includes:</p>
                    <ul>
                      {tier.perks.map((perk, idx) => (
                        <li key={idx}>
                          <span className={styles.checkmark}>✓</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`${styles.donateBtn} ${selectedTier === tier.id ? styles.active : ''}`}
                    onClick={() => handleDonate(tier)}
                  >
                    Donate ${tier.amount}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Amount Section */}
          <section className={styles.section}>
            <div className={styles.customDonationBox}>
              <h3>Make a Custom Donation</h3>
              <p>Choose any amount that fits your budget</p>
              <div className={styles.customInputGroup}>
                <span className={styles.currencySymbol}>$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className={styles.customInput}
                />
                <button
                  onClick={handleCustomDonate}
                  className={styles.customDonateBtn}
                  disabled={!customAmount || customAmount <= 0}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </section>

          {/* Why Support Us */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Why Support Panda Bear Academy?</h2>
            </div>
            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>💰</div>
                <h4>Cost-Effective</h4>
                <p>We operate efficiently. Every dollar directly impacts student learning through high-quality content and support.</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>📊</div>
                <h4>Transparent Impact</h4>
                <p>We publish detailed impact reports showing exactly how donations are used and the results we achieve.</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🌍</div>
                <h4>Global Reach</h4>
                <p>Your donation helps students in over 150 countries access world-class education regardless of their financial situation.</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🏆</div>
                <h4>Proven Results</h4>
                <p>95% of our students show measurable improvement in their learning outcomes within 3 months.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about donations</p>
            </div>
            <div className={styles.faqContainer}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${expandedFaq === idx ? styles.expanded : ''}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>{expandedFaq === idx ? '−' : '+'}</span>
                  </button>
                  {expandedFaq === idx && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className={styles.finalCta}>
            <h2>Ready to Make a Difference?</h2>
            <p>Start your donation journey today and be part of a global movement for accessible education.</p>
            <button className={styles.ctaButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Scroll to Choose Your Tier
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
