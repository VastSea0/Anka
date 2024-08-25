// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

#ifdef XP_UNIX
  #ifndef XP_MACOSX
    #define UNIX_BUT_NOT_MAC
  #endif
#endif

// Huma Browser prefs...
pref('huma.sidebar.data', "{\"data\":\n {\"p1\":{\n   \"url\":\"https://www.wikipedia.org/\"\n  },\n\"p2\":{\n   \"url\":\"https://chatgpt.com/\",\n\"ua\": true\n  },\n\"p3\": {\n   \"url\": \"https://www.youtube.com/\",\n\"ua\": true\n},\n\"p4\": {\n   \"url\": \"https://translate.google.com/\",\n\"ua\": true\n},\n\"p5\": {\n   \"url\": \"https://deepl.com/\",\n\"ua\": true\n}},\n\"index\":[\"p1\",\"p2\",\"p3\",\"p4\",\"p5\"]}");
pref('huma.sidebar.enabled', true);
pref('huma.sidebar.close-on-blur', true);

pref("browser.tabs.cardPreview.enabled", true);
pref("browser.tabs.hoverPreview.enabled", true);
pref("browser.tabs.cardPreview.delayMs", 100);

#ifdef MOZ_UPDATE_CHANNEL
pref("devtools.debugger.prompt-connection", false);
#endif

// Theme
pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
pref('browser.compactmode.show', true);

pref('browser.newtabpage.activity-stream.newtabWallpapers.enabled', true);
pref('browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled', true);
pref('browser.translations.newSettingsUI.enable', true);

pref("browser.urlbar.trimHttps", true);
pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// Url bar
pref('browser.urlbar.unitConversion.enabled', true);
pref('browser.urlbar.trending.featureGate', false);
pref('browser.urlbar.weather.featureGate', true);
pref('browser.urlbar.quickactions.enabled', true);
pref('browser.urlbar.clipboard.featureGate', true);

// new tab page
pref('browser.newtabpage.activity-stream.feeds.topsites', false);
pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);
pref("browser.topsites.contile.enabled", true);

// Pdf
pref('browser.download.open_pdf_attachments_inline', true);
pref('pdfjs.enableHighlightEditor', true);
pref('pdfjs.enableHighlightFloatingButton', true);

pref("alerts.showFavicons", true);
pref('browser.toolbars.bookmarks.visibility', 'never');

// Enable Do Not Track and GPC by default.
pref("privacy.donottrackheader.enabled", true);
pref("privacy.globalprivacycontrol.enabled", true);

// Disable more telemetry
pref("toolkit.telemetry.enabled", false);
pref("browser.ping-centre.telemetry", false);
pref("browser.attribution.enabled", false);
pref("toolkit.telemetry.pioneer-new-studies-available", false);

pref('huma.watermark.enabled', true);

// Smooth scrolling
pref('apz.overscroll.enabled', true); // not DEFAULT on Linux
pref('general.smoothScroll', true); // DEFAULT

// Privacy
pref('dom.private-attribution.submission.enabled', false);

pref('media.eme.enabled', true);
pref('webgl.disabled', false);

 
// Enable importers for other browsers
pref('browser.migrate.vivaldi.enabled', true);
pref('browser.migrate.opera-gx.enabled', true);
pref('browser.migrate.opera.enabled', true);

// Look N Feel Prefs
pref('huma.preference.colors', "{\"palette1\":{\"paletteName\":\"Leylak\",\"backgroundColor\":\"#B7A3E0\",\"pagePaneColor\":\"#9370DB\"},\"palette2\":{\"paletteName\":\"Safran\",\"backgroundColor\":\"#F1C66F\",\"pagePaneColor\":\"#DAA520\"},\"palette3\":{\"paletteName\":\"G�ky�z�\",\"backgroundColor\":\"#6C9DCE\",\"pagePaneColor\":\"#4682B4\"},\"palette4\":{\"paletteName\":\"F\u0131st\u0131k\",\"backgroundColor\":\"#5BD99A\",\"pagePaneColor\":\"#3CB371\"},\"palette5\":{\"paletteName\":\"Mercan\",\"backgroundColor\":\"#E68989\",\"pagePaneColor\":\"#CD5C5C\"},\"palette6\":{\"paletteName\":\"Bordo\",\"backgroundColor\":\"#B21818\",\"pagePaneColor\":\"#8B0000\"},\"palette7\":{\"paletteName\":\"Turkuaz\",\"backgroundColor\":\"#5AD1C9\",\"pagePaneColor\":\"#20B2AA\"},\"palette8\":{\"paletteName\":\"Lavanta\",\"backgroundColor\":\"#B17BB6\",\"pagePaneColor\":\"#8E4585\"},\"palette9\":{\"paletteName\":\"Kivi\",\"backgroundColor\":\"#8FBF4D\",\"pagePaneColor\":\"#6B8E23\"}}");
pref('huma.preference.page.palette', "{\"palette\":[{\"backgroundColor\":\"#B7A3E0\",\"pagePaneColor\":\"#9370DB\"}]");

pref('huma.preference.humabar.mode', "ince");

pref('huma.tabs.vertical.right-side', false);
pref('huma.view.sidebar-expanded.on-hover', false);
pref('huma.view.compact', false);
pref('huma.view.sidebar-expanded', false);
pref('huma.tabs.vertical', true);


pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
pref("general.smoothScroll.msdPhysics.enabled", true);
pref("ui.key.menuAccessKeyFocuses", false);
pref("extensions.pocket.enabled", false);
pref("browser.tabs.closeWindowWithLastTab", false);
pref("layout.css.backdrop-filter.enabled", true);
pref("browser.urlbar.trimHttps", true);