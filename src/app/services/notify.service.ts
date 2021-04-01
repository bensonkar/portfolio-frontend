import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public snackBar: MatSnackBar) { }

  showNotification(message: string) {
    this.snackBar.open(message, 'cancel',
      {
        duration: 5000, horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }
}
