import nodemailer from "nodemailer";

// 네이버 메일 SMTP 설정
const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true, // 465는 true로 설정
  auth: {
    user: process.env.NAVER_EMAIL,
    pass: process.env.NAVER_APP_PASSWORD,
  },
});

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
    // 수신자 이메일: CONSULTATION_EMAIL이 있으면 사용, 없으면 NAVER_EMAIL 사용
    const recipientEmail =
      process.env.CONSULTATION_EMAIL || process.env.NAVER_EMAIL;
    const fromEmail = process.env.NAVER_EMAIL;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://바로기업.com";
    const logoUrl = `${baseUrl}/images/main/logo_black.png`;

    console.log("[EMAIL] 설정 확인:");
    console.log(
      "[EMAIL] - recipientEmail:",
      recipientEmail ? `${recipientEmail.substring(0, 3)}***` : "없음"
    );
    console.log("[EMAIL] - fromEmail:", fromEmail ? `${fromEmail.substring(0, 3)}***` : "없음");
    console.log("[EMAIL] - baseUrl:", baseUrl);
    console.log("[EMAIL] - logoUrl:", logoUrl);

    if (!recipientEmail) {
      console.error("[EMAIL] 수신자 이메일이 설정되지 않음");
      return { success: false, error: "Email not configured" };
    }

    if (!process.env.NAVER_EMAIL) {
      console.error("[EMAIL] NAVER_EMAIL 환경 변수가 설정되지 않음");
      return { success: false, error: "NAVER_EMAIL not configured" };
    }

    if (!process.env.NAVER_APP_PASSWORD) {
      console.error("[EMAIL] NAVER_APP_PASSWORD 환경 변수가 설정되지 않음");
      return { success: false, error: "NAVER_APP_PASSWORD not configured" };
    }

    // SMTP 연결 확인 (callback 생략 시 Promise 반환)
    console.log("[EMAIL] SMTP 연결 확인 중...");
    try {
      await transporter.verify();
      console.log("[EMAIL] ✅ SMTP 서버 연결 성공 - 메일 전송 준비 완료");
    } catch (verifyError) {
      console.error("[EMAIL] ❌ SMTP 연결 확인 실패:");
      console.error("[EMAIL] verify 에러 타입:", verifyError?.constructor?.name);
      console.error(
        "[EMAIL] verify 에러 메시지:",
        verifyError instanceof Error ? verifyError.message : String(verifyError)
      );
      console.error("[EMAIL] verify 에러 코드:", (verifyError as any)?.code);
      console.error(
        "[EMAIL] verify 에러 스택:",
        verifyError instanceof Error ? verifyError.stack : "스택 없음"
      );
      throw verifyError;
    }

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
      from: {
        name: "한평생 바로기업",
        address: fromEmail || "",
      },
      to: recipientEmail,
      subject: `[상담 접수] ${data.name}님`,
      text: emailText,
      html: emailHtml,
    };

    console.log("[EMAIL] 메일 전송 시도 중...");
    console.log("[EMAIL] - from:", mailData.from.address);
    console.log("[EMAIL] - to:", mailData.to);
    console.log("[EMAIL] - subject:", mailData.subject);

    // 메일 전송 (callback 생략 시 Promise 반환 - nodemailer v6.4.8+)
    const info = await transporter.sendMail(mailData);
    console.log("[EMAIL] ✅ 메일 전송 성공!");
    console.log("[EMAIL] - messageId:", info.messageId);
    console.log("[EMAIL] - response:", info.response);
    console.log("[EMAIL] - accepted:", info.accepted);
    console.log("[EMAIL] - rejected:", info.rejected);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[EMAIL] ❌ 메일 전송 실패!");
    console.error("[EMAIL] 에러 타입:", error?.constructor?.name);
    console.error(
      "[EMAIL] 에러 메시지:",
      error instanceof Error ? error.message : String(error)
    );
    console.error("[EMAIL] 에러 코드:", (error as any)?.code);
    console.error(
      "[EMAIL] 에러 스택:",
      error instanceof Error ? error.stack : "스택 없음"
    );

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      errorCode: (error as any)?.code,
      errorResponse: (error as any)?.response,
    };
  }
}
