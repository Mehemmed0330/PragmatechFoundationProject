# Araşdırma 1
## Suallar və cavablar
1. justify-content və align-items xüsusiyyətləri arasındakı fərqləri izah edin
 - `justify-content` sıra içərisində boşluqları təyin edir.Ancaq `align-items` sütun içərisində boşluqları təyin edir.
2. align-items və align-content arasındakı fərqləri izah edin
- `align-content` sətirlər arasındakı boşluğu, `align-items` maddələrin bütövlükdə konteyner içərisində necəuyğunlaşdığını təyin edir.
3. box-sizing: border-box xüsusiyyəti hansı hallarda istifadə olunur?
- html `elementinin box-sizing:border-box;` Xassəni tətbiq etdiyimiz zaman, `border` və `padding` dəyərləri də`width` dəyəri daxilində qəbul edilir.`Box-sizing` xüsusiyyəti sayəsində qutular `width` xüsusiyyətində göstəriləndəyər qədər yer tutur.
4. inline styling hansı hallarda istifadə oluna bilər?
- `Inline stylink` sürətli HTML / CSS maketləri və ya prototipləri yaratarkən və ya digər elementlərlə bölüşdürülməsinəzərdə tutulmayan müvəqqəti `style`lar üçün istifadə edilə bilər. Problemləri yerli olaraq həll edərkən istehsaldasürətli bir düzəliş lazım olduqda da istifadə edilə bilər.
5. css-də !important və inherit ifadələrinin mənası nədir?
- CSS-də `!important` "bu vacibdir" deməkdir, sonrakı bütün qaydalara məhəl qoymayın və `apply!` `important rule andthe !` mühüm açar söz, nöqtəli vergüldən dərhal əvvəl sətrin sonunda yerləşdirilməlidir.
- Bütün elementlərə `inherit` dəyəri təyin edə bilərik . `inherit` dəyərini təyin etdiyimiz element üst elementin dəyərlərini alacaq.

# Araşdırma 2
## Suallar və cavablar
1. position:absolute
- Bir cismin `position` xüsusiyyətini `absolute` etdiyimiz zaman, o cisim normal düzülüşdən çıxır və eyni zamanda 4 küncdən də yerləşdirmə etməyə imkan verir. `absolute` və `Relative` cisimlər arasındakı fərq, normal düzülüşdə olub-olmamasıdır.
2. position:relative
- Bir obyektə `position:relative;` dediyimizdə cisim norrmal düzülüşdə olmağa davam edir ancaq `top left right bottom` xüsusiyyətlərini istifadə etməyə imkan verir.
3. position:fixed
- Scroll yarandığı zaman aşağı düşən səhifədə `fixed` verdiyimiz obyekt sabit qalır. 

# Araşdırma 3
## Suallar və cavablar
1. CSS-də font-lar
- CSS-də mətnin şriftini təyin etmək üçün `font-family` xassəsindən istifadə edirik.
Şrift ailəsi  brauzerlər / əməliyyat sistemləri arasında maksimum uyğunluğu təmin etmək üçün bir neçə yazı adı `geri dönüş` sistemi olaraq göstərilməlidir. İstədiyiniz şriftlə başlayın və ümumi bir ailə ilə bitirin (başqa şrift yoxdursa brauzerin ümumi ailədə oxşar bir şrift seçməsinə icazə vermək üçün). Şrift adları vergüllə ayrılmalıdır.
- `Font-size` xassəsi mətnin ölçüsünü təyin edir.
Mətn ölçüsünü idarə edə bilmək veb dizaynında vacibdir. Bununla yanaşı, abzasların başlıqlara və ya başlıqların abzaslara bənzəməsini təmin etmək üçün şrift ölçüsü düzəlişlərindən istifadə etməməlisiniz.
Həmişə başlıqlar üçün `<h1> - <h6>` və abzaslar üçün `<p>` kimi uyğun HTML etiketlərindən istifadə edin.
2. list-style
- Bütün siyahı xüsusiyyətlərini bir bəyannamədə təyin etmək üçün istifadə olunur:
3. text-decoration
- `text-decoration` xassəsi mətnə əlavə edilmiş bəzəyi təyin edir və stenoqrafiya xassəsidir:
4. outline
- Kontur elementin hüdudlarından kənarda çəkilmiş bir xəttdir.

# Araşdırma 4
## Suallar və cavablar
1. width:100% və width:100vw arasındakı fərqlər nədir və nə vaxt istifadə olunması məsləhətdir sizcə?
- 
2. cm, em, in, mm, pc, pt, and px bu css ölçüləndirmə vahidlərin açıqlamalarını yazın
- em - Elementin şrift ölçüsünə nisbəti (2em cari şriftin 2 dəfə böyüklüyü deməkdir) paraqraf sətirləri arasında məsafə
- cm - santimetr
- in -inches (1in = 96px = 2.54cm)
- mm -millimetr
- pc -picas (1pc = 12 pt)
- pt -points (1pt = 1/72 of 1in)
- px -pixels (1px = 1/96th of 1in)
3. justify-content:space-around xüsusiyyəti ara məsafələri hansı formulaya görə tənzimləyir?
- `Container` -ın içərisində yerləşdirilən `div`-lərin uzunluqları toplanır.Daha sonra ümumi `Container` -ın uzunluğundan çıxılır.Nəzərə alsaq ki `div`-lərin sayını n götürsək ara məsafələri `n+1 ` olar və bu zaman `Container`-ın uzunluğundan çıxılan cavabı bölürük `n+1` və ara məsafələri təyin olunur
4. css pseudo-class və pseudo-element nədir? Nümunlərlər izah edin
- Bu elementlər css tərəfindən dəstəklənən və avtomatik olaraq elementlərdir.
:link
:after
:before
:focus 
:hover
::first:child
::first-line
5. meta tag nədir?
- `Meta etiketi` veb saytların məlumat etiketidir. Ümumiyyətlə səhifənin quruluşu və məzmunu haqqında ilkin məlumat vermək üçün istifadə olunan meta etiketlər HTML kodlarındakı baş etiketlər arasındadır.
Meta etiketlər HTML kodlarına aşağıdakı kimi daxil edilmişdir.

- Veb səhifənin adı (Başlığı) üçün istifadə edilməli olan meta etiketlərin istifadəsi;
- Veb səhifənin təsviri üçün istifadə edilməli olan meta etiketlərin istifadəsi;
<Meta name = "description" content = "Səhifənin təsviri burada olmalıdır." />

- Veb səhifənin açar sözü (Açar sözlər) üçün istifadə edilməli olan meta etiket istifadəsi;
<meta name = "keywords" content = "Səhifənin açar sözü burada olmalıdır." />

- Veb səhifənin müəllifi (Müəllif) üçün istifadə edilməli olan meta etiketlərin istifadəsi;
<Meta name = "author" content = "Səhifə müəllifinin məlumatları burada tapılmalıdır." />

6. utf8 nə deməkdir?
- CSS kodlarımızı satır və daxili stil (CSS) kodları kimi yazdığımızda, HTML simvol dəstini təyin etdiyimiz üçün CSS-ə ehtiyac qalmır. Xarici bir CSS (stil) faylı olaraq yazırıqsa, bir css simvol dəsti təyin etməliyik.

# Araşdırma 5
- `Compiler ` və `Interpreter` yüksək səviyyəli dildə yazılmış bir proqramı kompüterin başa düşə biləcəyi maşın koduna çevirən proqramlardır.`Compiler`, yüksək səviyyəli bir dildə yazılmış bir kod parçasını (məsələn JavaScript və ya Java), bir virtual masin kimi  proqramın birdefelik olaraq isletdiyi  aşağı səviyyəli bir koda çevirən bir proqramdır. 
![alt text](https://miro.medium.com/max/390/0*aoj66jeSVe8JGKbF)
Bir tərtibçini 2 hissəyə bölə bilərik. `Frontend` adlanan ilk hissədə, Mənbə kodundakı simvolları ehtiva edən məlumat quruluşu saxlanılır, redaktə olunur və daxil olan mənbə kodu, sintaksis xətası, müəyyən edilmiş dəyişənlərə baxaraq (lazım olduqda növlərinin azaldılması) kimi əməliyyatları əhatə edir. ) və hər bir dəyişənin təyin olunmadan istifadə edilməməsini təmin edir. Bir səhvlə qarşılaşdıqda, istifadəçiyə bir səhv mesajı göstərilir. Heç bir səhvlə qarşılaşmırsa; Yuxarıda göstərilən əməliyyatlarla skan edilmiş, işlənmiş və yaradılmış ara kod arxa tərəfə giriş olaraq verilir.
`Compiler`-in birinci hissəsi olan Front-end mərhələləri leksik təhlil, sintaksis təhlili, semantik analiz və ara kod yaratma adlanır.
`Compiler`-in ikinci hissəsi olan Back-end, optimallaşdırma və kod yaratmaq mərhələlərini əhatə edir.
![alt text](https://miro.medium.com/max/660/0*VIx-xfWOQnkxpurz)
`Compiler` `İnterpreter`-den daha sürətlidir. Çünki `Compiler` hər sətri ilk sətirdən sonuncu sətirədək bir-bir şərh edir və əməliyyatı koda cavab olaraq həyata keçirirlər. `İnterpreter` isə bütün kodu kompüter dilinə çevirirlər. Səhvlər varsa, bütün səhvləri proqramçıya bildirir. Lakin `İnterpreter` qarşılaşdıqları ilk səhvi bildirirlər və sətir-sətir emal etdikləri üçün ilk səhv həll olunana qədər başqa səhvlər tapa bilmirlər.
 - `İmperativ` proqramlaşdırma, bir proqramın vəziyyətini dəyişdirən ifadələrdən istifadə edən bir proqramlaşdırma paradiqmasıdır.`Deklarativ` proqramlaşdırma, idarəetmə axını təsvir etmədən hesablamanın məntiqini ifadə edən bir proqramlaşdırma paradiqmasıdır.
 ![alt text](https://miro.medium.com/max/700/1*c1KtkZhRpnL8i_GpLT4fuQ.png)
 `Imperative` -e numune
 * const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);

`Declarative` -e numune
* class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
- `Imperative` proqramlaşdırma ilə, nə etmək istədiyinizi tərtibçiyə addım-addım izah edirsiniz.Digər tərəfdən, `deklarativ` proqramlaşdırma ilə istədiyinizi izah edən bir kod yazırsınız, ancaq mütləq onu necə əldə edəcəyinizi deyil (istədiyiniz nəticələri elan edin, ancaq addım-addım deyil):
 # Arasdirma6
 ## Suallar ve Cavablar
 - Mən niyə javascript öyrənməliyəm?
 * Eger mende web sehife yazmaga umid ve istek varsa bu dili oyrenmeliyem.Cunki bu proqram web sehifenin esasini teskil edir.Veb saytımızda bir slider-a ehtiyacımız varmı və ya bir düyməni basdığımız zaman açılacaq bir açılan qutuya ehtiyacımız varmı və ya brauzerdə işləyən bir tətbiqə ehtiyacımız varmı, belə hallarda illərdir istifadə etdiyimiz proqramlaşdırma dili. Javascriptdir.Veb inkişafı yeni vizual cazibə çağına qədəm qoyur. On il əvvəl insanlar özlərini məlumatlandırmaq üçün düz mətn axtarırdılar. Bu gün yalnız üzərində mətni olan və diqqətinizi çəkmək üçün başqa bir şey olmayan bir səhifəni tıklayırsınız. İnternetin mənzərəsi dəyişdikcə günümüzün inkişaf standartları da dəyişir.
 - Yeni proqramlaşdırma dilini öz başıma öyrənməli olsaydım nə edərdim?
 * Nezere alsaq ki informasiya menbelerinden hedden ziyade az istifade etmek lazimdir istenilen bir web sehifeni inspent edib source bolmesine kecib ordaki js kodlarini inceliyer hemcinin yeni bir index fayli console hissesinde oyrendiklerimi tetbiq ederdim
 - dəyişən təyin edərkən hansı sintaktik qaydalara diqqət etməliyik?
* deyiseni adlandirarken ingilis elifbasindan istifade olunmalidir.Reqemle baslaya  bilmez.deyisenin adlari herf alt xett ve dollar isaresi ile baslaya biler.Ededleri ancaq deyisenin sonuna ve ortalarina elave etmek olar.Deyisenin adi menali olmalidir.js terefinden istifade olunan acar sozleri deyisenin adinda istifade etmek olmaz.Meselen if ,float  var ve.s.Deyisenler 3 cur elan oluna biler. Bunlar -var standart deyisenleri elan etmek ucun istifade olunur
let-Blok ehate daireli lokal deyisenleri elan etmek ucun istifade olunur
const-Sabitleri elan etmek ucun istifade olunur.
- javascript kodlarının oxunma sırası necədir?
* Alqoritmik olaraq yuxaridan asagiya dogru oxunur.
- niyə mən yazılan javascript kodunu browserda açıram?
* 
- javascript operatorlarının istifadə edərkən nələrə diqqət etməliyəm?
* Sintaksise alqoritme ardicilliga 