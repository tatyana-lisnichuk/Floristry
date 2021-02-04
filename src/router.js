import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './components/MainPage';
import ServicePage from './components/ServicePage';
import AllWorks from './components/AllWorks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/service-page-bouquet',
      component: ServicePage,
      props:
      {
        pageTitle: 'букеты на любые мероприятия',
        description: 'У нас есть огромное разноообразие букетов на любое событие. Вы сможете приобрести как нежный букет, так и яркий, а также мужские, круглые, вертикалье, веерообразные, букеты-зонтики, букеты в вегетативной технике и много  других экзотических видов.',
        // mainImg:'service-page2-main-img.jpg', так работает при закомментированном варианте
        // mainImg: "./assets/imgs/service-page1-main-img.jpg",
        mainImg: "service-page1-main-img.jpg",
        sliderImgs: [
          {id:1, img:'1.jpg'},
          {id:2, img: '2.jpg' },
          { id:3, img: '3.jpg' },
          { id:4, img: '4.jpg' },
          { id:5, img: '5.jpg' },
          { id:6, img: '6.jpg' },
          {id:7, img:'7.jpg'},
        ]
      },
    },
    {
      path: '/service-page-wedding',
      component: ServicePage,
      props: {
        pageTitle: 'букеты невесты и свадебное оформление',
        description: 'Свадьба–самое важное событие в жизни молодожен.  Поэтому каждый из будущих супругов хочет, чтобы на торжестве все было идеально. Наша компания превзойдет ваши ожидания по красоте, качеству и лояльному ценнику. Обращаясь к нам, вы можете не переживать за оформление вашей свадьбы.',
        // mainImg: "./assets/imgs/service-page2-main-img.jpg",
        mainImg: "service-page2-main-img.jpg",
         sliderImgs: [
          {id:1, img:'2-1.jpg'},
          {id:2, img: '2-2.jpg' },
          { id:3, img: '2-3.jpg' },
          { id:4, img: '2-4.jpg' },
          { id:5, img: '2-5.jpg' },
          { id:6, img: '2-6.jpg' },
           { id: 7, img: '2-7.jpg' },
           {id: 8, img: '2-8.jpg'},
        ]
      },
    },
    {
      path: '/service-page-compositions',
      component: ServicePage,
      props:
      {
        pageTitle: 'композиции и шляпные коробки',
        description: 'Композиции могут собираться в любой таре: корзинке, шляпной коробке, вазочке или декоративных ящиках. Их нет необходимости ставить в вазу, как букеты, потому что цветы питаются при помощи специальной флористической губки под названием оазис. Композиции очень удобные для подарка, или оформления мероприятия.',
        // mainImg: "./assets/imgs/service-page3-main-img.jpg",
        mainImg: "service-page3-main-img.jpg",
       sliderImgs: [
          {id:1, img:'3-1.jpg'},
          {id:2, img: '3-2.jpg' },
          { id:3, img: '3-3.jpg' },
          { id:4, img: '3-4.jpg' },
          { id:5, img: '3-5.jpg' },
          { id:6, img: '3-6.jpg' },
         { id: 7, img: '3-7.jpg' },
          {id:8, img:'3-8.jpg'},
        ]
      },
    },
    {
      path: '/service-page-decoration',
      component: ServicePage,
      props:
      {
        pageTitle: 'оформление мероприятий',
        description: 'Мы оформим любое мероприятие в выбранном вами стиле. Рождественские, хехоуин, день рождение или любое другое мероприятие могут превратиться в настоящую сказку, всего лишь благодаря оформлению. Полную коллекцию оформлений в разнообразных стилях вы можете посмотреть в нашем инстаграмме.',
        // mainImg: "./assets/imgs/service-page4-main-img.jpg",
        mainImg: "service-page4-main-img.jpg",
        sliderImgs: [
          {id:1, img:'4-1.jpg'},
          {id:2, img: '4-2.jpg' },
          { id:3, img: '4-3.jpg' },
          { id:4, img: '4-4.jpg' },
          { id:5, img: '4-5.jpg' },
          { id:6, img: '4-6.jpg' },
          { id: 7, img: '4-7.jpg' },
          {id:8, img:'4-8.jpg'},
        ]
      },
      
    },
    {
      path: '/all-works',
      component: AllWorks,
     
    },
  ]
});