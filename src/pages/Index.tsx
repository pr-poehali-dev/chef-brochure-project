import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const duties = [
    {
      icon: "ChefHat",
      title: "Приготовление блюд",
      description: "Создание качественных блюд согласно технологическим картам и рецептурам"
    },
    {
      icon: "ClipboardList",
      title: "Контроль качества",
      description: "Проверка свежести продуктов и соблюдение стандартов приготовления"
    },
    {
      icon: "Users",
      title: "Управление кухней",
      description: "Координация работы помощников и организация рабочего процесса"
    },
    {
      icon: "BookOpen",
      title: "Разработка меню",
      description: "Создание новых рецептов и совершенствование существующих блюд"
    },
    {
      icon: "ShieldCheck",
      title: "Санитарные нормы",
      description: "Соблюдение правил гигиены и санитарно-эпидемиологических требований"
    },
    {
      icon: "Package",
      title: "Управление запасами",
      description: "Контроль наличия продуктов и своевременное пополнение запасов"
    }
  ];

  const careerPath = [
    {
      level: "Начальный уровень",
      position: "Помощник повара",
      salary: "30 000 - 45 000 ₽",
      experience: "0-1 год",
      color: "bg-muted"
    },
    {
      level: "Младший специалист",
      position: "Повар",
      salary: "45 000 - 70 000 ₽",
      experience: "1-3 года",
      color: "bg-primary/10"
    },
    {
      level: "Средний уровень",
      position: "Старший повар",
      salary: "70 000 - 100 000 ₽",
      experience: "3-5 лет",
      color: "bg-primary/20"
    },
    {
      level: "Высший уровень",
      position: "Шеф-повар",
      salary: "100 000 - 200 000+ ₽",
      experience: "5+ лет",
      color: "bg-secondary/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
              <Icon name="ChefHat" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Профессия: Повар</h1>
              <p className="text-muted-foreground">Образовательный справочник</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge className="bg-secondary text-secondary-foreground">Востребованная профессия</Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Кулинарное искусство — ваше призвание
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Профессия повара сочетает в себе творчество, точность и мастерство. 
              Это возможность создавать блюда, которые приносят радость людям каждый день.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="TrendingUp" size={18} className="text-secondary" />
                <span className="font-semibold">Высокий спрос</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Sparkles" size={18} className="text-secondary" />
                <span className="font-semibold">Творческая работа</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Globe" size={18} className="text-secondary" />
                <span className="font-semibold">Карьера за рубежом</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/191dfa84-5ea0-4bf5-9388-2e88ef525ec4/files/c80479ec-6c16-45fe-bfa9-d63f0d5500bf.jpg" 
              alt="Профессиональный повар" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </section>

        <Separator className="my-12" />

        <section className="space-y-6">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="text-base px-4 py-1">Основные обязанности</Badge>
            <h2 className="text-3xl font-bold">Что делает повар</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Повар выполняет широкий спектр задач, требующих профессиональных навыков и ответственности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {duties.map((duty, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Icon name={duty.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{duty.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {duty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="space-y-6">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="text-base px-4 py-1">Карьерные перспективы</Badge>
            <h2 className="text-3xl font-bold">Путь профессионального роста</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От помощника до шеф-повара — четкая траектория карьерного развития
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {careerPath.map((career, index) => (
              <Card key={index} className={`${career.color} border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {career.level}
                      </p>
                      <h3 className="text-xl font-bold">{career.position}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wallet" size={20} className="text-secondary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Зарплата</p>
                        <p className="font-semibold">{career.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Опыт</p>
                        <p className="font-semibold">{career.experience}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {index < careerPath.length - 1 && (
                        <Icon name="ArrowDown" size={28} className="text-muted-foreground md:rotate-90" />
                      )}
                      {index === careerPath.length - 1 && (
                        <Icon name="Trophy" size={28} className="text-secondary" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" size={24} className="text-secondary" />
                Дополнительные возможности
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Обучение за границей</p>
                    <p className="text-sm text-muted-foreground">Стажировки в лучших ресторанах мира</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Собственный бизнес</p>
                    <p className="text-sm text-muted-foreground">Открытие ресторана или кулинарной студии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Tv" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Медийная карьера</p>
                    <p className="text-sm text-muted-foreground">Кулинарные шоу и блогинг</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Участие в конкурсах</p>
                    <p className="text-sm text-muted-foreground">Профессиональные соревнования и награды</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="BookOpen" size={18} />
              <span>Образовательный справочник профессий</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Профориентационные материалы
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
