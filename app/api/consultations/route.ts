import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { sendConsultationEmail } from "@/lib/email";

// Vercel Serverless 함수 타임아웃 설정 (초 단위)
// Pro 플랜: 최대 300초, Hobby 플랜: 최대 10초
export const maxDuration = 30;

// GET: 상담 신청 목록 조회
export async function GET() {
  try {
    // 환경 변수 확인
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      return NextResponse.json(
        { error: "Supabase configuration missing" },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching consultations:", error);
      return NextResponse.json(
        { error: "Failed to fetch consultations" },
        { status: 500 }
      );
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Error reading consultations:", error);
    return NextResponse.json(
      { error: "Failed to fetch consultations" },
      { status: 500 }
    );
  }
}

// POST: 상담 신청 저장
export async function POST(request: NextRequest) {
  try {
    // 환경 변수 확인
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      return NextResponse.json(
        { error: "Supabase configuration missing" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, contact, click_source } = body;

    // 유효성 검사
    if (!name || !contact) {
      return NextResponse.json(
        { error: "Name and contact are required" },
        { status: 400 }
      );
    }

    // Supabase에 데이터 저장
    const { data, error } = await supabaseAdmin
      .from("consultations")
      .insert([
        {
          name,
          contact,
          click_source: click_source || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error saving consultation:", error);
      return NextResponse.json(
        { error: "Failed to save consultation" },
        { status: 500 }
      );
    }

    // 이메일 알림 전송 (비동기, 실패해도 상담 신청은 성공 처리)
    console.log("[EMAIL] 이메일 전송 시도 시작");
    console.log("[EMAIL] 환경 변수 확인:");
    console.log("[EMAIL] - NAVER_EMAIL 존재:", !!process.env.NAVER_EMAIL);
    console.log(
      "[EMAIL] - NAVER_EMAIL 값:",
      process.env.NAVER_EMAIL
        ? `${process.env.NAVER_EMAIL.substring(0, 3)}***`
        : "없음"
    );
    console.log(
      "[EMAIL] - NAVER_APP_PASSWORD 존재:",
      !!process.env.NAVER_APP_PASSWORD
    );
    console.log(
      "[EMAIL] - NAVER_APP_PASSWORD 길이:",
      process.env.NAVER_APP_PASSWORD ? process.env.NAVER_APP_PASSWORD.length : 0
    );
    console.log(
      "[EMAIL] - CONSULTATION_EMAIL:",
      process.env.CONSULTATION_EMAIL || "없음 (NAVER_EMAIL 사용)"
    );

    if (process.env.NAVER_EMAIL && process.env.NAVER_APP_PASSWORD) {
      console.log("[EMAIL] 이메일 전송 함수 호출");
      sendConsultationEmail({
        name,
        contact,
        click_source: click_source || null,
      })
        .then((result) => {
          console.log(
            "[EMAIL] 이메일 전송 결과:",
            JSON.stringify(result, null, 2)
          );
        })
        .catch((emailError) => {
          console.error("[EMAIL] 이메일 전송 실패:");
          console.error("[EMAIL] 에러 타입:", emailError?.constructor?.name);
          console.error("[EMAIL] 에러 메시지:", emailError?.message);
          console.error("[EMAIL] 에러 스택:", emailError?.stack);
          console.error(
            "[EMAIL] 전체 에러 객체:",
            JSON.stringify(
              emailError,
              Object.getOwnPropertyNames(emailError),
              2
            )
          );
        });
    } else {
      console.warn(
        "[EMAIL] 환경 변수가 설정되지 않아 이메일 전송을 건너뜁니다"
      );
    }

    return NextResponse.json(
      { message: "Consultation request submitted successfully", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving consultation:", error);
    return NextResponse.json(
      { error: "Failed to save consultation" },
      { status: 500 }
    );
  }
}

// PATCH: 상담 완료 상태 업데이트
export async function PATCH(request: NextRequest) {
  try {
    // 환경 변수 확인
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      return NextResponse.json(
        { error: "Supabase configuration missing" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { id, is_completed } = body;

    if (!id || typeof is_completed !== "boolean") {
      return NextResponse.json(
        { error: "ID and is_completed are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("consultations")
      .update({ is_completed })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating completion status:", error);
      return NextResponse.json(
        { error: "Failed to update completion status" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Completion status updated successfully",
      data,
    });
  } catch (error) {
    console.error("Error updating completion status:", error);
    return NextResponse.json(
      { error: "Failed to update completion status" },
      { status: 500 }
    );
  }
}
