var strings = {
    ko: {
        main: '우리는 블록체인이 오늘날의 미래라고 믿습니다.<br>사람과 삶을 발전시키고 보완하며 이러한 편리함이<br>우리 삶에 안착할 수 있도록 합니다.',
        about: 'COSMICBC Ltd는 2018년 설립되어, 인공지능(AI) 및 블록체인(Blockchain) 연구개발을 전문으로 하는 기업입니다.<br>당사는 블록체인을 통해 인공지능을 활용한 미들웨어 서비스를 준비중이며, 우리의 목표는 실생활에서 AI와 블록체인 기술을 융합하여 실생활에서 사용가능한 기술을 구현하기 위해 최선을 다하고 있습니다.',
        pik: 'AI와 블록체인기술을 접목한 독창적인 리워드 플랫폼',
        pikSub: '인공지능(AI)과 인간의 판단(Human Factor)이 결합된 암호화폐 가격 예측 서비스로 AI 프로그램이 상승, 보합, 하락 3가지 구간을 예측하고 보상으로 AI Token을 제공하는 플랫폼',
        bip: 'AI 기반 암호화폐 가격변동 서비스',
        bipSub: 'AI Model이 암호화폐 매매에 도움을 줄 수 있도록 상승 또는 하락 징후를 포착하여 유저들에게 푸쉬 알림을 제공하는 서비스로 편리하고 접근성이 용이하도록 어플리케이션',
        bot: 'AI Prediction Signal을 바탕으로 한<br class="mb"> Auto-Trading Bot',
        botSub: 'AIBitBip의 Prediction Signal을 받아 정확한 타이밍에 암호화폐 매매를 하여 유저들이 수익을 볼 수 있도록 제공하는 서비스로 각 거래소에 제공하여 거래량과 암호화폐 유동성을 확보 할 수 있도록 Market을 형성',
        plat: 'AI 연구-개발 환경 개선과 검증된 데이터확보를<br class="mb"> 해결할 수 있는 AI Prediction Platform',
        platSub: 'AI 연구자들이 Open Source Library 환경에 손쉽게 접근, 이용 할 수 있도록 서비스를 제공하고 Traffic 과 Model 데이터를 확보할 수 있도록 기업에 제공하는 서비스 플랫폼',
        exchange: '기존의 중앙화 거래소 솔루션의 기능과 마진 거래와 레버리지 거래를 지원하는 암호화폐 마진 거래소 뿐만 아니라 선물거래와 옵션거래, 마진 선물거래와 마진 옵션거래까지 지원하는 솔루션'
    },
    en: {
        main: '',
        about: '',
        pik: '',
        pikSub: '',
        bip: '',
        bipSub: '',
        bot: '',
        botSub: '',
        plat: '',
        platSub: '',
        exchange: ''
    },
    zh: {
        main: '',
        about: '',
        pik: '',
        pikSub: '',
        bip: '',
        bipSub: '',
        bot: '',
        botSub: '',
        plat: '',
        platSub: '',
        exchange: ''
    },
    jp: {
        main: '',
        about: '',
        pik: '',
        pikSub: '',
        bip: '',
        bipSub: '',
        bot: '',
        botSub: '',
        plat: '',
        platSub: '',
        exchange: ''
    }
};
  
function getLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    if(!lang) {
        return 'en';
    }
    else {
        return lang.substring(0, 2);
    }
}

function applyLanguage(lang) {
    if(!lang) {
        lang = localStorage.getItem("LANG");
        if(!lang)
            lang = getLanguage();
    }
    else {  // 유저가 설정한 언어를 저장
        localStorage.setItem("LANG", lang);
    }

    var strPack = strings[lang];
    if(!strPack) {
        lang = 'en';
        strPack = strings.en;
    }
    
    $('.text-trans').each(function(idx){
        var strid = $(this).data('strid');
        if(strPack[strid]) {
            $(this).html(strPack[strid]);
        }
    });

    $('.lan-list a').each(function(){
        if(lang == $(this).data('lang')) {
            $(".lan-now").text( $(this).text().trim() );
            $(this).addClass('on');
        }            
        else
            $(this).removeClass('on');
    });
}