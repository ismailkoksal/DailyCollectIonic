import {AbstractControl, ValidatorFn} from '@angular/forms';

export function equalValueValidator(control: AbstractControl): ValidatorFn {
    return (control2: AbstractControl): { [key: string]: any } | null => {
        return control.value === control2.value ? null : {notEqual: true};
    };
}
