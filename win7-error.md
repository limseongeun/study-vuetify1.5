# Windows 7 error Comment
오류 상황은 다음과 같습니다.   
OS Windows 10에서 Vue Cli 2, Vuetify 1.5로 프로젝트를 생성하고 다른 컴퓨터의 OS Windows 7에서 'git clone ... > yarn install > cd test-vuetify1.5 > yarn serve' 후 vuetify styl에서 오류 발생   
해결해 보려고 찾아봤지만 결국에는 찾지를 못하고 이슈 내용을 기록으로 남기기로 결정했습니다.   
혹시 원인과 해결 방안 아시는 분 계시면 알려 주시면 감사하겠습니다.

```
$ yarn serve

yarn run v1.16.0
$ vue-cli-service serve
 INFO  Starting development server...
 WARN  A new version of sass-loader is available. Please upgrade for best experi
ence.
98% after emitting CopyPlugin

 ERROR  Failed to compile with 74 errors                                00:16:49


 error  in ./node_modules/vuetify/src/stylus/app.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\app.styl:5:22
   1| @require './settings/*'
   2| @require './generic/*'
   3| @require './elements/*'
   4| @require './tools/*'
   5| @require './trumps/*'
---------------------------^
   6|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/app.styl 4:14-195 15:3-20:5 16:22-203
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_alerts.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_alerts.styl:56:9
2
   52| // with modifier (for example "red lighten-2")
   53| .v-alert.v-alert
   54|   border-color: $material-light.dividers !important
   55|   &--outline
   56|     border: $alert-outline-border-width $alert-outline-border-style curre
ntColor !important
--------------------------------------------------------------------------------
------------------^
   57|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_alerts.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VAlert/VAlert.js
 @ ./node_modules/vuetify/lib/components/VAlert/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_app.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_app.styl:45:23
   41|     .application
   42|       display: block
   43|
   44|       &--wrap
   45|         display: block
-----------------------------^
   46|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_app.styl 4:14-205 15:3-20:5 16:
22-213
 @ ./node_modules/vuetify/lib/components/VApp/VApp.js
 @ ./node_modules/vuetify/lib/components/VApp/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_autocompletes.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_autocompletes.st
yl:26:23
   22|   &__content.v-menu__content
   23|     border-radius: 0
   24|
   25|     .v-card
   26|       border-radius: 0
-----------------------------^
   27|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_autocompletes.styl 4:14-215 15:
3-20:5 16:22-223
 @ ./node_modules/vuetify/lib/components/VCombobox/VCombobox.js
 @ ./node_modules/vuetify/lib/components/VCombobox/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_avatars.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_avatars.styl:26:
23
   22|
   23|     img,
   24|     .v-icon,
   25|     .v-image
   26|       border-radius: 0
-----------------------------^
   27|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_avatars.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
 @ ./node_modules/vuetify/lib/components/VAvatar/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_badges.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_badges.styl:70:2
0
   66|
   67|   &--bottom
   68|     .v-badge__badge
   69|       bottom: -($badge-height / 2)
   70|       top: initial;
--------------------------^
   71|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_badges.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VBadge/VBadge.js
 @ ./node_modules/vuetify/lib/components/VBadge/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_bottom-navs.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_bottom-navs.styl
:92:25
   88|     .v-icon
   89|       transform: scale(1, 1) translate(0, 8px)
   90|
   91|     > span:not(.v-badge)
   92|       color: transparent
-------------------------------^
   93|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_bottom-navs.styl 4:14-213 15:3-
20:5 16:22-221
 @ ./node_modules/vuetify/lib/components/VBottomNav/VBottomNav.js
 @ ./node_modules/vuetify/lib/components/VBottomNav/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_bottom-sheets.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_bottom-sheets.st
yl:18:22
   14|     max-width: 70%
   15|     min-width: 0
   16|
   17|     @media $display-breakpoints.xs-only
   18|       max-width: none
----------------------------^
   19|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_bottom-sheets.styl 4:14-215 15:
3-20:5 16:22-223
 @ ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
 @ ./node_modules/vuetify/lib/components/VBottomSheet/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_breadcrumbs.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_breadcrumbs.styl
:44:27
   40|     text-decoration: none
   41|     transition: $primary-transition
   42|
   43|     &--disabled
   44|       pointer-events: none
---------------------------------^
   45|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_breadcrumbs.styl 4:14-213 15:3-
20:5 16:22-221
 @ ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js
 @ ./node_modules/vuetify/lib/components/VBreadcrumbs/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_button-toggle.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_button-toggle.st
yl:54:17
   50|     &:last-child
   51|       border-radius: 0 2px 2px 0
   52|
   53|   &--selected
   54|     elevation(2)
-----------------------^
   55|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_button-toggle.styl 4:14-215 15:
3-20:5 16:22-223
 @ ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
 @ ./node_modules/vuetify/lib/components/VBtnToggle/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_buttons.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_buttons.styl:332
:39
   328|   &.success,
   329|   &.error,
   330|   &.warning,
   331|   &.info
   332|     color: $material-dark.text.primary
----------------------------------------------^
   333|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_buttons.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VBtn/VBtn.js
 @ ./node_modules/vuetify/lib/components/VBtn/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_calendar-daily.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_calendar-daily.s
tyl:107:22
   103|
   104| .v-calendar-daily__day
   105|   flex: 1;
   106|   width: 0;
   107|   position: relative;
-----------------------------^
   108|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_calendar-daily.styl 4:14-216 15
:3-20:5 16:22-224
 @ ./node_modules/vuetify/lib/components/VCalendar/VCalendarDaily.js
 @ ./node_modules/vuetify/lib/components/VCalendar/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_calendar-weekly.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_calendar-weekly.
styl:82:48
   78|   box-shadow: none;
   79|   top: 0;
   80|   left: $calendar-weekly-day-month-left;
   81|   height: $calendar-weekly-day-label-size;
   82|   line-height: $calendar-weekly-day-label-size;
------------------------------------------------------^
   83|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_calendar-weekly.styl 4:14-217 1
5:3-20:5 16:22-225
 @ ./node_modules/vuetify/lib/components/VCalendar/VCalendarWeekly.js
 @ ./node_modules/vuetify/lib/components/VCalendar/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_cards.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_cards.styl:58:23

   54|     .v-btn
   55|       margin: 0
   56|
   57|     .v-btn + .v-btn
   58|       margin-left: 8px
-----------------------------^
   59|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_cards.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VCard/VCard.js
 @ ./node_modules/vuetify/lib/components/VCard/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_carousel.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_carousel.styl:76
:22
   72|       &:hover
   73|         background: none
   74|
   75|         .v-icon
   76|           opacity: .8
----------------------------^
   77|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_carousel.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
 @ ./node_modules/vuetify/lib/components/VCarousel/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_chips.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_chips.styl:158:3
8
   154|       margin-right: $chip-icon-negative-offset
   155|
   156|     &--left
   157|       margin-left: $chip-icon-negative-offset
   158|       margin-right: $chip-icon-offset
---------------------------------------------^
   159|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_chips.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VChip/VChip.js
 @ ./node_modules/vuetify/lib/components/VChip/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_content.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_content.styl:18:
21
   14|     position: relative
   15|
   16|   +firefox()
   17|     @media print
   18|       display: block
---------------------------^
   19|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_content.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VGrid/VContent.js
 @ ./node_modules/vuetify/lib/components/VGrid/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_counters.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_counters.styl:14
:17
   10| .v-counter
   11|   flex: 0 1 auto
   12|   font-size: 12px
   13|   min-height: 12px
   14|   line-height: 1
-----------------------^
   15|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_counters.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VCounter/VCounter.js
 @ ./node_modules/vuetify/lib/components/VCounter/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_data-iterator.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_data-iterator.st
yl:59:24
   55|     .v-select__selections
   56|       flex-wrap: nowrap
   57|
   58|       .v-select__selection--comma
   59|         font-size: 12px
------------------------------^
   60|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_data-iterator.styl 4:14-215 15:
3-20:5 16:22-223
 @ ./node_modules/vuetify/lib/components/VDataIterator/VDataIterator.js
 @ ./node_modules/vuetify/lib/components/VDataIterator/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_data-table.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_data-table.styl:
136:23
   132|     transition: height $primary-transition
   133|
   134|     > .card
   135|       border-radius: 0
   136|       box-shadow: none
------------------------------^
   137|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_data-table.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js
 @ ./node_modules/vuetify/lib/components/VDataTable/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_date-picker-header.styl


Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_date-picker-head
er.styl:49:23
   45|     padding: 0.5rem
   46|     transition: $primary-transition
   47|
   48| .v-date-picker-header--disabled
   49|   pointer-events: none
-----------------------------^
   50|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_date-picker-header.styl 4:14-22
0 15:3-20:5 16:22-228
 @ ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 @ ./node_modules/vuetify/lib/components/VDatePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_date-picker-table.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_date-picker-tabl
e.styl:84:23
   80| .v-date-picker-table--month .v-date-picker-table__events
   81|   bottom: 8px
   82|
   83| .v-date-picker-table--disabled
   84|   pointer-events: none
-----------------------------^
   85|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_date-picker-table.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js

 @ ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
 @ ./node_modules/vuetify/lib/components/VDatePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_date-picker-title.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_date-picker-titl
e.styl:36:23
   32|     > div
   33|       position: relative
   34|
   35| .v-date-picker-title--disabled
   36|   pointer-events: none
-----------------------------^
   37|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_date-picker-title.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 @ ./node_modules/vuetify/lib/components/VDatePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_date-picker-years.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_date-picker-year
s.styl:27:18
   23|       background: rgba(0, 0, 0, 0.12)
   24|
   25| .v-picker--landscape
   26|   .v-date-picker-years
   27|     height: 286px
------------------------^
   28|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_date-picker-years.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 @ ./node_modules/vuetify/lib/components/VDatePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_dialogs.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_dialogs.styl:86:
36
   82|         flex: 1 0 auto
   83|
   84|       > .v-card__text
   85|         overflow-y: auto
   86|         backface-visibility: hidden
------------------------------------------^
   87|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_dialogs.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VDialog/VDialog.js
 @ ./node_modules/vuetify/lib/components/VDialog/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_dividers.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_dividers.styl:38
:36
   34|
   35|     &.v-divider--inset
   36|       margin-top: 8px
   37|       min-height: 0
   38|       max-height: calc(100% - 16px)
------------------------------------------^
   39|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_dividers.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VDivider/VDivider.js
 @ ./node_modules/vuetify/lib/components/VDivider/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_expansion-panel.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_expansion-panel.
styl:92:21
   88|       max-width: 100%
   89|
   90|   &--inset
   91|     .v-expansion-panel__container--active
   92|       max-width: 85%
---------------------------^
   93|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_expansion-panel.styl 4:14-217 1
5:3-20:5 16:22-225
 @ ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
 @ ./node_modules/vuetify/lib/components/VExpansionPanel/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_footer.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_footer.styl:31:2
0
   27|   &--absolute
   28|     position: absolute
   29|
   30|   &--fixed
   31|     position: fixed
--------------------------^
   32|
   33|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_footer.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VFooter/VFooter.js
 @ ./node_modules/vuetify/lib/components/VFooter/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_forms.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_forms.styl:14:43

   10|     > .layout:only-child
   11|       margin: -($grid-gutters.lg / 2)
   12|
   13|     > .layout:not(:only-child)
   14|       margin: auto -($grid-gutters.lg / 2)
-------------------------------------------------^
   15|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_forms.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VForm/VForm.js
 @ ./node_modules/vuetify/lib/components/VForm/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_grid.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_grid.styl:218:27

   214| .d-inline
   215|   display: inline !important
   216|
   217| .d-none
   218|   display: none !important
----------------------------------^
   219|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_grid.styl 4:14-206 15:3-20:5 16
:22-214
 @ ./node_modules/vuetify/lib/components/VGrid/VFlex.js
 @ ./node_modules/vuetify/lib/components/VGrid/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_icons.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_icons.styl:36:17

   32|     pointer-events: none
   33|     opacity: .6
   34|
   35|   &--is-component
   36|     height: 24px
-----------------------^
   37|
   38|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_icons.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VIcon/VIcon.js
 @ ./node_modules/vuetify/lib/components/VIcon/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_images.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_images.styl:25:2
9
   21|     &--contain
   22|       background-size: contain
   23|
   24|     &--cover
   25|       background-size: cover
-----------------------------------^
   26|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_images.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VImg/VImg.js
 @ ./node_modules/vuetify/lib/components/VImg/index.js
 @ ./src/views/Home.vue
 @ ./src/router.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_inputs.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_inputs.styl:112:
45
   108|     margin-bottom: 0
   109|
   110|   &--has-state
   111|     &.error--text .v-label
   112|       animation: shake .6s $transition.swing
----------------------------------------------------^
   113|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_inputs.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VInput/VInput.js
 @ ./node_modules/vuetify/lib/components/VInput/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_item-group.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_item-group.styl:
10:19
    6|   transition: $primary-transition
    7|
    8|   > *
    9|     cursor: pointer
   10|     flex: 1 1 auto
-------------------------^
   11|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_item-group.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
 @ ./node_modules/vuetify/lib/components/VItemGroup/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_jumbotrons.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_jumbotrons.styl:
44:24
   40|
   41|   &__content
   42|     height: 100%
   43|     position: relative
   44|     transition: inherit
------------------------------^
   45|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_jumbotrons.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VJumbotron/VJumbotron.js
 @ ./node_modules/vuetify/lib/components/VJumbotron/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_labels.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_labels.styl:16:3
6
   12| .v-label
   13|   font-size: 16px
   14|   line-height: 1
   15|   min-height: 8px
   16|   transition: .3s $transition.swing
------------------------------------------^
   17|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_labels.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VLabel/VLabel.js
 @ ./node_modules/vuetify/lib/components/VLabel/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_lists.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_lists.styl:301:1
9
   297|     &--disabled
   298|       pointer-events: none
   299|
   300|   &--subheader
   301|     padding-top: 0
--------------------------^
   302|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_lists.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VList/VList.js
 @ ./node_modules/vuetify/lib/components/VList/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_menus.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_menus.styl:77:27

   73|
   74|     .v-list__tile--active
   75|       opacity: 1
   76|       transform: none !important
   77|       pointer-events: auto
---------------------------------^
   78|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_menus.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VMenu/VMenu.js
 @ ./node_modules/vuetify/lib/components/VMenu/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_messages.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_messages.styl:26
:18
   22|     line-height: normal
   23|     word-break: break-word
   24|     overflow-wrap: break-word
   25|     word-wrap: break-word
   26|     hyphens: auto
------------------------^
   27|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_messages.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VMessages/VMessages.js
 @ ./node_modules/vuetify/lib/components/VMessages/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_navigation-drawer.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_navigation-drawe
r.styl:113:51
   109|           background: transparent
   110|
   111|   > .v-list:not(.v-list--dense)
   112|     .v-list__tile
   113|       font-size: $navigation-drawer-item-font-size
----------------------------------------------------------^
   114|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_navigation-drawer.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
 @ ./node_modules/vuetify/lib/components/VNavigationDrawer/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_overflow-buttons.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_overflow-buttons
.styl:114:22
   110|         cursor: text
   111|
   112|     .v-input__append-inner,
   113|     .v-input__append-inner *
   114|       cursor: pointer
-----------------------------^
   115|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_overflow-buttons.styl 4:14-218
15:3-20:5 16:22-226
 @ ./node_modules/vuetify/lib/components/VOverflowBtn/VOverflowBtn.js
 @ ./node_modules/vuetify/lib/components/VOverflowBtn/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_overlay.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_overlay.styl:44:
19
   40|     pointer-events: auto
   41|     touch-action: none
   42|
   43|     &:before
   44|       opacity: .46
-------------------------^
   45|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_overlay.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/mixins/overlayable.js
 @ ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
 @ ./node_modules/vuetify/lib/components/VNavigationDrawer/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_pagination.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_pagination.styl:
86:16
   82|     display: inline-flex
   83|     align-items: flex-end
   84|     justify-content: center
   85|     height: 2rem
   86|     width: 2rem
----------------------^
   87|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_pagination.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VPagination/VPagination.js
 @ ./node_modules/vuetify/lib/components/VPagination/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_parallax.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_parallax.styl:37
:20
   33|     position: relative
   34|     display: flex
   35|     flex-direction: column
   36|     justify-content: center
   37|     padding: 0 1rem
--------------------------^
   38|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_parallax.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VParallax/VParallax.js
 @ ./node_modules/vuetify/lib/components/VParallax/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_pickers.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_pickers.styl:80:
23
   76|     z-index: 1
   77|
   78|   .v-picker__body,
   79|   .v-picker__actions
   80|     margin-left: 170px
-----------------------------^
   81|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_pickers.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VPicker/VPicker.js
 @ ./node_modules/vuetify/lib/components/VPicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_progress-circular.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_progress-circula
r.styl:61:32
   57|       stroke-dashoffset: -125px
   58|
   59|   @keyframes progress-circular-rotate
   60|     100%
   61|       transform: rotate(360deg)
--------------------------------------^
   62|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_progress-circular.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
 @ ./node_modules/vuetify/lib/components/VProgressCircular/index.js
 @ ./node_modules/vuetify/lib/components/VBtn/VBtn.js
 @ ./node_modules/vuetify/lib/components/VBtn/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_progress-linear.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_progress-linear.
styl:111:16
   107|       right: 107%
   108|       left: -8%
   109|     100%
   110|       right: 107%
   111|       left: -8%
-----------------------^
   112|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_progress-linear.styl 4:14-217 1
5:3-20:5 16:22-225
 @ ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
 @ ./node_modules/vuetify/lib/components/VProgressLinear/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_radio-group.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_radio-group.styl
:25:29
   21|     .v-radio:not(:last-child):not(:only-child)
   22|       margin-bottom: 8px
   23|
   24|     .v-input--radio-group__input
   25|       flex-direction: column
-----------------------------------^
   26|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_radio-group.styl 4:14-213 15:3-
20:5 16:22-221
 @ ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
 @ ./node_modules/vuetify/lib/components/VRadioGroup/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_radios.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_radios.styl:23:2
5
   19|   margin-right: 16px
   20|   outline: none
   21|
   22|   &--is-disabled
   23|     pointer-events: none
-------------------------------^
   24|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_radios.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
 @ ./node_modules/vuetify/lib/components/VRadioGroup/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_range-sliders.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_range-sliders.st
yl:22:36
   18|
   19|     &.v-input--slider
   20|       .v-slider.v-slider
   21|         .v-slider__thumb
   22|           border-color: transparent
------------------------------------------^
   23|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_range-sliders.styl 4:14-215 15:
3-20:5 16:22-223
 @ ./node_modules/vuetify/lib/components/VRangeSlider/VRangeSlider.js
 @ ./node_modules/vuetify/lib/components/VRangeSlider/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_rating.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_rating.styl:13:2
2
    9|       pointer-events: none
   10|
   11|   &--dense
   12|     .v-icon
   13|       padding: 0.1rem
----------------------------^
   14|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_rating.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VRating/VRating.js
 @ ./node_modules/vuetify/lib/components/VRating/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_responsive.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_responsive.styl:
14:18
   10|     flex: 1 0 0px
   11|
   12|   &__sizer
   13|     transition: padding-bottom 0.2s $transition.swing
   14|     flex: 0 0 0px
------------------------^
   15|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_responsive.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
 @ ./node_modules/vuetify/lib/components/VResponsive/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_select.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_select.styl:119:
29
   115|       // there is no selections div
   116|       // and we must move input to
   117|       // the end of the container
   118|       > input
   119|         align-self: flex-end
------------------------------------^
   120|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_select.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VSelect/VSelect.js
 @ ./node_modules/vuetify/lib/components/VSelect/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_selection-controls.styl


Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_selection-contro
ls.styl:98:27
    94|   &.v-input--is-focused,
    95|   .v-radio--is-focused
    96|     .v-input--selection-controls__ripple:before
    97|       background: currentColor
    98|       transform: scale(.8)
---------------------------------^
    99|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_selection-controls.styl 4:14-22
0 15:3-20:5 16:22-228
 @ ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
 @ ./node_modules/vuetify/lib/components/VCheckbox/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_sheet.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_sheet.styl:19:21

   15|   position: relative
   16|   transition: $primary-transition
   17|
   18|   &--tile
   19|     border-radius: 0
---------------------------^
   20|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_sheet.styl 4:14-207 15:3-20:5 1
6:22-215
 @ ./node_modules/vuetify/lib/components/VSheet/VSheet.js
 @ ./node_modules/vuetify/lib/components/VSheet/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_sliders.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_sliders.styl:258
:23
   254|       transform: rotate(-45deg)
   255|
   256|   &__track,
   257|   &__track-fill
   258|     position: absolute
------------------------------^
   259|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_sliders.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VSlider/VSlider.js
 @ ./node_modules/vuetify/lib/components/VSlider/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_small-dialog.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_small-dialog.sty
l:35:17
   31|     > *
   32|       width: 100%
   33|
   34|   .v-menu__activator
   35|     height: 100%
-----------------------^
   36|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_small-dialog.styl 4:14-214 15:3
-20:5 16:22-222
 @ ./node_modules/vuetify/lib/components/VDataTable/VEditDialog.js
 @ ./node_modules/vuetify/lib/components/VDataTable/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_snackbars.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_snackbars.styl:1
41:34
   137|     &.v-snack.v-snack--top
   138|       // Extra 8px to hide the bottom shadow
   139|       transform: translateY(calc(-100% - 8px))
   140|     &.v-snack.v-snack--bottom
   141|       transform: translateY(100%)
-----------------------------------------^
   142|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_snackbars.styl 4:14-211 15:3-20
:5 16:22-219
 @ ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
 @ ./node_modules/vuetify/lib/components/VSnackbar/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_speed-dial.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_speed-dial.styl:
79:21
   75| .v-speed-dial__list
   76|   align-items: center
   77|   display: flex
   78|   justify-content: center
   79|   position: absolute
---------------------------^
   80|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_speed-dial.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VSpeedDial/VSpeedDial.js
 @ ./node_modules/vuetify/lib/components/VSpeedDial/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_steppers.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_steppers.styl:21
5:22
   211|     .v-stepper__label
   212|       display: none
   213|
   214|     .v-stepper__step__step
   215|       margin-right: 0
-----------------------------^
   216|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_steppers.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VStepper/VStepper.js
 @ ./node_modules/vuetify/lib/components/VStepper/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_subheaders.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_subheaders.styl:
18:41
   14|   font-weight: $headings.body-2.weight
   15|   padding: 0 $list-right-padding 0 $list-left-padding
   16|
   17|   &--inset
   18|     margin-left: $subheader-inset-margin
-----------------------------------------------^
   19|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_subheaders.styl 4:14-212 15:3-2
0:5 16:22-220
 @ ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
 @ ./node_modules/vuetify/lib/components/VSubheader/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_switch.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_switch.styl:69:3
6
   65|
   66|   &.v-input--is-dirty
   67|     .v-input--selection-controls__ripple,
   68|     .v-input--switch__thumb
   69|       transform: translate(16px, 0)
------------------------------------------^
   70|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_switch.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
 @ ./node_modules/vuetify/lib/components/VSwitch/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_system-bars.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_system-bars.styl
:46:24
   42|
   43|   &--window
   44|     .v-icon
   45|       font-size: $headings.h6.size
   46|       margin-right: 8px
------------------------------^
   47|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_system-bars.styl 4:14-213 15:3-
20:5 16:22-221
 @ ./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js
 @ ./node_modules/vuetify/lib/components/VSystemBar/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_tables.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_tables.styl:100:
24
    96|   tfoot
    97|     tr
    98|       height: 48px
    99|       td
   100|         padding: 0 24px
-------------------------------^
   101|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_tables.styl 4:14-208 15:3-20:5
16:22-216
 @ ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js
 @ ./node_modules/vuetify/lib/components/VDataTable/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_tabs.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_tabs.styl:153:36

   149|   &-wrapper
   150|     bottom: 0
   151|     margin: 0 !important
   152|     position: absolute
   153|     transition: $primary-transition
-------------------------------------------^
   154|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_tabs.styl 4:14-206 15:3-20:5 16
:22-214
 @ ./node_modules/vuetify/lib/components/VTabs/VTabs.js
 @ ./node_modules/vuetify/lib/components/VTabs/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_text-fields.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_text-fields.styl
:341:31
   337|   &.v-input--is-focused > .v-input__control > .v-input__slot:after
   338|     transform: scaleX(1)
   339|
   340|   &.v-input--has-state > .v-input__control > .v-input__slot:before
   341|     border-color: currentColor
--------------------------------------^
   342|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_text-fields.styl 4:14-213 15:3-
20:5 16:22-221
 @ ./node_modules/vuetify/lib/components/VTextField/VTextField.js
 @ ./node_modules/vuetify/lib/components/VTextField/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_textarea.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_textarea.styl:90
:19
   86|       overflow: hidden
   87|
   88|   &--no-resize
   89|     textarea
   90|       resize: none
-------------------------^
   91|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_textarea.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
 @ ./node_modules/vuetify/lib/components/VTextarea/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_time-picker-clock.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_time-picker-cloc
k.styl:128:25
   124|     cursor: default
   125|     z-index: 2
   126|
   127|   &--disabled
   128|     pointer-events: none
--------------------------------^
   129|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_time-picker-clock.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VTimePicker/VTimePickerClock.js
 @ ./node_modules/vuetify/lib/components/VTimePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_time-picker-title.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_time-picker-titl
e.styl:48:23
   44|
   45|   .v-time-picker-title__ampm
   46|     margin: 16px 0 0
   47|     align-self: initial
   48|     text-align: center
-----------------------------^
   49|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_time-picker-title.styl 4:14-219
 15:3-20:5 16:22-227
 @ ./node_modules/vuetify/lib/components/VTimePicker/VTimePickerTitle.js
 @ ./node_modules/vuetify/lib/components/VTimePicker/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_timeline.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_timeline.styl:18
5:22
   181|       &__body
   182|         max-width: calc(100% - 64px)
   183|
   184|       &__opposite
   185|         display: none
-----------------------------^
   186|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_timeline.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VTimeline/VTimeline.js
 @ ./node_modules/vuetify/lib/components/VTimeline/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_toolbar.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_toolbar.styl:159
:15
   155|     margin: $grid-gutters.lg
   156|     width: auto
   157|
   158|   &--clipped
   159|     z-index: 3
----------------------^
   160|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_toolbar.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
 @ ./node_modules/vuetify/lib/components/VToolbar/index.js
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_tooltips.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_tooltips.styl:27
:25
   23|       position: fixed
   24|
   25|   @media $display-breakpoints.sm-and-down
   26|     .v-tooltip__content
   27|       padding: 10px 16px
-------------------------------^
   28|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_tooltips.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 @ ./node_modules/vuetify/lib/components/VTooltip/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_treeview.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_treeview.styl:98
:43
    94|       &--loading
    95|         animation: progress-circular-rotate 1s linear infinite
    96|
    97|     &__children
    98|       transition: all $treeview-transition
-------------------------------------------------^
    99|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_treeview.styl 4:14-210 15:3-20:
5 16:22-218
 @ ./node_modules/vuetify/lib/components/VTreeview/VTreeview.js
 @ ./node_modules/vuetify/lib/components/VTreeview/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

 error  in ./node_modules/vuetify/src/stylus/components/_windows.styl

Syntax Error: Error: C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[2021]Upgr
ade\test-vuetify1.5\node_modules\vuetify\src\stylus\components\_windows.styl:51:
34
   47|     &-enter
   48|       transform: translateY(-100%)
   49|
   50|     &-leave-to
   51|       transform: translateY(100%)
----------------------------------------^
   52|

failed to locate @import file C:\Users\Administrator\Desktop\Front-end-Dev\Vue\[
2021]Upgrade\test-vuetify1.5\node_modules\stylus\lib\functions\index.styl


 @ ./node_modules/vuetify/src/stylus/components/_windows.styl 4:14-209 15:3-20:5
 16:22-217
 @ ./node_modules/vuetify/lib/components/VWindow/VWindow.js
 @ ./node_modules/vuetify/lib/components/VWindow/index.js
 @ ./node_modules/vuetify/lib/components/index.js
 @ ./node_modules/vuetify/lib/index.js
 @ ./src/plugins/vuetify.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.30.1.32:8080&sockPath=/sockjs-no
de (webpack)/hot/dev-server.js ./src/main.js

```
