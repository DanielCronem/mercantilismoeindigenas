(() => {

    "use strict";


    const canvas =
        document.getElementById("gameCanvas");

    const ctx =
        canvas.getContext("2d");


    const scoreValue =
        document.getElementById("scoreValue");

    const arrowsValue =
        document.getElementById("arrowsValue");

    const bestValue =
        document.getElementById("bestValue");


    const restartBtn =
        document.getElementById("restartBtn");

    const playAgainBtn =
        document.getElementById("playAgainBtn");


    const statusText =
        document.getElementById("statusText");

    const powerFill =
        document.getElementById("powerFill");

    const powerText =
        document.getElementById("powerText");


    const questionModal =
        document.getElementById("questionModal");

    const questionText =
        document.getElementById("questionText");

    const answersEl =
        document.getElementById("answers");

    const feedbackEl =
        document.getElementById("feedback");

    const continueBtn =
        document.getElementById("continueBtn");


    const endModal =
        document.getElementById("endModal");

    const endSummary =
        document.getElementById("endSummary");



    /* =========================
       PERGUNTAS
    ========================= */

    const QUESTIONS = [

        {
            q:
                "No mercantilismo, qual política econômica buscava vender mais ao exterior do que comprar?",

            options: [

                "Balança comercial favorável",

                "Livre comércio absoluto",

                "Fim das tarifas alfandegárias",

                "Autonomia econômica das colônias"

            ],

            answer: 0,

            explanation:
                "A balança comercial favorável procurava ampliar as exportações e reduzir as importações."
        },


        {
            q:
                "O que foi o chamado pacto colonial?",

            options: [

                "A liberdade das colônias para negociar com qualquer país",

                "A exclusividade comercial entre a colônia e sua metrópole",

                "A proibição de atividades agrícolas nas colônias",

                "A independência política imediata das colônias"

            ],

            answer: 1,

            explanation:
                "O pacto colonial restringia o comércio colonial, favorecendo a metrópole."
        },


        {
            q:
                "Qual ideia mercantilista relacionava a riqueza de um Estado à quantidade de metais preciosos acumulados?",

            options: [

                "Metalismo",

                "Feudalismo",

                "Liberalismo",

                "Socialismo"

            ],

            answer: 0,

            explanation:
                "O metalismo valorizava o acúmulo de ouro e prata como sinal de riqueza e poder."
        },


        {
            q:
                "Sobre os povos indígenas da América antes da colonização europeia, qual afirmação é mais adequada?",

            options: [

                "Formavam um único povo com a mesma cultura",

                "Possuíam grande diversidade de línguas, sociedades e modos de vida",

                "Viviam todos exclusivamente da caça",

                "Não possuíam formas próprias de organização política"

            ],

            answer: 1,

            explanation:
                "A América reunia sociedades indígenas muito diversas, com diferentes línguas, costumes e formas de organização."
        },


        {
            q:
                "Um dos impactos mais graves da colonização europeia sobre populações indígenas americanas foi:",

            options: [

                "A eliminação de toda troca cultural",

                "A redução populacional causada por epidemias, guerras e exploração",

                "O desaparecimento imediato de todas as línguas indígenas",

                "A ausência de disputas por territórios"

            ],

            answer: 1,

            explanation:
                "Epidemias, conflitos, expulsões territoriais e formas de trabalho forçado provocaram fortes perdas populacionais."
        },


        {
            q:
                "Por que as colônias eram importantes para a lógica mercantilista europeia?",

            options: [

                "Porque garantiam mercados consumidores e fornecimento de matérias-primas",

                "Porque impediam qualquer enriquecimento das metrópoles",

                "Porque funcionavam sem relações econômicas com a Europa",

                "Porque eliminavam a necessidade de comércio marítimo"

            ],

            answer: 0,

            explanation:
                "As metrópoles procuravam usar as colônias como fontes de matérias-primas e como mercados para seus produtos."
        },


        {
            q:
                "Qual alternativa melhor descreve a resistência indígena à colonização?",

            options: [

                "Não existiu resistência",

                "Ocorreu de formas diversas, como conflitos, fugas, alianças e preservação cultural",

                "Aconteceu apenas no século XIX",

                "Foi igual em todas as regiões da América"

            ],

            answer: 1,

            explanation:
                "A resistência indígena variou conforme cada povo e contexto, incluindo guerra, negociação, fugas e manutenção de práticas culturais."
        },


        {
            q:
                "O Tratado de Tordesilhas, assinado em 1494, relaciona-se principalmente:",

            options: [

                "À divisão de áreas de expansão ultramarina entre Portugal e Espanha",

                "Ao fim do comércio atlântico",

                "À independência das colônias americanas",

                "À criação da primeira república na América"

            ],

            answer: 0,

            explanation:
                "O tratado buscou dividir áreas de expansão entre as coroas portuguesa e espanhola."
        },


        {
            q:
                "No contexto colonial, a imposição de formas de trabalho compulsório sobre povos indígenas estava ligada:",

            options: [

                "À exploração econômica e ao controle colonial",

                "Ao fim da produção agrícola",

                "À inexistência de interesses econômicos europeus",

                "À completa autonomia política indígena"

            ],

            answer: 0,

            explanation:
                "O trabalho compulsório foi usado em diferentes regiões como instrumento de exploração e controle."
        },


        {
            q:
                "Qual prática é compatível com políticas mercantilistas?",

            options: [

                "Protecionismo alfandegário",

                "Fim de qualquer intervenção estatal",

                "Ausência de monopólios",

                "Livre circulação sem tarifas em todos os mercados"

            ],

            answer: 0,

            explanation:
                "O protecionismo, com tarifas e restrições, era usado para proteger a economia da metrópole."
        },


        {
            q:
                "A conquista europeia da América também envolveu alianças com grupos indígenas. Isso mostra que:",

            options: [

                "Os povos indígenas agiam sempre de forma idêntica",

                "As relações políticas eram complexas e variavam entre diferentes povos e regiões",

                "Não existiam conflitos anteriores entre grupos indígenas",

                "Todos os povos indígenas apoiaram os europeus"

            ],

            answer: 1,

            explanation:
                "As sociedades indígenas possuíam interesses e relações políticas próprias, por isso as alianças e conflitos variavam."
        },


        {
            q:
                "A expansão marítima europeia dos séculos XV e XVI favoreceu o mercantilismo porque:",

            options: [

                "Ampliou rotas comerciais, acesso a metais, produtos e territórios",

                "Reduziu a circulação de mercadorias pelo Atlântico",

                "Eliminou a competição entre Estados europeus",

                "Impediu a formação de impérios coloniais"

            ],

            answer: 0,

            explanation:
                "A expansão marítima ampliou o comércio, a busca por metais, produtos e novas áreas coloniais."
        }

    ];



    /* =========================
       ESTADO DO JOGO
    ========================= */

    const state = {

        width: 0,

        height: 0,

        dpr:
            Math.max(
                1,
                Math.min(
                    2,
                    window.devicePixelRatio || 1
                )
            ),


        score: 0,

        arrows: 10,


        best:
            Number(
                localStorage.getItem(
                    "arcoConhecimentoBest"
                ) || 0
            ),


        dragging: false,


        pointer: {
            x: 0,
            y: 0
        },


        pull: 0,

        maxPull: 170,

        minPullToShoot: 24,


        bow: {
            x: 0,
            y: 0
        },


        target: {
            x: 0,
            y: 0,
            r: 0
        },


        groundY: 0,


        arrow: null,


        particles: [],

        floatingTexts: [],


        shake: 0,


        shotLocked: false,

        questionOpen: false,


        questionIndexPool: [],


        lastTime:
            performance.now(),


        statusTimer: null
    };



    /* =========================
       REGIÕES DO ALVO
    ========================= */

    const RINGS = [

        {
            limit: 0.22,
            points: 100,
            name: "Centro"
        },

        {
            limit: 0.43,
            points: 70,
            name: "Anel vermelho"
        },

        {
            limit: 0.66,
            points: 40,
            name: "Anel azul"
        },

        {
            limit: 0.84,
            points: 20,
            name: "Anel preto"
        },

        {
            limit: 1,
            points: 10,
            name: "Anel externo"
        }

    ];



    /* =========================
       REDIMENSIONAMENTO
    ========================= */

    function resize() {

        const rect =
            canvas.getBoundingClientRect();


        state.width =
            rect.width;

        state.height =
            rect.height;


        state.dpr =
            Math.max(
                1,
                Math.min(
                    2,
                    window.devicePixelRatio || 1
                )
            );


        canvas.width =
            Math.round(
                state.width *
                state.dpr
            );


        canvas.height =
            Math.round(
                state.height *
                state.dpr
            );


        state.groundY =
            state.height * 0.81;


        state.bow.x =
            Math.max(
                105,
                state.width * 0.17
            );


        state.bow.y =
            state.height * 0.53;


        const r =
            Math.max(
                42,
                Math.min(
                    70,
                    state.width * 0.05
                )
            );


        state.target.x =
            Math.min(
                state.width - r - 55,
                state.width * 0.79
            );


        state.target.y =
            state.height * 0.42;


        state.target.r =
            r;
    }



    /* =========================
       HUD
    ========================= */

    function updateHud() {

        scoreValue.textContent =
            state.score;


        arrowsValue.textContent =
            state.arrows;


        bestValue.textContent =
            Math.max(
                state.best,
                state.score
            );


        const pct =
            Math.round(
                (
                    state.pull /
                    state.maxPull
                ) * 100
            );


        powerFill.style.width =
            `${
                Math.max(
                    0,
                    Math.min(
                        100,
                        pct
                    )
                )
            }%`;


        powerText.textContent =
            `${
                Math.max(
                    0,
                    Math.min(
                        100,
                        pct
                    )
                )
            }%`;
    }



    /* =========================
       STATUS
    ========================= */

    function setStatus(
        text,
        ms = 0
    ) {

        statusText.textContent =
            text;


        if (
            state.statusTimer
        ) {

            clearTimeout(
                state.statusTimer
            );


            state.statusTimer =
                null;
        }


        if (
            ms > 0
        ) {

            state.statusTimer =
                setTimeout(
                    () => {

                        if (
                            !state.shotLocked &&
                            !state.questionOpen
                        ) {

                            statusText.textContent =
                                "Puxe a corda para trás e solte para atirar.";
                        }

                    },
                    ms
                );
        }
    }



    /* =========================
       REINICIAR
    ========================= */

    function resetGame() {

        state.score = 0;

        state.arrows = 10;

        state.dragging = false;

        state.pull = 0;

        state.arrow = null;

        state.particles = [];

        state.floatingTexts = [];

        state.shake = 0;

        state.shotLocked = false;

        state.questionOpen = false;

        state.questionIndexPool = [];


        questionModal.classList.add(
            "hidden"
        );


        endModal.classList.add(
            "hidden"
        );


        setStatus(
            "Puxe a corda para trás e solte para atirar."
        );


        updateHud();
    }



    /* =========================
       POSIÇÃO DO MOUSE
    ========================= */

    function worldToPointer(e) {

        const rect =
            canvas.getBoundingClientRect();


        return {

            x:
                e.clientX -
                rect.left,

            y:
                e.clientY -
                rect.top
        };
    }



    /* =========================
       INICIAR PUXADA
    ========================= */

    function canStartDrag(p) {

        if (
            state.shotLocked ||
            state.questionOpen ||
            state.arrows <= 0 ||
            state.arrow
        ) {

            return false;
        }


        const dx =
            p.x -
            state.bow.x;


        const dy =
            p.y -
            state.bow.y;


        return (
            Math.hypot(
                dx,
                dy
            ) < 95
        );
    }



    function onPointerDown(e) {

        const p =
            worldToPointer(e);


        if (
            !canStartDrag(p)
        ) {

            return;
        }


        state.dragging =
            true;


        state.pointer =
            p;


        canvas.setPointerCapture?.(
            e.pointerId
        );


        updatePull();
    }



    function onPointerMove(e) {

        if (
            !state.dragging
        ) {

            return;
        }


        state.pointer =
            worldToPointer(e);


        updatePull();
    }



    /* =========================
       CALCULAR FORÇA
    ========================= */

    function updatePull() {

        const rawDx =
            state.bow.x -
            state.pointer.x;


        const rawDy =
            state.bow.y -
            state.pointer.y;


        let len =
            Math.hypot(
                rawDx,
                rawDy
            );


        len =
            Math.min(
                state.maxPull,
                len
            );


        if (
            len > 0.001
        ) {

            const total =
                Math.hypot(
                    rawDx,
                    rawDy
                );


            const scale =
                len /
                total;


            const px =
                state.bow.x -
                rawDx * scale;


            const py =
                state.bow.y -
                rawDy * scale;


            state.pointer.x =
                px;


            state.pointer.y =
                py;
        }


        state.pull =
            len;


        updateHud();
    }



    /* =========================
       SOLTAR A CORDA
    ========================= */

    function onPointerUp(e) {

        if (
            !state.dragging
        ) {

            return;
        }


        state.dragging =
            false;


        if (
            state.pull <
            state.minPullToShoot
        ) {

            state.pull = 0;


            updateHud();


            setStatus(
                "Puxe um pouco mais para conseguir disparar.",
                1300
            );


            return;
        }


        shootArrow();


        canvas.releasePointerCapture?.(
            e.pointerId
        );
    }



    /* =========================
       DISPARAR
    ========================= */

    function shootArrow() {

        const dx =
            state.bow.x -
            state.pointer.x;


        const dy =
            state.bow.y -
            state.pointer.y;


        const len =
            Math.hypot(
                dx,
                dy
            ) || 1;


        const dirX =
            dx / len;


        const dirY =
            dy / len;


        const normalizedPower =
            Math.min(
                1,
                state.pull /
                state.maxPull
            );


        const speed =
            380 +
            normalizedPower *
            520;


        state.arrow = {

            x:
                state.bow.x +
                dirX * 28,

            y:
                state.bow.y +
                dirY * 28,

            vx:
                dirX *
                speed,

            vy:
                dirY *
                speed,

            angle:
                Math.atan2(
                    dirY,
                    dirX
                ),

            active: true,

            stuck: false,

            stuckTimer: 0
        };


        state.arrows -= 1;


        state.shotLocked =
            true;


        state.pull =
            0;


        updateHud();


        setStatus(
            "Flecha em voo..."
        );
    }



    /* =========================
       PONTA DA FLECHA
    ========================= */

    function arrowTip(
        arrow
    ) {

        const len =
            34;


        return {

            x:
                arrow.x +
                Math.cos(
                    arrow.angle
                ) * len,

            y:
                arrow.y +
                Math.sin(
                    arrow.angle
                ) * len
        };
    }



    /* =========================
       COLISÃO SEGMENTO CÍRCULO
    ========================= */

    function pointToSegmentDistance(
        px,
        py,
        x1,
        y1,
        x2,
        y2
    ) {

        const dx =
            x2 - x1;


        const dy =
            y2 - y1;


        const denom =
            dx * dx +
            dy * dy;


        if (
            denom === 0
        ) {

            return {

                distance:
                    Math.hypot(
                        px - x1,
                        py - y1
                    ),

                x:
                    x1,

                y:
                    y1,

                t:
                    0
            };
        }


        let t =
            (
                (
                    px - x1
                ) * dx +

                (
                    py - y1
                ) * dy

            ) / denom;


        t =
            Math.max(
                0,
                Math.min(
                    1,
                    t
                )
            );


        const cx =
            x1 +
            t * dx;


        const cy =
            y1 +
            t * dy;


        return {

            distance:
                Math.hypot(
                    px - cx,
                    py - cy
                ),

            x:
                cx,

            y:
                cy,

            t
        };
    }



    /* =========================
       DESCOBRIR ANEL ATINGIDO
    ========================= */

    function getRing(
        distance
    ) {

        const ratio =
            distance /
            state.target.r;


        return (
            RINGS.find(
                ring =>
                    ratio <=
                    ring.limit
            ) || null
        );
    }



    /* =========================
       ACERTO
    ========================= */

    function handleHit(
        hitPoint,
        distance
    ) {

        const ring =
            getRing(
                distance
            );


        if (
            !ring ||
            !state.arrow
        ) {

            return;
        }


        const arrow =
            state.arrow;


        const currentTip =
            arrowTip(
                arrow
            );


        const backX =
            currentTip.x -
            arrow.x;


        const backY =
            currentTip.y -
            arrow.y;


        arrow.x =
            hitPoint.x -
            backX;


        arrow.y =
            hitPoint.y -
            backY;


        arrow.vx =
            0;


        arrow.vy =
            0;


        arrow.active =
            false;


        arrow.stuck =
            true;


        state.score +=
            ring.points;


        state.shake =
            8;


        spawnHitParticles(
            hitPoint.x,
            hitPoint.y,
            distance
        );


        state.floatingTexts.push({

            x:
                hitPoint.x,

            y:
                hitPoint.y - 18,

            text:
                `+${ring.points}`,

            life:
                1.2
        });


        setStatus(
            `${ring.name}, +${ring.points} pontos!`
        );


        if (
            state.score >
            state.best
        ) {

            state.best =
                state.score;


            localStorage.setItem(
                "arcoConhecimentoBest",
                String(
                    state.best
                )
            );
        }


        updateHud();


        setTimeout(
            () => {

                showQuestion();

            },
            520
        );
    }



    /* =========================
       ERRO
    ========================= */

    function handleMiss(
        reason = "Errou o alvo"
    ) {

        if (
            !state.arrow
        ) {

            return;
        }


        state.arrow.active =
            false;


        state.arrow.stuck =
            false;


        setStatus(
            `${reason}. Prepare o próximo disparo.`,
            1200
        );


        setTimeout(
            () => {

                state.arrow =
                    null;


                state.shotLocked =
                    false;


                if (
                    state.arrows <= 0
                ) {

                    showEnd();

                } else {

                    setStatus(
                        "Puxe a corda para trás e solte para atirar."
                    );
                }

            },
            850
        );
    }



    /* =========================
       PARTÍCULAS
    ========================= */

    function spawnHitParticles(
        x,
        y,
        distance
    ) {

        const ratio =
            distance /
            state.target.r;


        const particleCount =
            ratio < 0.23
                ? 26
                : 18;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const a =
                Math.random() *
                Math.PI *
                2;


            const s =
                40 +
                Math.random() *
                150;


            state.particles.push({

                x,

                y,

                vx:
                    Math.cos(a) *
                    s,

                vy:
                    Math.sin(a) *
                    s,

                life:
                    0.7 +
                    Math.random() *
                    0.6,

                size:
                    2 +
                    Math.random() *
                    4
            });
        }
    }



    /* =========================
       PERGUNTAS ALEATÓRIAS
    ========================= */

    function nextQuestionIndex() {

        if (
            state.questionIndexPool.length === 0
        ) {

            state.questionIndexPool =
                QUESTIONS.map(
                    (_, i) => i
                );


            for (
                let i =
                    state.questionIndexPool.length - 1;

                i > 0;

                i--
            ) {

                const j =
                    Math.floor(
                        Math.random() *
                        (i + 1)
                    );


                [
                    state.questionIndexPool[i],
                    state.questionIndexPool[j]
                ] = [

                    state.questionIndexPool[j],
                    state.questionIndexPool[i]

                ];
            }
        }


        return (
            state.questionIndexPool.pop()
        );
    }



    /* =========================
       MOSTRAR PERGUNTA
    ========================= */

    function showQuestion() {

        const index =
            nextQuestionIndex();


        const item =
            QUESTIONS[index];


        state.questionOpen =
            true;


        questionText.textContent =
            item.q;


        answersEl.innerHTML =
            "";


        feedbackEl.classList.add(
            "hidden"
        );


        continueBtn.classList.add(
            "hidden"
        );


        item.options.forEach(
            (
                option,
                optionIndex
            ) => {

                const btn =
                    document.createElement(
                        "button"
                    );


                btn.className =
                    "answer-btn";


                btn.type =
                    "button";


                btn.textContent =
                    option;


                btn.addEventListener(
                    "click",
                    () => {

                        answerQuestion(
                            item,
                            optionIndex,
                            btn
                        );
                    }
                );


                answersEl.appendChild(
                    btn
                );
            }
        );


        questionModal.classList.remove(
            "hidden"
        );
    }



    /* =========================
       RESPONDER PERGUNTA
    ========================= */

    function answerQuestion(
        item,
        selectedIndex,
        selectedButton
    ) {

        const buttons =
            [
                ...answersEl.querySelectorAll(
                    ".answer-btn"
                )
            ];


        buttons.forEach(
            (
                button,
                i
            ) => {

                button.disabled =
                    true;


                if (
                    i ===
                    item.answer
                ) {

                    button.classList.add(
                        "correct"
                    );
                }
            }
        );


        if (
            selectedIndex ===
            item.answer
        ) {

            state.score +=
                50;


            selectedButton.classList.add(
                "correct"
            );


            feedbackEl.textContent =
                `Resposta correta, +50 pontos de conhecimento. ${item.explanation}`;


            setStatus(
                "Resposta correta, +50 pontos!"
            );

        } else {

            selectedButton.classList.add(
                "wrong"
            );


            feedbackEl.textContent =
                `Resposta incorreta. ${item.explanation}`;


            setStatus(
                "Boa tentativa. Leia a explicação antes do próximo disparo."
            );
        }


        if (
            state.score >
            state.best
        ) {

            state.best =
                state.score;


            localStorage.setItem(
                "arcoConhecimentoBest",
                String(
                    state.best
                )
            );
        }


        updateHud();


        feedbackEl.classList.remove(
            "hidden"
        );


        continueBtn.classList.remove(
            "hidden"
        );
    }



    /* =========================
       PRÓXIMO DISPARO
    ========================= */

    function closeQuestionAndContinue() {

        questionModal.classList.add(
            "hidden"
        );


        state.questionOpen =
            false;


        state.arrow =
            null;


        state.shotLocked =
            false;


        if (
            state.arrows <= 0
        ) {

            showEnd();

        } else {

            setStatus(
                "Puxe a corda para trás e solte para atirar."
            );
        }
    }



    /* =========================
       FIM DO JOGO
    ========================= */

    function showEnd() {

        state.shotLocked =
            true;


        const recordText =
            state.score >=
            state.best

                ? " Você alcançou o seu melhor resultado!"

                : ` Seu recorde é ${state.best} pontos.`;


        endSummary.textContent =
            `Pontuação final, ${state.score} pontos.${recordText}`;


        endModal.classList.remove(
            "hidden"
        );
    }



    /* =========================
       FÍSICA DA FLECHA
    ========================= */

    function updatePhysics(
        dt
    ) {

        const arrow =
            state.arrow;


        if (
            arrow &&
            arrow.active
        ) {

            const prevTip =
                arrowTip(
                    arrow
                );


            /*
                Gravidade.

                Quanto maior esse valor,
                mais rapidamente a flecha cai.
            */

            const gravity =
                650;


            /*
                Fórmula do movimento vertical.

                velocidade vertical =
                velocidade vertical +
                gravidade × tempo
            */

            arrow.vy +=
                gravity *
                dt;


            /*
                Atualização da posição.
            */

            arrow.x +=
                arrow.vx *
                dt;


            arrow.y +=
                arrow.vy *
                dt;


            /*
                A flecha gira conforme
                a direção da velocidade.
            */

            arrow.angle =
                Math.atan2(
                    arrow.vy,
                    arrow.vx
                );


            const tip =
                arrowTip(
                    arrow
                );


            /*
                Calcula a distância
                entre o caminho percorrido
                pela ponta da flecha e
                o centro do alvo.
            */

            const collision =
                pointToSegmentDistance(

                    state.target.x,

                    state.target.y,

                    prevTip.x,

                    prevTip.y,

                    tip.x,

                    tip.y
                );


            const movingTowardTarget =
                arrow.vx > 0;


            const passedTargetZone =

                Math.max(
                    prevTip.x,
                    tip.x
                ) >=
                state.target.x -
                state.target.r

                &&

                Math.min(
                    prevTip.x,
                    tip.x
                ) <=
                state.target.x +
                state.target.r;


            /*
                Detecta colisão real
                com o círculo do alvo.
            */

            if (
                movingTowardTarget &&
                passedTargetZone &&
                collision.distance <=
                state.target.r
            ) {

                handleHit(

                    {
                        x:
                            collision.x,

                        y:
                            collision.y
                    },

                    collision.distance
                );

            }

            /*
                Flecha atingiu o chão.
            */

            else if (
                tip.y >=
                state.groundY - 3
            ) {

                handleMiss(
                    "A flecha caiu antes de acertar"
                );
            }

            /*
                Flecha saiu da tela.
            */

            else if (

                tip.x >
                state.width + 100

                ||

                tip.x < -120

                ||

                tip.y < -120

            ) {

                handleMiss(
                    "A flecha passou longe"
                );
            }
        }



        /* partículas */

        state.particles.forEach(
            p => {

                p.vy +=
                    280 *
                    dt;


                p.x +=
                    p.vx *
                    dt;


                p.y +=
                    p.vy *
                    dt;


                p.life -=
                    dt;
            }
        );


        state.particles =
            state.particles.filter(
                p =>
                    p.life > 0
            );



        /* texto flutuante */

        state.floatingTexts.forEach(
            f => {

                f.y -=
                    38 *
                    dt;


                f.life -=
                    dt;
            }
        );


        state.floatingTexts =
            state.floatingTexts.filter(
                f =>
                    f.life > 0
            );



        /* tremor da tela */

        state.shake *=
            Math.pow(
                0.04,
                dt
            );


        if (
            state.shake < 0.1
        ) {

            state.shake =
                0;
        }
    }



    /* =========================
       RETÂNGULO ARREDONDADO
    ========================= */

    function drawRoundedRect(
        x,
        y,
        w,
        h,
        r,
        fill
    ) {

        ctx.beginPath();


        ctx.roundRect(
            x,
            y,
            w,
            h,
            r
        );


        ctx.fillStyle =
            fill;


        ctx.fill();
    }



    /* =========================
       CENÁRIO
    ========================= */

    function drawBackground() {

        const W =
            state.width;


        const H =
            state.height;


        const sky =
            ctx.createLinearGradient(
                0,
                0,
                0,
                state.groundY
            );


        sky.addColorStop(
            0,
            "#89dcff"
        );


        sky.addColorStop(
            1,
            "#d8f4ff"
        );


        ctx.fillStyle =
            sky;


        ctx.fillRect(
            0,
            0,
            W,
            H
        );


        drawSun(

            W * 0.63,

            H * 0.15,

            Math.min(
                42,
                W * 0.03
            )
        );


        drawCloud(
            W * 0.25,
            H * 0.20,
            1.1
        );


        drawCloud(
            W * 0.52,
            H * 0.12,
            0.85
        );


        drawCloud(
            W * 0.68,
            H * 0.32,
            0.95
        );


        drawCloud(
            W * 0.91,
            H * 0.23,
            0.75
        );



        /* GRAMA */

        const grass =
            ctx.createLinearGradient(
                0,
                state.groundY,
                0,
                H
            );


        grass.addColorStop(
            0,
            "#8bd34a"
        );


        grass.addColorStop(
            1,
            "#48ad3b"
        );


        ctx.fillStyle =
            grass;


        ctx.fillRect(
            0,
            state.groundY,
            W,
            H -
            state.groundY
        );


        ctx.fillStyle =
            "rgba(255,255,255,0.15)";


        ctx.fillRect(
            0,
            state.groundY,
            W,
            6
        );



        drawBush(
            W * 0.33,
            state.groundY + 18,
            0.8
        );


        drawBush(
            W * 0.56,
            state.groundY + 22,
            1
        );


        drawBush(
            W * 0.72,
            state.groundY + 17,
            1.25
        );


        drawTree(
            W * 0.09,
            state.groundY,
            0.9
        );


        drawTree(
            W * 0.91,
            state.groundY,
            1
        );


        drawFlowers(
            W * 0.14,
            state.groundY + 16
        );


        drawFlowers(
            W * 0.47,
            state.groundY + 13
        );


        drawFlowers(
            W * 0.84,
            state.groundY + 17
        );
    }



    /* =========================
       SOL
    ========================= */

    function drawSun(
        x,
        y,
        r
    ) {

        ctx.save();


        ctx.globalAlpha =
            0.9;


        for (
            let i = 0;
            i < 12;
            i++
        ) {

            const a =
                (
                    Math.PI *
                    2 *
                    i
                ) / 12;


            ctx.strokeStyle =
                "rgba(255,220,71,0.55)";


            ctx.lineWidth =
                4;


            ctx.beginPath();


            ctx.moveTo(

                x +
                Math.cos(a) *
                (r + 7),

                y +
                Math.sin(a) *
                (r + 7)
            );


            ctx.lineTo(

                x +
                Math.cos(a) *
                (r + 20),

                y +
                Math.sin(a) *
                (r + 20)
            );


            ctx.stroke();
        }


        ctx.fillStyle =
            "#ffe36d";


        ctx.beginPath();


        ctx.arc(
            x,
            y,
            r,
            0,
            Math.PI * 2
        );


        ctx.fill();


        ctx.restore();
    }



    /* =========================
       NUVENS
    ========================= */

    function drawCloud(
        x,
        y,
        scale
    ) {

        ctx.save();


        ctx.translate(
            x,
            y
        );


        ctx.scale(
            scale,
            scale
        );


        ctx.fillStyle =
            "rgba(255,255,255,0.78)";


        ctx.beginPath();


        ctx.arc(
            -24,
            4,
            16,
            0,
            Math.PI * 2
        );


        ctx.arc(
            -7,
            -6,
            20,
            0,
            Math.PI * 2
        );


        ctx.arc(
            14,
            0,
            17,
            0,
            Math.PI * 2
        );


        ctx.arc(
            30,
            6,
            12,
            0,
            Math.PI * 2
        );


        ctx.fill();


        ctx.fillRect(
            -24,
            4,
            54,
            14
        );


        ctx.restore();
    }



    /* =========================
       ARBUSTOS
    ========================= */

    function drawBush(
        x,
        y,
        scale
    ) {

        ctx.save();


        ctx.translate(
            x,
            y
        );


        ctx.scale(
            scale,
            scale
        );


        ctx.globalAlpha =
            0.55;


        ctx.fillStyle =
            "#2c9d3e";


        ctx.beginPath();


        ctx.arc(
            -28,
            4,
            18,
            0,
            Math.PI * 2
        );


        ctx.arc(
            -8,
            -3,
            25,
            0,
            Math.PI * 2
        );


        ctx.arc(
            17,
            2,
            22,
            0,
            Math.PI * 2
        );


        ctx.arc(
            34,
            7,
            15,
            0,
            Math.PI * 2
        );


        ctx.fill();


        ctx.restore();
    }



    /* =========================
       ÁRVORES
    ========================= */

    function drawTree(
        x,
        y,
        scale
    ) {

        ctx.save();


        ctx.translate(
            x,
            y
        );


        ctx.scale(
            scale,
            scale
        );


        drawRoundedRect(
            -8,
            -90,
            16,
            95,
            7,
            "#8b5a2b"
        );


        const grad =
            ctx.createLinearGradient(
                0,
                -170,
                0,
                -15
            );


        grad.addColorStop(
            0,
            "#63c84a"
        );


        grad.addColorStop(
            1,
            "#27933d"
        );


        ctx.fillStyle =
            grad;


        ctx.beginPath();


        ctx.ellipse(
            0,
            -100,
            28,
            78,
            0,
            0,
            Math.PI * 2
        );


        ctx.fill();


        ctx.fillStyle =
            "rgba(255,255,255,0.14)";


        ctx.beginPath();


        ctx.ellipse(
            -8,
            -117,
            7,
            40,
            -0.2,
            0,
            Math.PI * 2
        );


        ctx.fill();


        ctx.restore();
    }



    /* =========================
       FLORES
    ========================= */

    function drawFlowers(
        x,
        y
    ) {

        ctx.save();


        ctx.translate(
            x,
            y
        );


        for (
            let i = 0;
            i < 12;
            i++
        ) {

            const dx =
                (
                    i - 6
                ) * 10 +
                Math.sin(i) *
                4;


            const dy =
                Math.sin(
                    i * 1.7
                ) * 5;


            ctx.fillStyle =

                i % 3 === 0

                    ? "#ffd93d"

                    : i % 3 === 1

                        ? "#ffffff"

                        : "#ff7c8e";


            ctx.beginPath();


            ctx.arc(
                dx,
                dy,
                2.1,
                0,
                Math.PI * 2
            );


            ctx.fill();
        }


        ctx.restore();
    }



    /* =========================
       ALVO
    ========================= */

    function drawTarget() {

        const {
            x,
            y,
            r
        } =
            state.target;


        ctx.save();



        /* SUPORTE */

        ctx.strokeStyle =
            "#8a5a32";


        ctx.lineWidth =
            10;


        ctx.beginPath();


        ctx.moveTo(
            x,
            y + r * 0.8
        );


        ctx.lineTo(
            x,
            state.groundY
        );


        ctx.stroke();



        /* SOMBRA */

        ctx.fillStyle =
            "rgba(0,0,0,0.14)";


        ctx.beginPath();


        ctx.ellipse(

            x + 5,

            state.groundY + 5,

            r * 0.85,

            12,

            0,

            0,

            Math.PI * 2
        );


        ctx.fill();



        ctx.shadowColor =
            "rgba(0,0,0,0.22)";


        ctx.shadowBlur =
            18;


        ctx.shadowOffsetY =
            8;



        drawCircle(
            x,
            y,
            r * 1.05,
            "#ffffff"
        );


        ctx.shadowColor =
            "transparent";


        drawCircle(
            x,
            y,
            r * 0.96,
            "#2b2f38"
        );


        drawCircle(
            x,
            y,
            r * 0.78,
            "#1597b8"
        );


        drawCircle(
            x,
            y,
            r * 0.57,
            "#ff4d5f"
        );


        drawCircle(
            x,
            y,
            r * 0.34,
            "#ffd93d"
        );


        drawCircle(
            x,
            y,
            r * 0.12,
            "#fff0a6"
        );



        /* BRILHO */

        ctx.strokeStyle =
            "rgba(255,255,255,0.6)";


        ctx.lineWidth =
            2;


        ctx.beginPath();


        ctx.arc(

            x - r * 0.13,

            y - r * 0.13,

            r * 0.72,

            Math.PI * 1.12,

            Math.PI * 1.7
        );


        ctx.stroke();


        ctx.restore();
    }



    function drawCircle(
        x,
        y,
        r,
        color
    ) {

        ctx.fillStyle =
            color;


        ctx.beginPath();


        ctx.arc(
            x,
            y,
            r,
            0,
            Math.PI * 2
        );


        ctx.fill();
    }



    /* =========================
       DIREÇÃO DA MIRA
    ========================= */

    function getCurrentAim() {

        if (
            state.dragging
        ) {

            const dx =
                state.bow.x -
                state.pointer.x;


            const dy =
                state.bow.y -
                state.pointer.y;


            const len =
                Math.hypot(
                    dx,
                    dy
                ) || 1;


            return {

                dirX:
                    dx / len,

                dirY:
                    dy / len,

                angle:
                    Math.atan2(
                        dy,
                        dx
                    )
            };
        }


        const dx =
            state.target.x -
            state.bow.x;


        const dy =
            state.target.y -
            state.bow.y;


        const len =
            Math.hypot(
                dx,
                dy
            ) || 1;


        return {

            dirX:
                dx / len,

            dirY:
                dy / len,

            angle:
                Math.atan2(
                    dy,
                    dx
                )
        };
    }



    /* =========================
       DESENHAR ARCO
    ========================= */

    function drawBow() {

        const {
            x,
            y
        } =
            state.bow;


        const aim =
            getCurrentAim();


        const drawScale =
            Math.max(
                0.75,
                Math.min(
                    1.2,
                    state.width / 1200
                )
            );


        ctx.save();


        ctx.translate(
            x,
            y
        );


        ctx.scale(
            drawScale,
            drawScale
        );


        ctx.rotate(
            aim.angle
        );


        const bowH =
            150;


        const stringPull =
            state.dragging

                ? Math.min(
                    74,
                    state.pull * 0.44
                )

                : 0;



        /* MADEIRA DO ARCO */

        ctx.strokeStyle =
            "#744c2c";


        ctx.lineWidth =
            10;


        ctx.lineCap =
            "round";


        ctx.beginPath();


        ctx.moveTo(
            0,
            -bowH / 2
        );


        ctx.quadraticCurveTo(
            35,
            -38,
            30,
            0
        );


        ctx.quadraticCurveTo(
            35,
            38,
            0,
            bowH / 2
        );


        ctx.stroke();



        /* CORDA */

        ctx.strokeStyle =
            "#f2f3f5";


        ctx.lineWidth =
            2.4;


        ctx.beginPath();


        ctx.moveTo(
            0,
            -bowH / 2
        );


        ctx.lineTo(
            -stringPull,
            0
        );


        ctx.lineTo(
            0,
            bowH / 2
        );


        ctx.stroke();



        /*
            Só desenha a flecha
            encaixada no arco se
            não existir uma flecha
            em voo.
        */

        if (
            !state.arrow
        ) {

            const shaftStart =
                -stringPull + 4;


            /* HASTE */

            ctx.strokeStyle =
                "#8b5a2b";


            ctx.lineWidth =
                4;


            ctx.beginPath();


            ctx.moveTo(
                shaftStart,
                0
            );


            ctx.lineTo(
                78,
                0
            );


            ctx.stroke();



            /* PONTA */

            ctx.fillStyle =
                "#4a4f57";


            ctx.beginPath();


            ctx.moveTo(
                88,
                0
            );


            ctx.lineTo(
                75,
                -6
            );


            ctx.lineTo(
                75,
                6
            );


            ctx.closePath();


            ctx.fill();



            /* PENAS */

            ctx.fillStyle =
                "#e75d6b";


            ctx.beginPath();


            ctx.moveTo(
                shaftStart + 5,
                0
            );


            ctx.lineTo(
                shaftStart + 17,
                -6
            );


            ctx.lineTo(
                shaftStart + 16,
                0
            );


            ctx.lineTo(
                shaftStart + 17,
                6
            );


            ctx.closePath();


            ctx.fill();
        }


        ctx.restore();



        /*
            Trajetória prevista.
        */

        if (
            state.dragging
        ) {

            drawTrajectoryPreview();
        }
    }



    /* =========================
       PREVISÃO DA TRAJETÓRIA
    ========================= */

    function drawTrajectoryPreview() {

        if (
            state.pull < 8
        ) {

            return;
        }


        const dx =
            state.bow.x -
            state.pointer.x;


        const dy =
            state.bow.y -
            state.pointer.y;


        const len =
            Math.hypot(
                dx,
                dy
            ) || 1;


        const dirX =
            dx / len;


        const dirY =
            dy / len;


        const normalizedPower =
            Math.min(
                1,
                state.pull /
                state.maxPull
            );


        const speed =
            380 +
            normalizedPower *
            520;


        const gravity =
            650;


        ctx.save();


        ctx.fillStyle =
            "rgba(255,255,255,0.7)";


        for (
            let t = 0.12;
            t <= 1.05;
            t += 0.12
        ) {

            /*
                Equação da trajetória.

                X = X0 + VX × tempo

                Y = Y0 + VY × tempo
                + 1/2 × gravidade × tempo²
            */

            const x =
                state.bow.x +
                dirX *
                speed *
                t;


            const y =
                state.bow.y +
                dirY *
                speed *
                t +
                0.5 *
                gravity *
                t *
                t;


            if (
                x >
                state.width
                ||
                y >
                state.groundY
            ) {

                break;
            }


            ctx.beginPath();


            ctx.arc(
                x,
                y,
                3.2,
                0,
                Math.PI * 2
            );


            ctx.fill();
        }


        ctx.restore();
    }



    /* =========================
       DESENHAR FLECHA
    ========================= */

    function drawArrow(
        arrow
    ) {

        if (
            !arrow
        ) {

            return;
        }


        ctx.save();


        ctx.translate(
            arrow.x,
            arrow.y
        );


        ctx.rotate(
            arrow.angle
        );



        /* HASTE */

        ctx.strokeStyle =
            "#83502c";


        ctx.lineWidth =
            4;


        ctx.lineCap =
            "round";


        ctx.beginPath();


        ctx.moveTo(
            -30,
            0
        );


        ctx.lineTo(
            34,
            0
        );


        ctx.stroke();



        /* PONTA */

        ctx.fillStyle =
            "#4a4f57";


        ctx.beginPath();


        ctx.moveTo(
            43,
            0
        );


        ctx.lineTo(
            31,
            -6
        );


        ctx.lineTo(
            31,
            6
        );


        ctx.closePath();


        ctx.fill();



        /* PENAS */

        ctx.fillStyle =
            "#f05b6b";


        ctx.beginPath();


        ctx.moveTo(
            -26,
            0
        );


        ctx.lineTo(
            -12,
            -7
        );


        ctx.lineTo(
            -14,
            0
        );


        ctx.lineTo(
            -12,
            7
        );


        ctx.closePath();


        ctx.fill();


        ctx.restore();
    }



    /* =========================
       ALJAVA
    ========================= */

    function drawQuiver() {

        const x =
            32;


        const y =
            state.groundY - 6;


        ctx.save();



        ctx.fillStyle =
            "#8c542b";


        ctx.beginPath();


        ctx.roundRect(
            x - 18,
            y - 62,
            40,
            70,
            8
        );


        ctx.fill();



        ctx.fillStyle =
            "#b9753c";


        ctx.fillRect(
            x - 13,
            y - 56,
            7,
            56
        );



        const count =
            Math.min(
                5,
                state.arrows
            );


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const ax =
                x -
                10 +
                i * 8;


            ctx.strokeStyle =
                "#83502c";


            ctx.lineWidth =
                3;


            ctx.beginPath();


            ctx.moveTo(
                ax,
                y - 60
            );


            ctx.lineTo(

                ax +
                (
                    i % 2
                        ? 4
                        : -2
                ),

                y - 103
            );


            ctx.stroke();



            ctx.fillStyle =
                "#4a4f57";


            ctx.beginPath();


            ctx.moveTo(

                ax +
                (
                    i % 2
                        ? 4
                        : -2
                ),

                y - 109
            );


            ctx.lineTo(
                ax - 4,
                y - 99
            );


            ctx.lineTo(
                ax + 7,
                y - 101
            );


            ctx.closePath();


            ctx.fill();
        }


        ctx.restore();
    }



    /* =========================
       PARTÍCULAS VISUAIS
    ========================= */

    function drawParticles() {

        state.particles.forEach(
            p => {

                ctx.save();


                ctx.globalAlpha =
                    Math.max(
                        0,
                        p.life
                    );


                ctx.fillStyle =
                    p.life > 0.6

                        ? "#ffd93d"

                        : "#ffffff";


                ctx.beginPath();


                ctx.arc(
                    p.x,
                    p.y,
                    p.size,
                    0,
                    Math.PI * 2
                );


                ctx.fill();


                ctx.restore();
            }
        );



        state.floatingTexts.forEach(
            f => {

                ctx.save();


                ctx.globalAlpha =
                    Math.max(
                        0,
                        f.life
                    );


                ctx.font =
                    '900 26px "Baloo 2", system-ui';


                ctx.textAlign =
                    "center";


                ctx.fillStyle =
                    "#1a628d";


                ctx.strokeStyle =
                    "white";


                ctx.lineWidth =
                    5;


                ctx.strokeText(
                    f.text,
                    f.x,
                    f.y
                );


                ctx.fillText(
                    f.text,
                    f.x,
                    f.y
                );


                ctx.restore();
            }
        );
    }



    /* =========================
       RENDERIZAÇÃO
    ========================= */

    function render() {

        const shakeX =
            state.shake

                ? (
                    Math.random() -
                    0.5
                ) *
                state.shake

                : 0;


        const shakeY =
            state.shake

                ? (
                    Math.random() -
                    0.5
                ) *
                state.shake

                : 0;



        ctx.setTransform(

            state.dpr,

            0,

            0,

            state.dpr,

            0,

            0
        );


        ctx.clearRect(

            0,

            0,

            state.width,

            state.height
        );


        ctx.save();


        ctx.translate(
            shakeX,
            shakeY
        );


        drawBackground();


        drawTarget();


        drawQuiver();


        drawBow();


        drawArrow(
            state.arrow
        );


        drawParticles();


        ctx.restore();
    }



    /* =========================
       LOOP DO JOGO
    ========================= */

    function loop(
        now
    ) {

        const dt =
            Math.min(

                0.032,

                (
                    now -
                    state.lastTime
                ) / 1000
            );


        state.lastTime =
            now;


        updatePhysics(
            dt
        );


        render();


        requestAnimationFrame(
            loop
        );
    }



    /* =========================
       EVENTOS
    ========================= */

    canvas.addEventListener(
        "pointerdown",
        onPointerDown
    );


    canvas.addEventListener(
        "pointermove",
        onPointerMove
    );


    canvas.addEventListener(
        "pointerup",
        onPointerUp
    );


    canvas.addEventListener(
        "pointercancel",
        onPointerUp
    );



    restartBtn.addEventListener(
        "click",
        resetGame
    );


    playAgainBtn.addEventListener(
        "click",
        resetGame
    );


    continueBtn.addEventListener(
        "click",
        closeQuestionAndContinue
    );



    window.addEventListener(
        "resize",
        resize
    );



    window.addEventListener(
        "keydown",
        e => {

            if (
                e.key.toLowerCase() === "r"
            ) {

                resetGame();
            }


            /*
                Não fecha a pergunta
                usando ESC para impedir
                que o jogador pule
                a atividade.
            */

            if (
                e.key === "Escape"
                &&
                !questionModal.classList.contains(
                    "hidden"
                )
            ) {

                return;
            }
        }
    );



    /* =========================
       INICIALIZAÇÃO
    ========================= */

    resize();


    updateHud();


    requestAnimationFrame(
        loop
    );

})();