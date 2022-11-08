import React, { useState } from "react"
import "./faq.css"
import Pagination from "src/components/pagination"
import { Trans } from "react-i18next"
const Faq = () => {
  const faqs = [
    {
      question:
        "Is it necessary to be able to draw to study in the specialty «186 Publishing and Printing»?",
      answer:
        "It is not necessary, the possession of artistic skills may be necessary when studying such disciplines as «Basics of graphic design», «Artistic basics of publication design», «Graphic information processing».",
    },
    {
      question: "What is the scope of mathematical disciplines and physics?",
      answer:
        "The volume of higher mathematics and physics teaching (in teaching hours) corresponds to the volume provided by the Ministry of Science and Education of Ukraine for technical universities, but it is still slightly lower than in other specialties at NURE.",
    },

    {
      question:
        "If I am a citizen of another country, can I study at NURE on a budget basis?",
      answer:
        "No. Citizens of other states can study only on a contractual basis, i.e. at the expense of individuals or legal entities.",
    },
    {
      question:
        "If I do not agree with the assessment of the examination paper, do I have the right to appeal?",
      answer:
        "So. The applicant has the right to file an appeal on the day the exam results are announced",
    },

    {
      question: "How far are the NURE dormitories from the university?",
      answer:
        "The university has several dormitories, which can be reached within 10-30 minutes (by public transport), located near metro stations. University dormitories have all the conditions for studying and recreation of students. Students live 2-3 people in a room.ніверситет має кілька гуртожитків, дістатися до яких можна протягом 10-30 хвилин (міським транспортом), розташовані близько від станцій метро. Гуртожитки університету мають усі умови для навчання і відпочинку студентів. Студенти живуть по 2-3 людини в кімнаті.",
      link: "//www.google.com/search?sxsrf=APq-WBto1qlShUAUN632LJBnQRXVvIKIhA:1644323507415&q=%D0%9E%D0%B1%D1%89%D0%B5%D0%B6%D0%B8%D1%82%D0%B8%D0%B5%20%D0%A5%D0%BD%D1%83%D1%80%D0%B5&npsic=0&rflfq=1&rldoc=1&rllag=50019467,36220359,696&tbm=lcl&sa=X&ved=2ahUKEwiT97e0jvD1AhXFtqQKHeEwA9oQtgN6BAgCEEs&biw=1440&bih=730&dpr=2&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[50.062717199999994,36.232593],[50.0132195,36.1934514]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2",
      text: "Hostels on the map",
    },
    {
      question: "Is it possible to switch from the contractual form of education to the budget?",
      answer:
        "Yes, it is possible. If a contract student has shown good and excellent results in studies, and there is also a free budget place (which happens after the session), the question of his transition from the contract form of education to the budget form may be considered.",
    },
    {
      question:
        "What VET subjects should be chosen when enrolling in the «Publishing and printing» specialty?",
      answer: "All VET subjects and weighting coefficients are listed for ",
      link: "",
      text: "by this link",
    },
    {
      question: "How far are the NURE dormitories from the university?",
      answer:
        "The university has several dormitories, which can be reached within 10-30 minutes (by public transport), located near metro stations. University dormitories have all the conditions for studying and recreation of students. Students live 2-3 people in a room.ніверситет має кілька гуртожитків, дістатися до яких можна протягом 10-30 хвилин (міським транспортом), розташовані близько від станцій метро. Гуртожитки університету мають усі умови для навчання і відпочинку студентів. Студенти живуть по 2-3 людини в кімнаті.",
      link: "//www.google.com/search?sxsrf=APq-WBto1qlShUAUN632LJBnQRXVvIKIhA:1644323507415&q=%D0%9E%D0%B1%D1%89%D0%B5%D0%B6%D0%B8%D1%82%D0%B8%D0%B5%20%D0%A5%D0%BD%D1%83%D1%80%D0%B5&npsic=0&rflfq=1&rldoc=1&rllag=50019467,36220359,696&tbm=lcl&sa=X&ved=2ahUKEwiT97e0jvD1AhXFtqQKHeEwA9oQtgN6BAgCEEs&biw=1440&bih=730&dpr=2&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[50.062717199999994,36.232593],[50.0132195,36.1934514]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2",
      text: "Hostels on the map",
    },
  ]

  const limit = 3
  const [displayItems, setDisplayItems] = useState(faqs.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayItems(displayItems.slice(offset, offset + limit))
  }

  return (
    <div className="faq">
      <div className="container">
        <div className="faq__title"><Trans>Questions and answers</Trans> </div>
        <div className="faq__inner">
          {faqs.map((faq, index) => (
            <div className="faq__item" key={index.toString()}>
              <div className="faq__question"><Trans>{faq.question}</Trans></div>
              <div className="faq__answer">
               <Trans>{faq.answer}</Trans> 
                <a href={faq.link} className="faq__link">
                  <Trans>{faq.text}</Trans>
                </a>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          items={displayItems.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
export default Faq
