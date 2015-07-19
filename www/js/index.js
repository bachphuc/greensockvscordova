/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
        if (typeof cordova === 'undefined') {
            $(document).ready(app.onDocumentReady);
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Device ready...');
        app.onDocumentReady();
    },
    onDocumentReady: function() {
        console.log('Document ready...');
        app.leftMenu = document.getElementById('left-menu');
        app.backdrop = document.getElementById('backdrop');
        app.bShowMenu = true;
        app.toggleMenuButton = $('#toggle-menu');
        app.toggleMenuButton.on('click', function() {
            app.toggleMenu();
        });
    },
    hideMenu: function() {
        if (!this.leftMenu) {
            return;
        }
        var newWidth = (this.leftMenu.offsetWidth * -1);
        TweenMax.to(this.backdrop, this.menuSpeed, {
            opacity: 0
        });
        TweenMax.to(this.leftMenu, this.menuSpeed, {
            // left: newWidth + "px",
            x: newWidth,
            // ease: Power2.easeInOut,
            // opacity: 0.4,
            autoRound: false
        });
        this.bShowMenu = false;
    },
    showMenu: function() {
        if (!this.leftMenu) {
            return;
        }
        TweenMax.to(this.backdrop, this.menuSpeed, {
            opacity: 0.6
        });
        TweenMax.to(this.leftMenu, this.menuSpeed, {
            // left: "0px",
            x: 0,
            // ease: Power2.easeInOut,
            // opacity: 1,
            autoRound: false
        });
        this.bShowMenu = true;
    },
    menuSpeed: 0.5,
    toggleMenu: function() {
        if (!this.leftMenu) {
            return;
        }
        if (this.bShowMenu) {
            return app.hideMenu();
        }
        app.showMenu();
    }
};

app.initialize();
