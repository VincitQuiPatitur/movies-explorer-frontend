import React from "react";
import Title from "../Title/Title";

function AboutProject() {
    return (
        <section className="about">
            <Title titleName={'О проекте'}/>
            <div className="about__information">
                <article className="about__article">
                    <h3 className="about__article-title">Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className="about__article-text">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и&nbsp;финальные доработки.</p>
                </article>
                <article className="about__article">
                    <h3 className="about__article-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className="about__article-text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about__timeline">
                <div className="about__timeline-block">
                    <p className="about__timeline-week about__timeline-week-backend">1&nbsp;неделя</p>
                    <p className="about__timeline-part">Back-end</p>
                </div>
                <div className="about__timeline-block">
                    <p className="about__timeline-week
                     about__timeline-week-frontend">4&nbsp;недели</p>
                    <p className="about__timeline-part">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;