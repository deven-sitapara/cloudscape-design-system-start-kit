// import { NextResponse } from 'next/server'
// import { sign } from 'jsonwebtoken'

// export async function POST(request) {
//   const { username, password } = await request.json()

//   if (username === 'admin' && password === 'password') {
//     const token = sign({ username }, process.env.JWT_SECRET)
//     return NextResponse.json({ token })
//   }

//   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
// }
