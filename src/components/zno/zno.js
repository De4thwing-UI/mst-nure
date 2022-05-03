import React from "react"
import "./zno.css"

const Zno = () => {
  const znos = [
    {
      title: "ЗНО з математики",
      text: "Профільний рівень(за шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з української мови або з української мови та літератури.",
      text: "Для технічного ЗВО на спеціальність 186 Видавництво та поліграфія достатньо української мови (за шкалою 100‒200 балів)",
    },
  ]
  const choices = [
    {
      title: "ЗНО з фізики",
      text: "За шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з Хімії",
      text: "За шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з іноземної мови",
      text: "За шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з географії",
      text: "За шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з Історії України",
      text: "За шкалою 100‒200 балів)",
    },
    {
      title: "ЗНО з біології",
      text: "За шкалою 100‒200 балів)",
    },
  ]
  return (
    <div className="zno">
      <div className="container">
        <div className="zno__title">
          На спеціальність 186 Видавництво та поліграфія в конкурсі берутьучасть
        </div>
        <div className="zno__inner">
          {znos.map((zno, index) => (
            <div className="zno__item" key={index.toString()}>
              <div className="zno__item__title">{zno.title}</div>
              <div className="zno__item__text">{zno.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="zno__choice">
        <div className="container">
          <div className="zno__choice__title">Спеціальності на вибір</div>
          <div className="zno__choice__inner" >
            {choices.map((choice, index) => (
              <div className="zno__choice__item"key={index.toString()}>
                <div className="zno__choice__item__title">{choice.title}</div>
                <div className="zno__choice__item__text">{choice.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Zno
