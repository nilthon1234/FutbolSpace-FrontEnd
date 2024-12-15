import { CanActivateFn, Router } from '@angular/router';
import { ClientService } from '../../factures/service/client.service';
import { inject } from '@angular/core';


export const clientGuard: CanActivateFn = (route, state) => {
const clientService = inject(ClientService);
const router = inject(Router);

const autorisa = clientService.isAuthenticateds();
if(autorisa){
  
  return true;
}else {
  router.navigate(['login-client']);
  return true
}

};
