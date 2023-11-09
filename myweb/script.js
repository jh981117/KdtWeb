var req_url ="https://maps.googleapis.com/maps/api/js";



// 팝업 열기 함수
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

// 팝업 닫기 함수
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// 로그인 링크 클릭 시 로그인 팝업 열기
document.getElementById('login-link').addEventListener('click', function() {
    openPopup('login-popup');
});

// 닫기 버튼 클릭 시 팝업 닫기
document.getElementById('close-popup').addEventListener('click', function() {
    closePopup('login-popup');
});

// 초기에 로그인 팝업 숨김
closePopup('login-popup');

// 회원가입 링크 클릭 시 회원가입 팝업 열기
document.getElementById('signup-link').addEventListener('click', function() {
    openPopup('signup-popup');
});

// 회원가입 팝업 닫기 버튼 클릭 시 팝업 닫기
document.getElementById('close-signup-popup').addEventListener('click', function() {
    closePopup('signup-popup');
});

// 로그인 버튼 클릭 시 로그인 처리
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 유효성 검사를 수행합니다.
    if (username === '' || password === '') {
        alert('비어있는 칸을 입력하세요.');
        return;
    } 

    // 여기에 실제 로그인 로직을 추가하세요.
    // 서버에 사용자 정보를 전송하고, 로그인 처리를 수행합니다.

    alert('로그인되었습니다.');
    closePopup('login-popup'); // 로그인 후 팝업 닫기
});

// 회원가입 버튼 클릭 시 유효성 검사 후 처리
document.getElementById('signup-button').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 회원가입 폼의 유효성 검사
    if (newUsername === '' || newPassword === '' || confirmPassword === '') {
        alert('모든 필드를 작성해주세요.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 여기에 실제 회원가입 로직을 추가하세요.
    // 서버에 회원 정보를 전송하고, 회원가입 처리를 수행합니다.

    alert('회원가입이 완료되었습니다.');
    closePopup('signup-popup'); // 회원가입 후 팝업 닫기
});


// yyyy-mm-dd 형식으로 날짜를 변환하는 함수
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}