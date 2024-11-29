import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  const token = authService.isLoggedIn();

  if (token){
    return true;
  }
  else{
    router.navigate(['/login-admin']);
    return true;
  }

  
};
