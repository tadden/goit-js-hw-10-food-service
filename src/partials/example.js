import menu from '../menu.json';
import template from './template.hbs'

const menuRefs = document.querySelector('.js-menu')

const markup = template(menu)

menuRefs.insertAdjacentHTML('afterbegin',markup);