import {Component, View as NgView, NgElement} from 'angular2/angular2'
import {IonicComponent} from 'ionic/config/component'


@Component({
  selector: 'ion-checkbox',
  properties: {
    checked: 'checked'
  },
  events: {
    '^click': 'onClick()'
  }
})
@NgView({
  template: `
  <div class="item-media media-checkbox">
    <icon class="checkbox-off"></icon>
    <icon class="checkbox-on"></icon>
  </div>

  <div class="item-content">

    <div class="item-label">
      <content></content>
    </div>

  </div>`
})
export class Checkbox {
  constructor(
    @NgElement() ngElement: NgElement
    // @PropertySetter('attr.role') setAriaRole: Function,
    // @PropertySetter('attr.aria-checked') setAriaChecked: Function,
    // @PropertySetter('attr.aria-invalid') setAriaInvalid: Function,
    // @PropertySetter('attr.aria-disabled') setAriaDisabled: Function
  ) {
    this.domElement = ngElement.domElement
    this.domElement.classList.add('item')

    let setAriaRole = (v) => this.domElement.setAttribute('aria-role', v)
    let setAriaChecked = (v) => this.domElement.setAttribute('aria-checked', v)
    let setAriaInvalid = (v) => this.domElement.setAttribute('aria-invalid', v)
    let setAriaDisabled = (v) => this.domElement.setAttribute('aria-disabled', v)

    this.config = Checkbox.config.invoke(this)

    setAriaRole('checkbox')
    setAriaInvalid('false')
    setAriaDisabled('false')

    this.setAriaRole = setAriaRole
    this.setAriaChecked = setAriaChecked
    this.setAriaInvalid = setAriaInvalid
    this.setAriaDisabled = setAriaDisabled

    // TODO: FIXME!! MAKE MORE GOOD!!!!
    this.domElement.querySelector('.checkbox-off').classList.add(this.iconOff)
    this.domElement.querySelector('.checkbox-on').classList.add(this.iconOn)
  }

  set checked(checked) {
    this._checked = checked
    this.setAriaChecked(checked)
  }
  get checked() {
    return this._checked
  }
  onClick() {
    this.checked = !this.checked;
  }
}

new IonicComponent(Checkbox, {
  properties: {
    iconOff: {
      defaults: {
        ios: 'ion-ios-circle-outline',
        android: 'ion-android-checkbox-outline-blank',
        core: 'ion-android-checkbox-outline-blank'
      }
    },
    iconOn: {
      defaults: {
        ios: 'ion-ios-checkmark',
        android: 'ion-android-checkbox',
        core: 'ion-android-checkbox',
      }
    }
  }
})