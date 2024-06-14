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

// devtools zoom level (inspector, console)
user_pref('devtools.toolbox.zoomValue', 1.2); // default: 1

// ****************************
// ****************************
// OVERRIDES
// ****************************
// ****************************
// fastfox
user_pref('browser.cache.jsbc_compression_level', 3); // default: 0

// Enable Card Preview
user_pref('browser.tabs.cardPreview.enabled', true); // default: false
