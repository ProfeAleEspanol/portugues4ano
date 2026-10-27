const lessons = [
{id:'acentos',title:'Acentuação',subtitle:'Pequenos sinais, grandes descobertas.',icon:'🪄',color:'#eee6f6',desc:'Descubra o que os acentos fazem nas palavras.',intro:'O acento gráfico é um sinal que aparece na escrita de algumas palavras. Vamos conhecer o agudo (´) e o circunflexo (^)!',example:'café ☕ &nbsp; • &nbsp; avó 👵 &nbsp; • &nbsp; avô 👴',detail:'Em avó, o acento agudo indica o som aberto do ó. Em avô, o circunflexo indica o som fechado do ô. A sílaba tônica é a parte pronunciada com mais força: toda palavra com duas ou mais sílabas tem uma, mas nem sempre leva acento escrito.',note:'O til (~), de maçã e pão, indica som nasal. Ele não é um acento agudo nem circunflexo.',questions:[
{q:'Qual palavra está escrita corretamente?',options:['cafe','café','cafê'],a:1,why:'Café leva acento agudo no é: ca-FÉ.'},
{q:'Qual palavra tem acento circunflexo (^)?',options:['avó','jacaré','avô'],a:2,why:'Avô tem circunflexo no ô, que tem som fechado.'},
{q:'Complete: A mãe da minha mãe é minha…',options:['avô','avó','avo'],a:1,why:'Avó é a mãe da mãe ou do pai. O acento agudo no ó ajuda a distinguir avó de avô.'},
{q:'Qual palavra está escrita corretamente?',options:['lapis','lápis','lapís'],a:1,why:'Lápis leva acento agudo no á. A sílaba forte é LÁ: LÁ-pis.'},
{q:'Toda palavra com sílaba forte tem acento escrito?',options:['Sim, sempre.','Não. Casa tem sílaba forte, mas não leva acento.'],a:1,why:'Em CA-sa, a primeira sílaba é forte. Mesmo assim, casa não leva acento gráfico. Sílaba forte e acento escrito são coisas diferentes!'}]},
{id:'oxitonas',title:'Oxítonas',subtitle:'Encontre a sílaba que fala mais forte.',icon:'🥁',color:'#f9ecd0',desc:'Bata palmas e encontre a última sílaba forte.',intro:'Divida a palavra em pedacinhos: as sílabas. Uma delas é pronunciada com mais força. Quando essa sílaba é a última, a palavra é oxítona.',example:'ja-ca-<strong>RÉ</strong> &nbsp; • &nbsp; a-<strong>MOR</strong>',detail:'Jacaré e amor são oxítonas! Percebeu que amor não leva acento? Nem toda oxítona recebe acento gráfico. Nas oxítonas, acentuamos as terminações a, e, o (seguidas ou não de s), em e ens: sofá, cafés, avô, também, parabéns.',note:'Diga a palavra naturalmente e bata uma palma para cada sílaba. Ouça qual delas é mais forte.',questions:[
{q:'Qual é a sílaba mais forte de jacaré?',options:['ja','ca','ré'],a:2,why:'Dizemos ja-ca-RÉ. Ré é a última sílaba e a mais forte. Jacaré é oxítona!'},
{q:'Qual destas palavras é oxítona?',options:['casa','banana','sofá'],a:2,why:'So-FÁ tem a última sílaba forte. Em CA-sa e ba-NA-na, a força fica na penúltima.'},
{q:'Amor é uma palavra oxítona?',options:['Sim: a-MOR.','Não, porque não tem acento escrito.'],a:0,why:'A sílaba forte de amor é MOR, a última. Uma palavra pode ser oxítona sem ter acento gráfico.'},
{q:'Por que café leva acento?',options:['Porque toda oxítona leva acento.','Porque é oxítona terminada em e.','Porque tem duas letras.'],a:1,why:'Ca-FÉ é oxítona terminada em e. As oxítonas com essa terminação recebem acento.'},
{q:'Qual palavra NÃO é oxítona?',options:['cipó','também','árvore'],a:2,why:'ÁR-vo-re tem a primeira sílaba forte, e não a última. Ci-PÓ e tam-BÉM são oxítonas.'}]},
{id:'nomes',title:'Nomes próprios',subtitle:'Cada nome tem a sua história.',icon:'🏷️',color:'#e4eddf',desc:'Conheça os nomes que tornam cada um especial.',intro:'Substantivo é a palavra que dá nome a seres, lugares, objetos e muito mais. O substantivo próprio identifica alguém ou algum lugar em particular e começa com letra maiúscula.',example:'menina → <strong>Luísa</strong><br>cidade → <strong>Salvador</strong>',detail:'Menina e cidade são substantivos comuns: dão nomes gerais. Luísa e Salvador são substantivos próprios: identificam uma menina e uma cidade em particular. O nome de um animal também pode ser próprio, como o gato Mingau.',note:'Uma palavra no começo de uma frase começa com maiúscula, mas isso não a transforma em substantivo próprio.',questions:[
{q:'Qual destas palavras é um substantivo próprio?',options:['menina','escola','Mariana'],a:2,why:'Mariana é o nome de uma pessoa em particular. Menina e escola são substantivos comuns.'},
{q:'Como escrevemos o nome do nosso país?',options:['brasil','Brasil','brasiL'],a:1,why:'Brasil é o nome de um país. É um substantivo próprio e começa com letra maiúscula.'},
{q:'Em “O gato Mingau dormiu”, qual é o substantivo próprio?',options:['gato','Mingau','dormiu'],a:1,why:'Mingau é o nome desse gato. Gato é um nome geral; dormiu indica uma ação.'},
{q:'Qual par tem um nome comum e um nome próprio?',options:['cidade — Recife','livro — caderno','Ana — Pedro'],a:0,why:'Cidade é um substantivo comum. Recife é o nome de uma cidade, portanto é próprio.'},
{q:'Em “A menina visitou Curitiba”, qual palavra nomeia um lugar específico?',options:['menina','visitou','Curitiba'],a:2,why:'Curitiba identifica uma cidade específica. Por isso, é substantivo próprio e começa com C maiúsculo.'}]},
{id:'leitura',title:'Detetive de textos',subtitle:'Leia, imagine e descubra as pistas.',icon:'🔎',color:'#f9e5da',desc:'Entre em uma história e descubra suas pistas.',intro:'Ler é mais do que juntar palavras: é descobrir o que uma história conta. Procure quem participa, onde acontece e por que as coisas aconteceram.',example:'Quem? &nbsp; Onde? &nbsp; Quando? &nbsp; Por quê?',detail:'Algumas respostas estão escritas no texto. Outras precisam das pistas que ele dá. Leia com calma e volte à história sempre que precisar. Não há cronômetro!',note:'A história ficará disponível durante todas as perguntas. Consultar o texto faz parte da aprendizagem.',passage:{title:'O jardim de Clara',text:'No sábado de manhã, Clara foi à biblioteca do bairro com seu avô. No caminho, encontrou uma muda caída perto da praça. A terra estava seca e as folhas estavam murchas. Clara colocou a muda com cuidado em sua sacola. Depois da visita à biblioteca, os dois voltaram para casa e a plantaram em um vaso. Durante a semana, Clara regou a plantinha sem encharcar a terra e deixou o vaso perto da janela. Na sexta-feira, uma folha nova apareceu. Clara sorriu e chamou o avô para ver a surpresa.'},questions:[
{q:'Com quem Clara foi à biblioteca?',options:['Com sua professora.','Com seu avô.','Com uma amiga.'],a:1,why:'No começo da história, lemos que Clara foi à biblioteca com seu avô.'},
{q:'Onde Clara encontrou a muda?',options:['Perto da praça.','Dentro da biblioteca.','Na janela de casa.'],a:0,why:'O texto diz que ela encontrou uma muda caída perto da praça, no caminho para a biblioteca.'},
{q:'O que aconteceu DEPOIS da visita à biblioteca?',options:['Clara saiu para a biblioteca.','Os dois plantaram a muda em um vaso.','A muda caiu perto da praça.'],a:1,why:'Depois da visita, Clara e o avô voltaram para casa e plantaram a muda.'},
{q:'Por que Clara provavelmente sorriu ao ver a folha nova?',options:['Porque percebeu que a plantinha estava crescendo.','Porque perdeu a sacola.','Porque as folhas estavam secas.'],a:0,why:'Essa resposta vem das pistas: Clara cuidou da planta, surgiu uma folha nova e ela quis mostrar ao avô. Podemos entender que ficou feliz com o crescimento.'},
{q:'Qual título também combina com a história?',options:['Uma corrida na praça','A biblioteca fechada','Uma plantinha bem cuidada'],a:2,why:'O cuidado de Clara com a muda e o aparecimento de uma folha nova são o centro da história.'}]}
];
// Cada ilha oferece três missões curtas, com cinco descobertas por vez.
const extraQuestions = {
acentos:[
{q:'A fadinha perdeu um sinal! Complete: “O beb_ está dormindo.”',options:['bebe','bebé','bebê'],a:2,why:'A escrita é bebê, com circunflexo no ê final.'},
{q:'Qual palavra tem acento agudo (´)?',options:['vovô','ônibus','médico'],a:2,why:'Médico tem acento agudo no é. Vovô e ônibus têm circunflexo.'},
{q:'Complete: “Vou beber um copo de…”',options:['água','agua','aguá'],a:0,why:'Água leva acento agudo no á, na primeira sílaba.'},
{q:'Qual par mostra um acento agudo e um circunflexo, nessa ordem?',options:['avô — você','pão — mão','pé — mês'],a:2,why:'Pé tem agudo (´); mês tem circunflexo (^). Pão e mão têm til (~).'},
{q:'Qual sinal aparece sobre o a de “maçã”?',options:['Circunflexo (^)','Til (~)','Agudo (´)'],a:1,why:'O til (~) indica som nasal. Ele é diferente dos acentos agudo e circunflexo.'},
{q:'Escolha a frase com as palavras acentuadas corretamente.',options:['O passaró está na arvóre.','O pássaro está na árvore.','O passaro está na arvore.'],a:1,why:'Escrevemos pássaro e árvore com acento na primeira sílaba.'},
{q:'Qual palavra está escrita corretamente?',options:['voce','vóce','você'],a:2,why:'Você tem circunflexo no ê final: vo-CÊ.'},
{q:'Na palavra “música”, onde está o acento?',options:['No ú.','No i.','No a.'],a:0,why:'Música leva acento agudo no ú. Dizemos MÚ-si-ca.'},
{q:'Qual palavra NÃO tem acento gráfico?',options:['chapéu','janela','lápis'],a:1,why:'Janela é escrita sem acento gráfico. A sílaba mais forte é NE: ja-NE-la.'},
{q:'A coruja escreveu “O onibus chegou”. Qual palavra precisa de acento?',options:['chegou → chegóu','O → Ó','onibus → ônibus'],a:2,why:'A escrita correta é ônibus, com circunflexo no ô. Chegou não leva acento.'}
],
oxitonas:[
{q:'Bata palmas para “tucano”: tu-ca-no. Qual é a sílaba forte?',options:['tu','ca','no'],a:1,why:'Dizemos tu-CA-no. Como a sílaba forte é a penúltima, tucano não é oxítona.'},
{q:'Qual é a sílaba forte de “abacaxi”?',options:['ba','ca','xi'],a:2,why:'A-ba-ca-XI: a sílaba forte é XI, a última. Abacaxi é oxítona e não leva acento gráfico.'},
{q:'Qual dupla tem somente palavras oxítonas?',options:['café — cipó','casa — sofá','árvore — lápis'],a:0,why:'Ca-FÉ e ci-PÓ têm a última sílaba forte.'},
{q:'Na palavra “papel”, qual parte falamos com mais força?',options:['pa','pel'],a:1,why:'Pa-PEL tem força na última sílaba. Papel é oxítona, mesmo sem acento gráfico.'},
{q:'Qual destas oxítonas recebe acento por terminar em “a”?',options:['animal','quintal','sofá'],a:2,why:'So-FÁ termina em a e leva acento. Animal e quintal terminam em l e não recebem acento.'},
{q:'A coruja chamou: “paraBÉNS!” A sílaba forte é…',options:['pa','ra','béns'],a:2,why:'Pa-ra-BÉNS tem força na última sílaba. A terminação ens recebe acento em palavras oxítonas.'},
{q:'Qual palavra tem a última sílaba forte, mas não tem acento escrito?',options:['caderno','lápis','jardim'],a:2,why:'Jar-DIM é oxítona. Ela termina em im, e não em em, por isso não leva acento nessa regra.'},
{q:'Em “também”, a sílaba forte é…',options:['tam','bém'],a:1,why:'Tam-BÉM é oxítona. Oxítonas terminadas em em recebem acento.'},
{q:'Qual destas palavras NÃO é oxítona?',options:['caju','fácil','robô'],a:1,why:'FÁ-cil tem força na penúltima sílaba. Ca-JU e ro-BÔ têm força na última.'},
{q:'Qual é a escrita correta da oxítona que nomeia um brinquedo que gira?',options:['piao','píão','pião'],a:2,why:'Pi-ÃO é oxítona e se escreve pião, com til. O til indica o som nasal; não é um acento agudo ou circunflexo.'}
],
nomes:[
{q:'Complete com um substantivo próprio: “Minha amiga se chama…”',options:['colega','Beatriz','menina'],a:1,why:'Beatriz identifica uma pessoa. Colega e menina são nomes gerais.'},
{q:'Qual frase apresenta um nome próprio escrito corretamente?',options:['O cachorro tobi correu.','O cachorro Tobi correu.','O Cachorro tobi correu.'],a:1,why:'Tobi é o nome do cachorro e começa com maiúscula. Cachorro é um substantivo comum.'},
{q:'Na frase “Pedro mora em Manaus”, quais são os nomes próprios?',options:['Pedro e Manaus','mora e em','Pedro e mora'],a:0,why:'Pedro é nome de pessoa e Manaus é nome de cidade. Ambos são substantivos próprios.'},
{q:'Qual palavra é um substantivo comum?',options:['Brasil','Helena','rio'],a:2,why:'Rio é um nome geral. Brasil e Helena identificam um país e uma pessoa.'},
{q:'Em “Meninos brincam no parque”, Meninos vira nome próprio por começar com maiúscula?',options:['Sim, toda maiúscula indica nome próprio.','Não, é um nome geral no início da frase.'],a:1,why:'A primeira palavra de uma frase começa com maiúscula. Meninos continua sendo um substantivo comum.'},
{q:'Qual alternativa tem apenas substantivos próprios?',options:['Ana, escola, Brasil','Recife, Lucas, Brasil','cidade, gato, menino'],a:1,why:'Recife, Lucas e Brasil nomeiam uma cidade, uma pessoa e um país específicos.'},
{q:'A exploradora visitou um país chamado…',options:['Portugal','praia','cidade'],a:0,why:'Portugal identifica um país e é substantivo próprio. Praia e cidade são nomes comuns.'},
{q:'Qual é a escrita correta?',options:['Minha professora é a renata.','Minha professora é a Renata.','Minha Professora é a renata.'],a:1,why:'Renata é nome de pessoa. Por isso, começa com maiúscula.'},
{q:'Em “A gata Luna subiu na cadeira”, qual par reúne dois substantivos comuns?',options:['Luna e gata','gata e cadeira','Luna e cadeira'],a:1,why:'Gata e cadeira são nomes gerais. Luna é o nome próprio da gata.'},
{q:'Qual nome próprio pode completar “A cidade de ___ fica no Brasil”?',options:['escola','menina','Fortaleza'],a:2,why:'Fortaleza é o nome de uma cidade brasileira e começa com maiúscula.'}
]
};
const readingMissions = [
{title:'O bilhete de Miguel',text:'Antes de sair para a escola, Miguel encontrou um bilhete na mesa: “Miguel, deixei sua garrafinha azul na geladeira. Hoje fará calor. Não se esqueça de levá-la! Beijos, mamãe.” Miguel guardou a garrafinha na mochila. No recreio, depois de brincar de pega-pega, bebeu a água e sorriu ao lembrar do cuidado da mãe.',questions:[
{q:'Quem escreveu o bilhete?',options:['Miguel.','A mãe de Miguel.','A professora.'],a:1,why:'O bilhete termina com “Beijos, mamãe”, a assinatura de quem o escreveu.'},
{q:'Onde estava a garrafinha antes de Miguel pegá-la?',options:['Na geladeira.','No pátio.','Na mochila.'],a:0,why:'A mãe escreveu: “deixei sua garrafinha azul na geladeira”.'},
{q:'Para que servia o bilhete?',options:['Para convidar para uma festa.','Para contar uma receita.','Para lembrar Miguel de levar a garrafinha.'],a:2,why:'A mãe pediu que Miguel não esquecesse a garrafinha, pois faria calor.'},
{q:'Em “Não se esqueça de levá-la”, a palavra “la” se refere a quê?',options:['À escola.','À garrafinha.','À mesa.'],a:1,why:'A mãe está falando da garrafinha. “Levá-la” significa levar a garrafinha.'},
{q:'O que Miguel fez antes de beber água no recreio?',options:['Escreveu outro bilhete.','Voltou para casa.','Brincou de pega-pega.'],a:2,why:'O texto conta que ele bebeu água depois de brincar de pega-pega.'}
]},
{title:'A ponte de papel',text:'Na aula de Ciências, a professora propôs um desafio: construir uma ponte com uma folha de papel para ligar duas caixas. Nina colocou a folha esticada entre as caixas, mas ela caiu quando recebeu um carrinho. Então, Ravi sugeriu dobrar o papel como uma sanfona. Os dois testaram a ideia. Dessa vez, a ponte sustentou o carrinho. “Vamos contar à turma como fizemos!”, disse Nina, animada.',questions:[
{q:'Qual era o desafio da aula?',options:['Desenhar um carrinho.','Construir uma ponte com papel.','Encher duas caixas de água.'],a:1,why:'A professora propôs construir uma ponte com uma folha de papel para ligar duas caixas.'},
{q:'O que aconteceu no primeiro teste?',options:['A folha caiu com o carrinho.','A ponte sustentou o carrinho.','O carrinho ficou dentro da caixa.'],a:0,why:'A primeira folha estava esticada e caiu quando recebeu o carrinho.'},
{q:'Qual mudança ajudou a ponte a sustentar o carrinho?',options:['Pintar as caixas.','Retirar o papel.','Dobrar o papel como uma sanfona.'],a:2,why:'Ravi sugeriu dobrar o papel. No segundo teste, a ponte sustentou o carrinho.'},
{q:'Como Nina se sentiu no final?',options:['Assustada.','Animada.','Entediada.'],a:1,why:'O texto diz que Nina falou animada ao sugerir contar à turma o que fizeram.'},
{q:'Que ideia podemos tirar da história?',options:['Só vale tentar uma vez.','Precisamos desistir se algo cair.','Testar novas ideias e colaborar pode ajudar a resolver um problema.'],a:2,why:'Nina e Ravi mudaram a primeira ideia, testaram juntos e conseguiram construir a ponte.'}
]}
];
for (const l of lessons) {
 const original={title:l.id==='leitura'?'O jardim de Clara':'Primeiras descobertas',questions:l.questions,passage:l.passage};
 l.missions=l.id==='leitura'?[original,...readingMissions.map(p=>({title:p.title,passage:{title:p.title,text:p.text},questions:p.questions}))]:[original,{title:'Explorando as pistas',questions:extraQuestions[l.id].slice(0,5)},{title:'Desafio da coruja',questions:extraQuestions[l.id].slice(5)}];
}
