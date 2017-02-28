import { ValidatorFn } from '@angular/forms';
import { FormControl, AbstractControl } from '../../../node_modules/@angular/forms/src/model';

export class EqualValidator {

  /**
   * @param formControlReference
   * @returns {(control:AbstractControl)=>{[p: string]: any}}
   *
   *    ### Example
   *
   * ```
   public makeFormModel(): FormGroup {
    const formControlReference: FormControl = new FormControl('', Validators.required);
    const senhaConfirmaFormControl: FormControl = new FormControl('',
      Validators.compose([Validators.required,
      this.sameValue(formControlReference)]));
    return this.formBuilder.group({
      senha: formControlReference,
      confirmaSenha: senhaConfirmaFormControl,
    });
   }
   * ```
   */
  static sameValue(formControlReference: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      const isSame = formControlReference.value === control.value;

      return isSame ? null : { 'sameValue': formControlReference.value + ' diferente de ' + control.value };
    };
  }

}