/** TRACKING PROTECTION ***/
user_pref('browser.contentblocking.category', 'standard');

user_pref('network.cookie.sameSite.laxByDefault', true);
user_pref('network.cookie.sameSite.noneRequiresSecure', true);
user_pref('privacy.globalprivacycontrol.enabled', true);
user_pref('privacy.globalprivacycontrol.functionality.enabled', true);

/** SSL / TLS ***/
user_pref('security.ssl.treat_unsafe_negotiation_as_broken', true);
user_pref('browser.xul.error_pages.expert_bad_cert', true);
user_pref('security.tls.enable_0rtt_data', false);

// CRLite
user_pref('security.remote_settings.crlite_filters.enabled', true); // default: false
user_pref('security.pki.crlite_mode', 2); // default: 3

// set the minimum interval (in milliseconds) between session save operations,
// when crashing or restarting to install updates
user_pref('browser.sessionstore.interval', 60000); // default: 15000

/** SHUTDOWN & SANITIZING ***/
user_pref('privacy.history.custom', true);

/** SEARCH / URL BAR ***/
user_pref('browser.search.separatePrivateDefault.ui.enabled', true);
user_pref('browser.urlbar.update2.engineAliasRefresh', true);
user_pref('browser.search.suggest.enabled', false);
user_pref('browser.urlbar.suggest.quicksuggest.sponsored', false);
user_pref('browser.urlbar.suggest.quicksuggest.nonsponsored', false);
user_pref('browser.formfill.enable', false);
user_pref('security.insecure_connection_text.enabled', true);
user_pref('security.insecure_connection_text.pbmode.enabled', true);

/** PASSWORDS ***/
user_pref('signon.rememberSignons', false);
user_pref('signon.formlessCapture.enabled', false);
user_pref('signon.privateBrowsingCapture.enabled', false);
user_pref('network.auth.subresource-http-auth-allow', 1);
user_pref('editor.truncate_user_pastes', false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref('extensions.formautofill.addresses.enabled', false);
user_pref('extensions.formautofill.creditCards.enabled', false);

// HTTPS First (Upgrade to HTTPS)
// user_pref('dom.security.https_first', true); // default: false
// user_pref('dom.security.https_first_schemeless', true); // default: false

// HTTPS-Only
user_pref('dom.security.https_only_mode', true); // default: false

/** MIXED CONTENT + CROSS-SITE ***/
user_pref('pdfjs.enableScripting', false);

// Control the amount of cross-origin information to send
user_pref('network.http.referer.XOriginTrimmingPolicy', 1); // default: 0

// Enable Container Tabs and its UI setting
user_pref('privacy.userContext.ui.enabled', true);

/** MOZILLA ***/
user_pref('permissions.default.geo', 2);

/** TELEMETRY ***/
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.enabled', false);
user_pref('toolkit.telemetry.server', 'data:,');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false);
user_pref('toolkit.telemetry.coverage.opt-out', true);
user_pref('toolkit.coverage.opt-out', true);
user_pref('toolkit.coverage.endpoint.base', '');
user_pref('browser.ping-centre.telemetry', false);
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);

/** EXPERIMENTS ***/
user_pref('app.shield.optoutstudies.enabled', false);
user_pref('app.normandy.enabled', false);
user_pref('app.normandy.api_url', '');

/** CRASH REPORTS ***/
user_pref('breakpad.reportURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false);
user_pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false);

/** MOZILLA UI ***/
user_pref('browser.privatebrowsing.vpnpromourl', '');
user_pref('extensions.getAddons.showPane', false);
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false);
user_pref('browser.discovery.enabled', false);
user_pref('browser.shell.checkDefaultBrowser', false);
user_pref(
  'browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons',
  false
);
user_pref(
  'browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features',
  false
);
user_pref('browser.preferences.moreFromMozilla', false);
user_pref('browser.tabs.tabmanager.enabled', false);
user_pref('browser.aboutConfig.showWarning', false);
user_pref('browser.aboutwelcome.enabled', false);

/** FULLSCREEN NOTICE ***/
user_pref('full-screen-api.transition-duration.enter', '0 0');
user_pref('full-screen-api.transition-duration.leave', '0 0');
user_pref('full-screen-api.warning.delay', -1);
user_pref('full-screen-api.warning.timeout', 0);

/** NEW TAB PAGE ***/
user_pref('browser.newtabpage.activity-stream.feeds.topsites', false);
user_pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);

/** POCKET ***/
user_pref('extensions.pocket.enabled', false);

/** DOWNLOADS ***/
user_pref('browser.download.useDownloadDir', false);
user_pref('browser.download.always_ask_before_handling_new_types', true);
user_pref('browser.download.manager.addToRecentDocs', false);

// Cookie Banner handling
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
user_pref('cookiebanners.service.mode', 1);
user_pref('cookiebanners.service.mode.privateBrowsing', 2);

// The new Screenshots component
user_pref('screenshots.browser.component.enabled', true); // default: false

// devtools zoom level (inspector, console)
user_pref('devtools.toolbox.zoomValue', 1.2); // default: 1

// ****************************
// ****************************
// Firefox UI Fix
// ****************************
// ****************************

/// Lepton v8.6.1
// ** Theme Default Options ****************************************************
// userchrome.css usercontent.css activate
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Fill SVG Color
user_pref('svg.context-properties.content.enabled', true);

// Restore Compact Mode - 89 Above
user_pref('browser.compactmode.show', true);

// about:home Search Bar - 89 Above
user_pref(
  'browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar',
  false
);

// CSS's `:has()` selector #457 - 103 Above
user_pref('layout.css.has-selector.enabled', true);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref('userChrome.tab.connect_to_window', true); // Original, Photon
user_pref('userChrome.tab.color_like_toolbar', true); // Original, Photon

user_pref('userChrome.tab.lepton_like_padding', true); // Original
user_pref('userChrome.tab.photon_like_padding', false); // Photon

user_pref('userChrome.tab.dynamic_separator', true); // Original, Proton
user_pref('userChrome.tab.static_separator', false); // Photon
user_pref('userChrome.tab.static_separator.selected_accent', false); // Just option
user_pref('userChrome.tab.bar_separator', false); // Just option

user_pref('userChrome.tab.newtab_button_like_tab', true); // Original
user_pref('userChrome.tab.newtab_button_smaller', false); // Photon
user_pref('userChrome.tab.newtab_button_proton', false); // Proton

user_pref('userChrome.icon.panel_full', true); // Original, Proton
user_pref('userChrome.icon.panel_photon', false); // Photon

// Original Only
user_pref('userChrome.tab.box_shadow', true);
user_pref('userChrome.tab.bottom_rounded_corner', true);

// Photon Only
user_pref('userChrome.tab.photon_like_contextline', false);
user_pref('userChrome.rounding.square_tab', false);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref('userChrome.compatibility.theme', true);
user_pref('userChrome.compatibility.os', true);

user_pref('userChrome.theme.built_in_contrast', true);
user_pref('userChrome.theme.system_default', true);
user_pref('userChrome.theme.proton_color', true);
user_pref('userChrome.theme.proton_chrome', true); // Need proton_color
user_pref('userChrome.theme.fully_color', true); // Need proton_color
user_pref('userChrome.theme.fully_dark', true); // Need proton_color

user_pref('userChrome.decoration.cursor', true);
user_pref('userChrome.decoration.field_border', true);
user_pref('userChrome.decoration.download_panel', true);
user_pref('userChrome.decoration.animate', true);

user_pref('userChrome.padding.tabbar_width', true);
user_pref('userChrome.padding.tabbar_height', true);
user_pref('userChrome.padding.toolbar_button', true);
user_pref('userChrome.padding.navbar_width', true);
user_pref('userChrome.padding.urlbar', true);
user_pref('userChrome.padding.bookmarkbar', true);
user_pref('userChrome.padding.infobar', true);
user_pref('userChrome.padding.menu', true);
user_pref('userChrome.padding.bookmark_menu', true);
user_pref('userChrome.padding.global_menubar', true);
user_pref('userChrome.padding.panel', true);
user_pref('userChrome.padding.popup_panel', true);

user_pref('userChrome.tab.multi_selected', true);
user_pref('userChrome.tab.unloaded', true);
user_pref('userChrome.tab.letters_cleary', true);
user_pref('userChrome.tab.close_button_at_hover', true);
user_pref('userChrome.tab.sound_hide_label', true);
user_pref('userChrome.tab.sound_with_favicons', true);
user_pref('userChrome.tab.pip', true);
user_pref('userChrome.tab.container', true);
user_pref('userChrome.tab.crashed', true);

user_pref('userChrome.fullscreen.overlap', true);
user_pref('userChrome.fullscreen.show_bookmarkbar', true);

user_pref('userChrome.icon.library', true);
user_pref('userChrome.icon.panel', true);
user_pref('userChrome.icon.menu', true);
user_pref('userChrome.icon.context_menu', true);
user_pref('userChrome.icon.global_menu', true);
user_pref('userChrome.icon.global_menubar', true);
user_pref('userChrome.icon.1-25px_stroke', true);

// -- User Content -------------------------------------------------------------
user_pref('userContent.player.ui', true);
user_pref('userContent.player.icon', true);
user_pref('userContent.player.noaudio', true);
user_pref('userContent.player.size', true);
user_pref('userContent.player.click_to_play', true);
user_pref('userContent.player.animate', true);

user_pref('userContent.newTab.full_icon', true);
user_pref('userContent.newTab.animate', true);
user_pref('userContent.newTab.pocket_to_last', true);
user_pref('userContent.newTab.searchbar', true);

user_pref('userContent.page.field_border', true);
user_pref('userContent.page.illustration', true);
user_pref('userContent.page.proton_color', true);
user_pref('userContent.page.dark_mode', true); // Need proton_color
user_pref('userContent.page.proton', true); // Need proton_color

// ** Useful Options ***********************************************************
// Tab preview
// https://blog.nightly.mozilla.org/2024/02/06/a-preview-of-tab-previews-these-weeks-in-firefox-issue-153/
user_pref('browser.tabs.cardPreview.enabled', true);

// Paste suggestion at urlbar
// https://blog.nightly.mozilla.org/2023/12/04/url-gonna-want-to-check-this-out-these-weeks-in-firefox-issue-150/
user_pref('browser.urlbar.clipboard.featureGate', true);

// Integrated calculator at urlbar
user_pref('browser.urlbar.suggest.calculator', true);

// ****************************
// ****************************
// OVERRIDES
// ****************************
// ****************************
// Lepton overrides
user_pref('browser.tabs.cardPreview.enabled', false);

// fastfox
user_pref('browser.cache.jsbc_compression_level', 3); // default: 0
