import { NextResponse, NextRequest } from 'next/server'

function authenticate(request: any){
    // TODO - lógica de autenticação do usuário
    console.log('middleware')
    return true
}
 
export function middleware(request: NextRequest) {
  
  const isAuthenticated = authenticate(request)

    
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }

 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// export const config = {
//   matcher: '/buy-screen',
// }