import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './about.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'





const Home = () => {
  return (
    <>
      Home
    </>
  );
}
const About = () => {
  const MainWrappAbout = styled.div`
    position: relative;
    margin-top: 200px;
    margin-left: 3px;
    display: flex;
  `
  const Card = styled.div`
    position: relative;
    width: 559px;
    height: 449px;

    background: #005312;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
  `
  const CardText = styled.div`
  width: 559px;
    height: 449px;
  // margin-left: 36px;
  // margin-top: 71px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  `
  const Card2 = styled.div`
  position: relative;
  width: 573px;
  height: 100px;
  margin-bottom: 40px;
  top: 0px;
  background: #1D1D1D;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  `
  const Card2Section = styled.div`
  margin-left: 70px;
  `
  const Card2Text = styled.div`
  position: relatieve;
  width: 512px;
  height: 39px;
  margin-left: 25px;
  margin-top: 33px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
  `

  return (
    <>
      
      <MainWrappAbout>
                <Card>
                    <CardText>Компания "Volume.Net" работает с 2008 года.
                        Основная деятельность - продакшн и постпродакшн фильмов, сериалов, рекламных видео и ТВ-программ
                        .
                        Экспертиза компании и владение своими студиями видеомонтажа, цветокоррекции и звукозаписи
                        позволила осуществлять проекты для рынков России, США и Европы.
                        В области производства звука, согласно независимого рейтинга РРАР-2020 наша студия звукозаписи -
                        это студия № 2 среди всех аудио-продакшенов в России.
                        В нашей команде работают только влюбленные в свое дело специалисты. Наши ценности - это
                        искренний сервис и забота о клиенте при безупречном качестве услуг. И все это в уютной домашней
                        атмосфере. Про нас говорят, что наш продакшн с душой!</CardText>
                </Card>
                <Card2Section>
                    <Card2 style={{marginTop: 35 + 'px'}}>
                        <Card2Text>У нас заказывали биты даже Morgenstern, Slava Marlow</Card2Text>
                    </Card2>
                    <Card2>
                        <Card2Text>У нас сводили музыку и вокал ВРЕМЯИСТЕКЛО и Клава Кока</Card2Text>
                    </Card2>
                    <Card2>
                        <Card2Text>К нам обращался за мастерингом своего бита SHAMAN</Card2Text>
                    </Card2>
                </Card2Section>
            </MainWrappAbout>
    </>
  );
}

const Contact = () => {

  const Card = styled.div`
    position: relative;
    width: 559px;
    height: 449px;

    background: #005312;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
  `
  const Form = styled.form`
  
  `
  function get_action(form) {
    alert("Успешно отправлено!")
}
  return (
      <>
      <Card>
        <Form onsubmit={get_action()}>
        <input type="text" value="Имя и фамилия" id=""
                        onBlur={}
                        onFocus={} required>
                    <input type="email" value="name@example.com" >
                    <textarea name="" id="" placeholder="Пожелания к заказу" cols="30" rows="10"></textarea>
                    <button type="submit" class="send">Отправить</button>
        </Form>
          </Card>
          <div class="card-cont">Если вам все вопросы ясны, то можете решиться и выбрать наши услуги</div>
        </>
        );
}
const Buy = () => {
  return (
        <>
          Buy
        </>
        );
}
const Service = () => {
  return (
        <>
          Service
        </>
        );
}
const Sved = () => {
  return(
        <>
          Svedenie
        </>
        );
}
const Mast = () => {
  return(
        <>
          Mastering
        </>
        );
}
const Beat = () => {
  return(
        <>
          Beatmaking
        </>
        );
}




        function App() {
  

  return (


        <Router>
          {/* Main links */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
          <Routes>
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Routes>
            <Route path='/buy' element={<Buy />} />
          </Routes>
          <Routes>
            <Route path='/service' element={<Service />} />
          </Routes>


          {/* Услуги */}
          <Routes>
            <Route path='/service/sved' element={<Sved />} />
          </Routes>
          <Routes>
            <Route path='/service/mast' element={<Mast />} />
          </Routes>
          <Routes>
            <Route path='/service/beat' element={<Beat />} />
          </Routes>

          <Routes>

          </Routes>


        </Router>
        )
}

        export default App
