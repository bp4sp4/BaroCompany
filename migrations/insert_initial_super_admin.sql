-- 초기 최상위 관리자 계정 추가
-- ⚠️ 주의: 실제 이메일 주소로 변경하고 실행하세요!

-- 예시 (실제 이메일로 변경 필요):
-- INSERT INTO admins (email, role) 
-- VALUES ('your-super-admin@example.com', 'super_admin')
-- ON CONFLICT (email) DO UPDATE SET role = 'super_admin';

-- 일반 관리자 추가 예시:
-- INSERT INTO admins (email, role) 
-- VALUES ('admin@example.com', 'admin')
-- ON CONFLICT (email) DO UPDATE SET role = 'admin';
