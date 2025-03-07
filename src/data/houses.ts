export type HouseDetailsType = {
  [key: string]: {
    title: string;
    description: string;
    images: string[];
    specs: {
      size: string;
      area: string;
      type: string;
      style: string;
      price: string;
    };
    planImage: string;
  };
};

const houseDetails: HouseDetailsType = {
  "kd-1350": {
    title: "КД-1350 | «10,2X15,1»",
    description:
      "КД-1350 – загородное жилье для любителей комфорта и лаконичной эстетики. Здание имеет прямоугольную форму и подойдет для вытянутого участка. Общая площадь дома составляет 154 квадратных метра. Удобная планировка позволит свободно разместиться семье из 3-5 человек.  Одно из преимуществ проекта – сауна. Здесь владельцы смогут отдохнуть после тяжелого дня, организовав расслабляющий спа-вечер. Еще один неоспоримый плюс – панорамное остекление двух фасадов дома с выходом на террасу. Благодаря им жильцы смогут проводить летние вечера на свежем воздухе и наслаждаться осенними и зимними пейзажами, находясь в тепле, уюте и комфорте дома.  Внутренняя планировка состоит из кухни-гостиной с место под столовую зону, трех спален, санузла, совмещенного с сауной, котельной и тамбура-прихожей. Расположение и форма помещений внутри дома продуманы таким образом, что будущий домовладелец может удобно переделать их под нужды семьи: в одной из спален оборудовать кабинет или комнату для занятий спортом, разделить помещение кухни-гостиной на 2 и даже 3 зоны барными стойками и легкими перегородками, вместо прихожей оборудовать гардеробную или кладовую.  Выбирайте комплектацию дома и вносите изменения в планировку! Корректировка чертежей производится бесплатно.  Стоимость строительства рассчитывается в зависимости от комплектации дома, индивидуальных предпочтений заказчика. Оплата возможна наличными, в ипотеку, с  рассрочкой платежей. Также в счет оплаты могут быть учтены средства материнского капитала.",
    images: [
      "/home/h1.png",
      "/home/h1.2.png",
      "/home/h1.3.png",
      "/home/h1.5.png",
    ],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
    },
    planImage: "/home/h1.6.png",
  },

  "kd-1340": {
    title: "КД-1340 | «10X10,5»",
    description:
      "Фахверк КД-1340 – это проект стильного современного загородного дома. Коттедж общей площадью 105 квадратных метров отлично впишется в квадратный участок – длина стен дома – почти одинаковая и составляет 10х10,5 м. В загородной резиденции с комфортом разместится семья из 3-4 человек. Жильцы смогут наслаждаться всеми прелестями загородной жизни, находясь в комфортных условиях, как в городской квартире. Коттедж оснащен панорамными окнами. Благодаря этому отсюда можно любоваться видом природы в любое время года и в любую погоду, находясь в тепле и уюте. Во внутренней планировке здания архитектором заложена просторная кухня-гостиная, 2 спальни, гардеробная, котельная и большой санузел. Площадь санузла составляет 8,6 м², что позволит сделать это помещение многофункциональным и использовать его как ванную, уборную и постирочную. С трех сторон дом огибает терраса общей площадью более 60 квадратных метров, скрытая от осадков навесом. Установив здесь мебель для отдыха, владельцы смогут приятно проводить время с семьей и друзьями в теплые вечера на свежем воздухе. Строительство дома доступно в разных комплектациях. Итоговая цена реализации проекта зависит от выбора типа отделки. Действует гибкая система оплаты. Доступна ипотека, использование маткапитала. Возможно оформление кредита и рассрочки и банков-партнеров.",
    images: [
      "/home/h2.png",
      "/home/h2.1.png",
      "/home/h2.4.png",
      "/home/h2.3.png",
    ],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
    },
    planImage: "/home/h2.5.png",
  },
  "kd-1330": {
    title: "КД-1340 | «10X10,5»",
    description:
      "Фахверк КД-1340 – это проект стильного современного загородного дома. Коттедж общей площадью 105 квадратных метров отлично впишется в квадратный участок – длина стен дома – почти одинаковая и составляет 10х10,5 м. В загородной резиденции с комфортом разместится семья из 3-4 человек. Жильцы смогут наслаждаться всеми прелестями загородной жизни, находясь в комфортных условиях, как в городской квартире. Коттедж оснащен панорамными окнами. Благодаря этому отсюда можно любоваться видом природы в любое время года и в любую погоду, находясь в тепле и уюте. Во внутренней планировке здания архитектором заложена просторная кухня-гостиная, 2 спальни, гардеробная, котельная и большой санузел. Площадь санузла составляет 8,6 м², что позволит сделать это помещение многофункциональным и использовать его как ванную, уборную и постирочную. С трех сторон дом огибает терраса общей площадью более 60 квадратных метров, скрытая от осадков навесом. Установив здесь мебель для отдыха, владельцы смогут приятно проводить время с семьей и друзьями в теплые вечера на свежем воздухе. Строительство дома доступно в разных комплектациях. Итоговая цена реализации проекта зависит от выбора типа отделки. Действует гибкая система оплаты. Доступна ипотека, использование маткапитала. Возможно оформление кредита и рассрочки и банков-партнеров.",
    images: [
      "/home/h3.png",
      "/home/h3.1.png",
      "/home/h3.2.png",
      "/home/h3.4.png",
      
    ],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
    },
    planImage: "/home/h3.6.png",
  },
};

export default houseDetails;
