import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://바로기업.com";
  const siteName = "한평생 바로기업";
  const description =
    "창업부터 EXIT까지, 대표님들의 성공적인 경영을 위한 전문 컨설팅";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${baseUrl}</link>
    <description>${description}</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>한평생 바로기업</title>
      <link>${baseUrl}</link>
      <description>${description}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}</guid>
    </item>
    <item>
      <title>포트폴리오</title>
      <link>${baseUrl}/portfolio</link>
      <description>한평생 바로기업 포트폴리오</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/portfolio</guid>
    </item>
    <item>
      <title>투자유치</title>
      <link>${baseUrl}/investment</link>
      <description>투자유치 컨설팅 서비스</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/investment</guid>
    </item>
    <item>
      <title>정책자금</title>
      <link>${baseUrl}/policyfunds</link>
      <description>정책자금 신청 컨설팅</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/policyfunds</guid>
    </item>
    <item>
      <title>창업교육</title>
      <link>${baseUrl}/ented</link>
      <description>창업교육 프로그램</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/ented</guid>
    </item>
    <item>
      <title>경영지원</title>
      <link>${baseUrl}/bizsupport</link>
      <description>경영지원 서비스</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/bizsupport</guid>
    </item>
    <item>
      <title>주의사항</title>
      <link>${baseUrl}/notice</link>
      <description>안전한 컨설팅을 위한 주의사항</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/notice</guid>
    </item>
    <item>
      <title>서비스 이용약관</title>
      <link>${baseUrl}/policy</link>
      <description>서비스 이용약관 및 개인정보처리방침</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/policy</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
