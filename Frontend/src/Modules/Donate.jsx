import { useState } from 'react';
import styles from '../css/donate.module.css';
import Header from '../Components/Header';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const isCustom = selectedAmount === 'custom';
  const amountToDonate = isCustom ? Number(customAmount) : selectedAmount;

  const handleDonate = () => {
    if (amountToDonate > 0) {
      alert(`Redirecting to payment for $${amountToDonate.toFixed(2)} donation`);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Header />

        <main className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Support free education</h1>
              <p className={styles.heroDescription}>
                Your donation helps keep Panda Bear Academy's learning resources free and accessible.
              </p>
            </div>
          </section>

          <section className={styles.donationPanel} aria-labelledby="donation-heading">
            <h2 id="donation-heading">Choose an amount</h2>
            <p className={styles.donationHint}>One-time donation</p>

            <div className={styles.amountOptions} role="group" aria-label="Donation amount">
              {[10, 25, 50].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`${styles.amountButton} ${selectedAmount === amount ? styles.amountButtonSelected : ''}`}
                  aria-pressed={selectedAmount === amount}
                  onClick={() => setSelectedAmount(amount)}
                >
                  ${amount}
                </button>
              ))}
              <button
                type="button"
                className={`${styles.amountButton} ${isCustom ? styles.amountButtonSelected : ''}`}
                aria-pressed={isCustom}
                onClick={() => setSelectedAmount('custom')}
              >
                Custom
              </button>
            </div>

            {isCustom && (
              <label className={styles.customAmountField}>
                <span>Custom amount</span>
                <div className={styles.customInputGroup}>
                  <span className={styles.currencySymbol} aria-hidden="true">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    className={styles.customInput}
                  />
                </div>
              </label>
            )}

            <button
              type="button"
              className={styles.donateBtn}
              onClick={handleDonate}
              disabled={!amountToDonate || amountToDonate < 1}
            >
              {amountToDonate ? `Donate $${amountToDonate.toFixed(2)}` : 'Donate'}
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
