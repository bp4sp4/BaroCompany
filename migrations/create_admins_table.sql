-- 관리자 테이블 생성
-- 최상위 관리자(super_admin)와 일반 관리자(admin)를 구분하기 위한 테이블

CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('super_admin', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_admins_email ON admins(email);
CREATE INDEX IF NOT EXISTS idx_admins_role ON admins(role);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Service Role은 모든 행에 접근 가능 (서버 사이드에서만 사용)
CREATE POLICY "Service role can access all admins"
  ON admins
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 초기 최상위 관리자 계정 추가 (환경변수에서 이메일 가져와서 수동으로 추가 필요)
-- 예시:
-- INSERT INTO admins (email, role) VALUES ('super-admin@example.com', 'super_admin');

-- updated_at 자동 업데이트 트리거
CREATE OR REPLACE FUNCTION update_admins_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_admins_updated_at_trigger
  BEFORE UPDATE ON admins
  FOR EACH ROW
  EXECUTE FUNCTION update_admins_updated_at();
