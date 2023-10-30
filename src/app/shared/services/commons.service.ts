import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private toaster: ToastrService,
    private translate: TranslatePipe,
  ) {

  }

  showSuccess(msg: string, title?: string, trans?: boolean, timeOut = 3000): void {
    if(trans){
      msg = this.translate.transform(msg)
    }
    this.toaster.success(msg, title, {
      timeOut,
      positionClass: 'toast-top-center',
    });
  }

  showInfo(msg: string, title?: string, trans?: boolean, timeOut = 3000): void {
    if(trans){
      msg = this.translate.transform(msg)
    }
    this.toaster.info(msg, title, {
      timeOut,
      positionClass: 'toast-top-center',
    });
  }

  showWarning(msg: string, title?: string, trans?: boolean, timeOut = 3000): void {
    if(trans){
      msg = this.translate.transform(msg)
    }
    this.toaster.warning(msg, title, {
      timeOut,
      positionClass: 'toast-top-center',
    });
  }

  showError(msg: string, title?: string, trans?: boolean, timeOut = 3000): void {
    if(trans){
      msg = this.translate.transform(msg)
    }
    this.toaster.error(msg, title, {
      timeOut,
      positionClass: 'toast-top-center',
    });
  }

  // confirm(data: any): Observable<any> {
  //   return new Observable<any>((observer) => {
  //     const dialogRef = this.dialog.open(DialogComponent, {
  //       width: '400px',
  //       data,
  //       panelClass: 'confirm-dialog',
  //     });

  //     dialogRef.afterClosed().subscribe((result:any) => {
  //       observer.next(result);
  //     });
  //   });
  // }

}
