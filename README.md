# Open-Mind

> 사용자 피드를 기반으로 한 익명 질문 게시 및 답변 관리 플랫폼

## 기술 스택

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Styled-components
- **Routing:** React Router 7
- **HTTP Client:** Axios

## 시작하기

### 1. Installation

- 프로젝트를 로컬에 복제한 후 의존성 패키지를 설치합니다.

```Bash
git clone https://github.com/pho9902/open-mind-team3.git

# 해당 디렉토리로 cd 후
npm install
```

### 2. Development

- 로컬 개발 서버를 실행합니다. 기본적으로 http://localhost:5173에서 확인할 수 있습니다.

```Bash
npm run dev
```

### 3. Build

- 프로덕션 환경을 위한 빌드 파일을 생성합니다. 결과물은 /dist 폴더에 저장됩니다.

```Bash
npm run build
```

## 프로젝트 구조

```text
src/
 ├── 📁 apis/             # Axios 인스턴스 및 API 호출 함수
 │    └── instance.js     # 공통 Axios 설정 및 인터셉터
 │
 ├── 📁 assets/           # icon, img 등 개발에 필요한 정적 요소
 │
 ├── 📁 components/       # 공통 재사용 UI 컴포넌트
 │    │
 │    ├── 📁 common/      # Button, Input, Modal 등 공통 요소
 │    ├── 📁 containers/  # 기능별 컴포넌트
 │    │
 │    └── 📁 routes/      # 라우팅 관리 컴포넌트
 │
 ├── 📁 hooks/            # 커스텀 훅
 │
 ├── 📁 pages/            # 라우트별 페이지 컴포넌트
 │
 ├── 📁 styles/           # 디자인 시스템 및 전역 스타일
 │
 ├── 📁 utils/            # 공통 유틸리티 함수
 │
 ├── App.jsx              # React Router 기반 라우팅 설정
 └── main.jsx             # 애플리케이션 엔트리 포인트
```

## 브랜치 전략 및 커밋 컨벤션

### 브랜치 전략

- **main**: 제품으로 출시될 수 있는 브랜치
- **develop**: 다음 출시 버전을 개발하는 브랜치
- **feature**: 기능을 개발하는 브랜치
- **release**: 이번 출시 버전을 준비하는 브랜치
- **hotfix**: 출시 버전에서 발생한 버그를 수정하는 브랜치

---

- **형식**: `type/feature`
- **예시**: `feature/login`, `fix/sidebar`

### 커밋 컨벤션

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없는 경우)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가
- **chore**: 빌드 업무 수정, 패키지 매니저 설정 등

---

- **형식**: `type: subject`
- **예시**: `feat: 로그인 기능 구현`, `chore: styled-component 설치`

## 참여자

- [박승현](https://github.com/hanpla)
- [박주헌](https://github.com/JuHeonParkk)
- [박현우](https://github.com/pho9902)
- [윤지원](https://github.com/jiwonll)
