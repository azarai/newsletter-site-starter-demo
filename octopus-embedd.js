!function (e) { var t = {}; function r(o) { if (t[o]) return t[o].exports; var n = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports } r.m = e, r.c = t, r.d = function (e, t, o) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(o, n, function (t) { return e[t] }.bind(null, n)); return o }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r(r.s = 59) }({ 59: function (e, t, r) { e.exports = r(60) }, 60: function (e, t, r) { if (r(8), window.emailOctopus = { defaultMessages: { success: "Thanks for subscribing!", missingEmailAddress: "Your email address is required.", invalidEmailAddress: "Your email address looks incorrect, please try again.", botSubmissionError: "This doesn't look like a human submission.", consentRequired: "Please check the checkbox to indicate your consent.", invalidParametersError: "This form has missing or invalid fields.", unknownError: "Sorry, an unknown error has occurred. Please try again later." }, getMessage: function (e, t) { var r = "message" + t[0].toUpperCase() + t.substring(1); return e.dataset[r] ? e.dataset[r] : emailOctopus.defaultMessages[t] }, isBotPost: function (e) { var t = e.querySelector(".emailoctopus-form-row-hp input"); return Boolean(t.value) }, isEmailAddressValid: function (e) { var t = e.querySelector("input[type=email]").value.trim(); return /\S+@\S+\.\S+/.test(t) }, hasEmailAddressBeenEntered: function (e) { var t = e.querySelector("input[type=email]").value.trim(); return Boolean(t) }, consentRequired: function (e) { var t = e.querySelector(".emailoctopus-form-row-consent input"); return Boolean(t && !t.checked) }, hasRedirectUrl: function (e) { return Boolean(emailOctopus.getRedirectUrl(e)) }, getRedirectUrl: function (e) { var t = e.querySelector("input[name=successRedirectUrl]"); return t ? t.value.trim() : null }, redirect: function (e) { window.top.location.href = e }, showConfirmation: function (e, t) { e.style.display = "none", e.parentNode.querySelector(".emailoctopus-success-message").textContent = emailOctopus.getMessage(e, "success") }, ajaxSuccess: function (e, t) { var r = JSON.parse(t); emailOctopus.hasRedirectUrl(e) ? emailOctopus.redirect(emailOctopus.getRedirectUrl(e)) : emailOctopus.showConfirmation(e, r) }, ajaxError: function (e, t) { var r = JSON.parse(t); if (r && r.error && r.error.code) switch (r.error.code) { case "INVALID_PARAMETERS": return void emailOctopus.onError(e, emailOctopus.getMessage(e, "invalidParametersError")); case "BOT_SUBMISSION": return void emailOctopus.onError(e, emailOctopus.getMessage(e, "botSubmissionError")) }emailOctopus.onError(e, emailOctopus.getMessage(e, "unknownError")) }, ajaxSubmit: function (e) { e.querySelector("[type=submit]").setAttribute("disabled", !0); var t = []; e.querySelectorAll("input[name]").forEach((function (e) { var r = e.getAttribute("name"), o = e.value; t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o)) })); var r = new XMLHttpRequest; r.open("POST", e.getAttribute("action"), !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), r.send(t.join("&")), r.onreadystatechange = function () { 4 === r.readyState && 200 === r.status && emailOctopus.ajaxSuccess(e, r.responseText), 4 === r.readyState && r.status >= 400 && emailOctopus.ajaxError(e, r.responseText) } }, onError: function (e, t) { e.parentNode.querySelector(".emailoctopus-error-message").textContent = t, e.querySelector("[type=submit]").removeAttribute("disabled"), e.getAttribute("data-widget-id") && window.grecaptcha && window.grecaptcha.reset(e.getAttribute("data-widget-id")); var r = e.querySelector("input[name=g-recaptcha-response]"); r && r.remove() }, submit: function (e) { e.parentNode.querySelector(".emailoctopus-error-message").textContent = "", emailOctopus.isBotPost(e) ? emailOctopus.onError(e, emailOctopus.getMessage(e, "botSubmissionError")) : emailOctopus.hasEmailAddressBeenEntered(e) ? emailOctopus.isEmailAddressValid(e) ? emailOctopus.consentRequired(e) ? emailOctopus.onError(e, emailOctopus.getMessage(e, "consentRequired")) : emailOctopus.ajaxSubmit(e) : emailOctopus.onError(e, emailOctopus.getMessage(e, "invalidEmailAddress")) : emailOctopus.onError(e, emailOctopus.getMessage(e, "missingEmailAddress")) } }, -1 !== window.location.href.indexOf("eoDebug=1")) { var o = "https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/debug.js", n = document.querySelector(".emailoctopus-form").action; if (n) { var a = document.createElement("a"); a.href = n, o = a.protocol + "//" + a.hostname + "/bundles/emailoctopuslist/js/1.6/debug.js" } var s = document.createElement("script"), i = document.head || document.getElementsByTagName("head")[0]; s.src = o, s.async = !1, s.defer = !1, i.insertBefore(s, i.firstChild) } var u; u = function () { document.querySelectorAll(".emailoctopus-form:not(.bound)").forEach((function (e) { e.classList.add("bound"), e.addEventListener("submit", (function (e) { var t = e.target; t.querySelector(".g-recaptcha") && !t.querySelector("input[name=g-recaptcha-response]") || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), emailOctopus.submit(t)) })) })) }, "loading" !== document.readyState ? u() : document.addEventListener("DOMContentLoaded", u) }, 8: function (e, t) { window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) { t = t || window; for (var r = 0; r < this.length; r++)e.call(t, this[r], r, this) }), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) { e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function () { null !== this.parentNode && this.parentNode.removeChild(this) } }) })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) { var t = this; do { if (Element.prototype.matches.call(t, e)) return t; t = t.parentElement || t.parentNode } while (null !== t && 1 === t.nodeType); return null }) } });