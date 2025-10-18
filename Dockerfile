# ==================================
# 1. 빌드(Build) 단계: Next.js 프로젝트를 정적 파일로 빌드
# ==================================
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# Docker 환경에서는 basePath가 필요 없으므로 빈 값으로 오버라이드
ENV NEXT_PUBLIC_BASE_PATH=""

# 정적 파일로 프로젝트 빌드 (`out` 폴더 생성)
RUN npm run build

# ==================================
# 2. 실행(Runner) 단계: Nginx 서버로 정적 파일 서빙
# ==================================
FROM nginx:stable-alpine AS runner

# 빌드 단계에서 생성된 'out' 폴더의 내용물을 Nginx의 기본 웹 루트 디렉토리로 복사
COPY --from=builder /app/out /usr/share/nginx/html

# 80번 포트를 외부에 노출
EXPOSE 80

# Nginx 서버 실행
CMD ["nginx", "-g", "daemon off;"]