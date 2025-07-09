/** Global YouTube Service Worker Script */
self.document = self;
self.window = self;

// YouTube Configuration Object
var ytcfg = {
    d: function () {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {});
    },
    get: function (key, fallback) {
        return key in ytcfg.d() ? ytcfg.d()[key] : fallback;
    },
    set: function () {
        var args = arguments;
        if (args.length > 1) {
            ytcfg.d()[args[0]] = args[1];
        } else {
            for (var key in args[0]) {
                ytcfg.d()[key] = args[0][key];
            }
        }
    }
};

// Set YouTube API Configurations
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "H5_enable_full_pacf_logging": true,
        "enable_ab_report_on_errorscreen": true,
        "enable_mixed_direction_formatted_strings": true,
        "enable_client_ve_spec": true,
        "enable_web_tiered_gel": true,
        "use_request_time_ms_header": true,
        "use_color_palettes_modern_collections_v2": true,
        "web_api_url": true
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20250319.01.00",
    "INNERTUBE_CONTEXT": {
        "client": {
            "hl": "en",
            "gl": "NG",
            "clientName": "WEB",
            "clientVersion": "2.20250319.01.00"
        }
    }
});

// Trusted Types Policy
if (self.trustedTypes && self.trustedTypes.createPolicy) {
    var policy = self.trustedTypes.createPolicy('globalServiceWorkerPolicy', {
        createScriptURL: function (url) {
            return url;
        }
    });

    // Import YouTube Service Worker Script
    try {
        importScripts(policy.createScriptURL('https://www.youtube.com/s/desktop/ca191cfa/jsbin/serviceworker-kevlar-appshell.vflset/serviceworker-kevlar-appshell.js'));
    } catch (e) {
        console.error("Service Worker import failed:", e);
    }
} else {
    try {
        importScripts('https://www.youtube.com/s/desktop/ca191cfa/jsbin/serviceworker-kevlar-appshell.vflset/serviceworker-kevlar-appshell.js');
    } catch (e) {
        console.error("Service Worker import failed:", e);
    }
}
