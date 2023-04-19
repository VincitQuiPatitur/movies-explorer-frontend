import React from "react";

function Techs() {
    return (
        <section className='technologies'>
            <div className="technologies__container">
                <h2 className="about__title">Технологии</h2>
                <div className="technologies__information">
                    <h3 className="technologies__information-title">7&nbsp;технологий</h3>
                    <p className="technologies__information-text">На&nbsp;курсе веб-разработки мы&nbsp;освоили
                        технологии, которые применили в&nbsp;дипломном проекте.</p>
                </div>
                <ul className="technologies__list">
                    <li className="technologies__list-item">HTML</li>
                    <li className="technologies__list-item">CSS</li>
                    <li className="technologies__list-item">JS</li>
                    <li className="technologies__list-item">React</li>
                    <li className="technologies__list-item">Git</li>
                    <li className="technologies__list-item">Express.js</li>
                    <li className="technologies__list-item">MongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;