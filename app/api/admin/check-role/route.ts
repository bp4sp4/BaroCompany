import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

// 현재 로그인한 사용자의 역할 확인
export async function GET(request: NextRequest) {
  try {
    // Authorization 헤더에서 Bearer 토큰 추출
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Authorization header required" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");

    // 토큰으로 사용자 정보 가져오기
    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(token);

    if (userError || !user) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      );
    }

    // admins 테이블에서 역할 조회
    const { data: adminData, error: adminError } = await supabaseAdmin
      .from("admins")
      .select("role")
      .eq("email", user.email)
      .single();

    if (adminError || !adminData) {
      // admins 테이블에 없으면 기본적으로 admin으로 처리
      return NextResponse.json({ role: "admin" });
    }

    return NextResponse.json({ role: adminData.role });
  } catch (error) {
    console.error("Error checking admin role:", error);
    return NextResponse.json(
      { error: "Failed to check role" },
      { status: 500 }
    );
  }
}
