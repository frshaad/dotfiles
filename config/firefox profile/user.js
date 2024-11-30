user_pref("browser.contentblocking.category", "strict");

user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("dom.security.https_only_mode", true);
// user_pref("dom.security.https_first", true);
// PREF: display "Not Secure" text on HTTP sites
// Needed with HTTPS-First Policy; not needed with HTTPS-Only Mode.
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.formfill.enable", false);
// PREF: disable live search suggestions (Google, Bing, etc.)
user_pref("browser.search.suggest.enabled", false);
// PREF: disable Firefox Suggest
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.groupLabels.enabled", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("pdfjs.enableScripting", false);

/** CRASH REPORTS ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** MOZILLA UI ***/
// PREF: Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");
// disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN
// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// PREF: Personalized Extension Recommendations in about:addons and AMO
user_pref("browser.discovery.enabled", false);
// PREF: disable Firefox from asking to set as the default browser
user_pref("browser.shell.checkDefaultBrowser", false);
// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false
);
// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);
// PREF: tab and about:config warnings
user_pref("browser.aboutConfig.showWarning", false);
// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);
// PREF: preferred color scheme for websites
// Dark (0), Light (1), System (2), Browser (3) [DEFAULT FF95+]
user_pref("layout.css.prefers-color-scheme.content-override", 2);
// PREF: minimize URL bar suggestions (bookmarks, history, open tabs)
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
// PREF: disable urlbar trending search suggestions [FF118+]
user_pref("browser.urlbar.trending.featureGate", false);
// PREF: Pinned Shortcuts on New Tab
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Shortcuts
user_pref("browser.newtabpage.activity-stream.showWeather", false); // Weather [FF130+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: do not select the space next to a word when selecting a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: Global Privacy Control (GPC) [FF118+]
user_pref("privacy.globalprivacycontrol.enabled", true);

// PREF: set History section to show all options
user_pref("privacy.history.custom", true);
// PREF: disable search and form history
user_pref("browser.formfill.enable", false);

// PREF: enable Container Tabs and its UI setting [FF50+]
user_pref("privacy.userContext.ui.enabled", true);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

// devtools zoom level (inspector, console)
user_pref("devtools.toolbox.zoomValue", 1.2); // default: 1

// remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

// disable password manager
user_pref("signon.rememberSignons", false);

// ============
// Beta
// ============
// Tabs Group
user_pref("browser.tabs.groups.enabled", true);
