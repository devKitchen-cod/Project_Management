
import React from "react"
import {Button, ButtonGroup, Card, Col, Container, Row } from "react-bootstrap"

import '../../Styles/styleStartPage.css'
import f7 from '../../Styles/img/f7.svg'
import f8 from '../../Styles/img/f8.svg'
import f10 from '../../Styles/img/f10.jpg'

export default function StartPage(){
  
  return(
 
      <div className = 'start-page-container'>
         
        <div className = "intro-section">          
          <div className = "intro-content">
            
            <div className= "intro-text-group">
               <h1 className = 'intro-h'>Работайте в команде</h1> 
               <p className = 'intro-p'>Приймите участие в создании проекта и выводите продуктивность на новый уровень собственным уникальным способом вместе с startUP! Factory.</p>
            </div>

            <div className = 'intro-btn'>
              <div className ="signin"><Button variant="outline-primary" size = "lg">Get Dev Profile</Button></div>                            
            </div>
          </div>
          <img className = "img1" src = {f8}/>           
        </div>
       
        <div className = "team-section">          
          
          <div className='team-text-group'>
              <h2 className = "team-h2">Создайте свой проект и свою команду.</h2>
              <p className = "team-p">Придумайте свой проект и начните планровать с помощью досок, колонок и карточек, а затем переходите к более сложным функциям. Создавайте проекты и управляйте ими, упорядочивайте задачи и поддерживайте командный дух — все это в startUP! Factory.</p>
              <div className = 'team-btn'>              
                <div className ="signup"><Button variant="outline-primary" size = "lg">Get Creater Profile</Button></div>
              </div>
          </div>
          
          <img className = "img2" src = {f7}/>           
        </div>

        <div className = "func-section">

          <div className = "func-content">
            <div className ="func-text">
              <h2 className = "func-h2">Функции для эффективной командной работы.</h2>
              <p className = "func-p">Продуктивность команды зависит от эффективных инструментов и комфортной рабочей обстановки. Интуитивно понятные функции startUP! Factory позволяют команде быстро настроить рабочие процессы для любых задач: от совещаний и проектов до мероприятий и постановки целей.</p>
            </div>
            
            <div className = 'func-btn'>              
              <div><Button variant="outline-primary" size = "lg">Try It!</Button></div>
            </div>
          </div>

          <img className = "img3" src = {f10}/>                     
        </div>

      </div>
 

  )
}
