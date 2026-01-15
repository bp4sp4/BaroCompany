import nodemailer from "nodemailer";

// 네이버 메일 SMTP 설정
const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true, // SSL 사용
  auth: {
    user: process.env.NAVER_EMAIL, // 네이버 이메일 주소
    pass: process.env.NAVER_APP_PASSWORD, // 네이버 앱 비밀번호
  },
});

interface ConsultationEmailData {
  name: string;
  contact: string;
  click_source?: string | null;
}

export async function sendConsultationEmail(data: ConsultationEmailData) {
  try {
    // 받는 사람 이메일 (환경 변수에서 가져오거나 직접 설정)
    const recipientEmail =
      process.env.CONSULTATION_EMAIL || process.env.NAVER_EMAIL;

    if (!recipientEmail) {
      console.error("Recipient email not configured");
      return { success: false, error: "Email not configured" };
    }

    if (!process.env.NAVER_EMAIL) {
      console.error("NAVER_EMAIL not configured");
      return { success: false, error: "NAVER_EMAIL not configured" };
    }

    const mailOptions = {
      from: `"한평생 바로기업" <${process.env.NAVER_EMAIL}>`,
      to: recipientEmail,
      subject: `[상담 신청] ${data.name}님의 상담 신청`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2469ff;">새로운 상담 신청이 접수되었습니다</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">상담 신청 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #666; width: 120px;">이름(회사명)</td>
                <td style="padding: 10px; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #666;">연락처</td>
                <td style="padding: 10px; color: #333;">${data.contact}</td>
              </tr>
              ${
                data.click_source
                  ? `
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #666;">유입 경로</td>
                <td style="padding: 10px; color: #333;">${data.click_source}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #666;">신청 시간</td>
                <td style="padding: 10px; color: #333;">${new Date().toLocaleString(
                  "ko-KR"
                )}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            위 고객님께 빠르게 연락을 드려주세요.
          </p>
        </div>
      `,
      text: `
새로운 상담 신청이 접수되었습니다.

이름(회사명): ${data.name}
연락처: ${data.contact}
${data.click_source ? `유입 경로: ${data.click_source}\n` : ""}
신청 시간: ${new Date().toLocaleString("ko-KR")}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
