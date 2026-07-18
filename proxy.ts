import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// The previous site was compromised with generated casino and gambling pages.
// Match the vocabulary used by those URL families so both known and newly
// discovered variants permanently return Gone instead of entering the app.
const hackedPathPattern =
  /(?:^|[-_/])(?:casino|casinos|cassino|roulette|blackjack|baccarat|poker|pokies?|slots?|bingo|jackpot|gambling|sportsbook|bookmaker|wager|craps|keno|loto|pari|paris|machines?-a-sous|free-spins|no-deposit|betpanda|betify|play2win)(?:[-_/]|$)/i;

function normalisePath(pathname: string) {
  try {
    return decodeURIComponent(pathname)
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();
  } catch {
    return pathname.toLowerCase();
  }
}

export function proxy(request: NextRequest) {
  if (!hackedPathPattern.test(normalisePath(request.nextUrl.pathname))) {
    return NextResponse.next();
  }

  return new NextResponse('Gone', {
    status: 410,
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.svg).*)'],
};
