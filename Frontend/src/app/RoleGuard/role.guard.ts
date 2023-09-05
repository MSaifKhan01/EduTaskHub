import { CanActivateFn,Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const user=JSON.parse(localStorage.getItem("user")||'{}')
  const router=new Router()
  if(user){
    if(user.role=="instructor"){
      router.navigate(['/instrucCourse'])
      return false
    }else{
      return true
    }
  }else{
    return true
  }
}