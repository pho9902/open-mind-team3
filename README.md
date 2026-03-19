# 🚪Open-Mind
<img width="1200" height="350" alt="썸네일이미지" src="https://github.com/user-attachments/assets/55a64294-4e64-442b-9d48-145bfd03baf4" />

## 소개 및 개요

- 📅**프로젝트 기간** : 2026.03.04 ~ 2026.03.18
- 🔗**배포 주소** : https://open-mind-team3.vercel.app/
<br>

### [프로젝트 설명]
- 익명성을 기반으로 자유롭게 소통할 수 있는 SNS형 웹 서비스입니다.
- 사용자는 별도의 개인 정보 공개 없이 게시글과 답변을 작성하고, 수정하거나 삭제할 수 있습니다.
- 다른 사용자들의 글에 대해 좋아요·싫어요로 반응을 남길 수 있습니다.

<br><br>

## 🛠️ 기술 스택 

**Frontend**  
<img src="https://skillicons.dev/icons?i=react,js,styledcomponents,reactrouter" />

**API**  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="48" />

**Development**  
<img src="https://skillicons.dev/icons?i=vite,nodejs,npm" />

**Collaboration**  
<img src="https://skillicons.dev/icons?i=git,github,discord,figma,notion" />

**Deployment**  
<img src="https://skillicons.dev/icons?i=vercel" />

<br><br>


## 🚀 시작하기

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

<br><br>

## 📁 프로젝트 구조

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

<br><br>

## 🌿 브랜치 전략 및 커밋 컨벤션

### [브랜치 전략]

- **main**: 제품으로 출시될 수 있는 브랜치
- **develop**: 다음 출시 버전을 개발하는 브랜치
- **feature**: 기능을 개발하는 브랜치
- **release**: 이번 출시 버전을 준비하는 브랜치
- **hotfix**: 출시 버전에서 발생한 버그를 수정하는 브랜치

---

- **형식**: `type/feature`
- **예시**: `feature/login`, `fix/sidebar`

<br>

### [커밋 컨벤션]

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

<br><br>

## 🧭 일정 및 프로젝트 수행 과정
### 1. UI개발 퍼블리싱
- 담당 페이지, 공통 컴포넌트 퍼블리싱 작업 진행

### 2. 1차 점검 및 배포
- UI 개발 후 vercel 배포를 위한 1차 점검 진행

### 3. API 개발
- 엔드포인트 별 담당을 정해 api 개발 진행

### 4. 기능 구현
- 페이지 별 상세 기획을 확인하며 각 기능 구현

### 5. 테스트 및 QA
- 직접 배포된 사이트를 사용해보며 미흡한 부분, 추가할 점 등을 찾고 보완 후 2차 배포 진행

<br><br>

## 👨‍👩‍👧‍👦 팀원 소개 - 코드잇 23기 3팀
| 박승현 | 박주헌 | 박현우 | 윤지원 |
|:------:|:------:|:------:|:------:|
| <img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/3bc675d1-a60b-40b6-9a6a-b8a0aa59c7c9" />| <img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/f7cb796f-d299-4e72-a022-3c2e2819948c" />| <img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/6d111dba-d2f8-4935-90bf-5d0470bae097" />| <img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/d84c2053-c5be-4ca2-81a5-a58058f92319" />|
| **github**: [hanpla](https://github.com/hanpla) | **github**: [JuHeonParkk](https://github.com/JuHeonParkk) | **github**: [pho9902](https://github.com/pho9902) | **github**: [jiwonll](https://github.com/jiwonll) |

<br>

### [역할 분담]

| 👤 이름 | 🎨 UI | ⚙️ 기능 |
|:------:|:-----|:--------|
| **박승현** | 🖥️ 메인 페이지<br>🧩 공통 컴포넌트 (Button, Icon, theme) | 🔹 사용자별 피드 생성<br>🔹 Toast 알림 구현<br>🔹 페이지네이션 |
| **박주헌** | 🖥️ 개별 피드 페이지, 404 페이지<br>🧩 스켈레톤 UI | 🔹 질문 생성 기능<br>🔹 SNS 공유 기능<br>🔹 UI 디자인 개선 |
| **박현우** | 🖥️ 답변 페이지<br>🧩 공통 컴포넌트 (Modal, Confirm) | 🔹 질문 답변 기능<br>🔹 Vercel 배포 |
| **윤지원** | 🖥️ 질문 목록 페이지<br>🧩 사용자 목록 카드 | 🔹 카드 목록 조회 및 정렬 기능<br>🔹 카드 애니메이션<br>🔹 무한 스크롤 |

<br><br>

## 🔥페이지별 기능
### [메인 페이지 (`/`) ]
![메인페이지테스트 (1)](https://github.com/user-attachments/assets/05f36ebd-58e7-423d-9b00-fe60c33b3241)

- **질문하러 가기**
  - 피드 생성 유무에 상관없이 질문 목록 페이지로 이동
    
- **피드 만들기**
  - 이름을 입력하고 확인 버튼을 누르면 피드 생성 요청으로 피드 생성
  - 이름 입력 시 한글과 영문만 허용하도록 검증 로직을 적용하여, 공백 및 숫자 등 유효하지 않은 입력을 사전에 차단
  - 로컬스토리지에 feedId 생성 -> 생성된 feedId를 활용하여 답변하기 페이지(`/post/${id}/answer`)로 이동
  - 로컬스토리지에 feedId가 있을 경우 main페이지(`/`)는 답변하기 페이지(`/post/${id}/answer`)
  - 피드 생성 성공/실패 시 Toast 메시지로 결과 안내

<br>

### [질문 목록 페이지 (`/list`)]
![리스트페이지테스트](https://github.com/user-attachments/assets/f5d296ec-ca12-4a4c-89f1-5801354bdcf5)
![모바일](https://github.com/user-attachments/assets/ed7e60b3-d281-46d3-b6cb-46a91d7afac7)

- **로고**
  - 로고를 클릭하면 메인 페이지(`/`)로 이동
- **정렬**
  - 사용자 목록 데이터를 가져온 뒤 최신순/이름순에 따라 카드 리스트 조회 요청
  - 정렬 순서를 로컬스토리지에 저장하여 페이지를 새로고하여도 그대로 리스트가 조회되도록 함
- **피드 생성하기 / 답변하러 가기**
  - 페이지 상단에 위치하여 feedId 존재여부에 따른 조건부 렌더링
  - 피드 생성하기 -> 로컬스토리지에 feedId가 없을 경우, 메인 페이지로 이동
  - 답변하러 가기 -> 로컬스토리지에 feedId가 있을 경우, 답변 페이지로 이
- **반응형 웹 디자인**
  - 디바이스 환경에 따라 페이지네이션과 무한 스크롤을 분기 처리하여 사용자 경험을 개선
    - PC 8개 -> table 6개 -> 모바일 4개+무한스크롤
    - 모바일일 때 페이지네이션이 아닌 무한 스크롤로 변환
  - PC일 때 마우스 호버 시 목록 카드가 뒤집히며 해당 사용자 질문 미리보기 기능 구현
- **페이지 이동**
  - 해당 질문 목록 id === feedId : 해당 id의 답변하기 페이지로 이동(`/post/${id}/answer`)
    - id !==feedId일 때 `/post/${id}/answer`로 이동 시 경고 toast 띄워 접근은 막음
  - 해당 질문 목록 id !== feedId : 해당 id의 피드 페이지로 이동(`/post/${id}/`)

<br>

### [개별 피드 페이지 (`post/${id}`)]
![피드페이지테스트 (6) (1)](https://github.com/user-attachments/assets/d76e0b42-4e32-448d-af53-b62de005323f)

- **질문 렌더링**
  - 해당 사용자의 질문 데이터를 가져와 최신순에 따라 질문 목록 조회 요청
  - 한 번에 8개의 질문 데이터를 받아오며 무한 스크롤 구현
- **답변현황**
  - 사용자 답변 현황에 따른 상태 표시 렌더링
    - 답변완료 / 미답변 / 답변거절
- **질문이 없는 경우**
  - 질문 개수가 0인 경우 EmptyQuestion 화면으로 렌더링 
- **링크 복사 및 SNS 공유 기능**
  - URL을 복사하여 해당 피드 페이지를 공유
  - SNS 아이콘 클릭 시 해당 SNS로 렌더링하여 공유하는 화면이 보이도록 함
  - meta 태그를 이용하여 공유 시 미리보기 썸네일을 보여주도록 함
  - 본인 피드 페이지(`/post/{id}/answer`)인 경우 `/answer'를 제외하고 복사되도록 함
- **좋아요 싫어요 기능**
  - 좋아요와 싫어요 데이터를 가져와 개수를 표시
  - 좋아요 싫어요를 취소할 수 없는 api 환경에 따라 좋아요 버튼은 이벤트를 주어 무한으로 클릭 가능하도록 구현
  - 싫어요의 경우 무한 클릭을 방지하기 위해 싫어요를 누른 questionId를 로컬스토리지에 담아 중복 클릭을 막음

<br>

### [개별 피드에 대한 질문하기 모달창]
![질문생성테스트](https://github.com/user-attachments/assets/b67e65ed-d46f-4ee4-a63e-b33d87e1f830)

- **질문 보내기**
  - 특정 대상에게 질문을 작성하고 전송할 수 있는 기능을 구현
  - 질문 내용이 없는 경우 질문 보내기 버튼 비활성화
  - 질문 글자 수를 30자로 제한하여 입력값 검증
  - 질문 전송 성공/실패 시 Toast 메시지로 결과 안내
  - 질문 생성 후 모달 자동 닫기 및 콜백 함수 실행

<br>

### [답변하기 페이지 (`post/${id}/answer`)]
![답변하기페이지테스트 (1)](https://github.com/user-attachments/assets/bd72cb9b-3209-41df-ad00-f14d5c0871ef)

- **답변 생성/수정하기**
  - 사용자가 질문에 대한 답변을 작성하거나 기존 답변을 수정할 수 있도록 구현
  - 입력값이 공백일 경우 버튼 비활성화
  - 답변 내용이 길어질 경우 사용자가 “더보기”를 통해 전체 내용을 확인할 수 있도록 구현
- **케밥 버튼**
  - 케밥 버튼을 이용해 수정하기/삭제하기/거절하기 버튼이 등장
  - 성공/실패 여부를 Toast 메시지로 사용자에게 결과 안내
- **피드 삭제하기**
  - 피드 상단에 피드 삭제하기 버튼을 누르면 해당 피드 정보 전체 삭제
- **답변 페이지 제한 기능**
  - 본인 피드 페이지에서는 좋아요/싫어요 기능 불가
  - 본인 피드에 질문 생성 불가

<br>

### [404 페이지]
<img width="2879" height="1459" alt="image" src="https://github.com/user-attachments/assets/334f6d87-9f7b-4706-9034-f9b693dcb540" />

- 사용자가 존재하지 않는 주소로 접근하거나, 삭제된 피드 페이지에 접속할 경우 표시되는 페이지
- 잘못된 경로 접근 시 사용자에게 오류 상황을 안내하고 정상적인 이용 흐름으로 복귀할 수 있도록 유도
- 홈 또는 이전 페이지로 이동할 수 있는 링크/버튼 제공
- 서비스 이용 중 혼란을 줄이기 위한 예외 처리 페이지

<br><br>
