import { NextResponse } from 'next/server';

const LEETCODE_API = 'https://leetcode.com/graphql';
const USERNAME = 'jyoti_0056';

const query = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch(LEETCODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          username: USERNAME,
          year: new Date().getFullYear(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from LeetCode API');
    }

    const data = await response.json();
    const calendar = JSON.parse(
      data.data.matchedUser.userCalendar.submissionCalendar
    );

    // Transform the data into the format expected by react-calendar-heatmap
    const submissions = Object.entries(calendar).map(([timestamp, count]) => ({
      date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
      count: Number(count),
    }));

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching LeetCode submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}