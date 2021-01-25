/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagebuilder__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagebuilder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pagebuilder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_search__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__block_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__run_builder_scripts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__run_builder_scripts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__run_builder_scripts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_editable_components__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_editable_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__manage_editable_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__save_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ckeditor_hyperlinks__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ckeditor_hyperlinks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ckeditor_hyperlinks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__responsive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__responsive__);








/***/ }),
/* 8 */
/***/ (function(module, exports) {

$(document).ready(function () {

    $(".gjs-editor").append($("#toggle-sidebar"));
    $(".gjs-pn-panels").prepend($("#sidebar-header"));
    $(".gjs-pn-panels").append($("#sidebar-bottom-buttons"));

    $("#toggle-sidebar").click(function () {
        $("#gjs").toggleClass('sidebar-collapsed');
        triggerEditorResize();
    });
    autoCollapseSidebar();

    window.editor.on('run:open-sm', function (editor) {
        $(".gjs-trt-traits").parent().parent().css('display', 'none');
        $(".gjs-sm-sectors").parent().parent().css('display', 'block');
        // move element classes editor to advanced section
        $("#gjs-sm-advanced .gjs-sm-properties").append($(".gjs-clm-tags"));
    });
    window.editor.on('run:open-tm', function (editor) {
        $(".gjs-sm-sectors").parent().parent().css('display', 'none');
        $(".gjs-trt-traits").parent().parent().css('display', 'block');
    });

    window.editor.on('block:drag:start', function (block) {
        autoCollapseSidebar();
    });

    function autoCollapseSidebar() {
        if ($(window).width() < 1000) {
            $("#gjs").addClass('sidebar-collapsed');
            triggerEditorResize();
        }
    }

    function triggerEditorResize() {
        window.editor.trigger('change:canvasOffset canvasScroll');
    }

    // prevent exiting page builder with backspace button
    var backspaceIsPressed = false;
    $(document).keydown(function (event) {
        if (event.which === 8) backspaceIsPressed = true;
    }).keyup(function (event) {
        if (event.which === 8) backspaceIsPressed = false;
    });
    $(window).on('beforeunload', function (event) {
        if (backspaceIsPressed) event.preventDefault();
    });
});

function addBlockSearch() {
    $(".gjs-blocks-cs").prepend($("#block-search"));
}

// listen to messages from iframe
window.addEventListener("message", onMessage, false);

function onMessage(event) {
    // if the page is loaded, remove loading element
    if (event.data === 'page-loaded') {
        $("#phpb-loading").addClass('loaded');
        addBlockSearch();
        window.isLoaded = true;
        $(window).trigger('pagebuilder-page-loaded');
    } else if (event.data === 'touch-start') {
        window.touchStart();
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {


$(document).on("input", "#block-search input", function () {
    var term = $(this).val().toLowerCase();

    $(".gjs-block-category").each(function () {
        var atLeastOneMatch = false;

        $(this).find(".gjs-block").each(function () {
            if (!$(this).data('original-html')) {
                $(this).data('original-html', $(this).html());
            }

            var label = $(this).text();
            if (label.toLowerCase().includes(term)) {
                $(this).removeClass("d-none");
                atLeastOneMatch = true;

                var regEx = new RegExp('(' + term + ')', "gi");
                var highlightedText = label.replace(regEx, '<b>$1</b>');

                $(this).find(".gjs-block-label").html($(this).data('original-html').replace(label.trim(), highlightedText));
            } else {
                $(this).addClass("d-none");
            }
        });

        $(this).removeClass("d-none");
        if (!atLeastOneMatch) {
            $(this).addClass("d-none");
        }
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function () {

    window.customBuilderScripts = {};

    /**
     * On instantiating the component model, before it is mounted in the canvas.
     */
    window.editor.on('component:create', function (component) {
        // extract the script tag of the given component (if it has one)
        if (component.components().length) {
            var lastChild = component.components().models[component.components().length - 1];
            if (lastChild.attributes.type === 'script') {
                var blockId = component.attributes.attributes['block-id'];
                window.customBuilderScripts[blockId] = lastChild.toHTML();
                lastChild.remove();
            }
        }
    });

    /**
     * After mounting the component in the canvas.
     */
    window.editor.on('component:add', function (component) {
        // run the script that was set when creating this component (for example while an existing component)
        if (component.attributes['run-builder-script'] !== undefined) {
            var originalCustomBuilderScripts = customBuilderScripts;

            window.customBuilderScripts[component.attributes['block-id']] = customBuilderScripts[component.attributes['run-builder-script']];
            runScriptsOfComponentAndChildren(component);

            window.customBuilderScripts = originalCustomBuilderScripts;
            delete component.attributes['run-builder-script'];
        }
    });

    /**
     * Run the custom builder scripts of the given component and of all child components.
     *
     * @param component
     */
    window.runScriptsOfComponentAndChildren = function (component) {
        runComponentScript(component);
        component.components().each(function (child) {
            runScriptsOfComponentAndChildren(child);
        });
    };

    /**
     * Run the custom builder scripts of the given component.
     *
     * @param component
     */
    function runComponentScript(component) {
        var blockId = component.attributes['block-id'];
        if (blockId && window.customBuilderScripts[blockId] !== undefined) {
            var styleIdentifier = component.attributes["style-identifier"];
            var $scriptTag = $("<container>").append(window.customBuilderScripts[blockId]);
            // prepend block and blockSelector variables allowing the script to refer to this exact block instance
            $scriptTag.find('script').prepend('let inPageBuilder = true;');
            $scriptTag.find('script').prepend('let blockSelector = ".' + styleIdentifier + '";');
            $scriptTag.find('script').prepend('let block = document.getElementsByClassName("' + styleIdentifier + '")[0];');
            // wrap the script contents in a self-invoking function (to add a scope avoiding variable name collisions)
            $scriptTag.find('script').prepend('(function(){');
            $scriptTag.find('script').append('})();');

            // execute the script in the page that is being edited
            var scriptTag = document.createElement("script");
            scriptTag.type = "text/javascript";
            scriptTag.innerHTML = $scriptTag.find('script').html();
            window.editor.Canvas.getDocument().body.appendChild(scriptTag);
        }
    }
})();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function () {

    /**
     * After loading GrapesJS, add all theme blocks and activate the editable blocks in the main language.
     */
    function afterGrapesJSLoaded() {
        addThemeBlocks();

        // add page injection script with page-loaded event to the end of the body tag of initialComponents,
        // which contains the html structure of the used layout file. And add script that starts all external scripts
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.src = window.injectionScriptUrl;
        var fullScript = scriptTag.outerHTML + '<script>' + startFirstScript.toString() + startFirstScript.name + '()</script>';
        window.initialComponents = window.initialComponents.replace('</body>', fullScript + '</body>');

        $.each(window.languages, function (languageCode, languageTranslation) {
            if (window.pageBlocks[languageCode] === null) {
                window.pageBlocks[languageCode] = {};
            }
        });

        activateLanguage(window.currentLanguage);
    }

    /**
     * GrapesJS wraps each external script with a start[number]Start() method,
     * which needs to be called on switching language.
     */
    function startFirstScript() {
        var scriptTags = document.querySelectorAll("script");
        for (var i = 0; i < scriptTags.length; i++) {
            var node = scriptTags[i];
            if (node.innerHTML.startsWith('var script')) {
                var beforeEquals = node.innerHTML.split('=')[0];
                var scriptNumber = parseInt(beforeEquals.replace('var script', ''));
                if (Number.isInteger(scriptNumber)) {
                    var startScriptMethodName = 'script' + scriptNumber + 'Start';
                    if (typeof window[startScriptMethodName] === 'function') {
                        if (scriptNumber !== 0) {
                            window[startScriptMethodName]();
                        }
                        return false;
                    }
                }
            }
        }
    }

    /**
     * Add all theme blocks to GrapesJS blocks manager.
     */
    function addThemeBlocks() {
        for (var blockSlug in window.themeBlocks) {
            var block = window.themeBlocks[blockSlug];

            // remove whitespace from phpb-block-container elements, otherwise these components will become type=text,
            // resulting in components dropped inside the container jumping to the dropped position - 1
            var $blockHtml = $("<container>").append(block.content);
            $blockHtml.find("[phpb-blocks-container]").each(function () {
                if ($(this).html() !== '' && $(this).html().trim() === '') {
                    $(this).html('');
                }
            });
            window.themeBlocks[blockSlug].content = $blockHtml.html();
            block.content = $blockHtml.html();

            editor.BlockManager.add(blockSlug, block);
        }
    }

    /**
     * Switch pagebuilder to another language variant on changing the language selector.
     */
    $("#language-selector select").on("change", function () {
        var selectedLanguage = $(this).find("option:selected").val();

        window.switchLanguage(selectedLanguage, function () {
            activateLanguage(selectedLanguage);
        });
    });

    /**
     * Activate the given language variant in the pagebuilder.
     *
     * @param newLanguage
     */
    window.activateLanguage = function (newLanguage) {
        window.currentLanguage = newLanguage;

        // reset GrapesJS editor before loading the new language variant
        window.editor.select();
        window.editor.DomComponents.clear();
        window.editor.DomComponents.componentsById = [];
        window.editor.UndoManager.clear();

        // remove any script tags from previous languages
        window.editor.Canvas.getDocument().querySelectorAll("script").forEach(function (node) {
            node.remove();
        });

        // load initial non-editable layout components
        window.editor.setComponents(window.initialComponents);
        denyAccessToLayoutElements(editor.getWrapper());
        window.editor.getWrapper().find("[phpb-content-container]").forEach(function (container, index) {
            container.set('custom-name', window.translations['page-content']);

            // reload components of this content container (adding all root phpb-block elements)
            container.components(window.contentContainerComponents[index]);

            // replace phpb-block elements with the server-side rendered version of each block
            replacePlaceholdersForRenderedBlocks(container);

            // apply the stored block settings to the server-side rendered html
            applyBlockAttributesToComponents(container);
        });
    };

    $(window).on('pagebuilder-page-loaded', function (event) {
        window.editor.getWrapper().find("[phpb-content-container]").forEach(function (container) {
            restrictEditAccess(container);
            window.runScriptsOfComponentAndChildren(container);
        });
        window.setWaiting(false);
    });

    /**
     * Replace phpb-block elements with the server-side rendered version of each block.
     *
     * @param component
     */
    function replacePlaceholdersForRenderedBlocks(component) {
        var newComponent = component;

        // if we encounter a pagebuilder block, replace it with the server-side rendered html
        if (component.get('tagName') === 'phpb-block') {
            var id = component.attributes.attributes.id;
            if (window.pageBlocks[window.currentLanguage][id] !== undefined && window.pageBlocks[window.currentLanguage][id]['html'] !== undefined) {
                newComponent = component.replaceWith(window.pageBlocks[window.currentLanguage][id]['html']);
                window.pageBlocks[window.currentLanguage][id]['html'] = '';
            }
        }

        // replace placeholders inside child components
        newComponent.get('components').each(function (childComponent) {
            return replacePlaceholdersForRenderedBlocks(childComponent);
        });
    }

    /**
     * Function for denying edit access to this component and all children that belong to the layout.
     *
     * @param component
     */
    function denyAccessToLayoutElements(component) {
        if ('phpb-content-container' in component.attributes.attributes) return;

        disableAllEditFunctionality(component);

        // apply restrictions to child components
        component.get('components').each(function (component) {
            return denyAccessToLayoutElements(component);
        });
    }

    /**
     * Component select handler.
     */
    window.editor.on('component:selected', function (component) {
        // if the component has settings, activate settings panel in pagebuilder sidebar
        if (componentHasBlockSettings(component)) {
            $(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(2)").click();
        } else if (component.get('type') === '' && componentHasBackground(component)) {
            // on selecting a default component without settings, with editable background, show background styling
            $(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(3)").click();
            if ($("#gjs-sm-position").hasClass("gjs-sm-open")) {
                $("#gjs-sm-position").find(".gjs-sm-title").click();
            }
            if (!$("#gjs-sm-background").hasClass("gjs-sm-open")) {
                $("#gjs-sm-background").find(".gjs-sm-title").click();
            }
        }

        // if component has no settings, add no settings text to settings panel in sidebar
        if (!componentHasBlockSettings(component)) {
            setTimeout(function () {
                $(".gjs-trt-traits").html('<p class="no-settings">' + window.translations['trait-manager']['no-settings'] + '</p>');
            }, 0);
        }

        // only show the toolbar buttons that are applicable
        setTimeout(function () {
            if (!component.attributes.removable) {
                $(".gjs-toolbar .fa-trash-o.gjs-toolbar-item").hide();
            }
            if (!component.attributes.copyable) {
                $(".gjs-toolbar .fa-clone.gjs-toolbar-item").hide();
            }
            if (!component.attributes.draggable) {
                $(".gjs-toolbar .fa-arrows.gjs-toolbar-item").hide();
            }
        }, 0);
    });

    /**
     * Component clone handler.
     */
    window.editor.on('component:clone', function (component) {
        // if the clone is performed by the user, do not copy the block id and style identifier
        if (!isCloningFromScript) {
            var originalComponent = window.editor.getWrapper().find('.' + component.attributes['style-identifier'])[0];

            if (component.attributes['style-identifier'] !== undefined && component.attributes['style-identifier'] !== '') {
                component.removeClass(component.attributes['style-identifier']);
                delete component.attributes['style-identifier'];
                addUniqueClass(component);
            }
            component.attributes['block-id'] = component.attributes['block-slug'];

            // pass a reference of the scripts of the original component to run on the cloned component
            if (originalComponent && window.customBuilderScripts[originalComponent.attributes['block-id']] !== undefined) {
                component.attributes['run-builder-script'] = originalComponent.attributes['block-id'];
            }
        }
    });

    /**
     * Return whether the given component contains a CSS background, that should be editable.
     *
     * @param component
     * @returns {boolean}
     */
    function componentHasBackground(component) {
        var hasBackground = false;

        var componentElement = component.getEl();
        if (componentElement && componentElement.style) {
            var componentStyle = window.getComputedStyle(componentElement);

            ['background', 'background-image', 'background-color'].forEach(function (property) {
                var value = componentStyle.getPropertyValue(property);
                if (value !== undefined && value !== '' && !value.includes('none') && !value.includes('rgba(0, 0, 0, 0)')) {
                    hasBackground = true;
                }
            });
        }

        return hasBackground;
    }

    /**
     * Return whether the given component has settings defined in its block config file.
     *
     * @param component
     * @returns {boolean}
     */
    function componentHasBlockSettings(component) {
        return component.attributes.traits.length > 0;
    }

    /**
     * On dropping a component on the canvas, apply attributes of the container phpb-block element with configuration passed
     * from the server and restrict edit access to editable components.
     */
    window.editor.on('block:drag:stop', function (droppedComponent) {
        // ensure component drop was successful
        if (!droppedComponent) return;

        var draggedBlockId = generateId();
        droppedComponent.attributes.attributes['dropped-component-id'] = draggedBlockId;

        var parent = droppedComponent.parent();
        applyBlockAttributesToComponents(droppedComponent);

        // at this point droppedComponent is replaced in the DOM by the actual component (without the phpb-block element),
        // so we need to find the dropped component again in the context of its parent
        parent.components().each(function (child) {
            if (child.attributes['dropped-component-id'] === draggedBlockId) {
                delete child.attributes['dropped-component-id'];
                droppedComponent = child;
            }
        });
        restrictEditAccess(droppedComponent);

        window.runScriptsOfComponentAndChildren(droppedComponent);
    });

    /**
     * Apply the block attributes which are stored in <phpb-block> elements to the top-level html element inside the block.
     * If the block starts with multiple top-level html elements, add a div element wrapping the block's top-level elements.
     *
     * @param component
     */
    function applyBlockAttributesToComponents(component) {
        if (component.attributes.tagName === 'phpb-block') {
            var container = component.parent();
            var clone = cloneComponent(component);

            // since component is a <phpb-block> that should be removed and replaced by its children,
            // the component's parent's child that has the id of the <phpb-block> component needs to be replaced
            var blockRootComponent = void 0;
            if (component.attributes.attributes['is-html'] === 'false') {
                container.components().each(function (componentSibling) {
                    if (componentSibling.cid === component.cid) {
                        // replace the <phpb-block> by the actual component
                        // the component is wrapped with a div to allow block styling (via a unique .style-identifier selector)
                        blockRootComponent = component.replaceWith({ tagName: 'div' });
                        blockRootComponent.attributes['is-style-wrapper'] = true;
                        clone.components().each(function (componentChild) {
                            blockRootComponent.append(cloneComponent(componentChild));
                        });
                    }
                });
            } else {
                container.components().each(function (componentSibling) {
                    if (componentSibling.cid === component.cid) {
                        // if the <phpb-block> has one direct child, replace it by its only child
                        // else, replace it by a wrapper div to allow block styling (via a unique .style-identifier selector)
                        if (clone.components().length === 1) {
                            var firstChild = cloneComponent(clone.components().models[0]);
                            blockRootComponent = component.replaceWith(firstChild);
                        } else {
                            blockRootComponent = component.replaceWith({ tagName: 'div' });
                            blockRootComponent.attributes['is-style-wrapper'] = true;
                            clone.components().each(function (componentChild) {
                                blockRootComponent.append(cloneComponent(componentChild));
                            });
                        }
                    }
                });
            }
            component.remove();

            copyAttributes(clone, blockRootComponent, true, false);
            // add all settings of this component to the settings panel in the sidebar
            addSettingsToSidebar(blockRootComponent);
            // recursive call to find and replace <phpb-block> elements of nested blocks (loaded via shortcodes)
            applyBlockAttributesToComponents(blockRootComponent);
        } else {
            component.components().each(function (childComponent) {
                // recursive call to find and replace <phpb-block> elements of nested blocks (loaded via shortcodes)
                applyBlockAttributesToComponents(childComponent);
            });
        }
    }

    /**
     * Get the current setting values for the given component.
     *
     * @param component
     */
    function getCurrentSettingValues(component) {
        // Block settings are stored in window.pageBlocks in a structure starting with each root block (the first ancestor that does not have a dynamic parent itself).
        // So, we need to find the root of the given component and store all block ids along the way, in order to traverse the pageBlocks structure to the settings of the given component.
        // These block ids are only unique in the context of their parent (we can have multiple instances of the same nested block structure), so we call them relative IDs.
        var relativeIds = [];

        // get the root component of the given component (its first ancestor that does not have a dynamic parent itself or the block that is inside a blocks container)
        var rootComponent = component;
        while (rootComponent.parent() && rootComponent.parent().attributes.attributes['phpb-blocks-container'] === undefined && rootComponent.parent().attributes['is-html'] !== 'true' && rootComponent.parent().attributes.attributes['phpb-content-container'] === undefined) {
            if (rootComponent.attributes['block-id'] !== undefined) {
                relativeIds.push(rootComponent.attributes['block-id']);
            }
            rootComponent = rootComponent.parent();
        }
        var rootId = rootComponent.attributes['block-id'];

        // get the component settings by traversing the pageBlocks structure
        var settings = window.pageBlocks[window.currentLanguage][rootId];
        relativeIds.reverse().forEach(function (relativeId) {
            if (settings === undefined || settings.blocks === undefined || settings.blocks[relativeId] === undefined) {
                settings = {};
            } else {
                settings = settings.blocks[relativeId];
            }
        });

        // return the values stored in the current component's settings structure
        var settingsValues = {};
        if (settings !== undefined && settings.settings !== undefined && settings.settings.attributes !== undefined) {
            settingsValues = settings.settings.attributes;
        }
        return settingsValues;
    }

    /**
     * Add all settings from the block's config file to the given component,
     * to allow them to be changed in the settings side panel.
     *
     * @param component
     */
    function addSettingsToSidebar(component) {
        if (window.blockSettings[component.attributes['block-slug']] === undefined) {
            return;
        }
        component.attributes.settings = {};

        var settingValues = getCurrentSettingValues(component);

        // set style identifier class to the block wrapper, if an identifier has been stored during earlier getDataInStorageFormat calls
        if (settingValues['style-identifier'] !== undefined) {
            component.addClass(settingValues['style-identifier']);
        }

        // for each setting add a trait to the settings sidebar panel with the earlier stored or default value
        component.attributes['is-updating'] = true;
        var settings = window.blockSettings[component.attributes['block-slug']];
        settings.forEach(function (setting) {
            var trait = component.addTrait(setting);
            if (settingValues[setting['name']] !== undefined) {
                trait.setTargetValue(settingValues[setting['name']]);
            } else if (setting['default-value'] !== undefined) {
                trait.setTargetValue(setting['default-value']);
            }
        });
        component.attributes['is-updating'] = false;
    }

    /**
     * On updating an attribute (block setting from the settings side panel), refresh dynamic block via Ajax.
     */
    window.editor.on('component:update', function (component) {
        if (window.isLoaded !== true || component.attributes['block-slug'] === undefined || component.attributes['is-updating'] || component.changed['attributes'] === undefined || $(".gjs-frame").contents().find("#" + component.ccid).length === 0) {
            return;
        }

        // dynamic pagebuilder blocks can depend on data passed by dynamic parent blocks,
        // so we need to update the closest parent which does not have a dynamic parent itself or the block that is inside a blocks container.
        // also keep track of all intermediate block ids, for re-selecting the currently selected component.
        var relativeIds = [];
        var componentToUpdate = component;
        while (componentToUpdate.parent() && componentToUpdate.parent().attributes.attributes['phpb-blocks-container'] === undefined && componentToUpdate.parent().attributes['is-html'] !== 'true' && componentToUpdate.parent().attributes.attributes['phpb-content-container'] === undefined) {
            if (componentToUpdate.attributes['block-id'] !== undefined) {
                relativeIds.push(componentToUpdate.attributes['block-id']);
            }
            componentToUpdate = componentToUpdate.parent();
        }
        component = componentToUpdate;

        component.attributes['is-updating'] = true;
        $(".gjs-frame").contents().find("#" + component.ccid).addClass('gjs-freezed');

        var container = window.editor.getWrapper().find("#" + component.ccid)[0].parent();
        var data = window.getComponentDataInStorageFormat(component);

        // refresh component contents with updated version requested via ajax call
        $.ajax({
            type: "POST",
            url: window.renderBlockUrl,
            data: {
                data: JSON.stringify(data),
                language: window.currentLanguage
            },
            success: function success(blockHtml) {
                var blockId = $(blockHtml).attr('block-id');

                // set the block settings for the updated component to the new values
                window.pageBlocks[window.currentLanguage][blockId] = data.blocks[blockId] === undefined ? {} : data.blocks[blockId];

                // replace old component for the rendered html returned by the server
                component.replaceWith(blockHtml);
                replacePlaceholdersForRenderedBlocks(container);
                applyBlockAttributesToComponents(container);
                restrictEditAccess(container, false, false);

                // run builder scripts of the replaced component and all its children
                var replacedComponent = findChildViaBlockIdsPath(container, [blockId]);
                runScriptsOfComponentAndChildren(replacedComponent);

                // select the component that was selected before the ajax call
                relativeIds.push(blockId);
                var componentToSelect = findChildViaBlockIdsPath(container, relativeIds.reverse());
                window.editor.select(componentToSelect);
            },
            error: function error() {
                $(".gjs-frame").contents().find("#" + component.ccid).removeClass('gjs-freezed');
                component.attributes['is-updating'] = false;
                window.toastr.error(window.translations['toastr-component-update-failed']);
            }
        });
    });

    /**
     * Traverse the children of the given component via the given path of block IDs
     * and return the component with the last ID from the list.
     *
     * @param component
     * @param blockIds
     * @returns {null|*}
     */
    function findChildViaBlockIdsPath(component, blockIds) {
        if (blockIds.length === 0) {
            return component;
        }

        var result = null;

        component.components().each(function (child) {
            if (child.attributes['block-id'] === blockIds[0]) {
                result = findChildViaBlockIdsPath(child, blockIds.slice(1));
                return false;
            }
        });

        component.components().each(function (child) {
            var childResult = findChildViaBlockIdsPath(child, blockIds);
            if (childResult !== null) {
                result = childResult;
                return false;
            }
        });

        return result;
    }

    /**
     * Clone the given component (while preserving all attributes, like IDs).
     *
     * @param component
     */
    var isCloningFromScript = false;
    window.cloneComponent = function (component) {
        isCloningFromScript = true;

        var clone = component.clone();
        deepCopyAttributes(component, clone);

        isCloningFromScript = false;
        return clone;
    };

    /**
     * Apply the attributes of the given component and its children to each corresponding component of the given clone.
     *
     * @param component
     * @param clone
     */
    function deepCopyAttributes(component, clone) {
        // apply all attributes from component to clone
        copyAttributes(component, clone, false, true);
        // apply attributes from component's children to clone's children
        for (var index = 0; index < component.components().length; index++) {
            var componentChild = component.components().models[index];
            var cloneChild = clone.components().models[index];
            deepCopyAttributes(componentChild, cloneChild);
        }
    }

    /**
     * Apply the attributes of the given component to the given target component.
     *
     * @param component
     * @param targetComponent
     * @param copyGrapesAttributes              whether all GrapesJS component attributes (like permissions) should be copied
     * @param copyHtmlElementAttributes         whether the html element attributes should be copied
     */
    function copyAttributes(component, targetComponent, copyGrapesAttributes, copyHtmlElementAttributes) {
        var componentAttributes = component.attributes.attributes;
        for (var attribute in componentAttributes) {
            if (copyHtmlElementAttributes) {
                targetComponent.attributes.attributes[attribute] = componentAttributes[attribute];
            }
            if (copyGrapesAttributes) {
                targetComponent.attributes[attribute] = componentAttributes[attribute];
            }
        }
    }

    /**
     * Function for only allowing edit access on whitelisted components.
     *
     * @param component
     * @param directlyInsideDynamicBlock
     * @param allowEditableComponents
     */
    function restrictEditAccess(component) {
        var directlyInsideDynamicBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var allowEditableComponents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        disableAllEditFunctionality(component);

        if (component.attributes.attributes['phpb-content-container'] !== undefined) {
            // the content container of the current page can receive other components
            component.set({
                droppable: true,
                hoverable: true
            });
        } else if (component.attributes['block-slug'] !== undefined) {
            // change visibility of child elements that depend on whether this block is editable
            component.find('[phpb-hide-if-not-editable]').forEach(function (element) {
                if (allowEditableComponents) {
                    element.addClass('editable');
                } else {
                    element.removeClass('editable');
                }
            });

            // we just entered a new block, set default permissions
            var permissions = {
                selectable: true,
                hoverable: true
            };
            if (!directlyInsideDynamicBlock) {
                // the block we entered is not located directly inside a dynamic block, hence this block can be removed, dragged, configured and styled
                permissions = {
                    removable: true,
                    draggable: true,
                    copyable: true,
                    selectable: true,
                    hoverable: true,
                    stylable: true
                };
                // for styling this particular block, the block needs to have a unique class
                addUniqueClass(component);
            }
            if (component.attributes['is-html'] === 'true') {
                // the block we just entered is an html block,
                // the next layer of child blocks are not directly inside a dynamic block
                directlyInsideDynamicBlock = false;
                // in an html block, editing elements (based on their html tag) is allowed
                allowEditableComponents = true;
            } else {
                // the block we just entered is dynamic,
                // the next layer of child blocks are directly inside a dynamic block
                directlyInsideDynamicBlock = true;
                // in a dynamic block, editing elements (based on their html tag) is not allowed
                allowEditableComponents = false;
                // dynamic blocks do not have text-editable components, so remove text cursors
                component.getEl().setAttribute('data-cursor', 'default');
            }
            component.set(permissions);
        }

        // for raw content components, set editable to true and ignore processing editability for any child component
        if (component.attributes.attributes['data-raw-content'] !== undefined) {
            component.set({ editable: true });
            return;
        }

        // set editable access based on tags, styling or html class attribute
        if (allowEditableComponents) {
            allowEditBasedOnComponentAttributes(component);

            // if the component is made text-editable, re-add the raw html contents
            // to ensure the text editor does not deal with elements with attributes added by GrapesJS
            if (component.attributes['made-text-editable'] === 'true') {
                component.attributes.attributes['data-raw-content'] = 'true';

                // refresh the current component in order to switch its component type to raw-content.
                // this disables GrapesJS parsing of any child elements, avoiding that any GrapesJS specific html attributes are added
                var newComponent = component.replaceWith(component.toHTML());
                // copy important attributes from the original component to the refreshed component
                ['block-id', 'block-slug', 'is-html', 'style-identifier'].forEach(function (attribute) {
                    newComponent.attributes[attribute] = component.attributes[attribute];
                });
                // apply block/component edit restrictions to the new raw-content type version of the component
                restrictEditAccess(newComponent);
                return;
            }
        }

        // apply edit restrictions to child components
        component.get('components').each(function (component) {
            return restrictEditAccess(component, directlyInsideDynamicBlock, allowEditableComponents);
        });
    }

    /**
     * Set the given component's editability based on which tag the component represents,
     * which attributes are set or which styling is applied.
     *
     * @param component
     * @returns {boolean}
     */
    function allowEditBasedOnComponentAttributes(component) {
        var htmlTag = component.get('tagName');

        var textEditableTags = [
        //'div','span', // needed for editable bootstrap alert, but cannot be used since divs (block containers) then cannot be removed
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'p', 'small', 'b', 'strong', 'i', 'em', 'label', 'button', 'ol', 'ul', 'li', 'table'];
        var otherEditableTags = ['img'];

        var settings = {};
        if ('phpb-blocks-container' in component.attributes.attributes) {
            settings.hoverable = true;
            settings.selectable = true;
            settings.droppable = true;
        }

        if (textEditableTags.includes(htmlTag) || 'phpb-editable' in component.attributes.attributes) {
            settings.editable = true;
            component.attributes['made-text-editable'] = 'true';
        } else if (otherEditableTags.includes(htmlTag)) {
            settings.editable = true;
        }

        if (componentHasBackground(component)) {
            settings.hoverable = true;
            settings.selectable = true;
            settings.stylable = true;
        }

        if (htmlTag === 'a') {
            settings.hoverable = true;
            settings.selectable = true;
            settings.stylable = true;
            settings.removable = true;
        }

        if (!$.isEmptyObject(settings)) {
            component.set(settings);
            if (settings.stylable !== undefined && settings.stylable) {
                addUniqueClass(component);
            }
        }
    }

    /**
     * Add a unique class to this component to ensure style only applies to this component instance.
     *
     * @param component
     */
    function addUniqueClass(component) {
        // get component identifier class if one is already added to the component's html when saving the pagebuilder previously
        var componentIdentifier = false;
        component.getClasses().forEach(function (componentClass) {
            if (componentClass.startsWith('ID') && componentClass.length === 16) {
                componentIdentifier = componentClass;
            }
        });

        if (component.attributes['style-identifier'] === undefined) {
            component.attributes['style-identifier'] = componentIdentifier ? componentIdentifier : generateId();
        }
        component.addClass(component.attributes['style-identifier']);
    }

    /**
     * Disable all edit functionality on the given component.
     *
     * @param component
     */
    function disableAllEditFunctionality(component) {
        component.set({
            removable: false,
            draggable: false,
            droppable: false,
            badgable: false,
            stylable: false,
            highlightable: false,
            copyable: false,
            resizable: false,
            editable: false,
            layerable: false,
            selectable: false,
            hoverable: false
        });
    }

    /**
     * Generate a unique id string.
     *
     * Based on: https://gist.github.com/gordonbrander/2230317
     */
    var counter = 0;
    function generateId() {
        return 'ID' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5) + counter++).toUpperCase();
    }

    /**
     * Wait for GrapesJS to be fully loaded before trying to load the components in the page builder.
     */
    function waitForGrapesToLoad() {
        if (window.grapesJSLoaded) {
            afterGrapesJSLoaded();
        } else {
            setTimeout(waitForGrapesToLoad, 100);
        }
    }
    waitForGrapesToLoad();
})();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

    window.pageData = {};

    /**
     * Save page on clicking save button.
     */
    $("#save-page").click(function () {
        saveAllTranslationsToServer();
    });

    /**
     * Save page on Ctrl + S.
     */
    $(document).bind("keydown", function (e) {
        if (e.ctrlKey && e.which === 83) {
            // text-editor updates are not applied until focus is lost, so force GrapesJS update
            window.editor.store();

            saveAllTranslationsToServer();
            e.preventDefault();
            return false;
        }
    });

    /**
     * Switch the pagebuilder to the given language.
     * This stores the all data of the current language locally for later use and renders the given language variant on the server.
     *
     * @param newLanguage
     * @param callback
     */
    window.switchLanguage = function (newLanguage, callback) {
        window.setWaiting(true);

        saveCurrentTranslationLocally(function () {
            applyChangesFromCurrentLanguageToNewLanguage(newLanguage);

            var data = window.pageData;
            data.blocks = _defineProperty({}, newLanguage, window.pageBlocks[newLanguage]);

            // render the language variant server-side
            $.ajax({
                type: "POST",
                url: window.renderLanguageVariantUrl,
                data: {
                    data: JSON.stringify(data),
                    language: newLanguage
                },
                success: function success(response) {
                    response = JSON.parse(response);
                    window.pageBlocks[newLanguage] = response.dynamicBlocks ? response.dynamicBlocks : {};
                    callback();
                },
                error: function error() {
                    callback();
                    window.toastr.error(window.translations['toastr-switching-language-failed']);
                }
            });
        });
    };

    /**
     * Copy new blocks of the current language to the new language or remove old blocks from the new language.
     *
     * @param newLanguage
     */
    function applyChangesFromCurrentLanguageToNewLanguage(newLanguage) {
        var newLanguageBlocks = window.pageBlocks[newLanguage];
        var currentLanguageBlocks = window.pageBlocks[window.currentLanguage];

        if (newLanguageBlocks === undefined) {
            newLanguageBlocks = currentLanguageBlocks;
        } else {
            updateNestedBlocks(currentLanguageBlocks, newLanguageBlocks);

            // copy missing blocks from the current language to the target language
            for (var blockId in currentLanguageBlocks) {
                if (newLanguageBlocks[blockId] === undefined) {
                    newLanguageBlocks[blockId] = currentLanguageBlocks[blockId];
                }
            }
        }

        // copy the content of blocks containers of the current language to the blocks containers of the new language

        var _loop = function _loop(_blockId) {
            var $currentLanguageBlockHtmlDom = $("<container>" + currentLanguageBlocks[_blockId]['html'] + "</container>");
            var $newLanguageBlockHtmlDom = $("<container>" + newLanguageBlocks[_blockId]['html'] + "</container>");
            $currentLanguageBlockHtmlDom.find("[phpb-blocks-container]").each(function (index) {
                var currentLanguageBlockContainerHtml = $(this).html();
                $newLanguageBlockHtmlDom.find("[phpb-blocks-container]").eq(index).html(currentLanguageBlockContainerHtml);
            });
            newLanguageBlocks[_blockId]['html'] = $newLanguageBlockHtmlDom.html();
        };

        for (var _blockId in currentLanguageBlocks) {
            _loop(_blockId);
        }

        window.pageBlocks[newLanguage] = newLanguageBlocks;
    }

    /**
     * Replace phpb-blocks-container html snippets if a block of the current language already exists in the target language.
     * This ensures all child blocks are present for all languages and they remain in the same order
     */
    function updateNestedBlocks(currentLanguageBlocks, newLanguageBlocks) {
        for (var blockId in currentLanguageBlocks) {
            // skip if the parent block does not yet exist in the target language
            if (newLanguageBlocks[blockId] === undefined) {
                continue;
            }

            for (var subBlockId in currentLanguageBlocks[blockId].blocks) {
                var updatedSubBlock = currentLanguageBlocks[blockId].blocks[subBlockId];
                var oldSubBlock = newLanguageBlocks[blockId].blocks[subBlockId];

                var updatedSubBlockMatches = updatedSubBlock.html.match(/phpb-blocks-container(.*)>(.*)</g);
                var oldSubBlockMatches = oldSubBlock.html.match(/phpb-blocks-container(.*)>(.*)</g);
                if (!updatedSubBlockMatches || !oldSubBlockMatches) {
                    continue;
                }

                for (var i = 0; i < updatedSubBlockMatches.length; i++) {
                    newLanguageBlocks[blockId].blocks[subBlockId].html = newLanguageBlocks[blockId].blocks[subBlockId].html.replace(oldSubBlockMatches[i], updatedSubBlockMatches[i]);
                }
            }
        }
    }

    /**
     * Store the all data of the current language locally for later use.
     *
     * @param callback
     */
    function saveCurrentTranslationLocally(callback) {
        // use timeout to ensure the waiting spinner is fully displayed before the page briefly freezes due to high JS workload
        setTimeout(function () {
            window.pageData = {
                html: [],
                components: [],
                css: null,
                style: null
            };
            window.pageBlocks[window.currentLanguage] = [];

            // get the data of each page content container (so skip all layout blocks) and prepare data for being stored
            window.editor.getWrapper().find("[phpb-content-container]").forEach(function (container, index) {
                var data = getContainerContentInStorageFormat(container);

                window.pageData['css'] = data.css;
                window.pageData['style'] = data.style;
                window.pageData['html'][index] = data.html;
                window.pageData['components'][index] = data.components;

                window.pageBlocks[window.currentLanguage] = _extends({}, window.pageBlocks[window.currentLanguage], data.blocks);
                window.contentContainerComponents[index] = data.components;
            });

            if (callback) {
                callback();
            }
        }, 200);
    }

    /**
     * Save the data of all translation variants on the server.
     */
    function saveAllTranslationsToServer() {
        toggleSaving();

        saveCurrentTranslationLocally(function () {

            // update all language variants with the latest data of the current language we just saved locally
            $.each(window.languages, function (languageCode, languageTranslation) {
                if (languageCode !== window.currentLanguage) {
                    applyChangesFromCurrentLanguageToNewLanguage(languageCode);
                }
            });

            var data = window.pageData;
            data.style = removeOldStyleSelectors(data.css, data.style);
            data.blocks = window.pageBlocks;

            $.ajax({
                type: "POST",
                url: $("#save-page").data('url'),
                data: {
                    data: JSON.stringify(data)
                },
                success: function success() {
                    toggleSaving();
                    window.toastr.success(window.translations['toastr-changes-saved']);
                },
                error: function error() {
                    toggleSaving();
                    window.toastr.error(window.translations['toastr-saving-failed']);
                }
            });
        });
    }

    /**
     * Remove the style selectors that are not present in the given CSS string.
     */
    function removeOldStyleSelectors(css, styleComponents) {
        var updatedStyleComponents = [];

        styleComponents.forEach(function (styleComponent) {
            if (styleComponent.attributes.selectors.models.length) {
                var selector = styleComponent.attributes.selectors.models[0].id;
                if (css.includes(selector)) {
                    updatedStyleComponents.push(styleComponent);
                }
            }
        });

        return updatedStyleComponents;
    }

    /**
     * Get the given component in storage format (in context of its container with all siblings removed).
     *
     * @param component
     */
    window.getComponentDataInStorageFormat = function (component) {
        // clone component's parent, enabling us to temporarily remove all component's siblings without updating the pagebuilder
        var container = window.cloneComponent(component.parent());

        // remove all component's siblings since we only want to return the given component in storage format
        container.get('components').reset();
        container.append(component);

        return getContainerContentInStorageFormat(container);
    };

    /**
     * Get the given container in storage format.
     *
     * @param container
     */
    function getContainerContentInStorageFormat(container) {
        // remove all existing references while cloning GrapesJS components,
        // this prevents GrapesJS from changing our IDs due to ID collisions
        var componentReferences = window.editor.DomComponents.componentsById;
        window.editor.DomComponents.componentsById = [];

        // we need to clone the container, since we will be replacing components with placeholders and we don't want to update the page builder
        container = window.cloneComponent(container);
        // replace each pagebuilder block for a shortcode and phpb-block element and return an array of all page blocks data
        var blocksData = replaceDynamicBlocksWithPlaceholders(container).blocks;

        var html = window.html_beautify(getContainerHtml(container));
        var css = window.editor.getCss();
        var style = window.editor.getStyle();
        var components = JSON.parse(JSON.stringify(container.get('components')));

        // switch back to original GrapesJS component references
        window.editor.DomComponents.componentsById = componentReferences;

        return {
            html: html,
            css: css,
            components: components,
            blocks: blocksData,
            style: style
        };
    }

    /**
     * Return the html representation of the contents of the given container.
     *
     * @param container
     */
    function getContainerHtml(container) {
        var html = '';
        container.get('components').forEach(function (component) {
            return html += component.toHTML();
        });
        var htmlDom = $("<container>" + html + "</container>");
        // replace phpb-block elements with shortcode
        htmlDom.find('phpb-block').each(function () {
            $(this).replaceWith('[block slug="' + $(this).attr('slug') + '" id="' + $(this).attr('id') + '"]');
        });
        return htmlDom.html();
    }

    /**
     * Return the html representation of the given component.
     *
     * @param component
     */
    function getComponentHtml(component) {
        var htmlDom = $("<container>" + component.toHTML() + "</container>");
        // replace phpb-block elements with shortcode
        htmlDom.find('phpb-block').each(function () {
            $(this).replaceWith('[block slug="' + $(this).attr('slug') + '" id="' + $(this).attr('id') + '"]');
        });
        return htmlDom.html();
    }

    /**
     * Replace all blocks with is-html === false with a <phpb-block> component that contains all block attributes.
     *
     * @param component
     * @param parentIsDynamic
     * @param parentIsHtmlInsideDynamic
     */
    function replaceDynamicBlocksWithPlaceholders(component) {
        var parentIsDynamic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var parentIsHtmlInsideDynamic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // data structure to be filled with the data of nested blocks via recursive calls
        var data = {
            current_block: { settings: {}, blocks: {}, html: "", is_html: false },
            blocks: {}
        };

        // update variables for passing context to the recursive calls on child components
        var newParentIsDynamic = parentIsDynamic;
        var newParentIsHtmlInsideDynamic = parentIsHtmlInsideDynamic;
        if (component.attributes['block-id'] !== undefined) {
            if (component.attributes['is-html'] === 'false') {
                newParentIsDynamic = true;
                newParentIsHtmlInsideDynamic = false;
            } else if (parentIsDynamic) {
                newParentIsDynamic = false;
                newParentIsHtmlInsideDynamic = true;
            }
        }

        // depth-first recursive call for replacing nested blocks (the deepest blocks are handled first)
        component.get('components').forEach(function (childComponent) {
            var childData = replaceDynamicBlocksWithPlaceholders(childComponent, newParentIsDynamic, newParentIsHtmlInsideDynamic);

            // update data object with child data
            for (var key in childData.current_block.blocks) {
                data.current_block.blocks[key] = childData.current_block.blocks[key];
            }
            for (var _key in childData.blocks) {
                data.blocks[_key] = childData.blocks[_key];
            }
        });

        // if the method is called with a cloned container (which does not have a parent), this top-level component does not need any changes
        if (!component.parent()) {
            return data;
        }

        // if the component is not a block, no replacements need to be done
        if (component.attributes['block-id'] === undefined) {
            return data;
        }

        // do the actual replacement of this component with a placeholder component
        if (component.attributes['is-html'] === 'true') {
            if (parentIsDynamic) {
                // the full html content of html blocks directly inside a dynamic block should be stored in parent context using its block-id,
                // this is important because a dynamic block defines block ids and this can collide with block ids hardcoded in other dynamic blocks
                data.current_block['blocks'][component.attributes['block-id']] = { settings: {}, blocks: {}, html: window.html_beautify(getComponentHtml(component)), is_html: true };
            } else {
                // html blocks outside direct context of dynamic blocks should be stored as a block itself

                // store the block's style-identifier
                // this will be used as class in a wrapper around the dynamic block to give the block its styling
                if (component.attributes['style-identifier'] !== undefined) {
                    data.current_block['settings']['attributes'] = { 'style-identifier': component.attributes['style-identifier'] };
                }

                // replace this html component by a shortcode with a unique id
                var instanceId = component.attributes['block-id'];
                if (!component.attributes['block-id'].startsWith('ID')) {
                    instanceId = generateId();
                }

                component.replaceWith({
                    tagName: 'phpb-block',
                    attributes: {
                        slug: component.attributes['block-slug'],
                        id: instanceId
                    }
                });

                // store the block data globally in the blocks array
                data.blocks[instanceId] = { settings: data.current_block['settings'], blocks: {}, html: window.html_beautify(getComponentHtml(component)), is_html: true };
                data.current_block = { settings: {}, blocks: {}, html: "", is_html: false };
            }
        } else {
            // store the attributes set to this block using traits in the settings side panel
            var attributes = {};
            component.get('traits').each(function (trait) {
                attributes[trait.get('name')] = trait.getTargetValue();
            });
            data.current_block['settings']['attributes'] = attributes;

            // store the block's style-identifier
            // this will be used as class in a wrapper around the dynamic block to give the block its styling
            if (component.attributes['style-identifier'] !== undefined) {
                data.current_block['settings']['attributes']['style-identifier'] = component.attributes['style-identifier'];
            }

            // replace this dynamic component by a shortcode with a unique id
            var _instanceId = component.attributes['block-id'];
            if (!component.attributes['block-id'].startsWith('ID')) {
                _instanceId = generateId();
            }
            component.replaceWith({
                tagName: 'phpb-block',
                attributes: {
                    slug: component.attributes['block-slug'],
                    id: _instanceId
                }
            });

            // store data.current_block data inside data.blocks with the unique id we just generated
            if (parentIsDynamic) {
                // inside a dynamic block, the block data is passed to the context of its parent block (so current_block is used)
                var currentBlockForParent = { settings: {}, blocks: {}, html: "", is_html: false };
                currentBlockForParent['blocks'][component.attributes['block-id']] = data.current_block;
                data.current_block = currentBlockForParent;
            } else {
                // outside dynamic blocks, the block data is globally stored in the blocks array
                data.blocks[_instanceId] = data.current_block;
                data.current_block = { settings: {}, blocks: {}, html: "", is_html: false };
            }
        }

        return data;
    }

    /**
     * Generate a unique id string.
     *
     * Based on: https://gist.github.com/gordonbrander/2230317
     */
    var counter = 0;
    function generateId() {
        return 'ID' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5) + counter++).toUpperCase();
    }

    /**
     * Set the page builder waiting status.
     */
    window.setWaiting = function (value) {
        var wrapper = window.editor.DomComponents.getWrapper();
        if (value) {
            wrapper.addClass("gjs-waiting");
        } else {
            wrapper.removeClass("gjs-waiting");
        }
    };

    /**
     * Toggle the save button waiting status.
     */
    function toggleSaving() {
        var button = $("#save-page");
        button.blur();

        if (button.hasClass('waiting')) {
            button.attr("disabled", false);
            button.removeClass('waiting');
            button.find('.spinner-border').addClass('d-none');
        } else {
            button.attr("disabled", true);
            button.addClass('waiting');
            button.find('.spinner-border').removeClass('d-none');
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

$(document).ready(function () {

    window.CKEDITOR.on('dialogDefinition', function (event) {
        var dialogName = event.data.name;
        var dialogDefinition = event.data.definition;
        if (dialogName === 'link') {
            var infoTab = dialogDefinition.getContents('info');

            dialogDefinition.onLoad = function () {
                var dialog = CKEDITOR.dialog.getCurrent();
                dialog.getContentElement('info', 'linkType').getElement().hide();
                dialog.getContentElement('info', 'protocol').getElement().hide();
                dialog.getContentElement('info', 'url').getElement().hide();
            };

            infoTab.add({
                type: 'select',
                id: 'linktype-selector',
                label: 'Linktype',
                'default': '',
                items: [[window.translations['page'], "page"], ["URL", "url"]],
                onChange: function onChange(obj) {
                    var dialog = CKEDITOR.dialog.getCurrent();
                    if (obj.data.value === 'page') {
                        dialog.getContentElement('info', 'page-selector').getElement().show();
                        dialog.getContentElement('info', 'url-field').getElement().hide();
                    } else {
                        dialog.getContentElement('info', 'page-selector').getElement().hide();
                        dialog.getContentElement('info', 'url-field').getElement().show();
                        dialog.getContentElement('info', 'url-field').setValue('');
                    }
                },
                setup: function setup(data) {
                    if (data.type === undefined) {
                        this.setValue('page');
                    } else if (data.type === 'url' && data.url.url.startsWith('[page id=')) {
                        this.setValue('page');
                    } else {
                        this.setValue(data.type);
                    }
                }
            });

            infoTab.add({
                type: 'select',
                id: 'page-selector',
                label: window.translations['page'],
                'default': '',
                items: window.pages,
                onChange: function onChange() {
                    var dialog = CKEDITOR.dialog.getCurrent();
                    var page = '[page id=' + this.getValue() + ']';
                    dialog.setValueOf('info', 'url', page);
                    dialog.setValueOf('info', 'protocol', '');
                },
                setup: function setup(dialog) {
                    this.allowOnChange = false;
                    var pageId = '';
                    if (dialog.url) {
                        pageId = dialog.url.url.substr(9, dialog.url.url.length - 10);
                    }
                    this.setValue(pageId);
                    this.allowOnChange = true;
                }
            });

            infoTab.add({
                type: 'text',
                id: 'url-field',
                label: 'URL',
                'default': '',
                onChange: function onChange() {
                    var dialog = CKEDITOR.dialog.getCurrent();
                    var url = this.getValue();
                    dialog.setValueOf('info', 'url', url);
                },
                setup: function setup(dialog) {
                    this.allowOnChange = false;
                    var url = '';
                    if (dialog.url) {
                        url = dialog.url.url;
                    }
                    this.setValue(url);
                    this.allowOnChange = true;
                }
            });
        }
    });
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

$(document).ready(function () {

    window.touchStart = function () {
        $("#gjs").addClass('sidebar-collapsed');
    };
});

/***/ })
/******/ ]);