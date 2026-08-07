// Geteilte Client-Logik: Text kopieren + Ziel-KI-Tool öffnen.
// Vanilla-JS, keine Dependency. Wird von /bauen (Küche) genutzt; kann später
// auch den Zielkanal-Teil in tool.astro ablösen.

const AIS_URL = 'https://app.ais-chat.schule';       // verifizierte AIS.chat-App (VIDIS/Code-Login)
const COPILOT_URL = 'https://copilot.microsoft.com'; // Copilot: kein zuverlässiger Prefill -> nur öffnen
const URL_MAX = 2000;                                 // ab hier kein ?q=-Prefill (nichts abschneiden)

export const TOOL_LABEL = { ais: 'AIS.chat', chatgpt: 'ChatGPT', claude: 'Claude', copilot: 'Copilot' };

/** Text in die Zwischenablage kopieren, mit Fallback für eingeschränkte Umgebungen. */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) { /* Fallback unten */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) { return false; }
}

/**
 * Kopiert den Prompt und öffnet das Ziel-Tool in einem neuen Tab.
 * AIS.chat/Copilot: nur öffnen (kein Prefill). ChatGPT/Claude: ?q=…, mit
 * Längen-Fallback (zu lang -> Startseite ohne Prefill, Prompt liegt kopiert bereit).
 * @param {'ais'|'chatgpt'|'claude'|'copilot'} tool
 * @param {string} text
 */
export async function openInTool(tool, text) {
  const ok = await copyToClipboard(text);
  const enc = encodeURIComponent(text);
  const tooLong = enc.length > URL_MAX;
  let url, prefill = false;
  if (tool === 'chatgpt') { url = tooLong ? 'https://chatgpt.com/' : 'https://chatgpt.com/?q=' + enc; prefill = !tooLong; }
  else if (tool === 'claude') { url = tooLong ? 'https://claude.ai/new' : 'https://claude.ai/new?q=' + enc; prefill = !tooLong; }
  else if (tool === 'copilot') { url = COPILOT_URL; }
  else { url = AIS_URL; }
  window.open(url, '_blank', 'noopener');
  return { ok, tool, prefill, tooLong };
}
