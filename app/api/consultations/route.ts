import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

// GET: 상담 신청 목록 조회
export async function GET() {
  try {
    // 환경 변수 확인
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
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
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Supabase configuration missing" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, contact, industry } = body;

    // 유효성 검사
    if (!name || !contact || !industry) {
      return NextResponse.json(
        { error: "All fields are required" },
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
          industry,
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
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
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

    return NextResponse.json({ message: "Completion status updated successfully", data });
  } catch (error) {
    console.error("Error updating completion status:", error);
    return NextResponse.json(
      { error: "Failed to update completion status" },
      { status: 500 }
    );
  }
}

