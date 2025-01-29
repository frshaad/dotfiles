user_pref("dom.security.https_only_mode", true); // Enable HTTPS-only Mode
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // Enable seperate search engine for Private Windows
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // Enable option to add custom search engine
user_pref("browser.search.suggest.enabled", false); // // Disable live search suggestions
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // Disable Firefox sponored Suggest
user_pref("browser.urlbar.suggest.recentsearches", false); // Disable recent searches
user_pref("signon.rememberSignons", false); // Disable password manager
user_pref("privacy.history.custom", true); // Set History section to show all options
user_pref("browser.formfill.enable", false); // Disable form history
user_pref("browser.privatebrowsing.vpnpromourl", ""); // Disable Mozilla VPN
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Disable pinned shortcuts on new tab
user_pref("browser.newtabpage.activity-stream.showWeather", false); // Disable Weather widget on new tab
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Disable Recommended by Pocket on new tab
user_pref("browser.urlbar.quicksuggest.enabled", false); // Disable Recommended by Pocket on new tab
user_pref("findbar.highlightAll", true); // Show all matches in Findbar
user_pref("privacy.globalprivacycontrol.enabled", true); // Enable Global Privacy Control (GPC)
user_pref("privacy.userContext.enabled", true); // Enable Container Tabs
user_pref("privacy.userContext.ui.enabled", true); // Enable Container Tabs UI setting
user_pref("extensions.pocket.enabled", false); // Disable Pocket
user_pref("devtools.toolbox.zoomValue", 1.2); // Devtools zoom level
user_pref("browser.aboutConfig.showWarning", false); // Disable tab and about:config warnings
user_pref("browser.preferences.moreFromMozilla", false); // Hide "More from Mozilla" in Settings
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false
); // Disable extension recommendations
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false
); // Disable features recommendations
user_pref("browser.discovery.enabled", false); // Disable personalized extension recommendations in about:addons and AMO
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // Disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.getAddons.showPane", false); // Disable about:addons' Recommendations pane
user_pref("browser.urlbar.trending.featureGate", false); // Disable urlbar trending search suggestions

// === Experimental ===
user_pref("browser.search.region", "US");
user_pref("browser.tabs.closeWindowWithLastTab", false);

user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
