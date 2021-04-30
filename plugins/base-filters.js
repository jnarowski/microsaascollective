import Vue from 'vue'

import asHtml from '../filters/asHtml'
import asText from '../filters/asText'
import asLink from '../filters/asLink'
import formatDate from '../filters/formatDate'
import formatTimeAgo from '../filters/formatTimeAgo'

Vue.filter('asHtml', asHtml)
Vue.filter('asText', asText)
Vue.filter('asLink', asLink)
Vue.filter('formatDate', formatDate)
Vue.filter('formatTimeAgo', formatTimeAgo)
