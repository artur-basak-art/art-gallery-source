const gods = [
  {
    name: "Старажытныя Багі",
    path: "gods",
    items: [
      {
        name: "Бацька Неба",
        src: "God",
        description: `Бацька Неба, Бог - галоўнае бажаство ў беларускай міфалогіі. Творца ўсяго існага і галоўны над усімі багамі. Па сутнасці, ён і ёсць неба над галавой. На вяршыні Сусветнага Дрэва ў Залатой Сядзібе ён сядзіць на сваім троне, але часам ён спускаецца і ў свет смяротных. Ён прымае аблічча падарожнага старца, вандроўцы з сівымі валасамі, ахутаным лёгкім святлом, якое быццам ідзе знутры. У гэтым абліччы ён ходзіць па свеце і завяршае тое, што не скончыў, калі яго ствараў. Пры сустрэчы з ім, чалавек наўрад ці можа пазнаць у ім самога Бога, часцей гэтае ўсведамленне прыходзіць нашмат пазней.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Сусветнае Дрэва",
        src: "Susvetnae-Dreva",
        description: `Сусветнае Дрэва - у беларускай міфалогіі з'яўляецца воссю светапабудовы, месцам дзе жывуць багі.
<br/><br/>Сусветнае дрэва знаходзіцца ў цэнтры сусвету і расце на вялікім валуне - Залатой Гары, які стаіць пасярод бясконцай вады - акіяну. Каля дрэва стаіць Залатая Сядзіба, у якой на прыгожым троне сядзіць Бог - Бацька Неба. У галінах Сусветнага Дрэва размяшчаўся Птушыны Вырай, менавіта сюды на зімоўку злятаюць птушкі, а кіруе імі кароль птушак Кук. Каб птушкам было лягчэй знайсці дарогу ў Вырай, багі зрабілі ім Птушыную або Гусіную Дарогу, сцежку засцеленую зоркамі. Па ёй, ў Вырай і назад, на святы, Дзяды таксама ходзяць.
<br/><br/>У каранях Сусветнага Дрэва, у гары - Змяіны Вырай. Туды на зімоўку вядзе ўсіх змей Вужыны Кароль. Пад вялікім валуном там жыве і змяя Шкурапея, а на жалезным прыгожым ложку час ад часу пад дрэвам спіць Сівы Воўк - кароль усіх ваўкоў.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Маці Зямля",
        src: "Ziamlia",
        description: `Маці-Зямля - верагодна, найстаражытнейшае боства беларускай міфалогіі. Бярэ пачатак ад прымітыўных першабытных культаў. У гонар яе ставілі стоды і валуны,а таксама шанавалі змей (вужоў) і кармілі іх малаком. Зямля лічылася маці ўсіх жывых істот і раслін, цэнтрам урадлівасці.
<br/><br/>Маці Зямля на раўне з Бацькам Небам. Менавіта ад шлюба Неба і Зямлі нарадзіліся іншыя багі. Маці Зямля адказвала не толькі за нараджэнне і ўрадлівасць, але і была апякункай памерлых.

`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Пярун",
        src: "Piarun",
        description: `Пярун, Грымотнік, Дундар - нябеснае боства, пераемнік Бацькі Неба, мае функцыі ўладара свету, як бог грымотнік ён кіруе атмасфернымі з’явамі і забяспечвае зямлю апладняльнай вільгаццю. Пярун змагаецца з нячысцікамі і цмокамі, шпуляе ў іх сваімі стрэламі-маланкамі і такім чынам ахоўвае Сусвет і ўсталяваны у ім парадак ад злых сілаў. Грымоты здараюцца ад грукату колаў вялікіх Пяруновых жорнаў, а маланкі ад іх іскраў. Калі стрэлы-маланкі трапляюць у зямлю і застываюць, то ператвараюцца ў каменныя сякеры.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Агонь",
        src: "Ahon",
        description: `Агонь, Аген, Агенец, Агонь-агніч - бог агню, яго персаніфікацыя. Агонь займаў і працягвае займаць адно з важных месцаў у жыцці чалавека. Вядома ж яго, як бога, ушаноўвалі і старажытныя беларусы.
<br/><br/>Агонь заўсёды быў часткай важных абрадаў і свят: Масленіца, Купалле. Праз агонь чалавек меў сувязь з астатнімі нябеснымі багамі. У антрапаморфнай форме ён з'яўляўся ў выглядзе чалавека ў чырвонай вопратцы і з агністымі валасамі. Бог Агонь мае неадназначную характарыстыку ў міфалогіі беларусаў, з аднаго боку ён нясе дабро, з другога - ён можа нарабіць нямала шкоды.
<br/><br/>Усе нячысцікі вар'яцка баяцца Агню, таму гэта добрая зброя супраць рознага роду чарцей.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Вялес",
        src: "Viales",
        description: `Вялес, Велес, Волас - у славянскай і, у прыватнасці, беларускай міфалогіі — бог палявання, жывёлагадоўлі і багацця, а таксама ўладар падземнага царства. Вялес процівапастаўляецца грамабою Пяруну, бо лічыцца больш хтанічным богам, зямным, апекуном усяго жывога, зямнога. Сам Вялес часцей вандруе ў нізе, там дзе жывуць людзі, а не ў версе, дзе жывуць багі.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019;",
      },
      {
        name: "Сонца і Месяц",
        src: "Sonca",
        description: `Сонца і Месяц - беларускія багі, найстаражытнейшыя міфалагічныя постаці, увасабленне ідэальнай шлюбнай пары, мужа і жонка. Як і шмат іншых багоў, яны жывуць у сваёй нябеснай хаце. Месяц у тым доме - гаспадар, Сонца - яго гаспадыня. Шлюб Сонца і Месяца ўвасабляе сабой спрадвечны парадак. Але паводле легенд, у далёкім міфалагічным мінулым, такі парадак быў парушаны з-за таго, што Месяц заляцаўся да багіні Зары (Вечарніцы).
<br/><br/>За гэта Месяц быў пакараны Пяруном і кожную ноч распадаецца, губляе частку сябе, старэе, памірае і зноў аднаўляецца ў Маладзік. Так і дагэтуль.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; Навука звяздарская: астраномія ў Вялікім Княстве Літоўскім у XIV-XVII ст., З.Скварчэўскі, 2022;",
      },
      {
        name: "Сопуха",
        src: "Sopuha",
        description: `У Беларускім Пантэоне акрамя мужчынскага ўвасаблення боства абрадавага, ахвярнага, боскага агню - Агонь, Агніч - ёсць і жаночая - Сопуха - увасабленне хатняга агню.
<br/><br/>Сопуха, верагодна, адзін з найстаражытнейшых персанажаў беларускай міфалогіі, багіня хатняга агмяню, апякунка хатняй цеплыні, а пазней, з пашырэннем на тэрыторыі Беларусі печак, - дух печкі і хатняга агню наогул. Прыгожая маладая дзяўчына з пепельным колерам твару і вугальнымі валасамі, на якіх дзе-нідзе праступае чырвоны, агністы колер. Здаецца, быццам бы глядзіш на вуглі ў печкі.
<br/><br/>Сопуха персанаж станоўчы, але пад яе ўладай знаходзіцца не толькі абарона хаты, але і магчымасць спаліць хату ў выпадку, калі багіня будзе разгневана.
<br/><br/>У суседняй Літоўскай міфалогіі аналагам Сопухі выступае багіня Габія, у Грэцкай - Гесція. З прыходам хрысціянства Сопуха змяшалася з вобразам Св. Агаты, якая таксама асацыюецца з агнём.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; ",
      },
      {
        name: "Спарыш",
        src: "Sparysh",
        description: `Спарыш - старажытны бог урадлівасці і дабрабыту. Гэты міфалагічны персанаж быў надзелены тымі ж функцыямі, што і спарыш-колас - здольнасць забяспечваць спор, багацце, дастатак. Беларусы запрашалі Спарыша на покуць, садзілі на золаце, частавалі памінальнымі стравамі. Ёсць сувязь з памерлымі і першапродкамі.
<br/><br/>Вельмі блізкімі да гэтага бога істотамі з’яўляюцца змей Хут і нячысцік Спорнік, у нейкім сэнсе яны яго замяняюць, выконваюць тую ж ролю і функцыю - забяспечваюць дабрабыт гаспадаркі. Паміж імі сувязь, але галоўнае адрозненне ў тым, што Спарыш прыходзіць ва ўжо дагледжаную гаспадарку, ён як бы памнажае дастатак добрых і працавітых гаспадароў. На кантрасце, Хут і Спорнік служаць ведзьмам і чараўнікам, якія шукаюць легкі шлях, каб разбагацець.
<br/><br/>Сваімі функцыямі Спарыш суадносіцца з боствамі паміраючай і ўваскрасаючай расліннасці, урадлівасці - егіпецкім Асірысам, балтыйскім Юмісам, грэцкім Дзіанісам, індыйскім Ашвінам.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; ",
      },
      {
        name: "Зарніца і Вечарніца",
        src: "Zarnica",
        description: `Зарніца і Вечарніца - у беларускай міфалогіі гэта дзве багіні сястры, дачкі і служкі-памошніцы галоўнага бога - Бацькі Неба. У народных уяўленнях гэта персаніфікацыі зары і менавіта зоркі Венеры.
<br/><br/>Зарніца - гэта персаніфікацыя ранішняй зары, планеты Венеры ў яе ранішняй бачнасці, Світальная Зорка.
<br/><br/>Вечарніца, Вечарнічка - гэта персаніфікацыя вячэрняй зары, планеты Венеры ў яе вячэрняй бачнасці, Воўчая Зорка.
<br/><br/>Зара-зарніца абуджае людзей і кліча іх да працы, праганяе цемру і злых духаў, асабліва хваробы, духаў-хваробы. Таму да яе звяртаюцца ў замовах. Зарніца з’яўляецца захавальніцай сонечнага ключа, ім яна адчыняе дубовыя дзверы хаты, дзе жыве Сонца, выпускае яго.
<br/><br/>Вечарніца жа заклікае людзей і ўсё жывое адпачываць, даглядае за зямлёй перад надыходам начной цемры. Час, калі пануе Вечарніца, больш за ўсё спрыяльны для магіі і чараўніцтва. Менавіта з Вечарніцай Месяц здрадзіў Сонцу, за што і быў пакараны Пяруном, якому таксама падабалася Вечарніца. Пярун сваімі стрэламі-маланкамі раскалоў Месяц. Пры чым, гэтыя падзеі заўсёды паўтараюцца. (гл. малюнак Сонца і Месяц).`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; Навука звяздарская: астраномія ў Вялікім Княстве Літоўскім у XIV-XVII ст., З.Скварчэўскі, 2022;",
      },
      {
        name: "Месяц",
        src: "Mesiac",
        description: `
          Месяц. Лічыцца, што пакланенне Месяцу значна больш старажытнае, чым пакланенне Сонцу. Негледзячы на тое, што Сонца і Князь Месяц гэта жонка і муж, начное свяціла супрацьпастаўляецца дзённаму.
<br/><br/>Сонца свеціць людзям, жывёлам і раслінам, а Месяц начным жыхарам - нячысцікам. Ёсць асацыяцыі Месяца са светам памерлых, найчасцей нявінна або без пары загінуўшых, напрыклад з Русалкамі.
<br/><br/>Паводле павер’яў старажытных беларусаў барвовы колер месяца, а таксама зацьменне, адбываецца з-за таго, што Месяц ужо надта напіўся чалавечай крывёй, у выніку кровапралітнай вайны, якая дзесьці зараз ідзе.
<br/><br/>Супрацьпастаўленасць Месяца і Сонца выказваецца ў такой апазіцыі, як зменлівасць/нязменнасць. Месяц змяняецца не толькі візуальна, але і ў паводзінах, пра гэта сведчыць міф, дзе ён здрадзіў Сонцу з Вечарніцай (гл. выявы Зарніца, Месяц і Сонца).
<br/><br/>Адметныя шкодныя асаблівасці прыпісваліся месяцоваму святлу, бо пад ім лётаюць Начніцы ды Крыксы, бегаюць па палях Русалкі і зманьваюць прахожых. Засцерагаліся таго, каб святло Месяца падала на калыску. Некаторыя дзіцячыя хваробы тлумачыліся тым, што Месяц насвяціў на дзіцяці. Святло Месяца было ці не асноўнай прычынай бясплоднасці.
<br/><br/>З іншага боку, на Каляды ведзьмы і чэрці імкнуліся схаваць Месяц і яго дзяцей - Зоркі, каб ноч была яшчэ цямнейшая. У гэтым сэнсе можна лічыць, што схаваўшыся, Месяц спрыяў нячысцікам у іх шкодах.
          `,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; Навука звяздарская: астраномія ў Вялікім Княстве Літоўскім у XIV-XVII ст., З.Скварчэўскі, 2022;",
      },
      {
        name: "Вужыны Кароль",
        src: "Vuzhyny-Karol",
        description: `Вужыны Кароль, Вужыны Цар - гэта легендарная істота ў беларускай міфалогіі, буйная змяя з прыроднай каронай, якая валодала магічнымі ўласцівасцямі. Вужыны Кароль галоўны над усімі вужами, яшчаркамі і іншымі змеямі, захавальнік таемных скарбаў і ўладар магічных артэфактаў. 
<br/><br/>Лічылася, што нават нязначны кавалак кароны, напрыклад адзін ражок, Караля Вужоў мог надзяліць ўладальніка рознымі неверагоднымі здольнасцямі: непаражальнасць ад ядаў, разуменне чужых думак, магчымасць размаўляць на мове звяроў, птушак ды раслін.
<br/><br/>Каб атрымаць кавалак кароны Вужынага Караля, трэба было перад ім разаслаць на дарозе прыгожы ручнік. Добры час для гэтага, калі Вужыны Цар вядзе ўсіх змей у Змяіны Вырай на зімоўку. Але, калі чалавек паспрабуе адабраць карону сілай ці хітрасцю, то ўсе змеі адразу накінуцца на яго і заб’юць.
`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011;",
      },
      {
        name: "Сівы Воўк",
        src: "Sivy-Vouk",
        description: `Сівы Воўк - паводле беларускага казачнага фальклору магутны воўк-асілак, уладар над усімі ваўкамі, старэйшы з усіх ваўкоў.
        <br/><br/>Ніхто дакладна не ведае колькі гадоў Сівому Воўку, але ён ужо вельмі даўно бегае па свеце і ведае ўсе дарогі ды сцежкі. Ён ведае як патрапіць туды, куды простым смертным патрапіць нельга - чароўныя і цёмныя палацы, дарога да Сусветнага Дрэва, свет памерлых, непраходныя балоты і мора. 
        <br/><br/>Дарэчы, Сівы Воўк часта любіць адпачываць каля Сусветнага Дрэва, мае магчымасць размаўляць па-чалавечы, але да яго дапамогі могуць запытаць толькі вельмі магутныя чараўнікі.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Сіняя світа, У.Сіўчыкаў 2015;",
      },
      {
        name: "Князь Бай",
        src: "Baj",
        description: `Князь Бай (Буй, Бой) - у беларускай міфалогіі першы чалавек на свеце, які з’явіўся ад іскр маланкі Пяруна.
<br/><br/>Паводле легенды, Князь Бай быў вельмі дужым Асілкам, кіраваў першымі людзьмі, любіў паляваць з лукам і сваімі неверагодна вялікімі псамі Стаўрамі і Гаўрамі. У князя было шмат дзяцей, ад якіх і пайшлі розныя народы ды плямёны.
<br/><br/>Калі Князь Бай паміраў, то падзяліў сваю зямлю-княства паміж усімі сваімі дзецьмі, толькі адзін яго сын - Белаполь - у гэты момант быў на паляванні, таму замест зямлі яму дасталіся сабакі князя - Стаўры і Гаўры - і наказ пусціць іх па волі: колькі зямлі яны за дзень абянуць, столькі і дастанецца Белаполю.
<br/><br/>Злавіў Белаполь дзвюх птушак: адну з паўднёвага мора, другую - з заходняга, пусціў іх і нацкаваў сабак!. Птушкі паляцелі кожная ў свой бок, а за імі пабеглі сабакі. І па слядах тых сабак пацяклі дзве найбуйнейшыя ракі Беларусі - Дзвіна і Дняпро. Белаполь пасяліўся ў гэтых месцах, і ад яго пайшоў мясцовы народ.
<br/><br/>Таксама Князь Бай перад смерцю загадаў пачаць традыцыю Стаўраўскіх Дзядоў - ушанаванне памерлых продкаў. Сам жа ён, як першы памерлы з чалавечага роду, пачаў кіраваць светам памерлых, апякаць памерлых і дапамагаць у гэтым Багам. Яго сабакі Стаўры і Гаўры пасля пачалі вартаваць шлях у Вырай і браму света памерлых на залатых ланцугах, а таксама суправаджаць памерлых у іншы свет.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011;",
      },
      {
        name: "Доля",
        src: "Dola",
        description: `Доля - у беларускай міфалогіі ўвасабленне шчаслівага лёсу, поспеху. Лічылася, што Доля была дарам багоў, сілай, дадзенай імі чалавеку для пераадолення жыццёвых цяжкасцей. Уяўлялася як нябачная воку прыгожая дзяўчына. Устанаўленне Долі адбывалася ў момант нараджэння і яна суправаджала чалавека да самай смерці, у значнай ступені ўплываючы на яго жыццё, лёс, учынкі і асобу. Доле, як істоце, супрацівапастаўляліся Нядоля і Злыдні - злой лёс, няшчасце.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Па слядах багоў: нарысы беларускай міфалогіі, З.Скварчэўскі, 2019; ",
      },
      {
        name: "Дзяды",
        src: "Dziady",
        description: `Дзяды - у беларускім фальклоры гэта назва добрых духаў памерлых, а таксама назва старажытнага абраду, свята ў гонар гэтых духаў. Беларусы святкуюць некалькі Дзядоў за год, але галоўнымі лічацца восеньскія. Паводле павер'яў, у гэты дзень духі продкаў спяшаюцца ў госці ў дамы жывых да вячэры. Звычайна адно з вокнаў у хаце пакідалі адчыненым, каб Дзяды патрапілі ў хату. Перад святочным вячэрай запальвалася свечкі. Асноўнай рытуальнай стравай Дзядоў лічылася куцця, часам аўсяны кісель і бліны.
<br/><br/>На наступны дзень пасля Дзядоў у некаторых мясцінах Беларусі наступалі Бабы - аналаг Дзядоў, але да куцці прыходзілі ўжо жаночыя постаці продкаў.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011;",
      },
      {
        name: "Шкурапея",
        src: "Shkurapeja",
        description: `Скурапея, Шкурапея — у беларускай міфалогіі галоўная змяя, гэта частка вобраза нейкага старажытнага змея з язычніцкіх міфаў, аналаг Ёрмунганда ў скандынаўскай міфалогіі.
          <br/><br/>Шкурапея прысутнічае ў беларускіх замовах дзеля лячэння чалавека, якога ўкусіла змяя. Паводле міфалогіі Шкурапея жыла пад Сусветным Дрэвам у недрах Залатой Гары, там дзе знаходзіўся Змяіны Вырай. Верагодна яна матуля ўсіх гадаў, а тата - Вужыны Кароль.`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011;",
      },
      {
        name: "Стаўры і Гаўры",
        src: "Staury-i-Haury",
        description: `Вырай - месца куды добрыя людзі, а таксама ўсе жывёлы, трапляюць пасля смерці. Гэтых памерлых, духі якіх ляцяць у залатую сядзібу, што каля Сусветнага Дрэва, беларусы называюць Дзядамі.
<br/><br/>Але вось якая справа, як Дзяды ды Бабы трапляюць у Вырай? Шлях туды, акрамя Багоў, ведаюць толькі некалькі істот.
<br/><br/>Сівы Воўк - кароль над усімі ваўкамі, першы воўк, якога стварыў ці то Бог, ці то Чорт - добра ведае ўсе сцяжынкі на свеце, часам ён і каля Сусветнага Дрэва адпачывае на жалезным ложку.
<br/><br/>Вужыны Кароль таксама ведае дарогу да каранёў Сусветнага Дрэва і кожны год водзіць сваё змяінае сямейства туды на зімоўку. Менавіта ў каранях, пад гарой, знаходзіцца Змяіны Вырай, але без Цара Вужоў ніводная змяя або цмок не знойдуць туды дарогі.
<br/><br/>А вось птушкі наадварот, нават без свайго цара Кука, ад ластаўкі да бусла, усе знойдуць дарогу ў Вырай, бо ведаюць Птушыны Шлях (Гусіную Дарогу, Вялікі Слуп) - дарога, якую Бацька Неба зрабіў спецыяльна для іх. Калісьці і людзі ведалі гэты шлях, але за грахі былі пазбаўлены гэтых ведаў.
<br/><br/>Дык як жа памерлыя знаходзяць дарогу ў Вырай? Легендарныя велізарныя сабакі Стаўры і Гаўры з’яўляюцца вартаўнікамі брамы царства памерлых. Яны і дапамагаюць памерлым знайсці адпаведны шлях, суправаджаюць Дзядоў у Вырай.
`,
        source:
          "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011;",
      },
        {
            name: "Люцыпар",
            src: "Charnabog",
            description: `Люцыпар, Анчыпар, Люцыфар, Люцыхвер, Лапцыхвір - у беларускай міфалогіі гэта ўсё найменні вышэйшага нячысціка, галоўнага Чорта або Чарнабога, якому молюцца Чарнабожнікі і з якім ладзяць дамовы Ведзьмы.<br/><br/>
Паводое старажытнага беларускага падання, Бог - Бацька Неба - ішоў па мору і ўбачыў вялізны пузыр, у якім нехта сядзеў. Ён спытаў - Хто там? Адказ быў - Бог. Тады хто ж я? - запытаўся Бацька Неба. Ты над усімі багамі Бог. Бацька выцягнуў істоту з пузыра і разам яны пачалі рабіць свет - падымаць зямлю з мора. Істотай гэтай і быў Люцыпар.<br/><br/>
Чорт схаваў трошачку зямлі ў сваім роце і хацеў пакінуць сабе, падмануць Бацьку Неба, але зямля пачала разрастацца і Чорт выплюнуў яе. Так з’явіліся балоты.<br/><br/>
На любое добрае стварэнне Бацькі, Чорт рабіў злое. Бог зрабіў пчол - Чорт зрабіў камароў. Бог зрабіў жывёл - Чорт зрабіў першага воўка. Бог з зямлі зрабіў чалавека - Чорт нарабіў у ім семдзесят сем дзірак - адтулін для ўсялякіх хвароб. Тады Бацька стварыў семдзесят сем вылечваючых траў - супраць той ці іншай хваробы.<br/><br/>
За свае злачынствы Люцыпар быў пакараны і адпраўлены ў Пекла, дзе за 12 дзвярыма ён закаваны 12 залатымі ланцугамі і сядзіць на сваім залатым троне. Побач снуюцца істоты падобныя на белых мядзведзяў з вялікімі вушамі і іншыя чэрці: Пякельнікі, Шатаны, Шэшкі, Прахі, Хіхітуны і інш. Часам, калі людзі робяць зло на зямлі, то ланцугі рвуцца. Нарэшце ён вырвецца на зямлю, наробіць шмат ліха і павядзе на возе, які будуць цягнуць белыя мядзведзі, сваё чорнае войска біцца з Пяруном і светлымі багамі.`,
            source:
                "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько 2011; Міфы бацькаўшчыны, У.Васілевіч 1994; Нарысы беларускай дэманалогіі А.Ненадавец 2022",
        },
    ],
  },
];

export default function loadGods() {
  return {
    data: {
      categories: gods,
      title: "БЕЛАРУСКІЯ БАГІ",
      description: `
        Праект «Беларускія Багі» быў распачаты ў 2022 годзе, ён ставіць перад сабой мэту рэканструкцыі вобразаў старажытных беларускіх багоў праз шэраг ілюстрацый выкананых у лічбавым фармаце. Гэта спроба сабраць у адно цэлае аўтэнтычны Беларускі Пантэон.<br/><br/>
        Тэма старажытных багоў вельмі складаная, таму што пісьмовых звестак амаль што няма, а ўплыў на гэтую тэму суседніх Балцкай Міфалогіі і Кіеўскага Пантэона вельмі вялікі. Але, дзякуючы багатаму вуснаму беларускаму фальклору і працам нашых навукоўцаў, ёсць магчымасць рэканструяваць вобразы некаторых багоў, канцэпцыю светапабудовы і нават асобныя міфы.
        `,
    },
  };
}

// JSON.stringify([
//   'Agniavik',
//   'Apiven',
//   'Bagan',
//   'Belaja-Baba',
//   'Budzimir',
//   'Charauniki',
//   'Chargavy',
//   'Dola',
//   'Dzed-Maroz',
//   'Dziady',
//   'Eratniki',
//   'Hleunik',
//   'Humennik',
//   'Kaliady',
//   'Kastamahi',
//   'Khatnik',
//   'Khohlik',
//   'Khut',
//   'Kikimora',
//   'Kopsha',
//   'Krasnalud',
//   'Kriksa',
//   'Khihitun',
//   'Kryzhatsik',
//   'Kumelgan',
//   'Laznik',
//   'Marnia',
//   'Mesha',
//   'Nachnitsa',
//   'Naktyr',
//   'Oh',
//   'Paliandra',
//   'Pan',
//   'Pasechnik',
//   'Pavetnica',
//   'Pavuk',
//   'Piachurnik',
//   'Punnik',
//   'Spornik',
//   'Stupalaka',
//   'Valasen',
//   'Vargin',
//   'Vastruha',
//   'Vaukalak',
//   'Vazila',
//   'Witches',
//   'Younik',
//   'Zhaleznaja-Baba',
// ].map(name => ({
//   name: 'Агонь',
//   src: name,
//   description: 'Рыбны тэкст рыбны тэкст і яшчэ адзін рыбны тэкст і яшчэ адзін рыбны тэкст і яшчэ адзін рыбны тэкст і яшчэ адзін рыбны тэкст і яшчэ адзін рыбны тэкст і яшчэ адзін рыбны тэкст',
// })))
