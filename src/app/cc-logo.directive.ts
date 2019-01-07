import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

enum CardType { VISA = 'visa', MASTERCARD = 'mastercard', AMERICAN_EXPRESS = 'american-express', UNKNOWN = 'unknown'}
@Directive({
  selector: '[appCcLogo]'
})
export class CcLogoDirective implements OnChanges {

  @Input() cardNumber: string;
  @HostBinding('src') imageSource;
  constructor() { }

  ngOnChanges() {
    this.imageSource = 'assets/cards/' + this.getCardTypeFromNumber() + '.png';
  }

  getCardTypeFromNumber(): CardType {
    if (this.cardNumber) {
      if (this.cardNumber.startsWith('37')) {
        return CardType.AMERICAN_EXPRESS;
      } else if (this.cardNumber.startsWith('4')) {
        return CardType.VISA;
      } else if (this.cardNumber.startsWith('5')) {
        return CardType.MASTERCARD;
      }
    }
    return CardType.UNKNOWN;
  }
}
