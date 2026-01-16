import nodemailer from "nodemailer";

// Brevo SMTP transporter 생성 함수
function createTransporter() {
  const smtpLogin = process.env.BREVO_SMTP_LOGIN || process.env.BREVO_EMAIL;
  const smtpKey = process.env.BREVO_SMTP_KEY || process.env.BREVO_APP_PASSWORD;

  if (!smtpLogin || !smtpKey) {
    throw new Error("BREVO_SMTP_LOGIN and BREVO_SMTP_KEY must be configured");
  }

  return nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // 587은 STARTTLS 사용
    auth: {
      user: smtpLogin, // SMTP 로그인 (a02c61001@smtp-brevo.com)
      pass: smtpKey, // SMTP 키
    },
    // 타임아웃 설정 (밀리초)
    connectionTimeout: 10000, // 연결 타임아웃: 10초
    greetingTimeout: 5000, // 인사 타임아웃: 5초
    socketTimeout: 10000, // 소켓 타임아웃: 10초
    debug: true, // 디버그 모드 활성화
    logger: true, // 로거 활성화
  });
}

interface ConsultationEmailData {
  name: string;
  contact: string;
  click_source?: string | null;
}

export async function sendConsultationEmail(data: ConsultationEmailData) {
  console.log("[EMAIL] sendConsultationEmail 함수 시작");
  console.log(
    "[EMAIL] 받은 데이터:",
    JSON.stringify({ ...data, contact: data.contact ? "***" : "" }, null, 2)
  );

  try {
    // SMTP 인증용 로그인 (변경 불가)
    const smtpLogin = process.env.BREVO_SMTP_LOGIN || process.env.BREVO_EMAIL;

    // 수신자 이메일: CONSULTATION_EMAIL이 있으면 사용, 없으면 기본값
    const recipientEmail = process.env.CONSULTATION_EMAIL || "bp4sp4@naver.com";

    // 발신자 이메일: BREVO_FROM_EMAIL (인증된 이메일) 필수
    // Brevo에서는 from 필드가 인증된 발신자 이메일이어야 함
    // SMTP 로그인(a02c61001@smtp-brevo.com)은 인증용이지 발신자로 사용 불가
    const fromEmail = process.env.BREVO_FROM_EMAIL;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://바로기업.com";
    const logoUrl = `${baseUrl}/images/main/logo_black.png`;

    console.log("[EMAIL] 설정 확인:");
    console.log(
      "[EMAIL] - smtpLogin (인증용):",
      smtpLogin ? `${smtpLogin.substring(0, 3)}***` : "없음"
    );
    console.log(
      "[EMAIL] - recipientEmail:",
      recipientEmail ? `${recipientEmail.substring(0, 3)}***` : "없음"
    );
    console.log(
      "[EMAIL] - fromEmail (발신자):",
      fromEmail ? `${fromEmail.substring(0, 3)}***` : "없음"
    );
    console.log("[EMAIL] - baseUrl:", baseUrl);
    console.log("[EMAIL] - logoUrl:", logoUrl);

    if (!recipientEmail) {
      console.error("[EMAIL] 수신자 이메일이 설정되지 않음");
      return { success: false, error: "Email not configured" };
    }

    if (!smtpLogin) {
      console.error(
        "[EMAIL] BREVO_SMTP_LOGIN 또는 BREVO_EMAIL 환경 변수가 설정되지 않음"
      );
      return {
        success: false,
        error: "BREVO_SMTP_LOGIN or BREVO_EMAIL not configured",
      };
    }

    if (!process.env.BREVO_SMTP_KEY && !process.env.BREVO_APP_PASSWORD) {
      console.error(
        "[EMAIL] BREVO_SMTP_KEY 또는 BREVO_APP_PASSWORD 환경 변수가 설정되지 않음"
      );
      return {
        success: false,
        error: "BREVO_SMTP_KEY or BREVO_APP_PASSWORD not configured",
      };
    }

    if (!fromEmail) {
      console.error("[EMAIL] BREVO_FROM_EMAIL 환경 변수가 설정되지 않음");
      console.error(
        "[EMAIL] Brevo에서는 from 필드가 인증된 발신자 이메일이어야 합니다."
      );
      console.error(
        "[EMAIL] Brevo 대시보드에서 발신자 이메일을 인증한 후 BREVO_FROM_EMAIL에 설정하세요."
      );
      return {
        success: false,
        error:
          "BREVO_FROM_EMAIL not configured. Please set a verified sender email in Brevo.",
      };
    }

    // SMTP 연결 확인 건너뛰기 (Serverless 환경에서 verify가 불안정할 수 있음)
    // verify 없이 바로 sendMail 시도 (nodemailer가 자동으로 연결 처리)
    console.log("[EMAIL] SMTP 연결 확인 건너뛰고 바로 메일 전송 시도...");

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
          body { font-family: 'Pretendard', sans-serif; -webkit-font-smoothing: antialiased; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #ffffff; color: #191f28;">
        <div style="max-width: 600px; margin: 0 auto; padding: 60px 24px;">
          <div style="margin-bottom: 48px;">
            <img src="${logoUrl}" alt="한평생 바로기업" style="height: 32px; width: auto;" />
          </div>

          <div style="margin-bottom: 40px;">
            <h1 style="font-size: 28px; font-weight: 700; line-height: 1.4; margin: 0; color: #191f28;">
              새로운 상담 신청이<br />도착했어요
            </h1>
          </div>

          <div style="background-color: #f9fafb; border-radius: 20px; padding: 32px;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding-bottom: 20px; font-size: 15px; color: #4e5968; width: 100px;">성함/기업명</td>
                <td style="padding-bottom: 20px; font-size: 17px; font-weight: 600; color: #191f28; text-align: right;">${
                  data.name
                }</td>
              </tr>
              <tr>
                <td style="padding-bottom: 20px; font-size: 15px; color: #4e5968;">연락처</td>
                <td style="padding-bottom: 20px; font-size: 17px; font-weight: 600; color: #3182f6; text-align: right;">
                  <a href="tel:${data.contact.replace(
                    /-/g,
                    ""
                  )}" style="color: #3182f6; text-decoration: none;">${
      data.contact
    }</a>
                </td>
              </tr>
              ${
                data.click_source
                  ? `
              <tr>
                <td style="padding-bottom: 20px; font-size: 15px; color: #4e5968;">유입 경로</td>
                <td style="padding-bottom: 20px; font-size: 17px; font-weight: 600; color: #191f28; text-align: right;">${data.click_source}</td>
              </tr>
              `
                  : ""
              }
              <tr style="border-top: 1px solid #ebedf0;">
                <td style="padding-top: 20px; font-size: 14px; color: #8b95a1;">신청 시각</td>
                <td style="padding-top: 20px; font-size: 14px; color: #8b95a1; text-align: right;">${new Date().toLocaleString(
                  "ko-KR"
                )}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 40px;">
            <a href="tel:${data.contact.replace(/-/g, "")}" 
               style="display: inline-block; background-color: #3182f6; color: #ffffff; padding: 16px 32px; border-radius: 12px; font-size: 16px; font-weight: 600; text-decoration: none; width: calc(100% - 64px); text-align: center;">
              지금 바로 전화하기
            </a>
          </div>

          <div style="margin-top: 60px; padding-top: 32px; border-top: 1px solid #f2f4f6; text-align: left;">
            <p style="margin: 0; font-size: 13px; color: #8b95a1; line-height: 1.6;">
              본 메일은 한평생 바로기업 웹사이트를 통해 수신되었습니다.<br />
              서울시 도봉구 창동 마들로13길 61 씨드큐브 905호 | 02-2135-6221
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = `
새로운 상담 신청이 접수되었습니다.

이름(회사명): ${data.name}
연락처: ${data.contact}
${data.click_source ? `유입 경로: ${data.click_source}\n` : ""}
신청 시간: ${new Date().toLocaleString("ko-KR")}
    `;

    const mailData = {
      from: fromEmail, // Brevo는 from을 문자열로 사용 (인증된 도메인/이메일)
      to: recipientEmail,
      subject: `[상담 접수] ${data.name}님`,
      text: emailText,
      html: emailHtml,
    };

    console.log("[EMAIL] 메일 전송 시도 중...");
    console.log("[EMAIL] - from:", mailData.from);
    console.log("[EMAIL] - to:", mailData.to);
    console.log("[EMAIL] - subject:", mailData.subject);

    // 메일 전송 (타임아웃 설정 포함)
    console.log("[EMAIL] transporter 생성 중...");
    const transporter = createTransporter();
    console.log("[EMAIL] transporter 생성 완료");

    console.log("[EMAIL] transporter.sendMail() 호출 직전");
    console.log("[EMAIL] 현재 시각:", new Date().toISOString());
    console.log(
      "[EMAIL] mailData 확인:",
      JSON.stringify({
        from: mailData.from,
        to: mailData.to,
        subject: mailData.subject,
        hasHtml: !!mailData.html,
        hasText: !!mailData.text,
      })
    );

    // 메일 전송 (타임아웃 없이 직접 await - Brevo는 빠르게 응답함)
    console.log("[EMAIL] sendMail 호출 중...");
    const info = await transporter.sendMail(mailData);
    console.log("[EMAIL] sendMail 완료!");
    console.log("[EMAIL] 완료 시각:", new Date().toISOString());

    console.log("[EMAIL] ✅ 메일 전송 성공!");
    console.log("[EMAIL] - messageId:", info.messageId);
    console.log("[EMAIL] - response:", info.response);
    console.log("[EMAIL] - accepted:", info.accepted);
    console.log("[EMAIL] - rejected:", info.rejected);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[EMAIL] ❌ 메일 전송 실패! - catch 블록 진입");
    console.error("[EMAIL] 에러 발생 시각:", new Date().toISOString());
    console.error("[EMAIL] 에러 타입:", error?.constructor?.name);
    console.error(
      "[EMAIL] 에러 메시지:",
      error instanceof Error ? error.message : String(error)
    );
    console.error("[EMAIL] 에러 코드:", (error as any)?.code);
    console.error("[EMAIL] 에러 command:", (error as any)?.command);
    console.error("[EMAIL] 에러 response:", (error as any)?.response);
    console.error("[EMAIL] 에러 responseCode:", (error as any)?.responseCode);
    console.error(
      "[EMAIL] 에러 스택:",
      error instanceof Error ? error.stack : "스택 없음"
    );

    // nodemailer 에러의 경우 추가 정보 출력
    if ((error as any)?.response) {
      console.error("[EMAIL] SMTP 응답:", (error as any).response);
    }
    if ((error as any)?.responseCode) {
      console.error("[EMAIL] SMTP 응답 코드:", (error as any).responseCode);
    }

    // 전체 에러 객체 출력
    try {
      console.error(
        "[EMAIL] 전체 에러 객체:",
        JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      );
    } catch (e) {
      console.error("[EMAIL] 에러 객체 직렬화 실패:", e);
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      errorCode: (error as any)?.code,
      errorResponse: (error as any)?.response,
    };
  }
}
