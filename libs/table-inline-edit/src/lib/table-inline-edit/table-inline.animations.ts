import { trigger, sequence, state, animate, transition, style } from '@angular/animations';

export const rowsAnimation = 
    trigger('rowsAnimation', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".35s ease", style({ height: '*', opacity: .2,  transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".35s ease", style({ height: '*', opacity: 1 ,  transform: 'translateX(0)' }))
        ])
      ])
    ]);

    export const EnterLeave = 
    trigger('EnterLeave', [
        state('flyIn', style({ transform: 'translateX(0)' })),
        transition(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s 300ms ease-in')
        ]),
        transition(':leave', [
          animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
        ])
      ])