/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

HOVERBOARD.Elements = (function () {
  'use strict';

  function onDomBindStamp() {
    var template = document.getElementById('t');
    // var toast = document.getElementById('toast');
    //
    // HOVERBOARD.Elements.Toast = toast;
    HOVERBOARD.Elements.ScrollContainer = window;
    HOVERBOARD.Elements.Scroller = document.documentElement;
  }

  function init() {
    HOVERBOARD.Elements.Template = document.getElementById('happ');
  }

  return {
    init
  };
})();