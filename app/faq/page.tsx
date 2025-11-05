
import './FaqBento.css'; 
import Header from '@/components/Header'
import { faqData } from '../data/data.js'

function QandAPage() {
  
  

  
  return (
    <div className='py-6'>
      <Header />
      <h1 className='py-6 text-2xl sm:text-6xl text-center '>שאלות ותשובות נפוצות</h1>

      
      <div className="faq-bento-grid">
        {faqData.map((faq) => {
          const cardClasses = `faq-bento-card span-col-${faq.spanCol || 1} span-row-${faq.spanRow || 1
            }`;

          const IconComponent = faq.icon;

          return (
            <div key={faq.id} className={cardClasses}>
              <div className="faq-icon">
                <IconComponent />
              </div>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default QandAPage