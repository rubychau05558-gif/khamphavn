document.addEventListener("DOMContentLoaded", function() {

    // Khai báo các thành phần video và tương tác màn hình
    const videoWelcome = document.getElementById('video-welcome');
    const videoTravel = document.getElementById('video-travel');
    const videoExam = document.getElementById('video-exam');
    const videoGetPrompt = document.getElementById('video-get-prompt');
    const videoKing = document.getElementById('video-king');
    const btnStartGame = document.getElementById('btn-start-game');
    
    // Khai báo các thành phần chặng Quảng Bình / Sơn Đoòng
    const videoSonDoong1 = document.getElementById("video-sondoong-1");
    const videoSonDoong2 = document.getElementById("video-sondoong-2");
    const popupSonDoongNotif = document.getElementById("popup-sondoong-notification");
    const btnSonDoongNotifNext = document.getElementById("btn-sondoong-notif-next");
    const sondoongBackpackScreen = document.getElementById("sondoong-backpack-screen");
    const btnSonDoongBackpackNext = document.getElementById("btn-sondoong-backpack-next");

    // Khai báo các thành phần chặng Huế
    const videoHue1 = document.getElementById('video-hue-1');
    const videoHue2 = document.getElementById('video-hue-2');
    const videoHueNhaNhac = document.getElementById('video-hue-nhanhac'); 
    const hueAccidentScreen = document.getElementById('hue-accident-screen');
    const hueMixerScreen = document.getElementById('hue-mixer-screen');
    const hueNhaNhacContainer = document.getElementById('hue-nhanhac-container');
    const btnSkipNhaNhac = document.getElementById('btn-skip-nhanhac');
    
    const btnCheckMixer = document.getElementById('btn-check-mixer');
    const introFood = document.getElementById("intro-food");
    const btnStartFood = document.getElementById("btn-start-food");
    const foodStep1 = document.getElementById("food-step1");
    const foodStep2 = document.getElementById("food-step2");
    const foodStep3 = document.getElementById("food-step3");
    const foodStep4 = document.getElementById("food-step4");
    const foodStep5 = document.getElementById("food-step5");
    const foodStep6 = document.getElementById("food-step6");
    const foodStep7 = document.getElementById("food-step7");
    const foodStep8 = document.getElementById("food-step8");
    const foodStep9 = document.getElementById("food-step9");
    const foodStep10 = document.getElementById("food-step10");
    const foodStep11 = document.getElementById("food-step11");
    const foodStep12 = document.getElementById("food-step12");
    const foodStep13 = document.getElementById("food-step13");
    const foodStep14 = document.getElementById("food-step14");
    const foodStep15 = document.getElementById("food-step15");
    const foodStep16 = document.getElementById("food-step16");
    const foodStep17 = document.getElementById("food-step17");
    const foodStep18 = document.getElementById("food-step18");
    const foodStep19 = document.getElementById("food-step19");
    const foodStep20 = document.getElementById("food-step20");
    const foodStep21 = document.getElementById("food-step21");
    const foodStep22 = document.getElementById("food-step22");
    const foodStep23 = document.getElementById("food-step23");
    const foodStep24 = document.getElementById("food-step24");
    const foodStep25 = document.getElementById("food-step25");
    const foodStep26 = document.getElementById("food-step26");
    const foodStep27 = document.getElementById("food-step27");
    const foodStep28 = document.getElementById("food-step28");
    const foodStep29 = document.getElementById("food-step29");
    const foodStep30 = document.getElementById("food-step30");
    const foodStep31 = document.getElementById("food-step31");
    const foodStep32 = document.getElementById("food-step32");

    // Khai báo vùng chạm
    const clickVa24 = document.getElementById("click-va-24");
    const btnNext25 = document.getElementById("btn-next-25");
    const clickGinger26 = document.getElementById("click-ginger-26");
    const clickKnife27 = document.getElementById("click-knife-27");
    const clickStove28 = document.getElementById("click-stove-28"); 
    const clickSugar29 = document.getElementById("click-sugar-29");
    const clickCheBowl30 = document.getElementById("click-che-bowl-30");
    const countdownText = document.getElementById("countdown-text");
    const btnFinishFood32 = document.getElementById("btn-finish-food-32");
    const clickPan7 = document.getElementById("click-pan-7");
    const clickPorkSieve8 = document.getElementById("click-pork-sieve-8");
    const clickSugarJar9 = document.getElementById("click-sugar-jar-9");
    const btnNextText10 = document.getElementById("btn-next-text-10");
    const btnNextPalace11 = document.getElementById("btn-next-palace-11");
    const clickFlourBowl12 = document.getElementById("click-flour-bowl-12");
    const clickSugarJar13 = document.getElementById("click-sugar-jar-13");
    const clickSaltJar13 = document.getElementById("click-salt-jar-13");
    const clickOilBottle14 = document.getElementById("click-oil-bottle-14");
    const clickPork = document.getElementById("click-pork");
    const clickMeatPlate2 = document.getElementById("click-meat-plate-2"); 
    const clickKnife3 = document.getElementById("click-knife-3");
    const clickStove4 = document.getElementById("click-stove-4");
    const clickPork5 = document.getElementById("click-pork-5");
    const countdownTextB6 = document.getElementById("countdown-text-b6");
    const btnNext21 = document.getElementById("btn-next-21");
    const clickCheBalls23 = document.getElementById("click-che-balls-23");
    const clickStove22 = document.getElementById("click-stove-22");
    const clickMeat20 = document.getElementById("click-meat-20");
    const clickCutDough19 = document.getElementById("click-cut-dough-19");
    const clickCutter18 = document.getElementById("click-cutter-18");
    const clickDoughBowl17 = document.getElementById("click-dough-bowl-17");
    const clickDoughBowl16 = document.getElementById("click-dough-bowl-16");
    const clickStove15 = document.getElementById("click-stove-15");

    // Khai báo cấu trúc chặng Chiếu Thư & Vinh Quy
    const audioMorseDecree = document.getElementById('audio-morse-decree');
    const morseDecreeScreen = document.getElementById('morse-decree-screen');
    const morseVictoryScreen = document.getElementById('morse-victory-screen');
    const morseKeyAuthScreen = document.getElementById('morse-key-auth-screen');
    const verificationKeyInput = document.getElementById('verification-key-input');

    // Các thành phần thanh trượt Mixer chặng Huế
    const sliderDrum = document.getElementById('slider-drum');
    const sliderPipa = document.getElementById('slider-pipa');
    const sliderErhu = document.getElementById('slider-erhu');
    const labelDrum = document.getElementById('label-drum');
    const labelPipa = document.getElementById('label-pipa');
    const labelErhu = document.getElementById('label-erhu');
    const mixerConsole = document.getElementById('mixer-console');
    const mixerSuccessAlert = document.getElementById('mixer-success-alert');

    const speechBubble = document.getElementById('capy-speech-bubble');
    const introScreen = document.getElementById('intro-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const questionBox = document.getElementById('question-box');
    const optionsContainer = document.getElementById('options-container');
    const quizProgress = document.getElementById('quiz-progress');

    const popupPass = document.getElementById('popup-pass');
    const popupFail = document.getElementById('popup-fail');

    const morseScreen = document.getElementById('morse-screen');
    const morseDialogueText = document.getElementById('morse-dialogue-text');
    const morseDecoderZone = document.getElementById('morse-decoder-zone');
    const morseUserInput = document.getElementById('morse-user-input');
    const policyContainer = document.getElementById('policy-container');
    // Khai báo nút Skip ở đầu file JS
    const btnSkipVideo = document.getElementById('btn-skip-video');
    function playVideo(videoElem, nextActionCallback) {
        if (!videoElem) return;

        // 1. Reset và hiển thị video + nút Bỏ qua
        videoElem.currentTime = 0;
        videoElem.style.display = 'block';
        if (btnSkipVideo) btnSkipVideo.style.display = 'block';

        // Đánh dấu để tránh bị trigger callback 2 lần (do cả onended và onclick skip)
        let isFinished = false;

        // Hàm xử lý hoàn tất video & chuyển cảnh
        function finishVideo() {
            if (isFinished) return;
            isFinished = true;

            videoElem.pause();
            videoElem.style.display = 'none';
            if (btnSkipVideo) {
                btnSkipVideo.style.display = 'none';
                btnSkipVideo.onclick = null; // Gỡ sự kiện click cũ
            }
            videoElem.onended = null;

            // Gọi callback chuyển sang slide/cảnh tiếp theo tại đây
            if (typeof nextActionCallback === 'function') {
                nextActionCallback();
            }
        }

        // Lắng nghe sự kiện kết thúc video
        videoElem.onended = finishVideo;

        // Lắng nghe sự kiện bấm nút Bỏ qua
        if (btnSkipVideo) {
            btnSkipVideo.onclick = finishVideo;
        }

        // Phát video
        videoElem.play().catch(err => {
            console.log("Lỗi autoplay:", err);
            // Nếu trình duyệt chặn tự động phát, chuyển sang slide tiếp theo luôn
            finishVideo();
        });
    }
    // Ví dụ: Phát video Welcome -> Hết video hoặc bấm Bỏ qua thì mở bảng thoại Capy
    const btnSkip = document.getElementById('btn-skip'); // Hoặc thay 'btn-skip' bằng ID đúng của nút Skip trong HTML của bạn
    const btnBack = document.getElementById('btn-global-back');

    const energyLoadingScreen = document.getElementById('energy-loading-screen');
    const energyBarFill = document.getElementById('energy-bar-fill');
    const energyStatus = document.getElementById('energy-status');
    const energyRouteBox = document.getElementById('energy-route-box');
    const btnEnergyContinue = document.getElementById('btn-energy-continue');

    const badgePopupOverlay = document.getElementById('badge-popup-overlay');
    const btnBadgeDownload = document.getElementById('btn-badge-download');
    const btnBadgeClose = document.getElementById('btn-badge-close');

    // Khắc phục lỗi rác click và thống nhất luồng sự kiện Đóng Huy Hiệu -> Sơn Đoòng
    if (btnBadgeClose) {
        btnBadgeClose.addEventListener('click', function () {
            // 1. Ẩn popup huy hiệu Hà Nội
            document.getElementById('badge-popup-overlay').style.display = 'none';

            // 2. Chuyển thẳng sang video đầu tiên của chặng Huế
            const videoHue1 = document.getElementById('video-hue-1');
            if (videoHue1) {
                videoHue1.style.display = 'block';
                videoHue1.currentTime = 0;
                videoHue1.play();
            }
        });
    }

    let currentState = "START_SCREEN";
    let playerName = "CAPY";
    let mixerCleared = false; 

    let morseTimeoutId = null;
    let isPlayingMorse = false;

    function stopAllSoundsAndMorse() {
        if (morseTimeoutId) { 
            clearTimeout(morseTimeoutId);
            morseTimeoutId = null;
        }
        isPlayingMorse = false;

        if(audioMorseDecree) {
            audioMorseDecree.pause();
            audioMorseDecree.currentTime = 0;
        }

        document.querySelectorAll('.video-screen').forEach(vid => {
            if(vid) {
                vid.pause();
                vid.currentTime = 0;
            }
        });
    }

    function playVideoSafely(videoElement, nextStepFallback) {
        stopAllSoundsAndMorse();

        document.querySelectorAll('.video-screen').forEach(vid => {
            if(vid) vid.style.display = 'none';
        });

        if (!videoElement) {
            if (typeof nextStepFallback === "function") nextStepFallback();
            return;
        }

        videoElement.style.display = 'block';
        videoElement.muted = false;
        videoElement.currentTime = 0;

        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Video phát mượt mà: " + videoElement.id);
            }).catch(error => {
                console.warn("Autoplay block, chuyển câm...", error);
                videoElement.muted = true;
                videoElement.play().catch(e => {
                    console.error("Không thể chạy video: ", e);
                    videoElement.style.display = 'none';
                    if (typeof nextStepFallback === "function") nextStepFallback();
                });
            });
        }
    }

    function setupVideoFallback(videoElement, nextStepFunction) {
        if (!videoElement) return;
        videoElement.onerror = function() {
            videoElement.style.display = 'none';
            setTimeout(nextStepFunction, 100);
        };
    }

    const quizData = [
        { question: "Câu 1: Khi đi học hoặc đi dã ngoại vào những ngày hè nắng nóng, để cơ thể không bị mất nước và mệt mỏi, em nên uống nước như thế nào là đúng cách nhất?", options: ["A. Đợi thật khát rồi uống một cốc thật to thật nhanh.", "B. Uống từng ngụm nhỏ, đều đặn ngay cả khi chưa thấy khát.", "C. Chỉ uống các loại nước ngọt có ga để giải khát nhanh hơn.", "D. Không cần uống nước, chỉ cần ăn kem là đủ."], answer: 1 },
        { question: "Câu 2: Khi đi tham quan các di tích lịch sử hoặc đền chùa cổ kính ở Hà Nội hay Huế, hành động nào sau đây thể hiện mình là một học sinh văn minh?", options: ["A. Mặc quần đùi, áo ba lỗ cho mát mẻ.", "B. Đi lại nhẹ nhàng, nói khẽ cười duyên và mặc trang phục lịch sự.", "C. Dùng bút xóa viết tên mình lên tường để làm kỷ niệm.", "D. Hái hoa, bẻ cành cây cổ thụ trong khuôn viên di tích."], answer: 1 },
        { question: "Câu 3: Nếu chẳng may quần áo hoặc sách vở của em bị dính bẩn do dầu mỡ thức ăn, loại chất nào có sẵn trong nhà bếp có thể giúp em tẩy sạch vết dầu mỡ này dễ dàng nhất?", options: ["A. Nước lọc thông thường.", "B. Nước rửa chén (bát).", "C. Nước mắm.", "D. Muối ăn."], answer: 1 },
        { question: "Câu 4: Vì sao các chú kiểm lâm và các nhà bảo vệ môi trường luôn khuyên chúng ta không được vứt túi nilon và rác thải nhựa ra bờ biển hoặc trong rừng?", options: ["A. Vì túi nilon sẽ tan vào nước biển ngay lập tức làm mặn nước.", "B. Vì các loài động vật hoang dã (như rùa biển, chim) có thể nuốt phải và gặp nguy hiểm.", "C. Vì túi nilon làm cho nước biển đổi sang màu đen.", "D. Vì túi nilon sẽ biến thành những hòn đá cản lối đi."], answer: 1 },
        { question: "Câu 5: Vì sao khi trời mưa giông, các em thường nhìn thấy ánh chớp sáng lóa trên bầu trời trước rồi một lúc sau mới nghe thấy tiếng sấm nổ đùng đoàng?", options: ["A. Vì thần sét thích tạo ánh sáng trước rồi mới đánh trống sau.", "B. Vì tai của chúng ta nghe chậm hơn mắt nhìn.", "C. Vì vận tốc của ánh sáng chạy nhanh hơn rất nhiều so với vận tốc của âm thanh.", "D. Vì tiếng sấm bị các đám mây giữ lại không cho đi nhanh."], answer: 2 }
    ];
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    if (btnStartQuiz) {
        btnStartQuiz.addEventListener('click', () => {
            stopAllSoundsAndMorse();
            
            // Reset chỉ số câu hỏi
            currentQuestionIndex = 0;
            correctAnswersCount = 0;

            // Ẩn màn giới thiệu, hiện màn hình trắc nghiệm
            if (typeof introScreen !== 'undefined' && introScreen) introScreen.style.display = 'none';
            
            const quizScreen = document.getElementById('quiz-screen');
            if (quizScreen) quizScreen.style.display = 'block';

            // BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ ĐỔI CHỮ:
            loadQuestion(); 
        });
    }
    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;

    const AudioFeedback = {
        ctx: null,
        init() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
        resumeCtx() { this.init(); if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
        playClickSound() { this.resumeCtx(); const now = this.ctx.currentTime; const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.type = 'sine'; osc.frequency.setValueAtTime(580, now); gain.gain.setValueAtTime(0.02, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05); osc.connect(gain); gain.connect(this.ctx.destination); osc.start(now); osc.stop(now + 0.05); },
        playCac() { this.resumeCtx(); const now = this.ctx.currentTime; const bufferSize = this.ctx.sampleRate * 0.08; const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate); const data = buffer.getChannelData(0); for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; } const noiseSource = this.ctx.createBufferSource(); noiseSource.buffer = buffer; const filter = this.ctx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.setValueAtTime(1700, now); filter.Q.setValueAtTime(6.0, now); const gain = this.ctx.createGain(); gain.gain.setValueAtTime(4.5, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075); noiseSource.connect(filter); filter.connect(gain); gain.connect(this.ctx.destination); noiseSource.start(now); noiseSource.stop(now + 0.08); },
        playTung() { this.resumeCtx(); const now = this.ctx.currentTime; const carrier = this.ctx.createOscillator(); carrier.type = 'sine'; carrier.frequency.setValueAtTime(100, now); carrier.frequency.exponentialRampToValueAtTime(50, now + 0.4); const subOsc = this.ctx.createOscillator(); subOsc.type = 'sine'; subOsc.frequency.setValueAtTime(45, now); const modulator = this.ctx.createOscillator(); modulator.type = 'triangle'; modulator.frequency.setValueAtTime(180, now); const modGain = this.ctx.createGain(); modGain.gain.setValueAtTime(65, now); modGain.gain.exponentialRampToValueAtTime(0.1, now + 0.12); const lpFilter = this.ctx.createBiquadFilter(); lpFilter.type = 'lowpass'; lpFilter.frequency.setValueAtTime(300, now); lpFilter.Q.setValueAtTime(2.0, now); const gain = this.ctx.createGain(); gain.gain.setValueAtTime(3.5, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8); modulator.connect(modGain); modGain.connect(carrier.frequency); carrier.connect(lpFilter); subOsc.connect(lpFilter); lpFilter.connect(gain); gain.connect(this.ctx.destination); modulator.start(now); carrier.start(now); subOsc.start(now); modulator.stop(now + 0.8); carrier.stop(now + 0.8); subOsc.stop(now + 0.8); },
        playPassSound() { this.resumeCtx(); const b = this.ctx.currentTime; this.tone(261.63, 0.15, b); this.tone(329.63, 0.15, b + 0.15); this.tone(392.00, 0.15, b + 0.30); this.tone(523.25, 0.5, b + 0.45); },
        playFailSound() { this.resumeCtx(); const b = this.ctx.currentTime; this.tone(293.66, 0.2, b); this.tone(246.94, 0.2, b + 0.2); this.tone(220.00, 0.6, b + 0.4); },
        tone(freq, dur, startTime) { const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.type = 'triangle'; osc.frequency.setValueAtTime(freq, startTime); gain.gain.setValueAtTime(0.15, startTime); gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur); osc.connect(gain); gain.connect(this.ctx.destination); osc.start(startTime); osc.stop(startTime + dur); }
    };

    function updateNavigation(state) {
        currentState = state;

        // 1. Mặc định ẩn nút Skip và Back (kiểm tra null trước)
        if (btnSkip) btnSkip.style.display = 'none';
        if (btnBack) btnBack.style.display = 'none';

        // 2. Hiển thị nút Skip cho các đoạn video
        if ([
            "VIDEO_1",
            "VIDEO_2",
            "VIDEO_3",
            "VIDEO_GET_PROMPT",
            "VIDEO_KING",
            "VIDEO_SON_DOONG_1",
            "VIDEO_SON_DOONG_2",
            "VIDEO_HUE_1",
            "VIDEO_HUE_2",
            "VIDEO_HUE_NHANHAC"
        ].includes(state)) {
            if (btnSkip) btnSkip.style.display = 'block';
        }

        // 3. Hiển thị nút Back cho các màn hình cho phép quay lại
        if (!["START_SCREEN", "QUIZ_PLAYING", "ENERGY_LOADING", "BADGE_POPUP", "HUE_ACCIDENT", "HUE_MIXER", "MORSE_DECREE", "MORSE_VICTORY", "FOOD_STAGE", "FOOD_STEP1", "FOOD_STEP2"].includes(state)) {
            if (btnBack) btnBack.style.display = 'block';
        }
    }

    if (btnSkip) {
        btnSkip.addEventListener('click', () => {
            stopAllSoundsAndMorse();
            if (currentState === "VIDEO_1") { stepAfterVideo1(); }
            else if (currentState === "VIDEO_2") { stepAfterVideo2(); }
            else if (currentState === "VIDEO_3") { stepAfterVideo3(); }
            else if (currentState === "VIDEO_GET_PROMPT") { stepAfterVideoGetPrompt(); }
            else if (currentState === "VIDEO_KING") { stepAfterVideoKing(); }
            else if (currentState === "VIDEO_SON_DOONG_1") { stepAfterVideoSonDoong1(); }
            else if (currentState === "POPUP_SON_DOONG_NOTIF") { chuyenSangVideoSonDoong2(); }
            else if (currentState === "VIDEO_SON_DOONG_2") { stepAfterVideoSonDoong2(); }
            else if (currentState === "VIDEO_HUE_1") { stepAfterVideoHue1(); }
            else if (currentState === "VIDEO_HUE_2") { stepAfterVideoHue2(); }
            else if (currentState === "VIDEO_HUE_NHANHAC") { goToNextPageAfterHue(); }
        });
    }

    btnBack.addEventListener('click', () => {
        stopAllSoundsAndMorse();
        if (currentState === "VIDEO_1") {
            videoWelcome.style.display = 'none'; document.getElementById('start-overlay').style.display = 'flex'; updateNavigation("START_SCREEN");
        } 
        else if (currentState === "VIDEO_2") {
            speechBubble.style.display = 'none'; playVideoSafely(videoWelcome, stepAfterVideo1); updateNavigation("VIDEO_1");
        } 
        else if (currentState === "VIDEO_3") {
            playVideoSafely(videoTravel, stepAfterVideo2); speechBubble.style.display = 'block'; updateNavigation("VIDEO_2");
        } 
        else if (currentState === "VIDEO_GET_PROMPT") { 
            playVideoSafely(videoExam, stepAfterVideo3); updateNavigation("VIDEO_3");
        }
        else if (currentState === "INTRO_SCREEN") {
            introScreen.style.display = 'none'; playVideoSafely(videoGetPrompt, stepAfterVideoGetPrompt); updateNavigation("VIDEO_GET_PROMPT");
        }
        else if (currentState === "RESULT_SCREEN") {
            popupPass.style.display = 'none'; popupFail.style.display = 'none'; introScreen.style.display = 'flex'; updateNavigation("INTRO_SCREEN");
        }
        else if (currentState === "VIDEO_KING") {
            videoKing.style.display = 'none'; popupPass.style.display = 'flex'; updateNavigation("RESULT_SCREEN");
        }
        else if (currentState === "MORSE_STAGE") {
            morseScreen.style.display = 'none'; playVideoSafely(videoKing, stepAfterVideoKing); updateNavigation("VIDEO_KING");
        }
    });

    function stepAfterVideo1() { if(videoWelcome) videoWelcome.style.display = 'none'; speechBubble.style.display = 'block'; playVideoSafely(videoTravel, stepAfterVideo2); updateNavigation("VIDEO_2"); }
    if (videoWelcome) videoWelcome.onended = stepAfterVideo1; setupVideoFallback(videoWelcome, stepAfterVideo1);
    function stepAfterVideo2() { speechBubble.style.display = 'none'; if(videoTravel) videoTravel.style.display = 'none'; playVideoSafely(videoExam, stepAfterVideo3); updateNavigation("VIDEO_3"); }
    if (videoTravel) videoTravel.onended = stepAfterVideo2; setupVideoFallback(videoTravel, stepAfterVideo2);
    function stepAfterVideo3() { if(videoExam) videoExam.style.display = 'none'; playVideoSafely(videoGetPrompt, stepAfterVideoGetPrompt); updateNavigation("VIDEO_GET_PROMPT"); }
    if (videoExam) videoExam.onended = stepAfterVideo3; setupVideoFallback(videoExam, stepAfterVideo3);
    function stepAfterVideoGetPrompt() { if(videoGetPrompt) videoGetPrompt.style.display = 'none'; introScreen.style.display = 'flex'; updateNavigation("INTRO_SCREEN"); }
    if (videoGetPrompt) videoGetPrompt.onended = stepAfterVideoGetPrompt; setupVideoFallback(videoGetPrompt, stepAfterVideoGetPrompt);
    function stepAfterVideoKing() { if(videoKing) videoKing.style.display = 'none'; btnSkip.style.display = 'none'; morseScreen.style.display = 'block'; updateNavigation("MORSE_STAGE"); }
    if (videoKing) videoKing.onended = stepAfterVideoKing; setupVideoFallback(videoKing, stepAfterVideoKing);

    // LUỒNG CHUYỂN CẢNH CHẶNG QUẢNG BÌNH / SƠN ĐOÒNG
    function stepAfterVideoSonDoong1() {
        if (videoSonDoong1) {
            videoSonDoong1.style.display = "none";
            videoSonDoong1.pause();
        }
        
        console.log("Hết video 1 -> Hiện khung thông báo đá hang động");
        updateNavigation("POPUP_SON_DOONG_NOTIF");
        
        if (popupSonDoongNotif) {
            popupSonDoongNotif.style.display = "flex";
        }
    }

    if (videoSonDoong1) videoSonDoong1.onended = stepAfterVideoSonDoong1;
    setupVideoFallback(videoSonDoong1, stepAfterVideoSonDoong1);

    function chuyểnSangVideoSonDoong2() {
        if (popupSonDoongNotif) {
            popupSonDoongNotif.style.display = "none";
        }
        
        console.log("Đã đọc thông báo -> Chuyển sang video intro Sơn Đoòng");
        updateNavigation("VIDEO_SON_DOONG_2");
        playVideoSafely(videoSonDoong2, stepAfterVideoSonDoong2);
    }

    if (btnSonDoongNotifNext) {
        btnSonDoongNotifNext.addEventListener("click", (e) => {
            e.preventDefault();
            chuyểnSangVideoSonDoong2();
        });
    }

    // CHÈN ẢNH BALO SINH TỒN SAU VIDEO INTRO SƠN ĐOÒNG (VIDEO 2)
    function stepAfterVideoSonDoong2() {
        if (videoSonDoong2) {
            videoSonDoong2.style.display = "none";
            videoSonDoong2.pause();
        }
        
        console.log("Hết video Intro -> Hiển thị ảnh Balo Sinh Tồn");
        updateNavigation("SONDOONG_BACKPACK_SCREEN");
        if (sondoongBackpackScreen) {
            sondoongBackpackScreen.style.display = "flex";
        }
    }

    if (videoSonDoong2) videoSonDoong2.onended = stepAfterVideoSonDoong2;
    setupVideoFallback(videoSonDoong2, stepAfterVideoSonDoong2);

    // XÁC NHẬN BỘ DỤNG CỤ VÀ TIẾN VÀO CỐ ĐÔ HUẾ
    if (btnSonDoongBackpackNext) {
        btnSonDoongBackpackNext.addEventListener("click", (e) => {
            e.preventDefault();
            if (sondoongBackpackScreen) {
                sondoongBackpackScreen.style.display = "none";
            }
            console.log("Xác nhận Balo -> Tiến vào Cố đô Huế");
            updateNavigation("VIDEO_HUE_1");
            playVideoSafely(videoHue1, stepAfterVideoHue1);
        });
    }

    // LUỒNG CHUYỂN CẢNH CHẶNG HUẾ
    function stepAfterVideoHue1() { if(videoHue1) videoHue1.style.display = 'none'; playVideoSafely(videoHue2, stepAfterVideoHue2); updateNavigation("VIDEO_HUE_2"); }
    if (videoHue1) videoHue1.onended = stepAfterVideoHue1; setupVideoFallback(videoHue1, stepAfterVideoHue1);
    function stepAfterVideoHue2() {
        // 1. Dừng và ẩn video Hue 2
        const videoHue2 = document.getElementById('video-hue-2'); // Kiểm tra đúng ID video của bạn
        if (videoHue2) {
            videoHue2.pause();
            videoHue2.style.display = 'none';
        }

        // 2. An toàn lấy màn hình Bàn Mix nhạc hoặc Slide sự cố
        const hueMixerScreen = document.getElementById('hue-mixer-screen') || 
                            document.getElementById('hue-accident-screen');

        // BẮT BUỘC KIỂM TRA THẺ TỒN TẠI TRƯỚC KHI CAN THIỆP .style
        if (hueMixerScreen) {
            hueMixerScreen.style.display = 'flex'; // Hoặc 'block'
        } else {
            console.warn("Không tìm thấy thẻ hue-mixer-screen hoặc hue-accident-screen trong HTML!");
        }

        // 3. Cập nhật trạng thái điều hướng
        if (typeof updateNavigation === 'function') {
            updateNavigation("HUE_MIXER");
        }
    }    
    const btnHueAccidentContinue = document.getElementById("btn-hue-accident-continue");
    if (btnHueAccidentContinue) {
        btnHueAccidentContinue.addEventListener("click", () => {
            hueAccidentScreen.style.display = 'none'; hueMixerScreen.style.display = 'flex'; updateNavigation("HUE_MIXER"); mixerCleared = false;
        });
    }

    if (btnCheckMixer) {
        btnCheckMixer.addEventListener('click', () => {
            const drumVal = parseInt(sliderDrum.value);
            const pipaVal = parseInt(sliderPipa.value);
            const erhuVal = parseInt(sliderErhu.value);
            const correct =
                Math.abs(drumVal - 53) <= 2 &&
                Math.abs(pipaVal - 75) <= 2 &&
                Math.abs(erhuVal - 39) <= 2;
            if (correct) {
                mixerCleared = true;
                AudioFeedback.playPassSound();
                hueMixerScreen.style.display = "none";
                // Mở phần nấu ăn / chè
                if (foodStageScreen) foodStageScreen.style.display = "flex";
                if (introFood) introFood.style.display = "flex";
                updateNavigation("FOOD_STAGE");
            } else {
                AudioFeedback.playFailSound();
                alert("❌ Chưa đúng! Hãy điều chỉnh lại âm lượng của ba nhạc cụ rồi nhấn Xác nhận lần nữa.");
            }
        });
    }

   function goToNextPageAfterHue() {
        stopAllSoundsAndMorse();
        
        // Ẩn khung video Nhã nhạc
        if(hueNhaNhacContainer) hueNhaNhacContainer.style.display = "none";
        document.querySelectorAll(".video-screen").forEach(v => v.style.display = "none");
        
        // Hiển thị màn hình Bàn Mix nhạc cụ
        const hueMixerScreen = document.getElementById('hue-mixer-screen');
        if (hueMixerScreen) {
            hueMixerScreen.style.display = "flex";
        }
        
        // Cập nhật trạng thái điều hướng sang Bàn Mix
        if (typeof updateNavigation === 'function') {
            updateNavigation("HUE_MIXER");
        }
    }

    if (btnSkipNhaNhac) btnSkipNhaNhac.addEventListener('click', goToNextPageAfterHue);
    if (videoHueNhaNhac) videoHueNhaNhac.addEventListener('ended', goToNextPageAfterHue);

    function checkMixerSettings() {
        const drumVal = parseInt(sliderDrum.value);
        const pipaVal = parseInt(sliderPipa.value);
        const erhuVal = parseInt(sliderErhu.value);
        if (labelDrum) labelDrum.innerText = `Âm lượng: ${drumVal}%`;
        if (labelPipa) labelPipa.innerText = `Âm lượng: ${pipaVal}%`;
        if (labelErhu) labelErhu.innerText = `Âm lượng: ${erhuVal}%`;
    }

    if (sliderDrum && sliderPipa && sliderErhu) {
        sliderDrum.addEventListener('input', checkMixerSettings); 
        sliderPipa.addEventListener('input', checkMixerSettings); 
        sliderErhu.addEventListener('input', checkMixerSettings);
    }

    if (btnStartGame) {
        btnStartGame.addEventListener('click', () => {
            // Khai báo biến startOverlay lấy từ HTML
            const startOverlay = document.getElementById('start-overlay');

            if (startOverlay) {
                startOverlay.style.display = 'none';
            }
            if (typeof videoWelcome !== 'undefined') {
                videoWelcome.style.display = 'block';
                if (typeof playVideoSafely === 'function') {
                    playVideoSafely(videoWelcome, stepAfterVideo1);
                }
            }
        });
    }

    document.getElementById('btn-start-quiz').addEventListener('click', () => {
        stopAllSoundsAndMorse(); introScreen.style.display = 'none'; quizScreen.style.display = 'block'; updateNavigation("QUIZ_PLAYING"); currentQuestionIndex = 0; correctAnswersCount = 0; loadQuestion();
    });

    function loadQuestion() {
        if (!quizData || quizData.length === 0) return;

        const currentQuiz = quizData[currentQuestionIndex];

        const quizProgress = document.getElementById('quiz-progress');
        if (quizProgress) {
            quizProgress.innerText = `Khoa thi: Câu ${currentQuestionIndex + 1}/${quizData.length}`;
        }

        const questionBox = document.getElementById('question-box');
        if (questionBox) {
            questionBox.innerText = currentQuiz.question;
        }

        const optionsContainer = document.getElementById('options-container');
        if (optionsContainer) {
            optionsContainer.innerHTML = ''; // Xóa nút cũ
            currentQuiz.options.forEach((optionText, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.innerText = optionText;
                button.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(button);
            });
        }
    }

    function selectAnswer(selectedIndex) {
        if (selectedIndex === quizData[currentQuestionIndex].answer) correctAnswersCount++;
        currentQuestionIndex++; if (currentQuestionIndex < quizData.length) loadQuestion(); else finishQuizResult();
    }

    function finishQuizResult() {
        stopAllSoundsAndMorse(); quizScreen.style.display = 'none'; document.getElementById('gold-board-name').innerText = "CAPY";
        if (correctAnswersCount >= 3) { AudioFeedback.playPassSound(); popupPass.style.display = 'flex'; } else { AudioFeedback.playFailSound(); popupFail.style.display = 'flex'; }
        updateNavigation("RESULT_SCREEN");
    }

    document.getElementById('btn-fail-restart').addEventListener('click', () => { stopAllSoundsAndMorse(); popupFail.style.display = 'none'; introScreen.style.display = 'flex'; updateNavigation("INTRO_SCREEN"); });
    document.getElementById('btn-pass-continue').addEventListener('click', () => {
        // 1. Ẩn popup kết quả đỗ
        if (popupPass) popupPass.style.display = 'none';

        // 2. Lấy thẻ màn hình Morse
        const morseScreen = document.getElementById('morse-screen');
        if (morseScreen) {
            // Hiển thị khung màn hình Morse
            morseScreen.style.display = 'flex';
        }

        // 3. Cập nhật trạng thái điều hướng
        if (typeof updateNavigation === 'function') {
            updateNavigation("MORSE_SCREEN");
        }
    });

    const morseBeats = [1,1,0,1,2,0,0,1,2,0,1,2,1,0,2,1,2,0,1,0,2,1,1,1,2,1,1,1,2,1,0,2,1,1,0,2,1,0,1,0,2,1,1,1,2,0,0,2,1,0,0,2,1,0,0,2,1,0,0,2,1,0,0,2,0,2,0,2,1,0,0,2,1,0,0,2,0,0,2,0,2,0,2,0,0,1,2,0,0,1,0,2,0,1,0,0,2,0,1,2,0,0,1,0];
    document.getElementById('btn-play-morse').addEventListener('click', () => {
        if (isPlayingMorse) return; isPlayingMorse = true; try { AudioFeedback.resumeCtx(); } catch(e) {}
        let idx = 0;
        function playNextBeat() {
            if (!isPlayingMorse || idx >= morseBeats.length) { isPlayingMorse = false; return; }
            let type = morseBeats[idx]; let delay = 480;
            if (type === 0) { AudioFeedback.playCac(); delay = 220; } else if (type === 1) { AudioFeedback.playTung(); delay = 350; } else if (type === 2) { delay = 1900; }
            idx++; morseTimeoutId = setTimeout(playNextBeat, delay);
        }
        playNextBeat();
    });

    document.getElementById('btn-submit-morse').addEventListener('click', () => {
        const rawInput = morseUserInput.value.trim().toUpperCase();
        if (rawInput === "QUAN TRÔNG COI ĐÊ ĐIỀU LÀ?" || rawInput === "QUAN TRÔNG COI ĐÊ ĐIỀU LÀ") {
            stopAllSoundsAndMorse(); AudioFeedback.playPassSound(); morseDialogueText.innerHTML = `<strong style="color:#5e1100;">Quan gật đầu mỉm cười tán thưởng:</strong> "Rất tốt, khanh có đôi tai rất tinh tường và am hiểu mật mã trống trận. Bây giờ hãy chọn đối sách chuẩn xác để dâng lên trẫm!"`; morseDecoderZone.style.display = 'none'; policyContainer.style.display = 'flex';
        } else {
            AudioFeedback.playFailSound(); morseDialogueText.innerHTML = `<strong style="color:#210d00;">Nhà vua lắc đầu nhẹ, từ tốn phán bảo:</strong> "Lời giải chưa chính xác rồi."<br><span style="color:#5e1100; font-weight:bold;">Capy nhắc nhở:</span> "Hãy nghe lại điệu trống và suy nghĩ thật kỹ nhé"`;
        }
    });

    window.checkPolicyAnswer = function(ans) {
        if (ans === 'B') {
            stopAllSoundsAndMorse(); morseScreen.style.display = 'none'; btnBack.style.display = 'none';
            morseDecreeScreen.style.display = 'flex'; updateNavigation("MORSE_DECREE");
            if (audioMorseDecree) audioMorseDecree.play().catch(e => console.log("Chặn Autoplay", e));
        } else {
            AudioFeedback.playFailSound(); morseDialogueText.innerHTML = `<strong style="color:#210d00;">Triều đình im phăng phắc, Nhà vua trầm tư phán bảo:</strong><br>"Chức quan này chưa lo đúng trọng trách quản lý đê điều trị thủy. Khanh hãy nghiên cứu lại kiến thức!"`;
        }
    };

    document.getElementById('btn-morse-decree-skip').addEventListener('click', () => {
        if (audioMorseDecree) { audioMorseDecree.pause(); audioMorseDecree.currentTime = 0; }
        morseDecreeScreen.style.display = 'none'; morseVictoryScreen.style.display = 'flex'; updateNavigation("MORSE_VICTORY");
    });

    const btnGoToKeyPage = document.getElementById("btn-go-to-key-page");
    if (btnGoToKeyPage) {
        btnGoToKeyPage.addEventListener('click', () => {
            morseVictoryScreen.style.display = 'none'; morseKeyAuthScreen.style.display = 'flex'; updateNavigation("MORSE_KEY_AUTH");
        });
    }

    const btnSubmitVerificationKey = document.getElementById('btn-submit-verification-key');
    if (btnSubmitVerificationKey) {
        btnSubmitVerificationKey.addEventListener('click', () => {
            const enteredKey = verificationKeyInput.value.trim().toUpperCase();
            if (enteredKey === "HANOI1010") {
                AudioFeedback.playPassSound(); morseKeyAuthScreen.style.display = 'none'; startEnergyLoading();
            } else {
                AudioFeedback.playFailSound(); alert("Mã khóa xác thực chưa chính xác! Hãy kiểm tra lại.");
            }
        });
    }

    function startEnergyLoading() {
        energyLoadingScreen.style.display = 'flex'; updateNavigation("ENERGY_LOADING"); let percent = 0; const statuses = ["Đang kết nối lò phản ứng lúa nước...", "Đang kích hoạt Phi thuyền Thốt nốt...", "Đang đồng bộ dòng thời gian lịch sử...", "Đang nạp năng lượng...", "ĐÃ NẠP ĐẦY NĂNG LƯỢNG! HOÀN THÀNH XUẤT SẮC THỬ THÁCH KHOA CỬ!"];
        const interval = setInterval(() => {
            percent += 2; energyBarFill.style.width = percent + '%'; let statusIdx = Math.floor(percent / 25); if (statusIdx >= statuses.length) statusIdx = statuses.length - 1; energyStatus.innerText = `${statuses[statusIdx]} ${percent}%`;
            if (percent >= 100) { clearInterval(interval); energyRouteBox.classList.add('show'); btnEnergyContinue.style.display = 'inline-block'; }
        }, 40);
    }

    btnEnergyContinue.addEventListener('click', () => { stopAllSoundsAndMorse(); energyLoadingScreen.style.display = 'none'; badgePopupOverlay.style.display = 'flex'; updateNavigation("BADGE_POPUP"); });
    btnBadgeDownload.addEventListener('click', () => { const link = document.createElement('a'); link.href = 'HA_NOI_2.jpg?v=1.0'; link.download = 'HuyHieu_Capy_ThuDo_HaNoi.jpg'; document.body.appendChild(link); link.click(); document.body.removeChild(link); });
    
    const foodMainBg = document.getElementById("food-main-bg");

    if (btnStartFood) {
        btnStartFood.addEventListener("click", function () {
            if(introFood) introFood.style.display = "none";
            if(foodMainBg) foodMainBg.style.display = "none"; 
            
            if (btnBack) btnBack.style.display = "none";
            if (btnSkip) btnSkip.style.display = "none";

            if(foodStep1) foodStep1.style.display = "flex";   
            updateNavigation("FOOD_STEP1");
        });
    }

    if (clickPork) {
        clickPork.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep1) foodStep1.style.display = "none";
            if (foodStep2) foodStep2.style.display = "flex";
            updateNavigation("FOOD_STEP2");
        });
    }

    if (clickMeatPlate2) {
        clickMeatPlate2.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep2) foodStep2.style.display = "none";
            if (foodStep3) foodStep3.style.display = "flex";
            updateNavigation("FOOD_STEP3");
        });
    }

    if (clickKnife3) {
        clickKnife3.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep3) foodStep3.style.display = "none";
            if (foodStep4) foodStep4.style.display = "flex";
            updateNavigation("FOOD_STEP4");
        });
    }

    if (clickStove4) {
        clickStove4.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep4) foodStep4.style.display = "none";
            if (foodStep5) foodStep5.style.display = "flex";
            updateNavigation("FOOD_STEP5");
        });
    }

    if (clickPork5) {
        clickPork5.addEventListener("click", function() {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep5) foodStep5.style.display = "none";
            if (foodStep6) foodStep6.style.display = "flex";
            updateNavigation("FOOD_STEP6");
            startTimerB6(); 
        });
    }

    let timerIntervalB6 = null;

    function startTimerB6() {
        if (timerIntervalB6) {
            clearInterval(timerIntervalB6);
        }
        let timeLeft = 5;
        const countdownTextB6 = document.getElementById("countdown-text-b6");
        if (countdownTextB6) {
            countdownTextB6.innerText = timeLeft;
        }
        timerIntervalB6 = setInterval(() => {
            timeLeft--;
            if (countdownTextB6) {
                countdownTextB6.innerText = timeLeft;
            }
            if (timeLeft <= 0) {
                clearInterval(timerIntervalB6);
                timerIntervalB6 = null;
                if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
                if (foodStep6) foodStep6.style.display = "none";
                if (foodStep7) foodStep7.style.display = "flex";
                updateNavigation("FOOD_STEP7");
            }
        }, 1000);
    }

    if (clickPan7) {
        clickPan7.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep7) foodStep7.style.display = "none";
            if (foodStep8) foodStep8.style.display = "flex";
            updateNavigation("FOOD_STEP8");
        });
    }

    if (clickPorkSieve8) {
        clickPorkSieve8.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep8) foodStep8.style.display = "none";
            if (foodStep9) foodStep9.style.display = "flex";
            updateNavigation("FOOD_STEP9");
        });
    }

    if (clickSugarJar9) {
        clickSugarJar9.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep9) foodStep9.style.display = "none";
            if (foodStep10) foodStep10.style.display = "flex";
            updateNavigation("FOOD_STEP10");
        });
    }

    if (btnNextText10) {
        btnNextText10.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep10) foodStep10.style.display = "none";
            if (foodStep11) foodStep11.style.display = "flex";
            updateNavigation("FOOD_STEP11");
        });
    }

    if (btnNextPalace11) {
        btnNextPalace11.addEventListener("click", () => {
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep11) foodStep11.style.display = "none";
            if (foodStep12) foodStep12.style.display = "flex";
            updateNavigation("FOOD_STEP12");
        });
    }

    if (clickFlourBowl12) {
        clickFlourBowl12.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep12) foodStep12.style.display = "none";
            if (foodStep13) foodStep13.style.display = "flex";
            updateNavigation("FOOD_STEP13");
        });
    }

    const handleStep13Correct = (e) => {
        e.preventDefault(); e.stopPropagation();
        if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
        if (foodStep13) foodStep13.style.display = "none";
        if (foodStep14) foodStep14.style.display = "flex";
        updateNavigation("FOOD_STEP14");
    };

    if (clickSugarJar13) clickSugarJar13.addEventListener("click", handleStep13Correct);
    if (clickSaltJar13) clickSaltJar13.addEventListener("click", handleStep13Correct);

    if (clickOilBottle14) {
        clickOilBottle14.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep14) foodStep14.style.display = "none";
            if (foodStep15) foodStep15.style.display = "flex";
            updateNavigation("FOOD_STEP15");
        });
    }

    if (clickStove15) {
        clickStove15.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep15) foodStep15.style.display = "none";
            if (foodStep16) foodStep16.style.display = "flex";
            updateNavigation("FOOD_STEP16");
        });
    }

    if (clickDoughBowl16) {
        clickDoughBowl16.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep16) foodStep16.style.display = "none";
            if (foodStep17) foodStep17.style.display = "flex";
            updateNavigation("FOOD_STEP17");
        });
    }

    if (clickDoughBowl17) {
        clickDoughBowl17.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep17) foodStep17.style.display = "none";
            if (foodStep18) foodStep18.style.display = "flex";
            updateNavigation("FOOD_STEP18");
        });
    }

    if (clickCutter18) {
        clickCutter18.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep18) foodStep18.style.display = "none";
            if (foodStep19) foodStep19.style.display = "flex";
            updateNavigation("FOOD_STEP19");
        });
    }

    if (clickCutDough19) {
        clickCutDough19.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep19) foodStep19.style.display = "none";
            if (foodStep20) foodStep20.style.display = "flex";
            updateNavigation("FOOD_STEP20");
        });
    }

    if (clickMeat20) {
        clickMeat20.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep20) foodStep20.style.display = "none";
            if (foodStep21) foodStep21.style.display = "flex";
            updateNavigation("FOOD_STEP21");
        });
    }

    if (btnNext21) {
        btnNext21.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep21) foodStep21.style.display = "none";
            if (foodStep22) foodStep22.style.display = "flex";
            updateNavigation("FOOD_STEP22");
        });
    }

    if (clickStove22) {
        clickStove22.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep22) foodStep22.style.display = "none";
            if (foodStep23) foodStep23.style.display = "flex";
            updateNavigation("FOOD_STEP23");
        });
    }

    if (clickCheBalls23) {
        clickCheBalls23.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== "undefined") AudioFeedback.playPassSound();
            if (foodStep23) foodStep23.style.display = "none";
            if (foodStep24) foodStep24.style.display = "flex";
            updateNavigation("FOOD_STEP24");
        });
    }

    let timerInterval;
    function startTimerB31() {
        let timeLeft = 5;
        if(countdownText) countdownText.innerText = timeLeft;
        
        timerInterval = setInterval(() => {
            timeLeft--;
            if(countdownText) countdownText.innerText = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
                if (foodStep31) foodStep31.style.display = "none";
                if (foodStep32) foodStep32.style.display = "flex";
                updateNavigation("FOOD_STEP32");
            }
        }, 1000);
    }

    if (clickVa24) {
        clickVa24.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep24) foodStep24.style.display = "none";
            if (foodStep25) foodStep25.style.display = "flex";
            updateNavigation("FOOD_STEP25");
        });
    }

    if (btnNext25) {
        btnNext25.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep25) foodStep25.style.display = "none";
            if (foodStep26) foodStep26.style.display = "flex";
            updateNavigation("FOOD_STEP26");
        });
    }

    if (clickGinger26) {
        clickGinger26.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep26) foodStep26.style.display = "none";
            if (foodStep27) foodStep27.style.display = "flex";
            updateNavigation("FOOD_STEP27");
        });
    }

    if (clickKnife27) {
        clickKnife27.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep27) foodStep27.style.display = "none";
            if (foodStep28) foodStep28.style.display = "flex";
            updateNavigation("FOOD_STEP28");
        });
    }

    if (clickStove28) {
        clickStove28.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep28) foodStep28.style.display = "none";
            if (foodStep29) foodStep29.style.display = "flex";
            updateNavigation("FOOD_STEP29");
        });
    }

    if (clickSugar29) {
        clickSugar29.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep29) foodStep29.style.display = "none";
            if (foodStep30) foodStep30.style.display = "flex";
            updateNavigation("FOOD_STEP30");
        });
    }

    if (clickCheBowl30) {
        clickCheBowl30.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep30) foodStep30.style.display = "none";
            if (foodStep31) foodStep31.style.display = "flex";
            updateNavigation("FOOD_STEP31");
            startTimerB31(); 
        });
    }

    if (btnFinishFood32) {
        btnFinishFood32.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep32) foodStep32.style.display = "none";
            const foodStep33Finish = document.getElementById("food-step33-finish");
            if (foodStep33Finish) foodStep33Finish.style.display = "flex";
            updateNavigation("FOOD_STEP33");
        });
    }

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (currentState === "SCROLL_INTRO") {
                if (scrollIntroScreen) scrollIntroScreen.style.display = "none";
                if (foodStep33Finish) foodStep33Finish.style.display = "flex";
                updateNavigation("FOOD_STEP33");
            } 
            else if (currentState === "SCROLL_DETAIL") {
                if (scrollDetailScreen) scrollDetailScreen.style.display = "none";
                if (scrollIntroScreen) scrollIntroScreen.style.display = "flex";
                updateNavigation("SCROLL_INTRO");
            } 
            else if (currentState === "HUE_CONGRATS") {
                if (hueCongratsScreen) hueCongratsScreen.style.display = "none";
                if (scrollDetailScreen) scrollDetailScreen.style.display = "flex";
                updateNavigation("SCROLL_DETAIL");
            }
        });
    }

    const btnFinalFinish = document.getElementById("btn-final-finish");
    const foodStep33Finish = document.getElementById("food-step33-finish");
    const foodStageScreen = document.getElementById("food-stage-screen"); 
    const scrollIntroScreen = document.getElementById("scroll-intro-screen");

    if (btnFinalFinish) {
        btnFinalFinish.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            if (typeof AudioFeedback !== 'undefined') AudioFeedback.playPassSound();
            if (foodStep33Finish) foodStep33Finish.style.display = "none";
            if (scrollIntroScreen) scrollIntroScreen.style.display = "flex";
            updateNavigation("SCROLL_INTRO");
        });
    }

    const scrollIntroText = document.getElementById("scroll-intro-text");
    const btnNextScrollIntro = document.getElementById("btn-next-scroll-intro");
    const scrollDetailScreen = document.getElementById("scroll-detail-screen");

    if (scrollIntroText) {
        scrollIntroText.innerHTML = "✨ Ôi! Bạn Capy được tặng một cuộn giấy da cổ có vẻ rất bí ẩn... Hãy cùng mở ra xem nhé!";
    }

    if (btnNextScrollIntro) {
        btnNextScrollIntro.addEventListener("click", function(e) {
            e.preventDefault(); e.stopPropagation();
            if (scrollIntroScreen) scrollIntroScreen.style.display = "none";
            if (scrollDetailScreen) {
                scrollDetailScreen.style.display = "flex";
                updateNavigation("SCROLL_DETAIL");
            }
        });
    }

    const scrollKeyInput = document.getElementById('scroll-key-input');
    const btnSubmitScrollKey = document.getElementById('btn-submit-scroll-key');
    const scrollErrorMsg = document.getElementById('scroll-error-msg');
    const hueCongratsScreen = document.getElementById('hue-congrats-screen');

    if (btnSubmitScrollKey) {
        btnSubmitScrollKey.addEventListener('click', function() {
            if (!scrollKeyInput) return;

            const rawInput = scrollKeyInput.value.trim().toUpperCase();
            
            const normalizeStr = (str) => {
                return str.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/Đ/g, "D")
                          .replace(/\s+/g, " ");
            };

            const answerWithDiacritics = "VÙNG ĐẤT THUẬN HÓA PHÚ XUÂN";
            const answerWithoutDiacritics = normalizeStr(answerWithDiacritics);
            const processedUserAnswer = normalizeStr(rawInput);

            if (rawInput === answerWithDiacritics || processedUserAnswer === answerWithoutDiacritics) {
                if (typeof AudioFeedback !== 'undefined' && typeof AudioFeedback.playPassSound === 'function') {
                    AudioFeedback.playPassSound();
                }
                if (scrollErrorMsg) scrollErrorMsg.style.display = "none";
                if (scrollDetailScreen) scrollDetailScreen.style.display = 'none'; 
                if (hueCongratsScreen) hueCongratsScreen.style.display = 'flex'; 
                if (typeof updateNavigation === 'function') updateNavigation("HUE_CONGRATS");
            } else {
                if (typeof AudioFeedback !== 'undefined' && typeof AudioFeedback.playFailSound === 'function') {
                    AudioFeedback.playFailSound();
                }
                if (scrollErrorMsg) {
                    scrollErrorMsg.style.display = "block";
                    scrollKeyInput.style.borderColor = "#ff4d4d";
                }
            }
        });
    }

    if (scrollKeyInput) {
        scrollKeyInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                btnSubmitScrollKey.click();
            }
        });
    }
})
