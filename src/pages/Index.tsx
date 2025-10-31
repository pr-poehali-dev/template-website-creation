import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const services = [
    {
      title: "Стрижки и укладки",
      image: "https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/63eca301-cbee-4f49-8e59-c13c52a5f044.jpg",
    },
    {
      title: "Окрашивание",
      image: "https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/63eca301-cbee-4f49-8e59-c13c52a5f044.jpg",
    },
    {
      title: "Уход и восстановление",
      image: "https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/63eca301-cbee-4f49-8e59-c13c52a5f044.jpg",
    },
    {
      title: "Свадебные прически",
      image: "https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/63eca301-cbee-4f49-8e59-c13c52a5f044.jpg",
    },
    {
      title: "Маникюр и педикюр",
      image: "https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/63eca301-cbee-4f49-8e59-c13c52a5f044.jpg",
    },
  ];

  const workHours = [
    { day: "Понедельник", time: "10:00-18:00" },
    { day: "Вторник", time: "10:00-18:00" },
    { day: "Среда", time: "Выходной" },
    { day: "Четверг", time: "10:00-18:00" },
    { day: "Пятница", time: "10:00-18:00" },
    { day: "Суббота", time: "10:00-18:00" },
    { day: "Воскресенье", time: "10:00-18:00" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">V CENTRE</h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/38177c4c-b6fa-4a53-b791-708d5fa26267.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">V CENTRE</h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            V CENTRE - это про любовь к себе, заботу и красоту
          </p>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="text-accent fill-current">
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                </div>
                <Card className="overflow-hidden border-none shadow-lg">
                  <img
                    src="https://cdn.poehali.dev/projects/7243c199-9575-4481-a344-ddf838576671/files/7b0858b3-7753-442a-8a48-b0a23ad7c3a9.jpg"
                    alt="Интерьер салона"
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">О нас</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда, в которой каждый горит своим делом. Мастера красоты, стилисты, колористы
                и визажисты. Любим наше дело всей душой и любим
                видеть улыбки наших гостей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы ценим вас, и всегда подбираем всё
                индивидуально, с пониманием и любовью, от
                процедур и услуг до напитков — создаём уют, который подчеркнёт вашу красоту.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 animate-fade-in">
            Наши услуги
          </h2>
          <div className="relative px-12 animate-scale-in">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                          <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Все услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">Контакты:</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} />
                  <span className="text-lg">+79871564539</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">vcentre.ru#1</span>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1" />
                  <span className="text-lg">Комсомольская 34, Нефтекамск</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <h3 className="text-3xl font-bold">Режим работы:</h3>
              <div className="space-y-3">
                {workHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-lg">
                    <span>{schedule.day}</span>
                    <span className="font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 animate-scale-in">
            <Card className="overflow-hidden border-none shadow-xl h-[400px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=54.251959%2C56.090483&mode=search&oid=1089023663&ol=biz&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/90 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-light">© 2024 V CENTRE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
