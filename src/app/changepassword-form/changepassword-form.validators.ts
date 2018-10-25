import { AbstractControl, ValidationErrors } from '@angular/Forms';

export class ChangePasswordFormValidators {
    static passwordNotMatchValidator(form: AbstractControl): ValidationErrors | null {
        const confirmPassword = form.get('confirmpassword');
        const newPassword = form.get('newpassword');
        return confirmPassword.value !== newPassword.value ? { 'passwordNotMatch': true } : null;
    }

    static oldPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) !== '1234') {
                    resolve({ 'oldPasswordInvalid': true });
                } else {
                    resolve(null);
                }
            });
        });
    }
}
