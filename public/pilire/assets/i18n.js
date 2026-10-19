/* Local copy only. No analytics or network requests. */
(function () {
'use strict';
const translations = {
  "cs": {
    "title": "Pilíře · Úkoly a návyky s herní odměnou",
    "description": "Úkoly na dnešek, opakující se pilíře a návyky s herní odměnou. Pro lidi s ADHD i každého, kdo chce budovat návyky. První verze je zdarma ke stažení na App Storu.",
    "skip": "Přejít na obsah",
    "nav_how": "Jak to funguje",
    "nav_island": "Ostrov",
    "nav_status": "Ke stažení na App Storu",
    "language": "Jazyk webu",
    "hero_label": "Úkoly a návyky s herní odměnou",
    "hero_title": "Splň své úkoly.<br>Buduj si návyky.",
    "hero_lede": "Pilíře jsou úkoly, na kterých ti záleží. Těm, ke kterým se chceš vracet, nastavíš opakování. Za každé splnění získáš materiál na vlastní městečko.",
    "hero_cta": "Stáhnout na App Storu",
    "hero_secondary": "Prohlédnout městečko",
    "hero_meta": "Zdarma · Bez reklam · Bez nákupů v aplikaci",
    "scene_label": "Městečko z Pilířů",
    "scene_note": "Ukázkový ostrov. Přepni mezi dnem a nocí.",
    "scene_alt": "Ukázkové městečko vykreslené aktuální verzí Pilířů: domy, cesty, stromy a vodopády na plovoucím ostrově.",
    "day": "Den",
    "night": "Noc",
    "scene_control": "Denní doba ukázky",
    "how_label": "Od úkolu k pravidelnému návyku",
    "how_title": "Začni úkolem. Vracej se k němu po svém.",
    "step1_title": "Napiš si svůj pilíř",
    "step1_text": "Pilíř je tvůj úkol. Zavolat babičce, jít se projít nebo přečíst deset stránek. Můžeš mu dát čas a naplánovat si i zítřek.",
    "step2_title": "Nastav mu opakování",
    "step2_text": "Z úkolu uděláš pravidelný pilíř. Vybereš dny v týdnu a případně připomínku. V naplánované dny se objeví mezi dnešními úkoly. Opakováním si postupně buduješ návyk.",
    "step3_title": "Za splnění přijde odměna",
    "step3_text": "Dřevo dostaneš hned za splněný pilíř. Při uzavření dne získáš podle počtu hotových úkolů také cihly a ocel. Z materiálu si postavíš něco do městečka.",
    "island_label": "Tvoje místo nad mraky",
    "island_title": "Od první chalupy<br>až po katedrálu.",
    "island_intro": "Domy stavíš, otáčíš a přesouváš podle sebe. Co zrovna nepotřebuješ, schováš do inventáře. Cesty kreslíš tahem prstu. Mezi ně se vejde rybníček, lavička nebo krmítko, na které opravdu přilétají ptáci.",
    "stat_buildings": "druhů budov",
    "stat_animals": "druhů zvířat",
    "stat_badges": "odznaků",
    "stats_note": "A připravuje se mnohem víc.",
    "animal_title": "Místo i pro čtyřnohé sousedy",
    "animal_text": "Pes, husky, liška, vlk, srnec, kráva, kůň a alpaka si chodí po ostrově. Psovi postavíš boudu se jménem, doplníš misku a můžeš ho pohladit.",
    "season_title": "Ostrov se mění s rokem",
    "season_text": "Na Halloween a Vánoce přibývají sezónní stavby a dekorace. Co si pořídíš, zůstane v inventáři i po konci sezóny.",
    "night_caption": "Večer se rozsvítí okna. Den a noc se ve hře řídí skutečným časem.",
    "night_alt": "Detail aktuální herní scény v noci, s rozsvícenými okny, cestami a stromy.",
    "daily_label": "Každodenní používání",
    "daily_title": "Úkoly, opakování a přehled o tom, co se podařilo.",
    "habit_title": "Z úkolu udělej opakující se pilíř",
    "habit_text": "Existující úkol můžeš změnit na návyk. Vyber mu dny opakování, vlastní čas a volitelnou připomínku. Naplánovaný pilíř přidáš do Apple Kalendáře, návyk do Připomínek.",
    "calendar_title": "Kalendář a týdenní truhla",
    "calendar_text": "V kalendáři vidíš splněné pilíře, návyky i postavené budovy. Za týden s alespoň jedním splněným pilířem každý den získáš truhlu s překvapením.",
    "momentum_title": "Momentum",
    "momentum_text": "Roste, když aplikaci otevřeš, a zvyšuje odměny až na 1,6násobek. Za každý vynechaný den klesne o bod. Postavené město ti zůstává.",
    "chronicle_title": "Kronika a odznaky",
    "chronicle_text": "Najdi si uzavřený den i to, co jsi během něj postavil. Za milníky získáš odznaky, které už ti nikdo nevezme.",
    "pause_title": "Den nevyšel? Městečko počká.",
    "pause_text": "Nedokončený pilíř můžeš přesunout na dnešek, nebo ho nechat být. Domy se nebourají a získané odznaky zůstávají. Pokračuj, až se ti to hodí.",
    "story_label": "Proč Pilíře vznikly",
    "story_title": "Aby se nezapomnělo na obyčejné věci.",
    "story_p1": "Koupit ženě kytku, ozvat se rodině nebo vyrazit se psem na pořádnou procházku. Právě takovým věcem říkám pilíře dne. Chtěl jsem pro ně místo, kam se budu rád vracet.",
    "story_p2": "Chtěl jsem se k těm úkolům vracet a z některých si vytvořit návyk. V Pilířích za každé splnění získám materiál a můžu si něco postavit. Městečko mi tak připomíná, co se mi už podařilo.",
    "author_role": "Tvůrce Pilířů",
    "privacy_label": "Tvoje úkoly patří tobě",
    "privacy_title": "Všechno zůstává v telefonu.",
    "privacy_text": "Aplikace funguje offline a nepotřebuje účet. Úkoly, návyky ani tvoje město neposílá na server. Neobsahuje reklamy, analytiku ani sledování.",
    "faq_title": "Ještě pár praktických věcí",
    "faq1_q": "Kde si Pilíře stáhnu?",
    "faq1_a": "První verze Pilířů je dostupná zdarma na App Storu pod názvem Pilíře: Návyky a město. Stáhneš si ji do iPhonu s iOS 26.5 nebo novějším. Aplikace je v češtině, slovenštině a angličtině.",
    "faq2_q": "Kolik Pilíře stojí?",
    "faq2_a": "Pilíře jsou zdarma, bez reklam a bez nákupů v aplikaci. Materiál a herní mince získáváš hraním.",
    "faq3_q": "Musím povolit Kalendář a Připomínky?",
    "faq3_a": "Nemusíš. Připomínky, oznámení i export do Kalendáře jsou volitelné. Přístup aplikace žádá až pro funkci, kterou si vybereš. Kalendář používá jen pro zápis, tvoje existující události nečte.",
    "faq4_q": "Jak smažu svá data?",
    "faq4_a": "V nastavení aplikace vyber Smazat všechna data. Data odstraní také smazání aplikace. Pokud používáš zálohu iPhonu na iCloud, může obsahovat i data Pilířů; k té máš přístup ty a Apple, ne tvůrce aplikace.",
    "release_title": "První verze je venku.",
    "release_text": "Pilíře: Návyky a město si už můžeš zdarma stáhnout na App Storu. Napiš si první úkol, splň ho a postav první kousek svého městečka.",
    "release_cta": "Stáhnout na App Storu",
    "footer_text": "Pilíře tvoří Lukáš Červenka.",
    "contact": "Kontakt",
    "privacy_link": "Soukromí",
    "footer_status": "Dostupné na App Storu · iPhone · CS / SK / EN",
    "sunset_label": "18:00 · Podvečer na ostrově",
    "sunset_title": "Večer se rozsvítí okna.",
    "sunset_text": "Slunce zapadá, v domech se rozsvěcí a u ohniště hoří oheň. Světlo na tvém ostrově se mění podle skutečného času.",
    "sunset_alt": "Městečko Pilíře při západu slunce: teplé podvečerní světlo, rozsvícená okna a hořící ohniště na plovoucím ostrově.",
    "hero_audience": "Pro lidi s ADHD i každého, komu pomáhá vidět odměnu hned.",
    "focus_label": "S myšlenkou na lidi s ADHD",
    "focus_title": "Herní odměna za úkol, který jsi opravdu splnil.",
    "focus_text": "Pilíře jsou i pro lidi s ADHD a pro každého, kdo chce podpořit pravidelnost odměnou. Vybereš si pár dnešních úkolů, nastavíš vlastní připomínku a po splnění hned uvidíš, co jsi získal.",
    "focus_return": "Když den nevyjde, můžeš nedokončený úkol přesunout na dnešek. Městečko ti zůstává a pokračuješ, až se ti to hodí.",
    "habit_quote": "„Změna nemusí být rychlá a není vždy snadná. Ale s časem a úsilím lze téměř jakýkoli návyk přetvořit.“",
    "quote_note": "Český překlad citátu. Odkaz vede na originál u autora.",
    "overview_label": "Podívej se dovnitř",
    "overview_title": "Tvoje pilíře, od prvního úkolu po odměnu.",
    "overview_intro": "Aktuální obrazovky aplikace s ukázkovými daty. Klepnutím si každou prohlédneš zblízka.",
    "overview_tasks_title": "Dnešní pilíře",
    "overview_tasks_desc": "Úkoly na dnešek i plán na zítřek. Splněné věci máš na očích.",
    "overview_tasks_alt": "Aktuální obrazovka Dnešní pilíře s ukázkovými úkoly a jejich splněním.",
    "overview_habits_title": "Opakování a návyky",
    "overview_habits_desc": "Vyber dny, čas a připomínku. Z úkolu uděláš pravidelný pilíř.",
    "overview_habits_alt": "Aktuální editor návyku s výběrem dnů opakování a připomínky.",
    "overview_build_title": "Odměna za splnění",
    "overview_build_desc": "Získaný materiál utratíš za domy a výzdobu svého městečka.",
    "overview_build_alt": "Aktuální katalog budov a dekorací v Pilířích s cenami za herní materiál.",
    "overview_progress_title": "Tvůj pokrok",
    "overview_progress_desc": "Kalendář, týdenní truhla a odznaky za to, co se ti podařilo.",
    "overview_progress_alt": "Aktuální kalendář Pilířů s novou týdenní truhlou a ukázkovou historií.",
    "overview_zoom": "Zvětšit ukázku",
    "overview_prev": "Předchozí karta",
    "overview_next": "Další karta",
    "overview_controls": "Ovládání přehledu aplikace",
    "overview_dialog_title": "Ukázka aplikace",
    "overview_close": "Zavřít",
    "nav_overview": "Ukázky"
  },
  "sk": {
    "title": "Pilíře · Úlohy a návyky s hernou odmenou",
    "description": "Úlohy na dnešok, opakujúce sa piliere a návyky s hernou odmenou. Pre ľudí s ADHD aj každého, kto chce budovať návyky. Prvá verzia je zadarmo na stiahnutie v App Store.",
    "skip": "Prejsť na obsah",
    "nav_how": "Ako to funguje",
    "nav_island": "Ostrov",
    "nav_status": "Na stiahnutie v App Store",
    "language": "Jazyk webu",
    "hero_label": "Úlohy a návyky s hernou odmenou",
    "hero_title": "Splň svoje úlohy.<br>Buduj si návyky.",
    "hero_lede": "Piliere sú úlohy, na ktorých ti záleží. Tým, ku ktorým sa chceš vracať, nastavíš opakovanie. Za každé splnenie získaš materiál na vlastné mestečko.",
    "hero_cta": "Stiahnuť v App Store",
    "hero_secondary": "Prezrieť mestečko",
    "hero_meta": "Zadarmo · Bez reklám · Bez nákupov v aplikácii",
    "scene_label": "Mestečko z Pilířov",
    "scene_note": "Ukážkový ostrov. Prepni medzi dňom a nocou.",
    "scene_alt": "Ukážkové mestečko vykreslené aktuálnou verziou Pilířov: domy, cesty, stromy a vodopády na plávajúcom ostrove.",
    "day": "Deň",
    "night": "Noc",
    "scene_control": "Denná doba ukážky",
    "how_label": "Od úlohy k pravidelnému návyku",
    "how_title": "Začni úlohou. Vracaj sa k nej po svojom.",
    "step1_title": "Napíš si svoj pilier",
    "step1_text": "Pilier je tvoja úloha. Zavolať babke, ísť sa prejsť alebo prečítať desať strán. Môžeš mu dať čas a naplánovať si aj zajtrajšok.",
    "step2_title": "Nastav mu opakovanie",
    "step2_text": "Z úlohy urobíš pravidelný pilier. Vyberieš dni v týždni a prípadne pripomienku. V naplánované dni sa objaví medzi dnešnými úlohami. Opakovaním si postupne buduješ návyk.",
    "step3_title": "Za splnenie príde odmena",
    "step3_text": "Drevo dostaneš hneď za splnený pilier. Pri uzavretí dňa získaš podľa počtu hotových úloh aj tehly a oceľ. Z materiálu si postavíš niečo do mestečka.",
    "island_label": "Tvoje miesto nad oblakmi",
    "island_title": "Od prvej chalupy<br>až po katedrálu.",
    "island_intro": "Domy staviaš, otáčaš a presúvaš podľa seba. Čo práve nepotrebuješ, schováš do inventára. Cesty kreslíš ťahom prsta. Medzi ne sa zmestí jazierko, lavička alebo kŕmidlo, na ktoré naozaj prilietajú vtáky.",
    "stat_buildings": "druhov budov",
    "stat_animals": "druhov zvierat",
    "stat_badges": "odznakov",
    "stats_note": "A pripravuje sa oveľa viac.",
    "animal_title": "Miesto aj pre štvornohých susedov",
    "animal_text": "Pes, husky, líška, vlk, srnec, krava, kôň a alpaka si chodia po ostrove. Psovi postavíš búdu s menom, doplníš misku a môžeš ho pohladkať.",
    "season_title": "Ostrov sa mení s rokom",
    "season_text": "Na Halloween a Vianoce pribúdajú sezónne stavby a dekorácie. Čo si zaobstaráš, zostane v inventári aj po konci sezóny.",
    "night_caption": "Večer sa rozsvietia okná. Deň a noc sa v hre riadia skutočným časom.",
    "night_alt": "Detail aktuálnej hernej scény v noci, s rozsvietenými oknami, cestami a stromami.",
    "daily_label": "Každodenné používanie",
    "daily_title": "Úlohy, opakovanie a prehľad o tom, čo sa podarilo.",
    "habit_title": "Z úlohy urob opakujúci sa pilier",
    "habit_text": "Existujúcu úlohu môžeš zmeniť na návyk. Vyber jej dni opakovania, vlastný čas a voliteľnú pripomienku. Naplánovaný pilier pridáš do Apple Kalendára, návyk do Pripomienok.",
    "calendar_title": "Kalendár a týždenná truhlica",
    "calendar_text": "V kalendári vidíš splnené piliere, návyky aj postavené budovy. Za týždeň s aspoň jedným splneným pilierom každý deň získaš truhlicu s prekvapením.",
    "momentum_title": "Momentum",
    "momentum_text": "Rastie, keď aplikáciu otvoríš, a zvyšuje odmeny až na 1,6-násobok. Za každý vynechaný deň klesne o bod. Postavené mesto ti zostáva.",
    "chronicle_title": "Kronika a odznaky",
    "chronicle_text": "Nájdi si uzavretý deň aj to, čo si počas neho postavil. Za míľniky získaš odznaky, ktoré ti už nikto nevezme.",
    "pause_title": "Deň nevyšiel? Mestečko počká.",
    "pause_text": "Nedokončený pilier môžeš presunúť na dnešok alebo ho nechať tak. Domy sa nebúrajú a získané odznaky zostávajú. Pokračuj, keď sa ti to hodí.",
    "story_label": "Prečo Pilíře vznikli",
    "story_title": "Aby sa nezabudlo na obyčajné veci.",
    "story_p1": "Kúpiť žene kvety, ozvať sa rodine alebo vyraziť so psom na poriadnu prechádzku. Práve takým veciam hovorím piliere dňa. Chcel som pre ne miesto, kam sa budem rád vracať.",
    "story_p2": "Chcel som sa k tým úlohám vracať a z niektorých si vytvoriť návyk. V Pilířoch za každé splnenie získam materiál a môžem si niečo postaviť. Mestečko mi tak pripomína, čo sa mi už podarilo.",
    "author_role": "Tvorca Pilířov",
    "privacy_label": "Tvoje úlohy patria tebe",
    "privacy_title": "Všetko zostáva v telefóne.",
    "privacy_text": "Aplikácia funguje offline a nepotrebuje účet. Úlohy, návyky ani tvoje mesto neposiela na server. Neobsahuje reklamy, analytiku ani sledovanie.",
    "faq_title": "Ešte pár praktických vecí",
    "faq1_q": "Kde si Pilíře stiahnem?",
    "faq1_a": "Prvá verzia Pilířov je dostupná zadarmo v App Store pod názvom Pilíře: Úlohy, návyky a mesto. Stiahneš si ju do iPhonu s iOS 26.5 alebo novším. Aplikácia je v češtine, slovenčine a angličtine.",
    "faq2_q": "Koľko Pilíře stoja?",
    "faq2_a": "Pilíře sú zadarmo, bez reklám a bez nákupov v aplikácii. Materiál a herné mince získavaš hraním.",
    "faq3_q": "Musím povoliť Kalendár a Pripomienky?",
    "faq3_a": "Nemusíš. Pripomienky, oznámenia aj export do Kalendára sú voliteľné. Prístup aplikácia žiada až pre funkciu, ktorú si vyberieš. Kalendár používa len na zápis, tvoje existujúce udalosti nečíta.",
    "faq4_q": "Ako vymažem svoje dáta?",
    "faq4_a": "V nastavení aplikácie vyber Vymazať všetky dáta. Dáta odstráni aj vymazanie aplikácie. Ak používaš zálohu iPhonu na iCloud, môže obsahovať aj dáta Pilířov; k nej máš prístup ty a Apple, nie tvorca aplikácie.",
    "release_title": "Prvá verzia je vonku.",
    "release_text": "Pilíře: Úlohy, návyky a mesto si už môžeš zadarmo stiahnuť v App Store. Napíš si prvú úlohu, splň ju a postav prvý kúsok svojho mestečka.",
    "release_cta": "Stiahnuť v App Store",
    "footer_text": "Pilíře tvorí Lukáš Červenka.",
    "contact": "Kontakt",
    "privacy_link": "Súkromie",
    "footer_status": "Dostupné v App Store · iPhone · CS / SK / EN",
    "sunset_label": "18:00 · Podvečer na ostrove",
    "sunset_title": "Večer sa rozsvietia okná.",
    "sunset_text": "Slnko zapadá, v domoch sa rozsvecuje a pri ohnisku horí oheň. Svetlo na tvojom ostrove sa mení podľa skutočného času.",
    "sunset_alt": "Mestečko Pilíře pri západe slnka: teplé podvečerné svetlo, rozsvietené okná a horiace ohnisko na plávajúcom ostrove.",
    "hero_audience": "Pre ľudí s ADHD aj každého, komu pomáha vidieť odmenu hneď.",
    "focus_label": "S myšlienkou na ľudí s ADHD",
    "focus_title": "Herná odmena za úlohu, ktorú si naozaj splnil.",
    "focus_text": "Pilíře sú aj pre ľudí s ADHD a pre každého, kto chce podporiť pravidelnosť odmenou. Vyberieš si pár dnešných úloh, nastavíš vlastnú pripomienku a po splnení hneď uvidíš, čo si získal.",
    "focus_return": "Keď deň nevyjde, môžeš nedokončenú úlohu presunúť na dnešok. Mestečko ti zostáva a pokračuješ, keď sa ti to hodí.",
    "habit_quote": "„Zmena nemusí byť rýchla a nie je vždy ľahká. Ale s časom a úsilím možno takmer akýkoľvek návyk pretvoriť.“",
    "quote_note": "Slovenský preklad citátu. Odkaz vedie na originál u autora.",
    "overview_label": "Pozri sa dovnútra",
    "overview_title": "Tvoje piliere, od prvej úlohy po odmenu.",
    "overview_intro": "Aktuálne obrazovky aplikácie s ukážkovými dátami. Ťuknutím si každú prezrieš zblízka.",
    "overview_tasks_title": "Dnešné piliere",
    "overview_tasks_desc": "Úlohy na dnešok aj plán na zajtrajšok. Splnené veci máš na očiach.",
    "overview_tasks_alt": "Aktuálna obrazovka Dnešné piliere s ukážkovými úlohami a ich splnením.",
    "overview_habits_title": "Opakovanie a návyky",
    "overview_habits_desc": "Vyber dni, čas a pripomienku. Z úlohy urobíš pravidelný pilier.",
    "overview_habits_alt": "Aktuálny editor návyku s výberom dní opakovania a pripomienky.",
    "overview_build_title": "Odmena za splnenie",
    "overview_build_desc": "Získaný materiál minieš na domy a výzdobu svojho mestečka.",
    "overview_build_alt": "Aktuálny katalóg budov a dekorácií v Pilířoch s cenami za herný materiál.",
    "overview_progress_title": "Tvoj pokrok",
    "overview_progress_desc": "Kalendár, týždenná truhlica a odznaky za to, čo sa ti podarilo.",
    "overview_progress_alt": "Aktuálny kalendár Pilířov s novou týždennou truhlicou a ukážkovou históriou.",
    "overview_zoom": "Zväčšiť ukážku",
    "overview_prev": "Predchádzajúca karta",
    "overview_next": "Ďalšia karta",
    "overview_controls": "Ovládanie prehľadu aplikácie",
    "overview_dialog_title": "Ukážka aplikácie",
    "overview_close": "Zavrieť",
    "nav_overview": "Ukážky"
  },
  "en": {
    "title": "Pilíře · Tasks and habits with game rewards",
    "description": "Daily tasks, recurring pillars and habits with game rewards. For people with ADHD and anyone building habits. The first version is available free on the App Store.",
    "skip": "Skip to content",
    "nav_how": "How it works",
    "nav_island": "The island",
    "nav_status": "Available on the App Store",
    "language": "Website language",
    "hero_label": "Tasks and habits with game rewards",
    "hero_title": "Finish your tasks.<br>Build your habits.",
    "hero_lede": "Your pillars are tasks that matter to you. Set the ones you want to return to on repeat. Each completed task earns materials for a town of your own.",
    "hero_cta": "Download on the App Store",
    "hero_secondary": "Explore the town",
    "hero_meta": "Free · No ads · No in-app purchases",
    "scene_label": "A town in Pilíře",
    "scene_note": "An example island. Switch between day and night.",
    "scene_alt": "An example town rendered by the current version of Pilíře: houses, paths, trees and waterfalls on a floating island.",
    "day": "Day",
    "night": "Night",
    "scene_control": "Time of day in the preview",
    "how_label": "From a task to a regular habit",
    "how_title": "Start with a task. Return to it your way.",
    "step1_title": "Write down your pillar",
    "step1_text": "A pillar is your task. Call grandma, go for a walk or read ten pages. Give it a time, or plan ahead for tomorrow.",
    "step2_title": "Set it to repeat",
    "step2_text": "Turn a task into a recurring pillar. Choose weekdays and an optional reminder. It appears in your daily tasks on the days you picked. Build a habit through repetition over time.",
    "step3_title": "Finish it and earn a reward",
    "step3_text": "You earn wood as soon as you finish a pillar. Close the day to earn bricks and steel too, depending on how many tasks you finished. Spend your materials on something for your town.",
    "island_label": "Your place above the clouds",
    "island_title": "From your first cottage<br>to a cathedral.",
    "island_intro": "Place, rotate and move buildings as you like. Put anything you do not need in your inventory. Draw roads with your finger. Add a pond, a bench or a bird feeder that birds actually visit.",
    "stat_buildings": "building types",
    "stat_animals": "animal species",
    "stat_badges": "badges",
    "stats_note": "And much more is on the way.",
    "animal_title": "Room for four-legged neighbours",
    "animal_text": "A dog, a husky, a fox, a wolf, a deer, a cow, a horse and an alpaca wander around the island. Give your dog a kennel with its name on it, fill the bowl and pet it.",
    "season_title": "The island changes with the year",
    "season_text": "Halloween and Christmas bring seasonal buildings and decorations. Whatever you buy stays in your inventory after the season ends.",
    "night_caption": "Windows light up in the evening. In the game, day and night follow the real clock.",
    "night_alt": "A close-up of the current game scene at night, with lit windows, paths and trees.",
    "daily_label": "Everyday use",
    "daily_title": "Your tasks, repeats and a record of what you finished.",
    "habit_title": "Turn a task into a recurring pillar",
    "habit_text": "Make an existing task a habit. Choose repeat days, a time and an optional reminder. Add a scheduled pillar to Apple Calendar or a habit to Reminders.",
    "calendar_title": "Calendar and weekly chest",
    "calendar_text": "See finished pillars, habits and new buildings in your calendar. Finish at least one pillar every day of the week to earn a chest with a surprise inside.",
    "momentum_title": "Momentum",
    "momentum_text": "It grows when you open the app and boosts rewards up to 1.6×. It drops by one point for each day you miss. Your town stays yours.",
    "chronicle_title": "Chronicle and badges",
    "chronicle_text": "Find a day you closed and what you built during it. Earn badges for milestones and keep them for good.",
    "pause_title": "Missed a day? Your town will wait.",
    "pause_text": "Carry an unfinished pillar forward to today, or let it go. Your houses stay standing and you keep your badges. Come back when it suits you.",
    "story_label": "Why I made Pilíře",
    "story_title": "To remember the ordinary things.",
    "story_p1": "Buy my wife flowers, call my family, take the dog for a proper walk. Those are the things I call pillars of the day. I wanted a place for them that I would enjoy coming back to.",
    "story_p2": "I wanted to return to those tasks and turn some of them into habits. In Pilíře, each one I finish earns materials I can build with. The town reminds me of what I have already done.",
    "author_role": "Creator of Pilíře",
    "privacy_label": "Your tasks belong to you",
    "privacy_title": "Everything stays on your phone.",
    "privacy_text": "The app works offline and needs no account. Your tasks, habits and town are never sent to a server. The app has no ads, analytics or tracking.",
    "faq_title": "A few practical details",
    "faq1_q": "Where can I download Pilíře?",
    "faq1_a": "The first version is available free on the App Store as Pilíře: Habits & Tiny Town. Download it on an iPhone with iOS 26.5 or later. The app supports Czech, Slovak and English.",
    "faq2_q": "How much does Pilíře cost?",
    "faq2_a": "Pilíře is free, with no ads or in-app purchases. You earn materials and game coins by playing.",
    "faq3_q": "Do I have to allow Calendar and Reminders access?",
    "faq3_a": "No. Reminders, notifications and Calendar export are optional. The app asks for access when you choose the relevant feature. Calendar access is write-only: the app cannot read your existing events.",
    "faq4_q": "How do I delete my data?",
    "faq4_a": "Choose Delete all data in the app settings. Deleting the app also removes its data. If you back up your iPhone to iCloud, that backup may include Pilíře data; only you and Apple have access to it, not the app creator.",
    "release_title": "The first version is here.",
    "release_text": "Pilíře: Habits & Tiny Town is now available free on the App Store. Add your first task, finish it and build the first piece of your town.",
    "release_cta": "Download on the App Store",
    "footer_text": "Pilíře is made by Lukáš Červenka.",
    "contact": "Contact",
    "privacy_link": "Privacy",
    "footer_status": "Available on the App Store · iPhone · CS / SK / EN",
    "sunset_label": "18:00 · Evening on the island",
    "sunset_title": "The windows light up at dusk.",
    "sunset_text": "The sun sets, the windows light up and a fire burns in the fire pit. The light on your island changes with the real clock.",
    "sunset_alt": "The town in Pilíře at sunset: warm evening light, lit windows and a burning fire pit on a floating island.",
    "hero_audience": "For people with ADHD and anyone who enjoys an immediate reward.",
    "focus_label": "With people with ADHD in mind",
    "focus_title": "A game reward for a task you really finished.",
    "focus_text": "Pilíře is for people with ADHD and anyone who wants a reward for showing up regularly. Pick a few tasks for today, set your own reminder and see what you earned as soon as you finish.",
    "focus_return": "When a day does not go to plan, carry an unfinished task forward to today. Your town stays yours. Come back when it suits you.",
    "habit_quote": "“Change might not be fast and it isn't always easy. But with time and effort, almost any habit can be reshaped.”",
    "quote_note": "Read the original passage on the author’s website.",
    "overview_label": "Take a look inside",
    "overview_title": "Your pillars, from the first task to the reward.",
    "overview_intro": "Current app screens with example data. Select a screen to take a closer look.",
    "overview_tasks_title": "Today’s pillars",
    "overview_tasks_desc": "Tasks for today and plans for tomorrow. See what you have finished.",
    "overview_tasks_alt": "The current daily pillars screen with example tasks and their completion status.",
    "overview_habits_title": "Repeats and habits",
    "overview_habits_desc": "Choose days, a time and a reminder. Make a task a recurring pillar.",
    "overview_habits_alt": "The current habit editor with repeat days and reminder settings.",
    "overview_build_title": "Rewards for finishing",
    "overview_build_desc": "Spend the materials you earned on houses and decorations for your town.",
    "overview_build_alt": "The current Pilíře building and decoration catalogue with material prices.",
    "overview_progress_title": "Your progress",
    "overview_progress_desc": "Your calendar, weekly chest and badges for what you have done.",
    "overview_progress_alt": "The current Pilíře calendar with the new weekly chest and example activity.",
    "overview_zoom": "Enlarge preview",
    "overview_prev": "Previous card",
    "overview_next": "Next card",
    "overview_controls": "App overview controls",
    "overview_dialog_title": "App preview",
    "overview_close": "Close",
    "nav_overview": "Screens"
  }
};
function setLanguage(code) {
  const lang = Object.hasOwn(translations, code) ? code : 'cs';
  const text = translations[lang];
  document.documentElement.lang = lang;
  document.title = text.title;
  try { localStorage.setItem('pilire_lang', lang); } catch (_) {}
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = text[el.dataset.i18n];
    if (value === undefined) return;
    // Only our two fixed, translated headings contain markup.
    if (['hero_title', 'island_title'].includes(el.dataset.i18n)) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => el.alt = text[el.dataset.i18nAlt]);
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', text[el.dataset.i18nAria]));
  document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  ['description', 'og:title', 'og:description'].forEach(key => {
    const el = document.querySelector(key === 'description' ? 'meta[name="description"]' : 'meta[property="'+key+'"]');
    if (el) el.content = text[key === 'og:title' ? 'title' : 'description'];
  });
  document.querySelectorAll('[data-overview-image]').forEach(el => { el.src = 'assets/overview/'+lang+'/'+el.dataset.overviewImage+'.webp'; });
  document.querySelectorAll('[data-overview-link]').forEach(el => { el.href = 'assets/overview/'+lang+'/'+el.dataset.overviewLink+'.webp'; });
  document.querySelector('meta[property="og:locale"]').content = {cs:'cs_CZ',sk:'sk_SK',en:'en_GB'}[lang];
}
let saved = 'cs';
try { saved = localStorage.getItem('pilire_lang') || 'cs'; } catch (_) {}
document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', () => setLanguage(el.dataset.lang)));
setLanguage(saved);
const hero = document.getElementById('hero-island');
const stage = document.querySelector('.scene-stage');
document.querySelector('.scene-controls').hidden = false;
document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click', () => {
  const phase = button.dataset.scene;
  hero.src = 'assets/island-'+phase+'.webp';
  stage.dataset.time = phase;
  document.querySelectorAll('[data-scene]').forEach(el => el.setAttribute('aria-pressed', String(el === button)));
}));

// Manual carousel only: swipe, arrow buttons and keyboard all reach the same cards.
const track = document.getElementById('overview-track');
const cards = [...track.children];
const navigation = document.querySelector('.overview-controls');
const directionButtons = [...document.querySelectorAll('[data-overview-direction]')];
function updateOverviewNavigation() {
  const max = track.scrollWidth - track.clientWidth;
  directionButtons[0].disabled = track.scrollLeft <= 2;
  directionButtons[1].disabled = track.scrollLeft >= max - 2;
  const nearest = cards.reduce((best, card, index) => {
    const distance = Math.abs(card.getBoundingClientRect().left - track.getBoundingClientRect().left);
    return distance < best.distance ? {index, distance} : best;
  }, {index:0, distance:Infinity}).index;
  const status = document.querySelector('.overview-position');
  const position = (nearest+1)+' / '+cards.length;
  if (status.textContent !== position) status.textContent = position;
}
function moveOverview(direction) {
  const width = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0');
  track.scrollBy({left:direction*width, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}
navigation.hidden = false;
directionButtons.forEach(button => button.addEventListener('click', () => moveOverview(Number(button.dataset.overviewDirection))));
track.addEventListener('scroll', updateOverviewNavigation, {passive:true});
window.addEventListener('resize', updateOverviewNavigation);
track.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const current = cards.findIndex(card => card.contains(document.activeElement));
  if (current < 0) return;
  const next = Math.max(0, Math.min(cards.length-1, current+(event.key === 'ArrowRight' ? 1 : -1)));
  event.preventDefault();
  cards[next].querySelector('a').focus();
});
updateOverviewNavigation();
const overviewDialog = document.querySelector('.overview-dialog');
const largePreview = overviewDialog.querySelector('img');
let previewOpener;
document.querySelectorAll('[data-overview-link]').forEach(link => link.addEventListener('click', event => {
  if (typeof overviewDialog.showModal !== 'function') return;
  event.preventDefault();
  const image = link.querySelector('img');
  largePreview.src = image.currentSrc || image.src;
  largePreview.alt = image.alt;
  previewOpener = link;
  overviewDialog.showModal();
}));
overviewDialog.querySelector('button').addEventListener('click', () => overviewDialog.close());
overviewDialog.addEventListener('click', event => { if (event.target === overviewDialog) overviewDialog.close(); });
overviewDialog.addEventListener('close', () => { if (previewOpener) previewOpener.focus({preventScroll:true}); });

})();
