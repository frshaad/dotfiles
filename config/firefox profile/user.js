user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("dom.security.https_first", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.formfill.enable", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("pdfjs.enableScripting", false);

/** CRASH REPORTS ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

// devtools zoom level (inspector, console)
user_pref("devtools.toolbox.zoomValue", 1.2); // default: 1
