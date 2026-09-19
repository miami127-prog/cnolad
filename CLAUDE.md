# 크놀AD (cnolad.com) — 프로젝트 가이드

이 파일은 Claude가 이 저장소에서 작업할 때 지켜야 할 규칙입니다.

## 서비스 개요
- 브랜드·연예인 숏폼 마케팅 플랫폼. (주)크놀애드 운영.
- 배포: Vercel (main 브랜치 푸시 → 1~2분 후 자동 배포)
- DB/인증/스토리지: Supabase 프로젝트 `trkxmbtdcjcgoohdqpsz`
- 역할: 관리자 / CS / 일반회원(고객) / 파트너사(와이트라이브·브랜올 등)

## 코드 구조 (중요)
- 빌드 도구 없음. 바닐라 JS SPA.
- `index.html` — 화면 뼈대 + 모든 CSS + Tailwind CDN 설정
- `app.js` (약 400KB) — 인증, 라우팅(`render()`), 사이드바, 공용 함수, 채널 DB(`CH`)
- `app2.js` (약 300KB) — 화면 뷰 대부분(매출분석, 워크플로우, 캘린더, 대시보드 `dbx*` 계열)
- 두 파일 모두 전역 함수 방식. `import/export` 없음.

## 작업 규칙
1. **JS 수정 후 반드시 `node --check app.js` / `node --check app2.js`** 로 문법 검사.
2. **파일 수정은 sed·python 스크립트로 in-place 편집.** 파일이 커서 전체 재작성 금지.
3. **`index.html`의 버전 쿼리를 매 배포마다 올릴 것** (`app.js?v=YYYYMMDDHHMM`, `app2.js?v=...`).
   안 올리면 사용자 브라우저에 캐시된 옛 파일이 남습니다.
4. **기존 디자인·기능을 함부로 없애지 말 것.** 요청은 대부분 "개선"이지 "제거"가 아님.
5. **데이터를 지어내지 말 것.** 화면의 모든 숫자는 실제 DB(`ADM_ROWS` 등)에서 계산.
6. 다른 개발자(theooozy)가 수시로 푸시함 → **작업 전 반드시 `git pull --rebase`**.

## 금액 계산 규칙
- `priceOf(a)` → `{list, disc, extra, net, supply, vat, bill}` (`net`은 만원 단위, `supply`는 원 단위)
- **매출 추이·KPI = 공급가 기준(VAT 미포함)**, 청구액 = 공급가 + VAT 10%
- 매출 집계 기준일은 **등록일(created_at)**, 입금일 아님
- 파트너/일반 구분: `salesIsPartnerCamp(a)` (manager 필드 유무)

## 배포
```
git pull --rebase && git add -A && git commit -m "변경 내용" && git push origin main
```
배포 후 Ctrl+Shift+R로 확인.

## 남은 과제
- YouTube API 키(`YT_API_KEY` in app.js)에 HTTP 리퍼러 제한 미적용 → Google Cloud Console에서 cnolad.com만 허용 필요
- deliverables 버킷 완전 비공개 + 서명 URL 전환 (현재는 덮어쓰기만 관리자 제한)
- 메시지(notes)가 행 전체 PATCH 방식 → 동시 전송 시 유실 가능. DB 함수(append)로 전환 권장
- Tailwind CDN → 빌드된 CSS 파일로 교체 (성능)
- lucide 아이콘 `@latest` → 버전 고정
- Supabase Disk IO 예산 소진 경고 → 원인 쿼리 점검 필요

## 완료된 보안 조치 (2026-09-18)
- RLS 적용 확인 (knollad_* 테이블, 정책 22개)
- `read_cust`/`read_knoll` 컬럼 추가 → 새 메시지 카운트 정상화
- `knollad_app_guard_trg` 트리거 → 고객이 금액·결제상태·상태 등 조작 차단
- Auth Site URL → https://www.cnolad.com (비밀번호 재설정 메일 정상화)
- deliverables 버킷 UPDATE 정책 → 관리자만
